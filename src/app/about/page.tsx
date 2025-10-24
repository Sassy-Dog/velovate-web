import { Metadata } from 'next';
import { brandConfig } from '../../config/brand';

export const metadata: Metadata = {
  title: 'About - Velovate',
  description: 'Learn about Velovate - our mission, values, and the team behind the cycling platform bringing riders together for training and fundraising.',
};

export default function About() {
  return (
    <div className="bg-navy-500 min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-cyan-400 to-coral-400 bg-clip-text text-transparent">
              About Velovate
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {brandConfig.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="bg-navy-400 rounded-lg p-8 border border-navy-300 mb-12">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Velovate exists to unite cyclists through the power of community, shared goals, and meaningful purpose.
              We believe that cycling is more than just a sport—it's a catalyst for connection, personal growth, and
              positive change in the world.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              By combining team-based training with charitable fundraising, we're creating a platform where every mile
              matters, every rider counts, and every effort makes a difference.
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-navy-400 rounded-lg p-8 border border-navy-300 mb-12">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Story</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Velovate was born from a simple observation: cyclists are stronger together. Whether you're training for
              your first century ride, competing in a gran fondo, or simply enjoying weekend group rides, the camaraderie
              and accountability of a team makes every pedal stroke more meaningful.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We also noticed that many cycling teams wanted to give back to their communities through fundraising, but
              struggled with fragmented tools and complicated processes. Organizing rides, tracking progress, and managing
              donations often required juggling multiple platforms—none of which were designed specifically for cycling teams.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Velovate brings it all together. One platform for team management, ride tracking, event planning, and
              fundraising. Built by cyclists, for cyclists, with the features that actually matter.
            </p>
          </div>

          {/* Values Section */}
          <div className="bg-navy-400 rounded-lg p-8 border border-navy-300 mb-12">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Values</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-coral-400 mb-2">Community First</h3>
                <p className="text-gray-300 leading-relaxed">
                  We build features that strengthen connections between riders, support team dynamics, and foster
                  inclusive cycling communities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-coral-400 mb-2">Purpose-Driven</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every ride can make a difference. We empower teams to align their passion for cycling with causes
                  that matter to them.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-coral-400 mb-2">Transparency</h3>
                <p className="text-gray-300 leading-relaxed">
                  From fundraising dollars to data privacy, we believe in openness and accountability in everything we do.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-coral-400 mb-2">Continuous Improvement</h3>
                <p className="text-gray-300 leading-relaxed">
                  We listen to our community, iterate rapidly, and constantly improve the platform based on real rider feedback.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-coral-400 mb-2">Accessibility</h3>
                <p className="text-gray-300 leading-relaxed">
                  Cycling is for everyone. We strive to make our platform accessible, affordable, and welcoming to riders
                  of all levels and backgrounds.
                </p>
              </div>
            </div>
          </div>

          {/* What We Offer Section */}
          <div className="bg-navy-400 rounded-lg p-8 border border-navy-300 mb-12">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {brandConfig.features.map((feature, index) => (
                <div key={index} className="bg-navy-500 p-6 rounded-lg border border-navy-300">
                  <h3 className="text-lg font-semibold text-coral-400 mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Details */}
          <div className="bg-navy-400 rounded-lg p-8 border border-navy-300 mb-12">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">The Platform</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Velovate is available as a web application and mobile apps for iOS and Android, ensuring you can stay
              connected with your team whether you're planning rides at your desk or tracking progress on the road.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Free Tier</h3>
                <p className="text-gray-300">
                  Get started with essential features including team creation, ride tracking, basic analytics, and
                  fundraising campaign management—completely free.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Premium Features</h3>
                <p className="text-gray-300">
                  Unlock advanced analytics, enhanced team management tools, priority support, and exclusive integrations
                  with our affordable premium subscription.
                </p>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="bg-navy-400 rounded-lg p-8 border border-navy-300 mb-12">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Company Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Velovate is developed and operated by <strong className="text-white">Sassy Dog Enterprises LLC</strong>,
              a technology company focused on building innovative platforms that bring people together around shared
              passions and purposes.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We're committed to sustainable growth, user privacy, and building products that genuinely improve people's
              lives. Velovate is our contribution to the cycling community—a community we're proud to be part of.
            </p>
            <div className="bg-navy-500 p-6 rounded-lg border border-navy-300 mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">Legal & Privacy</h3>
              <p className="text-gray-300 mb-4">
                We take your privacy and data security seriously. Please review our legal documents to understand
                how we protect and respect your information:
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors underline">
                    Privacy Policy
                  </a>
                  {' - How we collect, use, and protect your data'}
                </li>
                <li>
                  <a href="/terms" className="text-cyan-400 hover:text-cyan-300 transition-colors underline">
                    Terms of Service
                  </a>
                  {' - The terms governing your use of Velovate'}
                </li>
                <li>
                  <a href="/refund" className="text-cyan-400 hover:text-cyan-300 transition-colors underline">
                    Refund Policy
                  </a>
                  {' - Our policies on cancellations and refunds'}
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-navy-400 rounded-lg p-8 border border-navy-300">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Get in Touch</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We love hearing from our community! Whether you have questions, feedback, feature requests, or just
              want to share your cycling stories, we're here to listen.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
                <p className="text-gray-300 mb-2">
                  Need help? Have a technical issue?
                </p>
                <a
                  href={brandConfig.links.support}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                >
                  {brandConfig.links.support.replace('mailto:', '')}
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">General Inquiries</h3>
                <p className="text-gray-300 mb-2">
                  Questions about partnerships, press, or business?
                </p>
                <a
                  href="mailto:hello@velovate.app"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                >
                  hello@velovate.app
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-navy-300">
              <h3 className="text-lg font-semibold text-white mb-3">Connect With Us</h3>
              <p className="text-gray-300 mb-4">
                Follow us on social media to stay updated on new features, cycling tips, and community highlights:
              </p>
              <div className="flex space-x-4">
                <a
                  href={brandConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  X
                </a>
                <span className="text-gray-500">•</span>
                <a
                  href={brandConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Facebook
                </a>
                <span className="text-gray-500">•</span>
                <a
                  href={brandConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
