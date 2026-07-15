# Sigmology website

Static bilingual company website for Sigmology GmbH, built with Astro and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Build and verify the production output:

```bash
npm run build
npm run preview
```

## Languages and routes

- English is the default language at `/`.
- Swiss German is available under `/de/`.
- Each page links directly to its translated counterpart.

The website does not use analytics, cookies, forms, embedded media or other runtime services.

## GitHub Pages

Pushes to `main` deploy automatically through `.github/workflows/deploy.yml`.

The initial preview uses `https://theseventhwave.github.io/sigmology-web/`. Before moving `sigmology.ch`, update the workflow to use:

```yaml
SITE_URL: https://sigmology.ch
BASE_PATH: /
```

Then configure `sigmology.ch` as the custom domain in the repository's Pages settings and update the domain's DNS records. Enforce HTTPS once GitHub has issued the certificate.
