"use server";

import { neon } from "@neondatabase/serverless";

// Initialize Neon client
if (!process.env.MARKETING_DATABASE_URL) {
  throw new Error("MARKETING_DATABASE_URL environment variable is not set");
}
const sql = neon(process.env.MARKETING_DATABASE_URL);

// Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author_name: string;
  author_avatar_url: string | null;
  cover_image_url: string | null;
  category: string | null;
  tags: string[] | null;
  published_at: string;
  created_at: string;
  updated_at: string;
  is_published: boolean;
}

export interface Job {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  employment_type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salary_range: string | null;
  posted_at: string;
  expires_at: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

/**
 * Fetch all published blog posts, ordered by published date (newest first)
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await sql`
      SELECT * FROM blog_posts
      WHERE is_published = true
      ORDER BY published_at DESC
    `;
    return posts as BlogPost[];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await sql`
      SELECT * FROM blog_posts
      WHERE slug = ${slug}
        AND is_published = true
      LIMIT 1
    `;
    return posts.length > 0 ? (posts[0] as BlogPost) : null;
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    throw error;
  }
}

/**
 * Fetch all active jobs, ordered by posted date (newest first)
 */
export async function getJobs(): Promise<Job[]> {
  try {
    const jobs = await sql`
      SELECT * FROM jobs
      WHERE is_active = true
        AND (expires_at IS NULL OR expires_at > NOW())
      ORDER BY posted_at DESC
    `;
    return jobs as Job[];
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
}

/**
 * Fetch a single job by slug
 */
export async function getJob(slug: string): Promise<Job | null> {
  try {
    const jobs = await sql`
      SELECT * FROM jobs
      WHERE slug = ${slug}
        AND is_active = true
        AND (expires_at IS NULL OR expires_at > NOW())
      LIMIT 1
    `;
    return jobs.length > 0 ? (jobs[0] as Job) : null;
  } catch (error) {
    console.error(`Error fetching job with slug ${slug}:`, error);
    throw error;
  }
}
