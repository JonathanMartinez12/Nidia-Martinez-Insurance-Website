#!/usr/bin/env node
/**
 * Refreshes src/data/ma-landscape-la.json: Medicare Advantage (Part C) plan COUNTS by type for the
 * parishes we serve, from CMS's official Landscape file. Counts only: no plan names, premiums or
 * benefits are stored.
 *
 *   node scripts/refresh-ma-landscape.mjs [zip URL]
 *
 * Without a URL it finds the newest "cyYYYY-landscape-YYYYMM.zip" linked from
 * https://www.cms.gov/medicare/coverage/prescription-drug-coverage. Needs `unzip`.
 *
 * Counting rules (one plan = one Contract-Plan-Segment ID offered in the parish; PDPs excluded;
 * employer plans aren't in the Landscape file):
 *   SNP = any plan with "Special Needs Plan (SNP) Indicator" = Yes (D-SNP, C-SNP, I-SNP)
 *   HMO = non-SNP "HMO" and "HMO-POS"        PPO = non-SNP "PPO" and "Regional PPO"
 */
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const PAGE = 'https://www.cms.gov/medicare/coverage/prescription-drug-coverage';
const PARISHES = ['Orleans', 'Jefferson', 'St. Tammany', 'St. Bernard', 'St. Charles', 'St. John the Baptist', 'East Baton Rouge'];
const OUT = 'src/data/ma-landscape-la.json';

/** Minimal RFC 4180 CSV parser (quoted fields, embedded commas/quotes). */
export function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n') {
      row.push(field.replace(/\r$/, ''));
      rows.push(row);
      row = [];
      field = '';
    } else field += c;
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

export function countPlans(records, parishes = PARISHES) {
  return parishes.map((parish) => {
    const plans = new Map();
    for (const r of records) {
      if (r['State Territory Abbreviation'] !== 'LA' || r['County Name'] !== parish) continue;
      if (r['Contract Category Type'] === 'PDP') continue;
      plans.set(r['Contract Plan Segment ID'], r);
    }
    const counts = { parish, hmo: 0, ppo: 0, snp: 0, other: 0, total: plans.size };
    for (const r of plans.values()) {
      if (r['Special Needs Plan (SNP) Indicator'] === 'Yes') counts.snp++;
      else if (r['Plan Type'] === 'HMO' || r['Plan Type'] === 'HMO-POS') counts.hmo++;
      else if (r['Plan Type'] === 'PPO' || r['Plan Type'] === 'Regional PPO') counts.ppo++;
      else counts.other++;
    }
    return counts;
  });
}

async function main() {
  let url = process.argv[2];
  if (!url) {
    const html = await (await fetch(PAGE, { headers: { 'user-agent': 'Mozilla/5.0' } })).text();
    const links = [...html.matchAll(/href="([^"]*\/cy(\d{4})-landscape-(\d{6})\.zip)"/g)].sort((a, b) => (a[2] + a[3] < b[2] + b[3] ? 1 : -1));
    if (!links.length) throw new Error(`No landscape zip found on ${PAGE}`);
    url = new URL(links[0][1], PAGE).href;
  }
  const dir = mkdtempSync(join(tmpdir(), 'landscape-'));
  const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  writeFileSync(join(dir, 'l.zip'), Buffer.from(await res.arrayBuffer()));
  execFileSync('unzip', ['-q', '-o', join(dir, 'l.zip'), '-d', dir]);
  const files = execFileSync('find', [dir, '-type', 'f']).toString().trim().split('\n');
  const csvPath = files.find((f) => /Landscape_\d{6}\.csv$/i.test(f));
  const readme = files.find((f) => /ReadMe/i.test(f));
  if (!csvPath || !readme) throw new Error(`Unexpected zip contents: ${files.join(', ')}`);
  const updated = readFileSync(readme, 'utf8').match(/Data Last Updated:\s*(\d{2})\/(\d{2})\/(\d{4})/);
  if (!updated) throw new Error('No "Data Last Updated" date in the ReadMe');

  const [header, ...rows] = parseCsv(readFileSync(csvPath, 'utf8').replace(/^﻿/, ''));
  const records = rows.filter((r) => r.length === header.length).map((r) => Object.fromEntries(header.map((h, i) => [h, r[i]])));
  const year = Number(records[0]['Contract Year']);
  const data = {
    year,
    source: {
      title: `CMS CY${year} Medicare Advantage and Prescription Drug Plan Landscape`,
      file: csvPath.split('/').pop(),
      url,
      dataLastUpdated: `${updated[3]}-${updated[1]}-${updated[2]}`,
      retrieved: new Date().toISOString().slice(0, 10),
    },
    parishes: countPlans(records),
  };
  writeFileSync(OUT, JSON.stringify(data, null, 2) + '\n');
  console.log(`Wrote ${OUT} from ${data.source.file} (data last updated ${data.source.dataLastUpdated})`);
  console.table(data.parishes);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err.message ?? err);
    process.exit(1);
  });
}
