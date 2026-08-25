# Duevio Website — Project Handover

> **IMPORTANT FOR ANY FUTURE DEVELOPER OR AI ASSISTANT**  
> Read this file before modifying the site. It records the original brief, the design criteria, the work already completed, the technical structure, known limitations and the intended direction for future changes.

Repository: `gas-dev/webduevio`  
Preview: `https://gas-dev.github.io/webduevio/`  
Reference/original test site: `https://test.duevio.com/`

---

## 1. Original brief

The project started from the existing public Duevio test website.

The initial requirement was **not to redesign Duevio from zero**. The existing site had already been created with the involvement of a graphic designer, so the objective was:

- preserve the Duevio identity;
- preserve most of the original visual language, colours and general layout logic;
- correct mistakes and inconsistencies;
- improve the positioning and product copy;
- make the site look more professional, credible and international;
- create a version suitable for a serious **B2B / AML / RegTech / compliance** product;
- make the site suitable for audiences in multiple countries, not visually tied to Italy, Malta or any single local market;
- use **English as the editorial master language**;
- provide multilingual versions;
- keep the existing `test.duevio.com` site untouched until the new version is reviewed and approved.

The current repository is therefore a **review / preview build**, not yet the final contractual production website.

---

## 2. Product positioning adopted in this project

Duevio is positioned as an **AML operating workspace / AML operating system** rather than simply a KYC data collection tool.

The key concept used throughout the website is:

> **AML operations under control, from onboarding to audit.**

The site should communicate that Duevio helps regulated firms and professional practices manage the operational work behind AML compliance, including:

- onboarding;
- KYC information;
- client files;
- ownership and UBO visibility;
- documents;
- reviews;
- deadlines and reminders;
- tasks;
- approvals;
- remediation;
- evidence;
- audit trail;
- audit / inspection preparation.

The intended audience includes, among others:

- law firms;
- CSPs and fiduciaries;
- accountants;
- AML consultants / outsourced MLRO functions;
- EMIs and payment institutions;
- VASPs;
- gaming operators;
- other regulated firms and professional practices.

The website must remain credible for different jurisdictions and business cultures.

---

## 3. Commercial structure used in the website

The site currently presents three paths.

### Essential

- self-service online path;
- current public price used in the site: **€120 / year**;
- one user included;
- positioned as the simple online entry point;
- account creation and payment are conceptually immediate/self-service.

### Professional

- guided multi-user setup;
- intended for growing teams;
- commercial follow-up / implementation discussion required.

### Enterprise

- tailored implementation;
- intended for more complex regulated organisations;
- may include more advanced workflows, implementation, integration planning and custom rollout.

Important: avoid copy that contradicts the above model. The old site contained conflicting wording between immediate self-service activation and internal review before activation. That contradiction was deliberately removed.

---

## 4. Visual direction — very important

The design went through several iterations during this project.

### Initial objective

Stay relatively close to the visual identity of `test.duevio.com`, but improve professionalism and usability.

### Feedback during review

The first rebuild was considered **too white** and visually too empty.

The design was therefore progressively pushed toward a more international B2B / RegTech style with:

- stronger visual hierarchy;
- more contrast;
- less uninterrupted white space;
- alternating section backgrounds;
- light blue-grey surfaces;
- stronger use of Duevio navy;
- restrained teal accents;
- more dashboard-like panels;
- clearer cards;
- more visual depth without becoming flashy;
- stronger enterprise / institutional feeling.

### Current visual philosophy

The desired result is:

- business;
- international;
- trustworthy;
- regulated-sector appropriate;
- modern but not fashionable for its own sake;
- technological but not “crypto-looking”;
- not overly fintech;
- not overly American SaaS;
- not visually tied to one country;
- suitable for Europe, UK, Malta, Germany, France, Spain, the Middle East and other international markets.

The site should feel appropriate in front of:

- a compliance officer;
- an MLRO;
- a law firm;
- a bank or EMI;
- a regulated board;
- a corporate services provider;
- an auditor or professional firm.

### Brand colours retained

The main Duevio palette identified from the original website is approximately:

- Navy: `#22386f`
- Teal: `#3bb8b9`
- Blue: `#1a509f`
- Red accent: `#e52f15`
- Light grey: `#eff1f4`

Do not casually replace the brand palette with unrelated colours.

---

## 5. Current visual implementation

The visual system is layered.

Main files:

