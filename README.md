# Chirwan Inc — Auto Mechanic Website

Bilingual (FR/EN) static marketing site for **Chirwan Inc**, built with **Vite + React 18 + TypeScript + React Router v6**. 100% static — deploys to any static host with zero configuration.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is generated in `/dist`.

## Deployment

### Vercel
1. Connect the GitHub repo on [vercel.com](https://vercel.com)
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Done — `vercel.json` handles SPA rewrites.

### Netlify
1. Connect the GitHub repo on [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. `netlify.toml` provides the SPA redirect rule.

### Cloudflare Pages
- Framework preset: **Vite**
- Build command: `npm run build`, output: `dist`

## Editing content

ALL editable content lives in three files — no component edits required:

- **`src/content/config.ts`** — company info (name, phone, WhatsApp, address, hours), services, pricing, FAQ, gallery, social links, hero image.
- **`src/content/fr.ts`** — every French string.
- **`src/content/en.ts`** — every English string (same keys as `fr.ts`).

Change `siteConfig.company.whatsapp` and every booking/contact CTA updates automatically.

## Tech

- Vite 5 · React 18 · TypeScript 5
- React Router v6 (`createBrowserRouter`)
- Tailwind CSS v3 + shadcn/ui
- React Hook Form + Zod
- Lucide icons · Poppins font

No backend. No SSR. Pure static SPA.
