import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';
import { brandConfig } from '../config/brand';

const tiers = [
  {
    name: 'Free',
    id: 'free',
    href: `${brandConfig.links.app}/sign-up`,
    price: { monthly: '$0', annually: '$0' },
    description: 'Full-featured cycling platform with ad support.',
    features: [
      'Create and manage teams',
      'Ride tracking with GPS',
      'Join unlimited teams',
      'Fundraising and auctions',
      'Mobile app access',
      'Activity sharing',
      'Ad-supported',
    ],
    featured: false,
  },
  {
    name: 'Ad-Free',
    id: 'ad-free',
    href: `${brandConfig.links.app}/sign-up`,
    price: { monthly: '$3', annually: '$29' },
    description: 'All features without advertisements. Support the platform.',
    features: [
      'Everything in Free',
      'No advertisements',
      'Support Velovate',
      'Upgrade anytime',
    ],
    featured: true,
  },
];

export function Pricing() {
  return (
    <div id="pricing" className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 bg-gradient-to-r from-cyan-500 to-coral-500 bg-clip-text text-transparent uppercase tracking-wide">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Start free and upgrade as your team grows. All plans include core features with no hidden fees.
        </p>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-8 xl:p-10 transition-all duration-300 ${
                tier.featured
                  ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 ring-2 ring-cyan-500 shadow-xl shadow-cyan-500/30 scale-105'
                  : 'bg-white ring-1 ring-gray-200 hover:ring-cyan-200 hover:shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  className={`text-lg font-semibold leading-8 ${
                    tier.featured ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {tier.name}
                </h3>
                {tier.featured && (
                  <p className="rounded-full bg-coral-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white shadow-sm">
                    Most popular
                  </p>
                )}
              </div>
              <p
                className={`mt-4 text-sm leading-6 ${
                  tier.featured ? 'text-cyan-50' : 'text-gray-600'
                }`}
              >
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={`text-4xl font-bold tracking-tight ${
                    tier.featured ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {tier.price.monthly}
                </span>
                {tier.price.monthly !== 'Custom' && (
                  <span
                    className={`text-sm font-semibold leading-6 ${
                      tier.featured ? 'text-cyan-100' : 'text-gray-600'
                    }`}
                  >
                    /month
                  </span>
                )}
              </p>
              <Link
                href={tier.href}
                className={`mt-6 block rounded-lg px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all ${
                  tier.featured
                    ? 'bg-white text-cyan-600 hover:bg-cyan-50 focus-visible:outline-white shadow-md hover:shadow-lg'
                    : 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-sm hover:from-cyan-600 hover:to-cyan-700 hover:shadow-cyan-500/50 focus-visible:outline-cyan-600'
                }`}
              >
                Get started
              </Link>
              <ul
                role="list"
                className={`mt-8 space-y-3 text-sm leading-6 xl:mt-10 ${
                  tier.featured ? 'text-cyan-100' : 'text-gray-600'
                }`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className={`h-6 w-5 flex-none ${
                        tier.featured ? 'text-white' : 'text-cyan-600'
                      }`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
