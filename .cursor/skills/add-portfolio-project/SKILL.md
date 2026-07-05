---
name: add-portfolio-project
description: Adds a new project entry to the portfolio with detail page support. Use when adding, updating, or removing projects in lib/projects.ts or app/projects routes.
---

# Add Portfolio Project

## Steps

1. Open `lib/projects.ts` and add a `Project` object to the `projects` array.
2. Ensure `slug` is unique, URL-safe, and kebab-case.
3. Set `featured: true` for homepage cards; `false` for archive-only entries.
4. Fill all required fields: `title`, `subtitle`, `description`, `gradient`, `accent`, `tech`, `github`, `liveLinks`, `overview`, `highlights`, `architecture`, `challenges`.
5. Verify the detail page at `/projects/[slug]` renders (uses `getProjectBySlug`).
6. If the project should appear on the homepage, confirm `Projects` section filters by `featured`.

## Field guide

| Field | Notes |
|-------|-------|
| `gradient` | Tailwind gradient classes, e.g. `from-blue-600/20 to-indigo-600/10` |
| `accent` | Hex color for accents, e.g. `#3B82F6` |
| `github` | URL string or `null` for proprietary work |
| `liveLinks` | Array of `{ label, href }`; use `externalLinks` from same file when shared |

## Example entry

```typescript
{
  slug: "my-new-project",
  title: "My New Project",
  subtitle: "Short tagline",
  description: "One-line summary for cards.",
  gradient: "from-cyan-600/20 to-blue-600/10",
  accent: "#06B6D4",
  tech: ["Next.js", "TypeScript"],
  github: "https://github.com/rakibroni/my-new-project",
  liveLinks: [{ label: "Live Demo", href: "https://example.com" }],
  featured: true,
  overview: ["Paragraph 1.", "Paragraph 2."],
  highlights: ["Bullet 1.", "Bullet 2."],
  architecture: ["Layer 1.", "Layer 2."],
  challenges: ["Challenge 1.", "Challenge 2."],
}
```

## Checklist

- [ ] Slug is unique
- [ ] All array fields have at least one item
- [ ] External URLs are valid and use `https://`
- [ ] Homepage and detail page render correctly
- [ ] No duplicate content hardcoded in components
