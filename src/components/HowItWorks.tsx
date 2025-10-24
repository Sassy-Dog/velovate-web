export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description:
        'Sign up and set up your cyclist profile. Connect your Strava or Garmin account to import your training data.',
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Join or Create a Team',
      description:
        'Find a team that matches your goals and location, or create your own team and invite fellow cyclists to join.',
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Ride & Fundraise',
      description:
        'Participate in group rides, track your progress, and raise funds for charity through our integrated fundraising platform.',
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div id="how-it-works" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base bg-gradient-to-r from-cyan-500 to-coral-500 bg-clip-text text-transparent font-semibold tracking-wide uppercase">
            How It Works
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Getting started is easy
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Join thousands of cyclists making a difference in three simple steps
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 text-white shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                    {step.icon}
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-cyan-200 to-coral-200 bg-clip-text text-transparent">{step.number}</div>
                  <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">{step.title}</h3>
                  <p className="mt-4 text-base text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
