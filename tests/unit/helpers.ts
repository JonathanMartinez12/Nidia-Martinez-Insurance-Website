import type { Block, Faq, Section } from '@/content/types';

export function blockText(b: Block): string[] {
  switch (b.type) {
    case 'p':
    case 'h3':
      return [b.text];
    case 'ul':
    case 'ol':
      return b.items;
    case 'callout':
      return [b.title, b.text];
  }
}

export function sectionsText(sections: Section[]): string[] {
  return sections.flatMap((s) => [s.heading, ...s.blocks.flatMap(blockText)]);
}

export function faqsText(faqs: Faq[]): string[] {
  return faqs.flatMap((f) => [f.q, f.a]);
}

export function plain(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}

export function wordCount(parts: string[]): number {
  return parts
    .map(plain)
    .join(' ')
    .split(/\s+/)
    .filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

/** Jaccard similarity of word 3-gram shingles (0..1). */
export function similarity(a: string, b: string): number {
  const shingles = (t: string) => {
    const words = plain(t)
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, ' ')
      .split(/\s+/)
      .filter(Boolean);
    const set = new Set<string>();
    for (let i = 0; i + 2 < words.length; i++) set.add(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
    return set;
  };
  const A = shingles(a);
  const B = shingles(b);
  let inter = 0;
  for (const s of A) if (B.has(s)) inter++;
  const union = A.size + B.size - inter;
  return union === 0 ? 0 : inter / union;
}

export function flattenKeys(obj: unknown, prefix = ''): Record<string, string> {
  const out: Record<string, string> = {};
  if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
      const key = prefix ? `${prefix}.${k}` : k;
      if (v && typeof v === 'object') Object.assign(out, flattenKeys(v, key));
      else out[key] = String(v);
    }
  }
  return out;
}
