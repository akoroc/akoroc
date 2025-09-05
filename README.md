# Akoroc — Next.js (App Router) + Tailwind

Full‑spectrum digital agency site with:
- App Router, TypeScript, Tailwind
- Framer Motion, lucide-react
- Services pages (`/services`, `/services/[slug]`)
- Blog (Markdown in `content/posts`)
- Contact form (Netlify Forms + honeypot) at `/contact`
- Sitemap & robots
- Netlify config

## Quick start

```bash
npm i
npm run dev
# open http://localhost:3000
```

## Deploy on Netlify

- Connect repo
- Build command: `npm run build`
- Publish directory: handled by `@netlify/plugin-nextjs`
- The plugin is already added in `netlify.toml`

## Customize

- `lib/services.ts` — edit services content
- `content/posts/` — add blog posts (frontmatter title/date/excerpt)
- Update social links in `components/nav.tsx`
- Replace `/public/og.png` and `favicon.ico`