- `assets/css/styles.css` — base site styles;
- `assets/css/test-alignment.css` — visual tuning closer to the original Duevio language and later review changes;
- `assets/css/global-business.css` — stronger international / enterprise visual treatment imported by the alignment layer.

Visual changes already introduced include:

- more compact and business-like header;
- restrained border radii;
- reduced “consumer SaaS” feeling;
- lighter shadows;
- stronger card separation;
- alternating light grey / blue-grey surfaces;
- stronger navy sections;
- teal accent lines;
- more structured overview/dashboard cards;
- stronger plan/pricing presentation;
- more structured forms;
- deeper footer treatment;
- subtle hover behaviour on desktop;
- improved responsive behaviour.

### Future visual direction

If the design is pushed further, prefer adding **real product-oriented visuals** rather than simply adding more decorative colour.

The strongest next visual step would be to show controlled representations of the actual product, for example:

- dashboard;
- client file;
- workflow;
- review queue;
- ownership structure;
- audit evidence / activity log.

The intention is to move from “good business website” toward “credible international software product website”.

---

## 6. Languages

English is the editorial master.

The project supports:

- English — `en`
- Italian — `it`
- Maltese — `mt`
- German — `de`
- Spanish — `es`
- French — `fr`
- Russian — `ru`

Language dictionaries live in:

`assets/i18n/`

The English dictionary is the master reference.

### Maltese

Maltese was added later in the project after the other languages.

The Maltese version deliberately retains common professional terms such as:

- AML
- KYC
- UBO
- API
- onboarding
- workflow
- audit

where forcing an artificial translation would make the B2B copy less natural.

Maltese entry point:

`mt/index.html`

### Translation rule

Whenever new content is introduced:

1. write / approve the English master first;
2. create the corresponding translation keys;
3. update every language dictionary;
4. verify no untranslated keys appear in the UI;
5. preserve technical AML terminology where normal for the relevant market.

---

## 7. Language selector and flags

The language selector includes real graphical flag assets rather than relying only on Unicode emoji.

Flag SVGs are stored under:

`assets/img/flags/`

Current flags include:

- UK / English;
- Italy;
- Malta;
- Germany;
- Spain;
- France;
- Russia.

The reason for using SVG assets is consistency across Windows, macOS, browsers and mobile devices. Unicode flags were previously attempted but did not render reliably for every user.

If modifying the language selector, preserve the graphical SVG approach.

---

## 8. Information architecture

Primary navigation:

- Home
- Product
- Industries
- Plans
- Signup
- Demo

Legal / informational pages include:

- Privacy Notice
- Cookie Policy
- AI Transparency
- Terms of Service

The current site uses a lightweight static architecture and client-side route handling within the page.

---

## 9. Important editorial corrections already made

The original test site contained several problems that were deliberately corrected.

### Accidental internal drafting instruction

The old Signup content included an editorial instruction that had accidentally been published, along the lines of removing the “review before activation” positioning.

This was removed.

### Activation contradiction

The previous copy mixed:

- self-service / immediate activation;
- pending review / review before activation.

The new model separates them clearly:

- Essential = self-service online path;
- Professional / Enterprise = guided commercial and implementation path.

### Footer wording

“**All Right reserved.**” was corrected to:

> **All rights reserved.**

### Product positioning

Copy was rewritten to move the product away from a generic KYC-tool presentation and toward a structured AML operations / evidence platform.

---

## 10. Forms and payment status

The current repository is a preview.

Forms are **not yet connected to real production endpoints**.

### Signup

The signup flow visually supports:

- Essential;
- Professional;
- Enterprise.

Essential is intended to continue to a secure payment provider in production.

Professional and Enterprise are intended to create a commercial / implementation follow-up.

### Demo

The demo form currently validates locally but is not yet connected to a production CRM, helpdesk or email endpoint.

### Payments

Visa, Mastercard and PayPal branding has been included in the site.

Payment credentials must **not** be stored or processed directly by this static marketing website. The production site should redirect or securely integrate with the selected payment provider.

---

## 11. GDPR work already included

A Privacy Notice and cookie/privacy controls were added.

The approach intentionally avoids inventing legal details that were not supplied.

The Privacy Notice therefore highlights production items that must still be verified, including:

- exact legal entity acting as controller;
- registered address;
- privacy contact;
- processors / subprocessors;
- retention periods;
- international transfer mechanisms;
- final production security disclosures.

