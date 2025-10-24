/**
 * Velovate Brand Configuration
 *
 * Brand name, tagline, and core messaging
 */

export const brandConfig = {
  name: 'Velovate',
  tagline: 'Ride Together. Raise Together.',
  description: 'Bringing cyclists together to train as teams and raise funds for the causes that matter most.',

  // Social/contact
  social: {
    twitter: 'https://x.com/velovate',
    facebook: 'https://www.facebook.com/profile.php?id=61582619671974',
    instagram: 'https://www.instagram.com/velovate1/',
    github: 'https://github.com/velovate',
  },

  // Links
  links: {
    marketing: 'https://velovate.app',
    app: 'https://members.velovate.app',
    support: 'mailto:support@velovate.app',
  },

  // Features
  features: [
    {
      title: 'Team Management',
      description: 'Create and manage cycling teams with hierarchical structure support',
    },
    {
      title: 'Ride Tracking',
      description: 'Track your rides with GPS integration and activity data',
    },
    {
      title: 'Fundraising',
      description: 'Organize charity events and fundraising campaigns',
    },
    {
      title: 'Social Features',
      description: 'Connect with cyclists, share achievements, and build community',
    },
  ],
} as const;
