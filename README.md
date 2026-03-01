# Last Second Coupon — Documentation

This is the merchant-facing documentation site for Last Second Coupon, built with [Docusaurus](https://docusaurus.io/).

## Local Development

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

The site will be available at `http://localhost:3000`. Most changes are reflected live without restarting the server.

## Build

```bash
npm run build
```

This generates static files in the `build/` directory that can be deployed to any static hosting service.

## Deployment

The site deploys automatically to GitHub Pages on push to `main` via the GitHub Actions workflow in `.github/workflows/deploy.yml`.

To deploy manually:

```bash
npm run build
npm run serve  # preview the build locally
```

## Project Structure

```
documentation/
├── docs/                          # All documentation pages
│   ├── intro.md                   # Getting Started
│   ├── installation/              # Installation guide
│   │   ├── installation.md
│   │   ├── activation.md
│   │   └── requirements.md
│   ├── admin/                     # Admin feature guides
│   │   ├── overview.md
│   │   ├── popup-manager.md
│   │   ├── popup-editor.md
│   │   ├── coupon-settings.md
│   │   ├── display-conditions.md
│   │   ├── country-targeting.md
│   │   ├── impression-caps.md
│   │   └── analytics.md
│   ├── storefront/                # Storefront feature guides
│   │   ├── overview.md
│   │   ├── exit-intent.md
│   │   ├── countdown-timer.md
│   │   ├── coupon-codes.md
│   │   ├── email-capture.md
│   │   ├── recovery-tab.md
│   │   ├── mobile-support.md
│   │   └── multi-language.md
│   ├── changelog/
│   │   └── changelog.md
│   ├── faq.md
│   └── troubleshooting.md
├── src/                           # React components and CSS
│   ├── css/custom.css
│   └── pages/index.tsx            # Homepage
├── static/img/                    # Images and screenshots
│   ├── admin/                     # Admin screenshot placeholders
│   └── storefront/                # Storefront screenshot placeholders
├── .github/workflows/deploy.yml   # GitHub Pages deployment
├── docusaurus.config.ts           # Site configuration
└── sidebars.ts                    # Sidebar configuration
```

## Adding a New Feature Page

1. Create a new `.md` file in the appropriate directory (`docs/admin/` or `docs/storefront/`)
2. Add frontmatter at the top:
   ```markdown
   ---
   sidebar_position: X
   title: "Feature Name"
   description: "Short description for SEO"
   ---
   ```
3. Write your content following the existing page structure
4. The sidebar updates automatically

## Adding a Changelog Entry

1. Open `docs/changelog/changelog.md`
2. Copy the template block at the bottom of the file
3. Paste it above the previous version entry
4. Fill in the version number, date, and changes

## Adding Screenshots

1. Place admin screenshots in `static/img/admin/`
2. Place storefront screenshots in `static/img/storefront/`
3. Reference them in markdown: `![Alt text](/img/admin/filename.png)`
4. Images are automatically zoomable on click (via `docusaurus-plugin-image-zoom`)