Cookie/privacy preferences are stored locally in the browser.

The current preview does not intentionally enable optional analytics or advertising trackers by default.

If analytics, marketing tools, embedded support tools or other third-party technologies are added later, update both:

- consent logic;
- Cookie Policy.

---

## 12. EU AI Act work already included

An **AI Transparency** section/page was added.

Important principle used in this project:

> Do not claim that every Duevio feature uses AI and do not classify an unverified function as high-risk under the EU AI Act without a feature-level assessment.

The current copy addresses topics such as:

- transparency when users interact with AI-assisted functions;
- AI-generated/manipulated content where relevant;
- human oversight;
- AI literacy;
- GDPR interaction;
- feature-specific assessment.

Any future AI module must be reviewed based on its actual:

- purpose;
- inputs;
- outputs;
- users;
- decision impact;
- deployment context.

Do not turn the AI Transparency page into generic marketing claims.

---

## 13. SEO and localisation

The site includes:

- title tags;
- meta descriptions;
- canonical references;
- `hreflang` structure;
- `robots.txt`;
- `sitemap.xml`.

Maltese has also been added to the localisation structure.

Whenever a new language is added, update:

- locale folder;
- dictionary;
- language selector;
- `hreflang`;
- sitemap;
- metadata.

---

## 14. Repository structure

Main files/directories:

```text
/
├── index.html                  English master site
├── index.template.html         working/master template retained in project
├── 404.html
├── README.md                   this handover document
├── robots.txt
├── sitemap.xml
├── .nojekyll
├── .github/
│   └── workflows/
│       └── pages.yml           GitHub Pages deployment
├── it/index.html
├── mt/index.html
├── de/index.html
├── es/index.html
├── fr/index.html
├── ru/index.html
└── assets/
    ├── css/
    │   ├── styles.css
    │   ├── test-alignment.css
    │   └── global-business.css
    ├── js/
    │   └── app.js
    ├── i18n/
    │   ├── en.json
    │   ├── it.json
    │   ├── mt.json
    │   ├── de.json
    │   ├── es.json
    │   ├── fr.json
    │   └── ru.json
    └── img/
        ├── Duevio brand SVGs
        ├── payment logos
        └── flags/
```

The project deliberately has no heavy frontend framework requirement.

---

## 15. JavaScript responsibilities

`assets/js/app.js` handles the main client-side behaviour, including:

- page routing;
- language loading;
- language selector;
- Maltese language insertion/support;
- form behaviour;
- plan summary behaviour;
- cookie/privacy preferences;
- mobile navigation.

Before replacing this file, verify that all the above functions are preserved.

---

## 16. GitHub Pages preview

The repository is configured for GitHub Pages preview.

Preview URL:

`https://gas-dev.github.io/webduevio/`

Deployment workflow:

`.github/workflows/pages.yml`

GitHub Pages is currently the safe review environment.

### Important

Do **not** treat `test.duevio.com` as the environment to modify casually.

The explicit working rule during this project was:

> keep the existing test/live reference untouched while the GitHub version is reviewed.

Only move to the production domain when the new site is approved and the deployment plan is agreed.

---

## 17. Cloudflare deployment notes

Cloudflare Pages was also considered as the eventual deployment method.

Recommended configuration if/when Cloudflare is used:

- Framework preset: **None**
- Production branch: `main`
- Build command: `exit 0`
- Build output directory: `.`

After deployment, attach the intended custom domain through Cloudflare Pages custom-domain configuration rather than only creating an unrelated DNS record.

The repository also contains `_headers` for Cloudflare-oriented security headers.

Note: GitHub Pages ignores `_headers`.

---

## 18. Security / headers

The Cloudflare-oriented `_headers` file contains controls such as:

- Content Security Policy;
- `X-Content-Type-Options`;
- `Referrer-Policy`;
- `X-Frame-Options`;
- `Permissions-Policy`;
- caching directives.

If new third-party services are introduced, the CSP may need to be updated.

Do not weaken the CSP simply to make an integration work without first identifying exactly which domains and resource types are required.

---

## 19. Production items still to complete

Before this becomes the final contractual production website, verify / complete at least the following:

