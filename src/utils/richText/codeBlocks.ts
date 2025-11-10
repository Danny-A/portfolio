import { BLOCKS, Document, Node } from '@contentful/rich-text-types';

import { detectLanguage, getLanguageFromNode } from '~/utils/codeHighlighting/language';
import { hashCode } from '~/utils/codeHighlighting/hashing';
import { normalizeCodeIndentation } from '~/utils/codeHighlighting/normalize';
import { isParagraphNode, isTextNode, hasCodeMark } from './typeGuards';

export interface CodeBlock {
  code: string;
  lang: string;
  key: string;
  type: 'block' | 'paragraph';
}

/**
 * Extract code from a paragraph if all text nodes have code marks.
 * Language detection is used as fallback only - prefer CMS metadata.
 */
export const getCodeFromParagraph = (node: Node): { code: string; lang: string } | null => {
  if (!isParagraphNode(node) || !node.content?.length) return null;

  const textNodes = node.content.filter(isTextNode);
  if (!textNodes.length) return null;

  // Check if all text nodes have code marks
  const allCodeMarked = textNodes.every(hasCodeMark);
  if (!allCodeMarked) return null;

  // Extract and join code, preserving whitespace
  // Note: Contentful may split code across multiple text nodes, so we join them
  // The whitespace within each node is preserved, but we need to ensure
  // proper handling of whitespace between nodes if Contentful inserts any
  const code = textNodes.map((node) => node.value || '').join('');
  if (!code.trim()) return null;

  // Normalize indentation (tabs to spaces) while preserving structure
  const normalizedCode = normalizeCodeIndentation(code);

  // Priority: 1) CMS metadata, 2) Detection fallback
  const lang = getLanguageFromNode(node, normalizedCode);

  return { code: normalizedCode, lang };
};

/**
 * Extract code from a BLOCKS.CODE node
 */
export const getCodeFromBlock = (node: Node): { code: string; lang: string } | null => {
  if (node.nodeType !== 'code') return null;

  const code = 'content' in node && Array.isArray(node.content) && node.content[0] && isTextNode(node.content[0])
    ? node.content[0].value || ''
    : '';

  if (!code) return null;

  // Normalize indentation (tabs to spaces) while preserving structure
  const normalizedCode = normalizeCodeIndentation(code);

  const lang = getLanguageFromNode(node as any, normalizedCode);
  return { code: normalizedCode, lang };
};

/**
 * Find all code blocks in the document (both BLOCKS.CODE and code-marked paragraphs).
 */
export const findCodeBlocks = (document: Document): CodeBlock[] => {
  const blocks: CodeBlock[] = [];

  const traverse = (node: Node): void => {
    // Handle BLOCKS.CODE nodes
    const blockCode = getCodeFromBlock(node);
    if (blockCode) {
      blocks.push({
        code: blockCode.code,
        lang: blockCode.lang,
        key: `block-${hashCode(blockCode.code)}-${blockCode.lang}`,
        type: 'block',
      });
    }

    // Handle code-marked paragraphs
    const paraCode = getCodeFromParagraph(node);
    if (paraCode) {
      blocks.push({
        code: paraCode.code,
        lang: paraCode.lang,
        key: `para-${hashCode(paraCode.code)}-${paraCode.lang}`,
        type: 'paragraph',
      });
    }

    // Recursively traverse children
    if ('content' in node && Array.isArray(node.content)) {
      node.content.forEach(traverse);
    }
  };

  if (document.content) {
    document.content.forEach(traverse);
  }

  return blocks;
};

