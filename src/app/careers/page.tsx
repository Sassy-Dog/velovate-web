import { Metadata } from 'next';
import Link from 'next/link';
import { getJobs, type Job } from '../actions';

export const metadata: Metadata = {
  title: 'Careers - Velovate',
  description: 'Join the Velovate team and help us build the future of cycling communities.',
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function CareersPage() {
  let activeJobs: Job[] = [];
  let hasError = false;

  try {
    activeJobs = await getJobs();
  } catch (e) {
    console.error("Error fetching jobs:", e);
    hasError = true;
  }

  return (
    <div className="bg-navy-500 min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-cyan-400 to-coral-400 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Help us build the platform that's bringing cyclists together to ride and raise funds for causes that matter.
            </p>
          </div>
        </div>
      </div>

      {/* Company Culture */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="bg-navy-400 rounded-lg p-8 border border-navy-300 mb-12">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Why Velovate?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Mission-Driven</h3>
                <p className="text-gray-300">
                  We're building technology that brings people together and makes a positive impact in communities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Remote-First</h3>
                <p className="text-gray-300">
                  Work from anywhere. We believe in flexibility and trust our team to do great work.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Growth & Learning</h3>
                <p className="text-gray-300">
                  Continuous learning opportunities, conferences, and professional development support.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Competitive Benefits</h3>
                <p className="text-gray-300">
                  Health insurance, retirement plans, unlimited PTO, and equipment stipend.
                </p>
              </div>
            </div>
          </div>

          {/* Error State */}
          {hasError && (
            <div className="bg-red-900/20 border border-red-700 rounded-lg p-6 text-center">
              <p className="text-red-400">
                Unable to load job listings. Please try again later.
              </p>
            </div>
          )}

          {/* Open Positions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">
              Open Positions
              {activeJobs.length > 0 && (
                <span className="ml-4 text-2xl text-cyan-400">({activeJobs.length})</span>
              )}
            </h2>

            {/* No Jobs State */}
            {!hasError && activeJobs.length === 0 && (
              <div className="bg-navy-400 border border-navy-300 rounded-lg p-12 text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">No Open Positions</h3>
                <p className="text-gray-300 mb-6">
                  We don't have any open positions at the moment, but we're always looking for talented people.
                  Send us your resume and we'll keep it on file for future opportunities.
                </p>
                <a
                  href="mailto:careers@velovate.app?subject=General Application"
                  className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  Send Your Resume
                </a>
              </div>
            )}

            {/* Job Listings */}
            {activeJobs.length > 0 && (
              <div className="space-y-4">
                {activeJobs.map((job: any) => (
                  <Link
                    key={job.id}
                    href={`/careers/${job.slug}`}
                    className="block bg-navy-400 rounded-lg border border-navy-300 p-6 hover:border-cyan-400 transition-colors group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {job.employment_type}
                          </span>
                        </div>
                        {job.salary_range && (
                          <p className="text-cyan-400 font-semibold text-sm">
                            {job.salary_range}
                          </p>
                        )}
                      </div>
                      <div className="ml-4">
                        <svg className="w-6 h-6 text-cyan-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* General Application */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-coral-500/10 rounded-lg p-8 border border-cyan-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Don't See a Fit?</h3>
            <p className="text-gray-300 mb-6">
              We're always interested in hearing from talented people, even if we don't have an open position that matches your skills right now.
            </p>
            <a
              href="mailto:careers@velovate.app?subject=General Application"
              className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
