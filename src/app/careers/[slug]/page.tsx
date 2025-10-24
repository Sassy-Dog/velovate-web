import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getJob } from '../../actions';
import { MarkdownContent } from '../../../components/MarkdownContent';

interface JobPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 60; // Revalidate every 60 seconds

// Generate metadata for SEO
export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const job = await getJob(params.slug);

  const title = job?.title ?? 'Job Not Found';
  const department = job?.department ?? 'our team';
  const location = job?.location ?? 'Remote';

  return {
    title: `${title} - Velovate Careers`,
    description: `Join Velovate as a ${title} in ${department}. ${location}.`,
  };
}

export default async function JobPage({ params }: JobPageProps) {
  const job = await getJob(params.slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="bg-navy-500 min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Careers
        </Link>

        {/* Job Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {job.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-lg text-gray-300 mb-6">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {job.department}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {job.location}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {job.employment_type}
            </span>
          </div>

          {job.salary_range && (
            <div className="inline-block bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg border border-cyan-500/30">
              <span className="font-semibold">{job.salary_range}</span>
            </div>
          )}
        </div>

        {/* Apply CTA */}
        <div className="mb-8">
          <a
            href={`mailto:careers@velovate.app?subject=Application for ${encodeURIComponent(job.title)}&body=Hi, I'm interested in applying for the ${encodeURIComponent(job.title)} position.%0D%0A%0D%0APlease find my resume attached.`}
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-colors font-semibold text-lg"
          >
            Apply for this Position
          </a>
        </div>

        {/* Job Description */}
        <div className="bg-navy-400 rounded-lg p-8 border border-navy-300 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">About the Role</h2>
          <MarkdownContent content={job.description} />
        </div>

        {/* Requirements */}
        {job.requirements && job.requirements.length > 0 && (
          <div className="bg-navy-400 rounded-lg p-8 border border-navy-300 mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Requirements</h2>
            <ul className="space-y-3">
              {job.requirements.map((requirement: string, index: number) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {requirement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Responsibilities */}
        {job.responsibilities && job.responsibilities.length > 0 && (
          <div className="bg-navy-400 rounded-lg p-8 border border-navy-300 mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Responsibilities</h2>
            <ul className="space-y-3">
              {job.responsibilities.map((responsibility: string, index: number) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-coral-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Apply CTA (Bottom) */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-coral-500/10 rounded-lg p-8 border border-cyan-500/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
          <p className="text-gray-300 mb-6">
            Send us your resume and a brief introduction telling us why you'd be a great fit for this role.
          </p>
          <a
            href={`mailto:careers@velovate.app?subject=Application for ${encodeURIComponent(job.title)}&body=Hi, I'm interested in applying for the ${encodeURIComponent(job.title)} position.%0D%0A%0D%0APlease find my resume attached.`}
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-colors font-semibold text-lg"
          >
            Apply Now
          </a>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            View all open positions
          </Link>
        </div>
      </div>
    </div>
  );
}
