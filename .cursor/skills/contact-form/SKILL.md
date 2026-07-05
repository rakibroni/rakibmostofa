---
name: contact-form
description: Works on the portfolio contact form and Resend email API. Use when editing the contact section, form validation, email templates, or app/api/contact route.
---

# Contact Form & Email

## Files

- **UI**: `components/sections/contact.tsx` — form state, validation UX, toast feedback
- **API**: `app/api/contact/route.ts` — zod validation, honeypot, Resend send
- **Env**: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`

## Form fields

| Field | Required | Notes |
|-------|----------|-------|
| `name` | Yes | Max 100 chars |
| `email` | Yes | Valid email |
| `subject` | Yes | Max 200 chars |
| `message` | Yes | Min 10, max 5000 chars |
| `website` | No | Honeypot — hidden from users; bots get fake success |

## API behavior

1. Parse JSON body with zod schema.
2. If honeypot (`website`) is filled, return `{ success: true }` without sending email.
3. If `RESEND_API_KEY` missing, return 500 with generic error.
4. Escape all user input in HTML email body.
5. Prefix subject with `[Portfolio]`.

## Testing locally

1. Set env vars in `.env.local` (never commit).
2. Run `pnpm dev` and submit the form on the homepage.
3. Confirm toast success/error and check Resend dashboard for delivery.

## Common changes

- **New field**: Add to zod schema, form state, API handler, and email template together.
- **Email template**: Edit HTML in `route.ts`; always escape user content.
- **Validation messages**: Keep client and server messages aligned where possible.
