export default function BlogLoading() {
  return (
    <div className="bg-navy-500 min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="h-12 w-64 bg-navy-400 rounded-lg mx-auto mb-6 animate-pulse" />
          <div className="h-6 w-96 bg-navy-400 rounded-lg mx-auto animate-pulse" />
        </div>

        {/* Blog Posts Grid Skeleton */}
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-navy-400 rounded-lg border border-navy-300 overflow-hidden animate-pulse">
                {/* Image Skeleton */}
                <div className="aspect-video bg-navy-500" />

                {/* Content Skeleton */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-4 w-20 bg-navy-500 rounded" />
                    <div className="h-4 w-24 bg-navy-500 rounded" />
                  </div>
                  <div className="h-6 w-full bg-navy-500 rounded mb-2" />
                  <div className="h-6 w-3/4 bg-navy-500 rounded mb-4" />
                  <div className="h-4 w-full bg-navy-500 rounded mb-2" />
                  <div className="h-4 w-full bg-navy-500 rounded mb-2" />
                  <div className="h-4 w-2/3 bg-navy-500 rounded mb-4" />
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-navy-500" />
                    <div className="h-4 w-24 bg-navy-500 rounded" />
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
