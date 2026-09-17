# Rudrabha Mukherjee's Design Helper

A single-file offline web app that walks somebody with no design training through describing an app they want built, studying apps they like, and producing a written brief to give to an AI assistant. Six steps. Written for adults with basic English and no technical background, often on inexpensive phones.

**Live address:** https://rudrabha-design-helper.pages.dev

## Installing

You can install the app from the browser so it sits with your other apps. See [docs/INSTALLING.md](docs/INSTALLING.md) for Android, iPhone and iPad, Windows, macOS, and Linux. You can also save the single HTML file and open it from disk with no install and no updates.

## Getting a copy you can trust

The application is one HTML file. Anybody can save their own permanent copy from inside the app; that copy then works offline for good. To confirm a download is unmodified, check it against the published SHA-256 fingerprint. See [docs/VERIFYING-A-COPY.md](docs/VERIFYING-A-COPY.md).

Published fingerprint for version 3.10.0:

```
a9f6d7bd41c3ce68d73fcb90b019daf1ebce4732880c6e4dd08d338095ddfc0e
```

A versioned copy lives at [`releases/Rudrabha-Mukherjee-Design-Helper_v3.10.0.html`](releases/Rudrabha-Mukherjee-Design-Helper_v3.10.0.html). The complete source package for the earlier 3.9.0 release remains at [`docs/COMPLETE-SOURCE-v3.9.0.txt`](docs/COMPLETE-SOURCE-v3.9.0.txt).

## What it does

- Guides you through six steps to describe what you are making and produce a brief for an AI assistant
- One self-contained HTML file — no libraries, frameworks, web fonts or third-party code — so a saved copy keeps working when you have no internet
- Your work is kept in the browser's `localStorage` on your own device; nothing is uploaded; no accounts, cookies, analytics or tracking
- Hosted copies may check their own address for a newer version on launch; you can switch that off in Settings. None of your work is part of that request. A file opened from disk never checks.
- Optional lock: AES-GCM-256 encryption of the saved record, with the key wrapped separately by a PIN (PBKDF2-SHA256, 250,000 iterations) and by the answer to one recovery question (PBKDF2-SHA256, 1,200,000 iterations); answers are never stored. The recovery question is deliberately the weakest way in — somebody who knows you may be able to open your work
- Accessibility: minimum 44 px tap targets, 18 px base text, adjustable text size, light and dark themes, no horizontal scrolling from 320 px to 1920 px, no WCAG AA contrast failures
- British English throughout

## How to run it

Download the HTML file and open it in any modern browser, or visit the live address above. There is no build, no install and no server to run for the file copy.

## Accessibility and browser support

Works in current browsers that support the Web Crypto API (needed only if you use the lock). Tested for reading and tapping from 320 px wide phones up to 1920 px screens. Text size and colour themes are adjustable inside the app.

## How your work is stored

Your work lives in this browser, under the web address you opened the app from. A different address, a different device, or a cleared browser means an empty start. Use the in-app **Move or back up my work** screen to put everything into one file so it can travel. On iPhone and iPad, read the storage notes in [docs/INSTALLING.md](docs/INSTALLING.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Security reports: [SECURITY.md](SECURITY.md).

## Licence and copyright

BSD 3-Clause. Copyright (c) 2026, Rudrabha Mukherjee. See [LICENSE](LICENSE) and [NOTICE](NOTICE). Cryptography notice: [CRYPTOGRAPHY-NOTICE.md](CRYPTOGRAPHY-NOTICE.md). Privacy: [PRIVACY.md](PRIVACY.md). Terms: [TERMS.md](TERMS.md).
