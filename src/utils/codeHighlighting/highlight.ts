import { cacheLife } from 'next/cache';
import type { BundledLanguage } from 'shiki';
import { codeToHtml } from 'shiki';

// Cached so shiki's internal time/randomness access doesn't block prerendering
// (Cache Components) and identical snippets aren't re-highlighted.
export async function highlightCode(code: string, lang: string): Promise<string> {
  'use cache';
  cacheLife('max');

  return codeToHtml(code, { lang: lang as BundledLanguage, theme: 'github-dark' });
}
