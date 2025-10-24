'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

/**
 * Renders Markdown content with GitHub Flavored Markdown support
 * Styled to match the Velovate design system
 */
export function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>

      <style jsx global>{`
        .markdown-content h1 {
          color: #22d3ee;
          font-size: 2.25rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .markdown-content h2 {
          color: #22d3ee;
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #1e3a5f;
        }

        .markdown-content h2:first-child {
          margin-top: 0;
          padding-top: 0;
          border-top: none;
        }

        .markdown-content h3 {
          color: #67e8f9;
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .markdown-content h4 {
          color: #67e8f9;
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .markdown-content p {
          color: #d1d5db;
          line-height: 1.75;
          margin-bottom: 1rem;
        }

        .markdown-content ul,
        .markdown-content ol {
          color: #d1d5db;
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          line-height: 1.75;
        }

        .markdown-content li {
          margin-bottom: 0.5rem;
        }

        .markdown-content strong {
          color: #ffffff;
          font-weight: 600;
        }

        .markdown-content em {
          font-style: italic;
        }

        .markdown-content a {
          color: #22d3ee;
          text-decoration: underline;
          transition: color 0.2s;
        }

        .markdown-content a:hover {
          color: #67e8f9;
        }

        .markdown-content code {
          background-color: #1e3a5f;
          color: #22d3ee;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
          font-family: 'Monaco', 'Consolas', monospace;
        }

        .markdown-content pre {
          background-color: #0f172a;
          border: 1px solid #1e3a5f;
          border-radius: 0.5rem;
          padding: 1rem;
          margin-bottom: 1rem;
          overflow-x: auto;
        }

        .markdown-content pre code {
          background: none;
          padding: 0;
          border-radius: 0;
          color: #d1d5db;
        }

        .markdown-content blockquote {
          border-left: 4px solid #22d3ee;
          padding-left: 1rem;
          margin-left: 0;
          margin-bottom: 1rem;
          color: #9ca3af;
          font-style: italic;
        }

        .markdown-content table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1rem;
        }

        .markdown-content th,
        .markdown-content td {
          border: 1px solid #1e3a5f;
          padding: 0.75rem;
          text-align: left;
        }

        .markdown-content th {
          background-color: #1e3a5f;
          color: #22d3ee;
          font-weight: 600;
        }

        .markdown-content td {
          color: #d1d5db;
        }

        .markdown-content hr {
          border: none;
          border-top: 1px solid #1e3a5f;
          margin: 2rem 0;
        }

        .markdown-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1rem 0;
        }
      `}</style>
    </div>
  );
}
