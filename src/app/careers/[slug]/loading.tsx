export default function JobLoading() {
  return (
    <div className="bg-navy-500 min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 animate-pulse">
        {/* Back Link Skeleton */}
        <div className="h-5 w-36 bg-navy-400 rounded mb-8" />

        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="h-12 w-full bg-navy-400 rounded mb-2" />
          <div className="h-12 w-3/4 bg-navy-400 rounded mb-6" />

          <div className="flex gap-4 mb-6">
            <div className="h-6 w-32 bg-navy-400 rounded" />
            <div className="h-6 w-28 bg-navy-400 rounded" />
            <div className="h-6 w-24 bg-navy-400 rounded" />
          </div>

          <div className="h-10 w-40 bg-navy-400 rounded" />
        </div>

        {/* Apply Button Skeleton */}
        <div className="h-14 w-56 bg-navy-400 rounded-lg mb-8" />

        {/* Description Skeleton */}
        <div className="bg-navy-400 rounded-lg p-8 border border-navy-300 mb-8 space-y-4">
          <div className="h-7 w-48 bg-navy-500 rounded mb-4" />
          <div className="h-4 w-full bg-navy-500 rounded" />
          <div className="h-4 w-full bg-navy-500 rounded" />
          <div className="h-4 w-3/4 bg-navy-500 rounded" />
        </div>

        {/* Requirements Skeleton */}
        <div className="bg-navy-400 rounded-lg p-8 border border-navy-300 mb-8">
          <div className="h-7 w-40 bg-navy-500 rounded mb-4" />
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-5 w-full bg-navy-500 rounded" />
            ))}
          </div>
        </div>

        {/* Responsibilities Skeleton */}
        <div className="bg-navy-400 rounded-lg p-8 border border-navy-300 mb-8">
          <div className="h-7 w-48 bg-navy-500 rounded mb-4" />
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-5 w-full bg-navy-500 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
