/**
 * Code normalization utilities
 */

/**
 * Normalize tabs to spaces (common practice for consistent display).
 * Default: 2 spaces per tab (configurable).
 * 
 * Note: This preserves the original indentation structure while ensuring
 * consistent rendering across different environments.
 */
export const normalizeTabsToSpaces = (code: string, tabSize: number = 2): string => {
  return code.replace(/\t/g, ' '.repeat(tabSize));
};

/**
 * Preserve leading whitespace and normalize tabs.
 * This ensures indentation is maintained while standardizing tab characters.
 */
export const normalizeCodeIndentation = (code: string, tabSize: number = 2): string => {
  // First normalize tabs to spaces
  const normalized = normalizeTabsToSpaces(code, tabSize);
  
  // Preserve all whitespace (including leading spaces on each line)
  // The CSS white-space: pre will handle the rest
  return normalized;
};

