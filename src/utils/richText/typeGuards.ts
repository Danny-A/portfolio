import { BLOCKS, Node, Text } from '@contentful/rich-text-types';

/**
 * Type guards for Contentful rich text nodes
 */

export const isParagraphNode = (node: Node): node is Node & { nodeType: typeof BLOCKS.PARAGRAPH; content: Node[] } => {
  return node.nodeType === BLOCKS.PARAGRAPH && 'content' in node && Array.isArray(node.content);
};

export const isTextNode = (node: Node): node is Text => {
  return node.nodeType === 'text';
};

export const hasCodeMark = (node: Text): boolean => {
  return node.marks?.some((mark) => mark.type === 'code') ?? false;
};

export const hasOnlyParagraphChildren = (node: Node): boolean => {
  return 'content' in node && Array.isArray(node.content) && node.content.every((child) => child.nodeType === BLOCKS.PARAGRAPH);
};

