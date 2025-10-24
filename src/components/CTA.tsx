import Link from 'next/link';
import { brandConfig } from '../config/brand';

export function CTA() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-cyan-400 to-coral-500 opacity-90"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-coral-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-300 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl drop-shadow-lg">
          <span className="block">Ready to get started?</span>
          <span className="block text-navy-900 text-2xl sm:text-3xl mt-2">Join thousands of cyclists making a difference.</span>
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 lg:mt-0 lg:flex-shrink-0">
          <Link
            href={`${brandConfig.links.app}/sign-up`}
            className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-white px-8 py-3 text-base font-medium text-cyan-600 hover:bg-navy-500 hover:text-white shadow-lg transition-all"
          >
            Get Started
          </Link>
          <Link
            href={brandConfig.links.support}
            className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3 text-base font-medium text-white hover:bg-white hover:text-cyan-600 transition-all"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
}