1. Confirm the exact legal entity operating Duevio.
2. Insert registered address and official contact details.
3. Confirm privacy contact / DPO contact where applicable.
4. Finalise contracting entity in Terms of Service.
5. Confirm governing law and jurisdiction.
6. Confirm cancellation and refund rules.
7. Confirm support commitments and service levels.
8. Finalise liability provisions with legal review.
9. Connect signup to the real account-creation system.
10. Connect Essential to the real payment provider.
11. Connect demo / Professional / Enterprise forms to the actual CRM, email or ticketing process.
12. Verify final cookies/local storage after all integrations are selected.
13. Confirm DPA and processor/subprocessor structure.
14. Confirm retention periods.
15. Confirm production security disclosures.
16. Review AI Transparency against the actual AI modules enabled at launch.
17. Validate all language translations with native / professional review where commercially important.
18. Replace or improve placeholder/product representation with authentic Duevio UI visuals when available.
19. Final cross-browser/mobile QA.
20. Final SEO/canonical/hreflang validation on the real production domain.

---

## 20. How a new developer should work

Recommended process:

1. Create a free GitHub account.
2. Ask the repository owner to add the GitHub username as a collaborator.
3. Accept the repository invitation.
4. Clone or open `gas-dev/webduevio`.
5. Prefer working on a dedicated branch rather than modifying `main` for significant changes.
6. Use clear commit messages.
7. Review changes in GitHub Pages preview.
8. Open a Pull Request for important changes.
9. Do not modify the production/reference site until approval.
10. Preserve this README and update it whenever architecture or major decisions change.

---

## 21. Instructions for another ChatGPT / AI coding assistant

If this repository is opened from another ChatGPT account, the AI should be told to read `README.md` first.

Suggested instruction:

> “Read the README in `gas-dev/webduevio` before making changes. Continue the project using the existing Duevio design criteria, multilingual structure and B2B/RegTech positioning. Do not redesign the site from scratch and do not modify the live/reference site unless explicitly instructed.”

### AI operating principles for this repository

Before changing the code:

- inspect the current repository state;
- do not rely only on old conversational context;
- preserve existing working functionality;
- prefer incremental changes over complete rewrites;
- preserve Duevio branding;
- keep English as editorial master;
- propagate content changes to all languages;
- preserve multilingual SEO;
- preserve privacy/cookie logic;
- avoid inventing legal facts;
- avoid inventing product capabilities;
- do not claim integrations or AI functions that have not been confirmed;
- keep the design international and business-oriented;
- use the GitHub Pages preview for review;
- make changes reversible through clean commits.

---

## 22. What NOT to do

Do not:

- redesign the site from zero just because a different style is fashionable;
- replace the brand palette without a deliberate decision;
- make the website overly colourful or consumer-oriented;
- turn it into a crypto-style or speculative fintech site;
- reintroduce large areas of empty white space without visual hierarchy;
- use excessive gradients, animations or glassmorphism;
- create fake product screenshots;
- invent customer logos, certifications or regulatory approvals;
- invent legal entity details;
- invent payment or CRM integrations;
- claim AI Act compliance for features that have not been assessed;
- treat the repository preview as a completed production legal site;
- edit only English and forget the other languages;
- break relative asset paths for language folders;
- use Unicode emoji flags as the primary graphical flag implementation;
- modify `test.duevio.com` unless explicitly authorised.

---

## 23. Current design judgement

The project has already moved through three broad visual stages:

1. **Initial rebuild** — clean and professional, but too white.
2. **Closer to original test site** — more sober, technical and compact.
3. **International business refinement** — more contrast, layered surfaces, stronger navy/teal, more enterprise presence.

Future work should continue from stage 3 rather than reverting to stage 1.

The core user preference expressed during review was essentially:

> Make it more visually engaging, but always appropriate for the business / regulated sector and suitable for many countries.

This is the most important visual criterion to preserve.

---

## 24. Local preview

From the repository root:

```bash
python3 -m http.server 8080
```

Then open:

`http://localhost:8080/`

Because the language dictionaries are fetched dynamically, use an HTTP server rather than simply opening the HTML file directly from disk.

---

## 25. Final handover note

This repository should be treated as the current working source for the new Duevio website.

A future maintainer should be able to continue the work without access to the original ChatGPT conversation by using this README as the project memory.

When an important decision is made in the future — especially concerning:

- branding;
- architecture;
- product positioning;
- pricing;
- legal copy;
- languages;
- integrations;
- deployment;

update this README so that the repository remains self-explanatory.

---

**Last major project handover update:** 25 August 2026
