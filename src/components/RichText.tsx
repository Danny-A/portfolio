import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document, BLOCKS, INLINES } from '@contentful/rich-text-types';

interface RichTextProps {
  document?: Document;
  className?: string;
}

// Helper function to check if a node has only paragraph children
const hasOnlyParagraphChildren = (node: any): boolean => {
  return node.content && node.content.every((child: any) => child.nodeType === BLOCKS.PARAGRAPH);
};

// Custom rendering options for rich text
const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p className="mb-4 last:mb-0">{children}</p>,
    [BLOCKS.HEADING_1]: (node: any, children: any) => <h1 className="mb-4 text-3xl font-bold">{children}</h1>,
    [BLOCKS.HEADING_2]: (node: any, children: any) => <h2 className="mb-3 text-2xl font-bold">{children}</h2>,
    [BLOCKS.HEADING_3]: (node: any, children: any) => <h3 className="mb-3 text-xl font-bold">{children}</h3>,
    [BLOCKS.HEADING_4]: (node: any, children: any) => <h4 className="mb-2 text-lg font-bold">{children}</h4>,
    [BLOCKS.HEADING_5]: (node: any, children: any) => <h5 className="mb-2 text-base font-bold">{children}</h5>,
    [BLOCKS.HEADING_6]: (node: any, children: any) => <h6 className="mb-2 text-sm font-bold">{children}</h6>,
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="mb-4 list-outside list-disc space-y-1 pl-5">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="mb-4 list-outside list-decimal space-y-1 pl-5">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => {
      // If the list item contains only paragraphs, render the content directly without wrapping p tags
      if (hasOnlyParagraphChildren(node)) {
        return (
          <li className="mb-0">
            {node.content.map((child: any, index: number) => (
              <span key={index}>
                {documentToReactComponents(child, {
                  renderNode: {
                    [BLOCKS.PARAGRAPH]: (paragraphNode: any, paragraphChildren: any) => <>{paragraphChildren}</>,
                  },
                })}
              </span>
            ))}
          </li>
        );
      }
      return <li className="mb-0">{children}</li>;
    },
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <blockquote className="mb-4 border-l-4 border-gray-300 pl-4 italic">{children}</blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-6 border-gray-300" />,
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a
        href={node.data.uri}
        className="text-blue-600 underline hover:text-blue-800"
        target="_blank"
        rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

export default function RichText({ document, className = '' }: RichTextProps) {
  if (!document) {
    return null;
  }

  return <div className={className}>{documentToReactComponents(document, renderOptions)}</div>;
}
