'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { brandConfig } from '../config/brand';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4 lg:py-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/velovate-logo.png"
                alt={brandConfig.name}
                width={40}
                height={40}
                className="rounded-lg transition-transform group-hover:scale-105"
              />
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-cyan-600 to-coral-600 bg-clip-text text-transparent">{brandConfig.name}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="ml-10 hidden space-x-8 lg:flex">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-cyan-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link
              href={`${brandConfig.links.app}/sign-in`}
              className="text-base font-medium text-gray-700 hover:text-cyan-600 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href={`${brandConfig.links.app}/sign-up`}
              className="inline-flex items-center rounded-lg border border-transparent bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:from-cyan-600 hover:to-cyan-700 hover:shadow-cyan-500/50 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t border-gray-200">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-gray-700 hover:text-cyan-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Link
                href={`${brandConfig.links.app}/sign-in`}
                className="block text-base font-medium text-gray-700 hover:text-cyan-600 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href={`${brandConfig.links.app}/sign-up`}
                className="block text-center rounded-lg border border-transparent bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:from-cyan-600 hover:to-cyan-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
