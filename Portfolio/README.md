# Editorial Engineer Portfolio

A production-oriented Next.js App Router portfolio using TypeScript, Tailwind CSS, and Framer Motion.

## Replace these placeholders

Search the codebase for `[` to find editable personal/project placeholders such as `[MY NAME]`, `[CITY, COUNTRY]`, `[EMAIL]`, `[GITHUB]`, `[LINKEDIN]`, and project details.

## Contact form

The form validates on both client and server. To forward submissions to a real service, set `CONTACT_WEBHOOK_URL` to a webhook endpoint that accepts JSON. Without it, the route returns success in demo mode but does not deliver email.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm run start
```

For Vercel, import the repository, set `NEXT_PUBLIC_SITE_URL`, optionally set `CONTACT_WEBHOOK_URL`, and deploy.
