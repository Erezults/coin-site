# Coin — marketing + legal site

Static GitHub Pages site for Coin (App Store: CoinTrackLover, id6759471186): landing page, plans, FAQ, support, privacy, terms, account deletion, accessibility statement, and Supabase auth-callback pages.
Domain: https://coins.erezults.com (CNAME → erezults.github.io). Pattern: sibling repos xpensy-site / salarix-site.

No frameworks, no build step, no cookies, no trackers, no external fonts or CDNs.

## Layout
| Path | What |
|---|---|
| `index.html` | Landing page |
| `subscriptions.html` · `faq.html` · `support.html` | Plans (Apple auto-renew wording), FAQ, support |
| `privacy.html` · `terms.html` · `delete-account.html` · `accessibility.html` | Legal (Israeli IS 5568 statement) |
| `404.html` · `robots.txt` · `sitemap.xml` | Pages plumbing |
| `assets/site.css` · `assets/site.js` | Shared styles; Hebrew (RTL) default + English toggle (`?lang=en` deep-link) |
| `a11y.js` | Floating accessibility widget + skip link (same as xpensy-site) |
| `auth/` | Email-link handler. `auth/confirm/`, `auth/reset/`, `auth/magic-link/` relay to it |
| `auth/config.js` | **Edit at the Supabase cut-over**: new project URL + public anon key (+ app URL scheme if one is ever registered) |
| `images/` | App icon, OG image, iPhone screenshots (he/en) from the app repo's `appstore-assets/framed/iphone-6.9` |

## Language
Every page is bilingual. Short strings use `data-he` / `data-en`; long blocks use `<div data-lang-block="he|en">`. The app UI itself is Hebrew-only.
