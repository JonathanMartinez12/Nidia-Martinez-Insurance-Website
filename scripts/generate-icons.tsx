/**
 * Generates the brand assets from code (run `npm run icons`, then commit the output):
 *   public/brand/mark.svg     — the "M" monogram mark
 *   public/brand/logo.svg     — mark + wordmark, text converted to outlines
 *   public/brand/logo.png     — raster logo for schema.org / email
 *   src/app/favicon.ico, icon.svg, apple-icon.png
 *   public/icon-192.png, icon-512.png, icon-maskable-512.png (web manifest)
 *
 * No official Martinez Insurance Agency logo was available when this was built; this is
 * a clean interim mark in the brand navy/red. Replace the files in public/brand/ with the
 * official artwork when you have it.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import sharp from 'sharp';

const NAVY = '#233E84';
const NAVY_DARK = '#1A2F66';
const RED = '#C8202F';

const markSvg = (opts: { rounded?: boolean; padded?: boolean } = {}) => {
  const rx = opts.rounded === false ? 0 : 15;
  const inner = `<g clip-path="url(#c)"><rect width="64" height="64" fill="${NAVY}"/><path d="M-4 49C14 38 44 37 68 47V70H-4Z" fill="${NAVY_DARK}"/><path d="M-4 52.5C15 42 43 41.5 68 50.5" fill="none" stroke="${RED}" stroke-width="4.5"/><path d="M18 39V15.5L32 30L46 15.5V39" fill="none" stroke="#FFFFFF" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  if (opts.padded) {
    // Maskable icon: full-bleed navy with the mark inside the safe zone.
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><clipPath id="c"><rect width="64" height="64"/></clipPath></defs><rect width="64" height="64" fill="${NAVY}"/><g transform="translate(12.8 12.8) scale(0.6)">${inner}</g></svg>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><clipPath id="c"><rect width="64" height="64" rx="${rx}"/></clipPath></defs>${inner}</svg>`;
};

function ico(pngs: Buffer[], sizes: number[]): Buffer {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  const entries: Buffer[] = [];
  let offset = 6 + 16 * pngs.length;
  pngs.forEach((png, i) => {
    const e = Buffer.alloc(16);
    const s = sizes[i]!;
    e.writeUInt8(s >= 256 ? 0 : s, 0);
    e.writeUInt8(s >= 256 ? 0 : s, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(png.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += png.length;
    entries.push(e);
  });
  return Buffer.concat([header, ...entries, ...pngs]);
}

async function main() {
  const root = process.cwd();
  const brandDir = path.join(root, 'public', 'brand');
  mkdirSync(brandDir, { recursive: true });
  const fonts = path.join(root, 'assets', 'fonts');
  const serif = readFileSync(path.join(fonts, 'source-serif-4-latin-600-normal.woff'));
  const sansBold = readFileSync(path.join(fonts, 'atkinson-hyperlegible-next-latin-700-normal.woff'));

  const mark = markSvg();
  writeFileSync(path.join(brandDir, 'mark.svg'), mark);
  writeFileSync(path.join(root, 'src', 'app', 'icon.svg'), mark);

  // Wordmark logo (text → outlines via satori).
  const markDataUri = `data:image/svg+xml;base64,${Buffer.from(mark).toString('base64')}`;
  const logoSvg = await satori(
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={markDataUri} width={96} height={96} alt="" />
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 22 }}>
        <div style={{ display: 'flex', fontFamily: 'Serif', fontSize: 62, lineHeight: 1, color: '#111F4A' }}>Martinez</div>
        <div style={{ display: 'flex', fontFamily: 'Sans', fontSize: 19, letterSpacing: 3.6, marginTop: 8, color: RED }}>
          INSURANCE AGENCY
        </div>
      </div>
    </div>,
    {
      width: 480,
      height: 110,
      fonts: [
        { name: 'Serif', data: serif, weight: 600, style: 'normal' },
        { name: 'Sans', data: sansBold, weight: 700, style: 'normal' },
      ],
    },
  );
  writeFileSync(path.join(brandDir, 'logo.svg'), logoSvg);
  // White-background PNG (schema.org logos should be legible on white).
  await sharp(Buffer.from(logoSvg), { density: 300 })
    .resize(960, 220, { fit: 'contain', background: '#FFFFFF' })
    .flatten({ background: '#FFFFFF' })
    .png()
    .toFile(path.join(brandDir, 'logo.png'));

  const png = (svg: string, size: number) => sharp(Buffer.from(svg), { density: 600 }).resize(size, size).png().toBuffer();
  const sizes = [16, 32, 48];
  writeFileSync(path.join(root, 'src', 'app', 'favicon.ico'), ico(await Promise.all(sizes.map((s) => png(mark, s))), sizes));
  writeFileSync(path.join(root, 'src', 'app', 'apple-icon.png'), await png(markSvg({ rounded: false }), 180));
  writeFileSync(path.join(root, 'public', 'icon-192.png'), await png(mark, 192));
  writeFileSync(path.join(root, 'public', 'icon-512.png'), await png(mark, 512));
  writeFileSync(path.join(root, 'public', 'icon-maskable-512.png'), await png(markSvg({ padded: true }), 512));
  console.log('Brand assets generated.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
