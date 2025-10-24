export default function CareersLoading() {
  return (
    <div className="bg-navy-500 min-h-screen">
      {/* Hero Section Skeleton */}
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center animate-pulse">
            <div className="h-14 w-80 bg-navy-400 rounded-lg mx-auto mb-6" />
            <div className="h-6 w-96 bg-navy-400 rounded-lg mx-auto" />
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 animate-pulse">
        <div className="mx-auto max-w-4xl">
          {/* Culture Section Skeleton */}
          <div className="bg-navy-400 rounded-lg p-8 border border-navy-300 mb-12">
            <div className="h-8 w-48 bg-navy-500 rounded mb-6" />
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i}>
                  <div className="h-6 w-32 bg-navy-500 rounded mb-2" />
                  <div className="h-4 w-full bg-navy-500 rounded mb-1" />
                  <div className="h-4 w-5/6 bg-navy-500 rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Jobs Section Skeleton */}
          <div className="mb-12">
            <div className="h-10 w-64 bg-navy-400 rounded mb-8" />
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-navy-400 rounded-lg border border-navy-300 p-6">
                  <div className="h-7 w-3/4 bg-navy-500 rounded mb-3" />
                  <div className="flex gap-4 mb-3">
                    <div className="h-5 w-24 bg-navy-500 rounded" />
                    <div className="h-5 w-32 bg-navy-500 rounded" />
                    <div className="h-5 w-28 bg-navy-500 rounded" />
                  </div>
                  <div className="h-5 w-32 bg-navy-500 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
