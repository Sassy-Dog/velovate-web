import Link from 'next/link';
import Image from 'next/image';
import { brandConfig } from '../config/brand';

export function Hero() {
  return (
    <div className="relative bg-navy-500 overflow-hidden min-h-[600px]">
      <div className="lg:grid lg:grid-cols-2 max-w-7xl mx-auto min-h-[600px]">
        {/* Left Column - Hero Content */}
        <div className="relative pb-8 bg-navy-500 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 overflow-hidden flex items-center">
          <main className="mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 w-full">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block bg-gradient-to-r from-cyan-400 to-coral-400 bg-clip-text text-transparent">
                  {brandConfig.tagline}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl lg:pr-8">
                {brandConfig.description}
              </p>
              <div className="mt-5 sm:flex sm:justify-center md:mt-8 lg:justify-start gap-4">
                <Link
                  href={brandConfig.links.app}
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-navy-900 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 shadow-lg hover:shadow-cyan-500/50 transition-all md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-cyan-400 text-base font-medium rounded-lg text-cyan-400 bg-transparent hover:bg-cyan-400/10 md:py-4 md:text-lg md:px-10 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </main>
        </div>

        {/* Right Column - Hero Image/Illustration */}
        <div className="relative overflow-hidden">
          <div className="h-56 w-full bg-gradient-to-br from-cyan-500 via-cyan-400 to-coral-500 sm:h-72 md:h-96 lg:h-full flex items-center justify-center">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-coral-400 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-cyan-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Hero content */}
            <div className="relative text-white text-center p-8 z-10">
              <div className="relative inline-block mb-6">
                <Image
                  src="/images/velovate-logo.png"
                  alt="Velovate"
                  width={160}
                  height={160}
                  className="drop-shadow-2xl"
                />
              </div>
              <p className="text-3xl font-bold drop-shadow-lg">Join the Movement</p>
              <p className="mt-3 text-lg text-white/90 drop-shadow">{brandConfig.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
