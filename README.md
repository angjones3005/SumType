# Save Point

A small personal games blog, built with Next.js (App Router).

## Structure

- `app/page.js` — Home page (hero + post grid)
- `app/about/page.js` — About page
- `app/components/Nav.js` — Sticky top nav with active-link highlighting
- `app/components/Footer.js` — Three-column footer
- `app/components/PostCard.js` — Reusable post card used on Home
- `app/globals.css` — All styling and design tokens (colors, type, spacing)

## Running it locally

You'll need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Making it yours

- **Colors and fonts**: edit the `:root` variables and font imports at the top of `app/globals.css` and `app/layout.js`.
- **Posts**: the post list lives in the `posts` array at the top of `app/page.js`. Add, remove, or edit entries there.
- **Bio and image**: edit the copy directly in `app/about/page.js`. Swap the placeholder SVG for a real `<img>` or photo when ready.
- **New pages**: add a folder under `app/` with a `page.js` file (e.g. `app/reviews/page.js`) and link it from `app/components/Nav.js`.

## Deploying

The fastest path is [Vercel](https://vercel.com): push this folder to a GitHub repo, then import it in Vercel with default settings. Netlify and most other Next.js-compatible hosts work too.
