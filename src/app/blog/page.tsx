import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts, type BlogPost } from '../actions';

export const metadata: Metadata = {
  title: 'Blog - Velovate',
  description: 'Read the latest cycling tips, training advice, and community stories from the Velovate team and community.',
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  let posts: BlogPost[] | null = null;
  let hasError = false;

  try {
    posts = await getBlogPosts();
  } catch (e) {
    console.error("Error fetching blog posts:", e);
    hasError = true;
  }

  return (
    <div className="bg-navy-500 min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-cyan-400 to-coral-400 bg-clip-text text-transparent">
            Velovate Blog
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Cycling tips, training advice, and stories from our community
          </p>
        </div>

        {/* Error State */}
        {hasError && (
          <div className="mx-auto max-w-2xl">
            <div className="bg-red-900/20 border border-red-700 rounded-lg p-6 text-center">
              <p className="text-red-400">
                Unable to load blog posts. Please try again later.
              </p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!hasError && (!posts || posts.length === 0) && (
          <div className="mx-auto max-w-2xl">
            <div className="bg-navy-400 border border-navy-300 rounded-lg p-12 text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">No Posts Yet</h2>
              <p className="text-gray-300 mb-6">
                We're working on bringing you great content. Check back soon!
              </p>
              <Link
                href="/"
                className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Return Home
              </Link>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        {posts && posts.length > 0 && (
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post: any) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-navy-400 rounded-lg border border-navy-300 overflow-hidden hover:border-cyan-400 transition-colors"
                >
                  {/* Cover Image */}
                  {post.cover_image_url ? (
                    <div className="relative aspect-video bg-navy-500">
                      <Image
                        src={post.cover_image_url}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-coral-500/20 flex items-center justify-center">
                      <div className="text-6xl text-cyan-400/30">📝</div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {/* Category & Date */}
                    <div className="flex items-center gap-3 mb-3 text-sm">
                      {post.category && (
                        <>
                          <span className="text-cyan-400">{post.category}</span>
                          <span className="text-gray-500">•</span>
                        </>
                      )}
                      <time className="text-gray-400">
                        {new Date(post.published_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      {post.author_avatar_url ? (
                        <Image
                          src={post.author_avatar_url}
                          alt={post.author_name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-coral-400 flex items-center justify-center text-white text-sm font-semibold">
                          {post.author_name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <span className="text-sm text-gray-400">{post.author_name}</span>
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="inline-block px-2 py-1 text-xs rounded bg-navy-500 text-cyan-400 border border-navy-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
