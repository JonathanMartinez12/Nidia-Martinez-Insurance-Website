import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { pages } from '@/config/pages';
import { site } from '@/config/site';
import { routing } from '@/i18n/routing';
import { metaValues } from '@/lib/seo';
import { headlineYears } from '@/lib/experience';

// Branded Open Graph images, one per page per locale, generated at build time.
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => pages.map((p) => ({ locale, page: p.id })));
}

const fontDir = path.join(process.cwd(), 'assets', 'fonts');

export async function GET(_req: Request, { params }: { params: Promise<{ locale: string; page: string }> }) {
  const { locale, page: pageId } = await params;
  const page = pages.find((p) => p.id === pageId);
  if (!hasLocale(routing.locales, locale) || !page) return new Response('Not found', { status: 404 });

  const t = await getTranslations({ locale, namespace: 'Meta' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const title = t(`${page.metaKey}.title` as 'home.title', metaValues()).split(' | ')[0]!;
  const years = headlineYears();

  const [serif, sans, sansBold, logoPng] = await Promise.all([
    readFile(path.join(fontDir, 'source-serif-4-latin-600-normal.woff')),
    readFile(path.join(fontDir, 'atkinson-hyperlegible-next-latin-400-normal.woff')),
    readFile(path.join(fontDir, 'atkinson-hyperlegible-next-latin-700-normal.woff')),
    readFile(path.join(process.cwd(), 'public', 'brand', 'logo-white.png')),
  ]);
  const logo = `data:image/png;base64,${logoPng.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: '#111F4A',
        position: 'relative',
        fontFamily: 'Atkinson',
      }}
    >
      <svg width="1200" height="630" viewBox="0 0 1200 630" style={{ position: 'absolute', top: 0, left: 0 }}>
        <path d="M0 470C280 360 640 340 1200 430V630H0Z" fill="#1A2F66" />
        <path d="M0 520C300 420 680 400 1200 480V630H0Z" fill="#0B1532" />
        <path d="M0 482C285 374 650 352 1200 444" fill="none" stroke="#C8202F" strokeWidth="10" />
        <circle cx="1090" cy="110" r="150" fill="none" stroke="#FFFFFF" strokeOpacity="0.07" strokeWidth="26" />
      </svg>
      <div style={{ display: 'flex', alignItems: 'center', padding: '52px 72px 0' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={360} height={116} alt="" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '64px 72px 0', maxWidth: 1060 }}>
        <div
          style={{
            display: 'flex',
            fontFamily: 'SourceSerif',
            fontSize: title.length > 40 ? 64 : 76,
            lineHeight: 1.08,
            color: '#FFFFFF',
          }}
        >
          {title}
        </div>
        <div style={{ display: 'flex', marginTop: 26, fontSize: 30, color: '#E3E9F6' }}>
          {years !== null ? `${tc('yearsHelping', { years })} · ` : ''}
          {tc('hablamos')}
        </div>
      </div>
      <div style={{ display: 'flex', position: 'absolute', left: 72, bottom: 44, alignItems: 'center' }}>
        <div
          style={{
            display: 'flex',
            background: '#C8202F',
            color: '#FFFFFF',
            fontSize: 32,
            fontWeight: 700,
            padding: '14px 28px',
            borderRadius: 16,
          }}
        >
          {site.primaryPhone.display}
        </div>
        <div style={{ display: 'flex', marginLeft: 24, fontSize: 26, color: '#FFFFFF' }}>{tc('noCost')}</div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'SourceSerif', data: serif, weight: 600, style: 'normal' },
        { name: 'Atkinson', data: sans, weight: 400, style: 'normal' },
        { name: 'Atkinson', data: sansBold, weight: 700, style: 'normal' },
      ],
    },
  );
}
