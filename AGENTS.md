<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# rakibmostofa — Agent Guide

Personal portfolio site for **Md Rakib Mostofa** ([rakibmostofa.dev](https://rakibmostofa.dev)).

## Stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS v4** with CSS variables in `app/globals.css`
- **Framer Motion** for animations, **Radix UI** + **shadcn-style** primitives
- **react-hook-form** + **zod** for forms; **Resend** for contact email
- **pnpm** package manager; deployed on **Vercel**

## Commands

```bash
pnpm dev      # local dev server (localhost:3000)
pnpm build    # production build
pnpm lint     # ESLint
```

## Project layout

```
app/                    # App Router pages, layout, API routes
  api/contact/          # POST contact form (Resend)
  projects/[slug]/      # Dynamic project detail pages
components/
  layout/               # Navbar, Footer
  sections/             # Homepage sections (Hero, About, Skills, …)
  ui/                   # Reusable UI (SectionHeading, icons, cursor, …)
  seo/                  # JSON-LD structured data
lib/
  projects.ts           # Project data, siteUrl, externalLinks
  utils.ts              # cn() helper (clsx + tailwind-merge)
```

## Conventions

- Use `@/` path alias for imports.
- Section components live in `components/sections/` and are composed in `app/page.tsx`.
- Project content is centralized in `lib/projects.ts` — do not duplicate project data in components.
- Use `cn()` from `@/lib/utils` for conditional Tailwind classes.
- Client components need `"use client"`; keep server components as default when possible.
- Dark mode is default (`ThemeProvider` in `app/layout.tsx`); support both themes via CSS variables.
- Animations: Framer Motion with subtle fade/slide patterns; avoid heavy motion on every element.
- Icons: `lucide-react` for general icons; custom brand icons in `components/ui/icons.tsx`.
- SEO metadata lives in `app/layout.tsx`; page-specific metadata in route files.

## Environment variables

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend API key for contact form |
| `CONTACT_TO_EMAIL` | Inbox for form submissions |
| `CONTACT_FROM_EMAIL` | Verified sender address in Resend |

Never commit secrets. The contact API includes a honeypot field (`website`).

## What to avoid

- Do not add new dependencies without a clear need.
- Do not hardcode project URLs — use `siteUrl` and `externalLinks` from `lib/projects.ts`.
- Do not break existing section IDs used by navbar anchor links.
- Keep changes scoped; this is a portfolio site, not a full application framework.

## Cursor config

- **Rules**: `.cursor/rules/` — file-specific coding standards
- **Skills**: `.cursor/skills/` — workflows for common portfolio tasks
