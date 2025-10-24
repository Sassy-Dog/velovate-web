# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

**Velovate Marketing Site** - Marketing website for the Velovate cycling platform. This is a standalone Next.js site extracted from the main Velovate monorepo, focused on public-facing content and lead generation.

- **Production**: https://velovate.app
- **Deployment**: Auto-deploys to Vercel on push to `main` branch
- **Related Repository**: [velovate](https://github.com/Sassy-Dog/velovate) - Main product monorepo

## Quick Start

```bash
# Install dependencies
npm install

# Run development server (defaults to port 3000)
./dev

# Run on custom port (recommended: 3010 per company port allocation)
./dev --port 3010

# Build for production
./dev build

# Other commands
./dev lint          # Run linting
./dev clean         # Clean build artifacts
./dev help          # Show all available commands
```

**Note**: Per company standards, this project should use ports outside the 3000-3009 range (reserved for sassydog-web). Use `./dev --port 3010` for local development.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 4 (inline @theme configuration in global.css)
- **UI**: React 19 with Server Components
- **Database**: PostgreSQL (Neon serverless) via `@neondatabase/serverless`
- **Deployment**: Vercel
- **Content**: Markdown rendering via `react-markdown` with GitHub Flavored Markdown support

## Architecture

### Project Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout (Header + Footer wrapper)
│   ├── page.tsx           # Homepage (Hero, Features, HowItWorks, Pricing, CTA)
│   ├── actions.ts         # Server actions for database queries
│   ├── blog/              # Blog pages (dynamic routing)
│   ├── careers/           # Careers pages (dynamic routing)
│   └── [legal]/           # Static legal pages (privacy, terms, refund, about)
├── components/            # Reusable React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer with links
│   ├── Hero.tsx          # Homepage hero section
│   ├── Features.tsx      # Features showcase
│   ├── HowItWorks.tsx    # Process explanation
│   ├── Pricing.tsx       # Pricing tiers
│   ├── CTA.tsx           # Call-to-action section
│   └── MarkdownContent.tsx  # Markdown renderer wrapper
└── config/
    └── brand.ts          # Brand configuration (name, tagline, social links)

scripts/
└── lib.sh                # Shared bash utilities (colors, git helpers, etc.)
```

### Key Architectural Patterns

#### 1. Server Actions for Database Access
Database queries are centralized in `src/app/actions.ts` using Next.js Server Actions:
- All database functions are marked with `"use server"`
- Uses Neon serverless PostgreSQL driver for edge-compatible queries
- Exports TypeScript interfaces for type safety (`BlogPost`, `Job`)
- Functions: `getBlogPosts()`, `getBlogPost(slug)`, `getJobs()`, `getJob(slug)`

#### 2. Dynamic Content Pages
Blog and careers pages use Next.js dynamic routing with database-driven content:
- `/blog` and `/blog/[slug]` - Blog posts from `blog_posts` table
- `/careers` and `/careers/[slug]` - Job listings from `jobs` table
- Both use ISR with 60-second revalidation (`export const revalidate = 60`)
- Includes error handling and empty state UI

#### 3. Brand Configuration System
Centralized brand configuration in `src/config/brand.ts`:
- Brand name, tagline, description
- Social media links (Twitter, Facebook, Instagram, GitHub)
- App and marketing URLs
- Feature descriptions
- **Important**: Update this file when changing brand messaging across the site

#### 4. Tailwind CSS 4 with Inline Theme
Styling uses Tailwind CSS 4's new `@theme` directive in `src/app/global.css`:
- **Cyan palette** (`cyan-50` to `cyan-900`) - Primary brand color
- **Coral palette** (`coral-50` to `coral-900`) - Accent color
- **Navy palette** (`navy-50` to `navy-900`) - Dark backgrounds
- No separate `tailwind.config.js` - all theme customization is inline in CSS

#### 5. Component Composition
Homepage (`src/app/page.tsx`) is composed of reusable section components:
```tsx
<Hero />
<Features />
<HowItWorks />
<Pricing />
<CTA />
```
Each component is self-contained and can be reordered or reused.

## Development Commands

### Using the `./dev` Script
The `./dev` script is the primary developer interface (sources `scripts/lib.sh` for utilities):

```bash
./dev                    # Run dev server (default port 3000)
./dev --port 3010        # Run on custom port
./dev build              # Production build
./dev start              # Start production server
./dev lint               # Run Next.js linter
./dev clean              # Remove .next/ and node_modules/.cache/
```

### Direct npm Commands
```bash
npm run dev              # Development server
npm run build            # Production build
npm run start            # Production server
npm run lint             # Lint code
```

## Database Schema

### Required Tables

The site expects these PostgreSQL tables (see `.env.example` for connection setup):

**`blog_posts`**
- `id` (text/uuid)
- `title`, `slug`, `excerpt`, `content` (text)
- `author_name`, `author_avatar_url` (text, nullable)
- `cover_image_url` (text, nullable)
- `category` (text, nullable)
- `tags` (text[], nullable)
- `published_at`, `created_at`, `updated_at` (timestamp)
- `is_published` (boolean)

**`jobs`**
- `id` (text/uuid)
- `title`, `slug`, `department`, `location`, `employment_type` (text)
- `description` (text)
- `requirements`, `responsibilities` (text[])
- `salary_range` (text, nullable)
- `posted_at`, `expires_at` (timestamp)
- `is_active` (boolean)
- `created_at`, `updated_at` (timestamp)

## Environment Variables

Required environment variables (see `.env.example`):

```bash
DATABASE_URL=postgresql://user:password@host.neon.tech/dbname
```

Set these in:
- **Local**: `.env.local` (gitignored)
- **Vercel**: Project settings → Environment Variables

## Deployment

### Vercel Configuration
- **Auto-deployment**: Push to `main` branch triggers deployment
- **Build Command**: `npm run build` (automatic)
- **Output Directory**: `.next` (automatic)
- **Framework Preset**: Next.js (automatic)

### Vercel Dashboard
Access project settings and deployments at:
https://vercel.com/sassy-dog/velovate-web

## Content Management

### Adding Blog Posts
Create records in the `blog_posts` table with:
1. Unique `slug` for URL routing
2. Markdown content in `content` field
3. `is_published = true` to make visible
4. Optional cover image URL and author avatar

### Adding Job Listings
Create records in the `jobs` table with:
1. Unique `slug` for URL routing
2. Markdown description
3. Arrays for requirements and responsibilities
4. `is_active = true` and valid `expires_at` date

## Important Notes

### Port Allocation
Per company standards (see parent `CLAUDE.md`):
- **Sassy Dog Web**: Reserved ports 3000-3009
- **This Project**: Use 3010+ (e.g., `./dev --port 3010`)

### Related Codebases
This is the **marketing site only**. The main Velovate product (member app, API, mobile apps) is in a separate monorepo:
- Repository: `sassy-dog/velovate/` (Nx monorepo)
- Tech: React web, .NET API, Flutter mobile
- Database: Shared PostgreSQL instance (different schema)

### Styling Conventions
- Use custom color palette: `cyan-*`, `coral-*`, `navy-*`
- Dark theme by default (navy backgrounds)
- Gradient text: `bg-gradient-to-r from-cyan-400 to-coral-400 bg-clip-text text-transparent`
- Consistent spacing: `mx-auto max-w-7xl px-6 lg:px-8`

### Error Handling
Server actions include try-catch blocks but log errors to console. Pages handle errors gracefully with:
- Error state UI (red banner)
- Empty state UI (informational message)
- Fallback content (placeholder images, default avatars)
