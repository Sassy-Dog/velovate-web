export function Features() {
  const features = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: 'Team Management',
      description:
        'Create and manage cycling teams with hierarchical structure support. Organize chapters, coordinate rides, and build a strong community.',
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
      title: 'Ride Tracking',
      description:
        'Training Ride Leaders can track everyone on their ride in real-time for safety and group coordination. Keep your team together and ensure everyone makes it home safely.',
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: 'Fundraising',
      description:
        'Organize team charity events and run silent auctions to make a difference for causes you care about. Integrated with charity platforms for easy donation management.',
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: 'Social Features',
      description:
        'Connect with cyclists, share achievements, coordinate group rides, and build lasting friendships in the cycling community.',
    },
  ];

  return (
    <div id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base bg-gradient-to-r from-cyan-500 to-coral-500 bg-clip-text text-transparent font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to ride and give back
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            A complete platform for team-based cycling, training, and charity fundraising
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="pt-6 group">
                <div className="flow-root bg-white rounded-xl px-6 pb-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cyan-200">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                        <span className="text-white">{feature.icon}</span>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-gray-900 tracking-tight group-hover:text-cyan-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
