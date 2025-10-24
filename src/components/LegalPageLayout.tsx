'use client';

import { ReactNode } from 'react';

interface Section {
  id: string;
  title: string;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
  sections?: Section[];
}

export function LegalPageLayout({ title, lastUpdated, children, sections }: LegalPageLayoutProps) {
  return (
    <div className="bg-navy-500 min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl bg-gradient-to-r from-cyan-400 to-coral-400 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="mt-4 text-sm text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Table of Contents (if sections provided) */}
          {sections && sections.length > 0 && (
            <div className="mb-12 bg-navy-400 rounded-lg p-6 border border-navy-300">
              <h2 className="text-lg font-semibold text-white mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-invert prose-cyan max-w-none">
            <div className="bg-navy-400 rounded-lg p-8 border border-navy-300 legal-content">
              {children}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .legal-content h2 {
          color: #22d3ee;
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #1e3a5f;
        }

        .legal-content h2:first-child {
          margin-top: 0;
          padding-top: 0;
          border-top: none;
        }

        .legal-content h3 {
          color: #67e8f9;
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .legal-content p {
          color: #d1d5db;
          line-height: 1.75;
          margin-bottom: 1rem;
        }

        .legal-content ul,
        .legal-content ol {
          color: #d1d5db;
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }

        .legal-content li {
          margin-bottom: 0.5rem;
        }

        .legal-content strong {
          color: #ffffff;
          font-weight: 600;
        }

        .legal-content a {
          color: #22d3ee;
          text-decoration: underline;
        }

        .legal-content a:hover {
          color: #67e8f9;
        }

        .legal-content .highlight-box {
          background-color: #1e3a5f;
          border-left: 4px solid #22d3ee;
          padding: 1rem;
          margin: 1.5rem 0;
          border-radius: 0.375rem;
        }
      `}</style>
    </div>
  );
}
