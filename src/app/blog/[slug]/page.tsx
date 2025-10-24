import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBlogPost } from '../../actions';
import { MarkdownContent } from '../../../components/MarkdownContent';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 60; // Revalidate every 60 seconds

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  const title = post?.title ?? 'Post Not Found';
  const excerpt = post?.excerpt ?? '';
  const coverImage = post?.cover_image_url ?? null;

  return {
    title: `${title} - Velovate Blog`,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      images: coverImage ? [coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-navy-500 min-h-screen py-16">
      <article className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Cover Image */}
        {post.cover_image_url && (
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.cover_image_url}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Header */}
        <header className="mb-8">
          {/* Category & Date */}
          <div className="flex items-center gap-3 mb-4 text-sm">
            {post.category && (
              <>
                <span className="text-cyan-400">{post.category}</span>
                <span className="text-gray-500">•</span>
              </>
            )}
            <time className="text-gray-400">
              {new Date(post.published_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-300 mb-6">
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            {post.author_avatar_url ? (
              <Image
                src={post.author_avatar_url}
                alt={post.author_name}
                width={48}
                height={48}
                className="rounded-full"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-coral-400 flex items-center justify-center text-white text-lg font-semibold">
                {post.author_name.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <div className="font-semibold text-white">{post.author_name}</div>
              <div className="text-sm text-gray-400">Author</div>
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 text-sm rounded-full bg-navy-400 text-cyan-400 border border-navy-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Divider */}
        <hr className="border-navy-400 my-8" />

        {/* Content */}
        <div className="bg-navy-400 rounded-lg p-8 border border-navy-300">
          <MarkdownContent content={post.content} />
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-navy-400">
          <h3 className="text-lg font-semibold text-white mb-4">Share this post</h3>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://velovate.app/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy-400 text-cyan-400 rounded-lg border border-navy-300 hover:border-cyan-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Share on X
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://velovate.app/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy-400 text-cyan-400 rounded-lg border border-navy-300 hover:border-cyan-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              Share on Facebook
            </a>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all posts
          </Link>
        </div>
      </article>
    </div>
  );
}
