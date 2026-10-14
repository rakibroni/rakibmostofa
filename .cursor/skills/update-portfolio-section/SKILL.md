---
name: update-portfolio-section
description: Updates homepage portfolio sections (Hero, About, Skills, Experience, etc.). Use when editing section content, layout, animations, or adding new homepage sections.
---

# Update Portfolio Section

## Locate the section

| Section | File | Section ID |
|---------|------|------------|
| Hero | `components/sections/hero.tsx` | `#hero` |
| About | `components/sections/about.tsx` | `#about` |
| Skills | `components/sections/skills.tsx` | `#skills` |
| Experience | `components/sections/experience.tsx` | `#experience` |
| Projects | `components/sections/projects.tsx` | `#projects` |
| GitHub Stats | `components/sections/github-stats.tsx` | `#github` |
| Certifications | `components/sections/certifications.tsx` | `#certifications` |
| Education | `components/sections/education.tsx` | `#education` |
| Testimonials | `components/sections/testimonials.tsx` | `#testimonials` |
| Contact | `components/sections/contact.tsx` | `#contact` |

Homepage composition: `app/page.tsx`.

## Editing workflow

1. Read the target section file and one neighboring section for style reference.
2. Keep `"use client"` only if the section uses hooks, Framer Motion, or browser APIs.
3. Use `SectionHeading` from `@/components/ui/section-heading` for titles.
4. Preserve the section wrapper `id` when navbar links depend on it.
5. After edits, confirm dark and light themes both look correct.

## Adding a new section

1. Create `components/sections/my-section.tsx`.
2. Import and place it in `app/page.tsx` in the desired order.
3. Add a navbar link in `components/layout/navbar.tsx` if the section needs in-page navigation.
4. Match animation patterns from existing sections (`fadeUp`, `whileInView`).

## Content rules

- Static copy can live in the section file.
- Repeatable structured data (projects, links) belongs in `lib/projects.ts`.
- Contact details and social URLs should stay consistent with `contact.tsx` and `hero.tsx`.
