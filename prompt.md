You are a senior full-stack engineer. Build a production-ready finance LEARNING web app called "Qountex", ready to deploy on Vercel and later wrapped as an Android app (Trusted Web Activity) for Google Play. Follow every requirement below.

STACK
- Next.js (App Router) + TypeScript + Tailwind CSS. No backend database, no user accounts, no login. Progress is saved in localStorage only (wrap every access in try/catch).
- Must build with `npm run build` with zero errors and zero TypeScript or ESLint errors. Run the build and fix everything before finishing.

PURPOSE AND CONTENT (education only)
- Home: short intro, "continue learning" progress card, topic grid.
- Learning topics, each with 4-6 short lessons written in plain English, each with a 3-5 question multiple-choice quiz with explanations:
  1. Budgeting basics (50/30/20)
  2. Saving and emergency funds
  3. Compound interest
  4. Inflation and purchasing power
  5. Loans, interest and debt
  6. Investing basics (diversification, risk vs return, time horizon)
  7. Understanding forex and currency markets (educational: what a currency pair is, pips, leverage risk, why most retail traders lose money; NO signals, NO tips, NO "buy/sell" calls)
  8. Spotting financial scams
- Calculators: savings growth, loan payment, savings goal, compound interest, inflation impact. All math runs client-side, with input validation and clear labels.
- Glossary page with 50+ finance terms, searchable.
- Progress page: lessons completed, quiz scores, streak (localStorage).
- Pages: /about, /privacy, /terms, /contact (use placeholder email support@YOURDOMAIN.com in ONE config file so it is easy to change), /offline.

GOOGLE PLAY COMPLIANCE RULES (strict)
- No trading, no brokerage, no payments, no loans offered, no handling of money, no trade signals, no stock or crypto tips, no binary options, no "guaranteed", "risk-free" or "get rich" wording anywhere.
- Never give personalized advice. Show a visible disclaimer in the footer of every page and on every calculator and quiz result: "For education only. Not financial, investment, tax or legal advice. Examples are illustrative; real results vary and you can lose money."
- No ads, no trackers, no third-party analytics, no cookies. No external scripts. Self-host fonts using next/font.
- Privacy policy must state clearly: no account, no personal data collected, calculator inputs and progress stay on the device, hosting provider may keep standard server logs, not for children under 13, contact email, last-updated date.
- All content must be original. No copied text, images or logos.

PWA REQUIREMENTS
- manifest.webmanifest: name "Qountex", short_name "Qountex", id "/", start_url "/?source=app", scope "/", display "standalone", theme_color and background_color matching the design, categories ["finance","education"], icons 192, 512 and maskable 512.
- Generate the icons yourself (simple original logo, a "Q" mark, as SVG converted to PNG, or generated PNGs) and put them in /public/icons.
- Service worker at /public/sw.js: network-first for pages and API, cache-first for static assets, cache name versioned (qountex-v1), offline fallback to /offline. Register it only in production. Serve sw.js with Cache-Control: no-cache via next.config headers.
- Serve /.well-known/assetlinks.json from /public/.well-known/assetlinks.json with Content-Type application/json (add headers in next.config). Use placeholders: package_name "com.qountex.learn" and sha256 "REPLACE_WITH_SHA256". Add a README note on how to replace them.
- Add proper <meta viewport> with viewport-fit=cover, safe-area padding, theme-color meta, and apple-touch-icon.

DESIGN AND UX
- Mobile-first, feels like a native app: bottom tab bar on mobile (Home, Learn, Tools, Progress), clean cards, large tap targets (44px+), smooth but minimal motion, respects prefers-reduced-motion.
- Distinct, professional palette (deep navy and teal with a gold accent), light and dark mode with prefers-color-scheme.
- Accessible: semantic HTML, labels, visible focus rings, contrast AA, keyboard navigable, aria-live for calculator results.
- Fast: Lighthouse targets of 90+ for Performance, Accessibility, Best Practices, SEO and PWA installable.

SEO AND QUALITY
- Per-page metadata (title, description, Open Graph), sitemap.xml, robots.txt, 404 page, favicon.
- Clean folder structure; lesson and quiz content in typed data files (/data/topics.ts); reusable components; no dead links; no lorem ipsum.

VERCEL AND GITHUB
- Add vercel.json only if needed. Add .gitignore, README.md with: local run steps, how to deploy on Vercel (import GitHub repo, framework Next.js), how pushing to the main branch auto-redeploys, and where to change the contact email and assetlinks values.
- Initialize git and make the first commit.

WHEN DONE
1. Run `npm run build` and `npm run lint`, fix all errors.
2. Print a checklist confirming every requirement above is met.
3. Tell me the exact commands to push to GitHub.
Do not ask me questions unless something is blocking. Make reasonable choices and continue.