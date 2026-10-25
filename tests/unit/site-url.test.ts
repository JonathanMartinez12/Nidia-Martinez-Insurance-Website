import { afterEach, describe, expect, it, vi } from 'vitest';
import { getSiteUrl, site } from '@/config/site';

describe('getSiteUrl', () => {
  afterEach(() => vi.unstubAllEnvs());

  it('canonical production host is www', () => {
    expect(site.url).toBe('https://www.martinezinsurancesolutions.com');
  });

  it('Vercel production always uses site.url, even if NEXT_PUBLIC_SITE_URL is the apex', () => {
    vi.stubEnv('VERCEL_ENV', 'production');
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'https://martinezinsurancesolutions.com');
    expect(getSiteUrl()).toBe(site.url);
  });

  it('elsewhere, NEXT_PUBLIC_SITE_URL wins (trailing slash stripped), else site.url', () => {
    vi.stubEnv('VERCEL_ENV', 'preview');
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'http://localhost:3100/');
    expect(getSiteUrl()).toBe('http://localhost:3100');
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', '');
    expect(getSiteUrl()).toBe(site.url);
  });
});
