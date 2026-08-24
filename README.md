# Duevio website

Static multilingual marketing website prepared from the visual language and information architecture of `https://test.duevio.com/`.

## Editorial model

English is the master language. Localised versions are available in Italian, German, Spanish, French and Russian. Translation dictionaries live in `assets/i18n/` and use the same keys across every language.

## Structure

- `index.html`: English master site
- `it/`, `de/`, `es/`, `fr/`, `ru/`: language entry points
- `assets/css/styles.css`: visual system based on the existing Duevio brand colours
- `assets/js/app.js`: routing, localisation, forms and privacy preferences
- `assets/i18n/`: language dictionaries
- `assets/img/`: Duevio and payment-method artwork
- `_headers`: Cloudflare Pages security headers
- `robots.txt` and `sitemap.xml`: crawler and localisation discovery

The site has no framework or external JavaScript dependency.

## Local preview

From the repository root:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## Cloudflare Pages

Cloudflare Pages can deploy this repository directly with Git integration. Use `main` as the production branch. No framework is required. The repository root is the publish directory and no application build is required.

Recommended setup:

- Framework preset: None
- Production branch: `main`
- Build command: `exit 0`
- Build output directory: `.`

After the Pages project is created, associate the intended custom domain from Pages > Custom domains rather than creating only a DNS record manually.

## Production items that must be completed

The review build deliberately does not invent legal or operational facts that are not verified. Before this site becomes the production contractual website, complete these items:

1. Insert the verified legal entity operating Duevio, registered address and privacy contact in the Privacy Notice and Terms.
2. Confirm the contracting entity, governing law, jurisdiction, cancellation and refund rules, support commitments and liability terms.
3. Connect the signup form to the real account-creation and checkout flow. Payment credentials should be collected by the selected payment provider, not by this marketing site.
4. Connect the demo form to the real CRM, helpdesk or mail endpoint.
5. Verify the final production cookie and local-storage inventory after analytics, support widgets, checkout and any embeds are selected.
6. Maintain the AI Transparency notice against the actual AI-assisted features that are enabled in production. Do not classify a Duevio function under the EU AI Act until its real purpose, users, inputs, outputs and decision impact have been assessed.
7. Confirm the final DPA, subprocessor list, retention rules and security disclosures for the SaaS service.

## Editorial corrections already made

The previous test site contained an internal drafting instruction in the Signup content and conflicting language about immediate self-service versus internal review. The new master removes that drafting text and separates Essential self-service from the guided Professional and Enterprise paths.

The footer wording has also been corrected to “All rights reserved.”
