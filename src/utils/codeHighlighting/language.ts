import type { Node } from '@contentful/rich-text-types';

/**
 * Language utilities for code highlighting
 */

/**
 * Normalizes language identifiers to Shiki-compatible language names.
 */
export const normalizeLanguage = (lang: string): string => {
  const map: Record<string, string> = {
    js: 'javascript',
    ts: 'typescript',
    py: 'python',
    sh: 'bash',
    zsh: 'bash',
    yml: 'yaml',
    md: 'markdown',
    mdx: 'markdown',
    jsonc: 'json',
  };
  return map[lang.toLowerCase().trim()] || lang.toLowerCase().trim();
};

/**
 * Fallback language detection - should only be used when CMS doesn't provide language.
 * Best practice: Store language in Contentful (e.g., in node.data.language or custom field).
 * 
 * For proper code blocks (BLOCKS.CODE), Contentful supports node.data.language.
 * For code-marked paragraphs, consider using Contentful's custom fields or extensions.
 */
export const detectLanguage = (code: string): string => {
  const trimmed = code.trim();
  if (!trimmed) return 'text';

  // Shebangs and explicit hints
  if (trimmed.match(/^#!\/.*\b(node|ts-node|tsx)\b/)) return 'typescript';
  if (trimmed.match(/^#!\/.*\b(python|py)\b/)) return 'python';
  if (trimmed.match(/^#!\/.*\b(bash|sh)\b/)) return 'bash';

  // TypeScript/JavaScript (check TS first as it's a superset)
  if (trimmed.includes('import ') || trimmed.includes('export ') || trimmed.includes('async function') || (trimmed.includes('const ') && trimmed.includes('=>'))) {
    if (trimmed.includes(': string') || trimmed.includes(': number') || trimmed.includes('interface ') || trimmed.includes('type ')) {
      return 'typescript';
    }
    return 'javascript';
  }

  // Other languages
  if (trimmed.match(/^<\?php/)) return 'php';
  if (trimmed.match(/^def |^class |^import |^from /)) return 'python';
  if (trimmed.match(/^package |^import |^func |^var /)) return 'go';
  if (trimmed.match(/^public class |^import java/)) return 'java';
  if (trimmed.match(/^#include|^using namespace/)) return 'cpp';
  if (trimmed.match(/^SELECT |^INSERT |^UPDATE |^CREATE TABLE/)) return 'sql';
  if (trimmed.match(/^\{|^\["|^\{"/)) return 'json';

  return 'text';
};

/**
 * Extracts language from a Contentful node's data, with fallback to detection.
 * Priority: 1) CMS metadata, 2) Detection fallback
 */
export const getLanguageFromNode = (node: Node, code: string): string => {
  if ('data' in node && node.data && typeof node.data === 'object' && 'language' in node.data && typeof node.data.language === 'string') {
    return node.data.language;
  }
  return detectLanguage(code);
};

