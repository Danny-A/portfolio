import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document, BLOCKS, INLINES, MARKS, Node } from '@contentful/rich-text-types';
import type { BundledLanguage } from 'shiki';
import { codeToHtml } from 'shiki';

import { findCodeBlocks, getCodeFromParagraph, getCodeFromBlock } from '~/utils/richText/codeBlocks';
import { hasOnlyParagraphChildren, isTextNode } from '~/utils/richText/typeGuards';
import { normalizeLanguage } from '~/utils/codeHighlighting/language';
import { hashCode } from '~/utils/codeHighlighting/hashing';
import { escapeHtml } from '~/utils/html';

interface RichTextProps {
  document?: Document;
  className?: string;
}

const createRenderOptions = (highlightedCode: Map<string, string>) => ({
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => {
      const codeBlock = getCodeFromParagraph(node);
      if (codeBlock) {
        const key = `para-${hashCode(codeBlock.code)}-${codeBlock.lang}`;
        const html = highlightedCode.get(key);

        if (html) {
          return (
            <div
              className="my-4 overflow-x-auto rounded-md"
              dangerouslySetInnerHTML={{ __html: html }}
              role="region"
              aria-label={`Code block: ${codeBlock.lang}`}
            />
          );
        }

        return (
          <pre className="my-4 overflow-x-auto rounded-md bg-gray-100 p-4" role="region" aria-label={`Code block: ${codeBlock.lang}`}>
            <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-800">{escapeHtml(codeBlock.code)}</code>
          </pre>
        );
      }
      return <p className="mb-4 last:mb-0">{children}</p>;
    },
    [BLOCKS.HEADING_1]: (_node: Node, children: React.ReactNode) => <h1 className="mb-4 text-3xl font-bold">{children}</h1>,
    [BLOCKS.HEADING_2]: (_node: Node, children: React.ReactNode) => <h2 className="mb-3 text-2xl font-bold">{children}</h2>,
    [BLOCKS.HEADING_3]: (_node: Node, children: React.ReactNode) => <h3 className="mb-3 text-xl font-bold">{children}</h3>,
    [BLOCKS.HEADING_4]: (_node: Node, children: React.ReactNode) => <h4 className="mb-2 text-lg font-bold">{children}</h4>,
    [BLOCKS.HEADING_5]: (_node: Node, children: React.ReactNode) => <h5 className="mb-2 text-base font-bold">{children}</h5>,
    [BLOCKS.HEADING_6]: (_node: Node, children: React.ReactNode) => <h6 className="mb-2 text-sm font-bold">{children}</h6>,
    [BLOCKS.UL_LIST]: (_node: Node, children: React.ReactNode) => (
      <ul className="mb-4 list-outside list-disc space-y-1 pl-5">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_node: Node, children: React.ReactNode) => (
      <ol className="mb-4 list-outside list-decimal space-y-1 pl-5">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: Node, children: React.ReactNode) => {
      if (hasOnlyParagraphChildren(node)) {
        return (
          <li className="mb-0">
            {'content' in node && Array.isArray(node.content)
              ? node.content.map((child, index) => (
                  <span key={index}>
                    {documentToReactComponents(child, {
                      renderNode: {
                        [BLOCKS.PARAGRAPH]: (_paragraphNode: Node, paragraphChildren: React.ReactNode) => <>{paragraphChildren}</>,
                      },
                      renderMark: {
                        [MARKS.CODE]: (text: React.ReactNode) => (
                          <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-800">{text}</code>
                        ),
                        [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
                        [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
                      },
                    })}
                  </span>
                ))
              : children}
          </li>
        );
      }
      return <li className="mb-0">{children}</li>;
    },
    [BLOCKS.QUOTE]: (_node: Node, children: React.ReactNode) => (
      <blockquote className="mb-4 border-l-4 border-gray-200 pl-4 italic">{children}</blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-6 border-gray-100" />,
    [BLOCKS.CODE]: (node: Node) => {
      // BLOCKS.CODE nodes support node.data.language - this is the preferred way
      const codeBlock = getCodeFromBlock(node);
      
      if (!codeBlock) {
        return (
          <pre className="my-4 overflow-x-auto rounded-md bg-gray-100 p-4">
            <code />
          </pre>
        );
      }

      const key = `block-${hashCode(codeBlock.code)}-${codeBlock.lang}`;
      const html = highlightedCode.get(key);

      if (html) {
        return (
          <div
            className="my-4 overflow-x-auto rounded-md"
            dangerouslySetInnerHTML={{ __html: html }}
            role="region"
            aria-label={`Code block: ${codeBlock.lang}`}
          />
        );
      }

      return (
        <pre className="my-4 overflow-x-auto rounded-md bg-gray-100 p-4" role="region" aria-label={`Code block: ${codeBlock.lang}`}>
          <code  className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-800">{escapeHtml(codeBlock.code)}</code>
        </pre>
      );
    },
    [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => {
      const uri = 'data' in node && node.data && typeof node.data === 'object' && 'uri' in node.data && typeof node.data.uri === 'string'
        ? node.data.uri
        : '#';

      return (
        <a
          href={uri}
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
  renderMark: {
    [MARKS.CODE]: (text: React.ReactNode) => (
      <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-800">{text}</code>
    ),
    [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
  },
});


export default async function RichText({ document, className = '' }: RichTextProps) {
  if (!document) return null;

  const codeBlocks = findCodeBlocks(document);
  const highlightedCode = new Map<string, string>();

  // Process all code blocks in parallel with proper error handling
  const results = await Promise.allSettled(
    codeBlocks.map(async ({ code, lang, key }) => {
      try {
        const normalizedLang = normalizeLanguage(lang);
        const html = await codeToHtml(code, {
          lang: normalizedLang as BundledLanguage,
          theme: 'github-dark',
        });
        return { key, html };
      } catch (error) {
        // Log error in development, silent in production
        if (process.env.NODE_ENV === 'development') {
          console.warn(`[RichText] Failed to highlight code block (${lang}):`, error instanceof Error ? error.message : error);
        }
        // Return fallback HTML
        const escaped = escapeHtml(code);
        return {
          key,
          html: `<pre class="my-4 overflow-x-auto rounded-md bg-gray-100 p-4"><code>${escaped}</code></pre>`,
        };
      }
    }),
  );

  // Populate map with results
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      highlightedCode.set(result.value.key, result.value.html);
    }
  });

  return (
    <div className={className}>
      {documentToReactComponents(document, createRenderOptions(highlightedCode))}
    </div>
  );
}
