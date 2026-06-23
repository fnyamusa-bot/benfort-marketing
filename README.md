# Benfort Marketing — Website

Astro + Tailwind CSS static marketing site for [benfort.net](https://www.benfort.net).

## Quick start

```bash
npm install
npm run dev        # → http://localhost:4321
npm run build      # → static output in dist/
npm run preview    # preview the production build
```

## Before you go live — checklist

### 1. Logo files
Place the following in `/public/`:
- `logo.png` — colour logo (blue wordmark, green dot), used on light backgrounds
- `logo-reversed.png` — reversed logo (white wordmark, green dot), used on dark/nav backgrounds

The nav currently renders a text-based logo fallback that matches your brand identity. Dropping in the PNG files will swap it automatically.

### 2. WhatsApp number
Pre-configured to `+263777780335`. To change it, edit `src/content/site.ts`:
```ts
whatsapp:    '+263 77 XXX XXXX',
whatsappUrl: 'https://wa.me/263XXXXXXXXX',
```

### 3. Formspree contact form
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy the endpoint (looks like `https://formspree.io/f/abcdefgh`)
3. In `src/components/Contact.astro`, replace:
```ts
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT';
```

### 4. All editable copy
Every text string — headline, tagline, service descriptions, steps — lives in one file:
```
src/content/site.ts
```
Edit there; the layout components import and render it automatically.

## Deploy

The site builds to pure static HTML/CSS/JS. Works with any static host:
- **Vercel**: `vercel --prod` or connect the GitHub repo
- **Netlify**: drag `dist/` or connect repo, build command `npm run build`
- **Cloudflare Pages**: connect repo, build command `npm run build`, output `dist`

## Brand colours

| Token        | Hex       | Usage                          |
|--------------|-----------|--------------------------------|
| brand-blue   | `#01308A` | Primary, headings, buttons     |
| brand-green  | `#10AB67` | Accent, dot motif, hover       |
| ink          | `#1A2230` | Body text                      |
| brand-grey   | `#5A6472` | Supporting text                |
| light        | `#F2F5FA` | Section backgrounds, cards     |
| dark-navy    | `#081634` | Hero, CTA band, footer         |
| dark2        | `#0E2350` | Decorative shapes in dark bands|
| ice          | `#C9D6F0` | Muted text on dark backgrounds |
