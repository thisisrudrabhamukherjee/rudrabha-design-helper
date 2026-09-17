# Rudrabha Mukherjee's Design Helper

A single-file offline web app that walks somebody with no design training through describing an app they want built, studying apps they like, and producing a written brief to give to an AI assistant. Six steps. Written for adults with basic English and no technical background, often on inexpensive phones.

**Live address:** https://rudrabha-design-helper.pages.dev

## Getting a copy you can trust

The application is one HTML file. Anybody can save their own permanent copy from inside the app; that copy then works offline for good. To confirm a download is unmodified, check it against the published SHA-256 fingerprint. See [docs/VERIFYING-A-COPY.md](docs/VERIFYING-A-COPY.md).

Published fingerprint for version 3.9.0:

```
81e6282850be35e8bc1a63bad79f14393869e1c4163e0153e428a17b42c179dc
```

A versioned copy lives at [`releases/Rudrabha-Mukherjee-Design-Helper_v3.9.0.html`](releases/Rudrabha-Mukherjee-Design-Helper_v3.9.0.html). The complete source package, including every automated test, is at [`docs/COMPLETE-SOURCE-v3.9.0.txt`](docs/COMPLETE-SOURCE-v3.9.0.txt).

## What it does

- Guides you through six steps to describe what you are making and produce a brief for an AI assistant
- One self-contained HTML file — no libraries, frameworks, web fonts, icon sets or third-party code — so it keeps working when you have no internet, and so you can save the whole app as a single file
- Zero network requests once the page is open
- Your work is kept in the browser's `localStorage` on your own device; nothing is uploaded; no accounts, cookies, analytics or tracking
- Optional lock: AES-GCM-256 encryption of the saved record, with the key wrapped separately by a PIN (PBKDF2-SHA256, 250,000 iterations) and by the answer to one recovery question (PBKDF2-SHA256, 1,200,000 iterations); answers are never stored. The recovery question is deliberately the weakest way in — somebody who knows you may be able to open your work
- Accessibility: minimum 44 px tap targets, 18 px base text, adjustable text size, light and dark themes, no horizontal scrolling from 320 px to 1920 px, no WCAG AA contrast failures
- British English throughout
- 486 automated checks passing

## How to run it

Download the HTML file and open it in any modern browser, or visit the live address above. There is no build, no install and no server to run.

## Accessibility and browser support

Works in current browsers that support the Web Crypto API (needed only if you use the lock). Tested for reading and tapping from 320 px wide phones up to 1920 px screens. Text size and colour themes are adjustable inside the app.

## How your work is stored

Your work lives in this browser, under the web address you opened the app from. A different address, a different device, or a cleared browser means an empty start. Use the in-app **Move or back up my work** screen to put everything into one file so it can travel.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Security reports: [SECURITY.md](SECURITY.md).

## Licence and copyright

BSD 3-Clause. Copyright (c) 2026, Rudrabha Mukherjee. See [LICENSE](LICENSE) and [NOTICE](NOTICE). Cryptography notice: [CRYPTOGRAPHY-NOTICE.md](CRYPTOGRAPHY-NOTICE.md). Privacy: [PRIVACY.md](PRIVACY.md). Terms: [TERMS.md](TERMS.md).
