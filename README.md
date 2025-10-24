# Velovate Marketing Site

Marketing website for the Velovate cycling platform - bringing cyclists together to train as teams and raise funds for causes that matter.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
./dev

# Or specify a custom port
./dev --port 3010

# Build for production
./dev build
```

## Development Commands

```bash
./dev               # Run development server
./dev build         # Build for production
./dev start         # Start production server
./dev lint          # Run linting
./dev clean         # Clean build artifacts
./dev help          # Show all commands
```

## Deployment

This site is automatically deployed to production via Vercel when pushing to the `main` branch.

- **Production**: https://velovate.app
- **Vercel Dashboard**: https://vercel.com/sassy-dog/velovate-web

## Environment Variables

See `.env.example` for required environment variables. Set these in your Vercel project settings:

- `MARKETING_DATABASE_URL` - PostgreSQL connection string for marketing database

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel
- **Database**: PostgreSQL (Neon)

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
└── config/           # Brand configuration

public/
├── images/           # Static images
└── favicon.ico       # Site favicon
```

## Related Repositories

- **Main Product**: [velovate](https://github.com/Sassy-Dog/velovate) - Member app and API
