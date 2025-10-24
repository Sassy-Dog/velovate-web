export default function BlogPostLoading() {
  return (
    <div className="bg-navy-500 min-h-screen py-16">
      <article className="mx-auto max-w-4xl px-6 lg:px-8 animate-pulse">
        {/* Back Link Skeleton */}
        <div className="h-5 w-32 bg-navy-400 rounded mb-8" />

        {/* Cover Image Skeleton */}
        <div className="relative aspect-video mb-8 rounded-lg bg-navy-400" />

        {/* Header Skeleton */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-4 w-24 bg-navy-400 rounded" />
            <div className="h-4 w-32 bg-navy-400 rounded" />
          </div>

          <div className="h-12 w-full bg-navy-400 rounded mb-2" />
          <div className="h-12 w-3/4 bg-navy-400 rounded mb-4" />

          <div className="h-6 w-full bg-navy-400 rounded mb-2" />
          <div className="h-6 w-5/6 bg-navy-400 rounded mb-6" />

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-navy-400" />
            <div>
              <div className="h-5 w-32 bg-navy-400 rounded mb-2" />
              <div className="h-4 w-20 bg-navy-400 rounded" />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="h-8 w-20 bg-navy-400 rounded-full" />
            <div className="h-8 w-24 bg-navy-400 rounded-full" />
            <div className="h-8 w-28 bg-navy-400 rounded-full" />
          </div>
        </header>

        <hr className="border-navy-400 my-8" />

        {/* Content Skeleton */}
        <div className="bg-navy-400 rounded-lg p-8 border border-navy-300 space-y-4">
          <div className="h-4 w-full bg-navy-500 rounded" />
          <div className="h-4 w-full bg-navy-500 rounded" />
          <div className="h-4 w-3/4 bg-navy-500 rounded" />
          <div className="h-6 bg-navy-500 rounded my-6" />
          <div className="h-4 w-full bg-navy-500 rounded" />
          <div className="h-4 w-full bg-navy-500 rounded" />
          <div className="h-4 w-5/6 bg-navy-500 rounded" />
        </div>
      </article>
    </div>
  );
}
