# Contributing

Thank you for considering a contribution to Rudrabha Mukherjee's Design Helper.

## How this project is built

The application is a **single HTML file** with no build step, no package manager and no framework. It must stay that way.

- Do not add a bundler, `package.json`, CDN links, web fonts, icon sets, analytics or any other external resource.
- Every change must keep the app working offline after load. A hosted copy may check its own origin for a newer version unless the reader switches that off; a file opened from disk must make no network request of its own.
- The automated test suite in `docs/COMPLETE-SOURCE-v3.9.0.txt` must pass after any change to the application.
- Write in **British English**: organise, recognise, colour, behaviour, licence (noun), license (verb).
- Keep the reading level plain: short sentences, common words, written for readers with basic English.
- Keep the accessibility floor: minimum 44 px tap targets, 18 px base text, at least 4.5:1 contrast, and no horizontal scrolling from 320 px to 1920 px.
- Any pull request that changes the application must state which checks were run.

## These two applications share a lineage

Rudrabha Mukherjee's Design Helper and Rudrabha Mukherjee's Build Checklist are separate programmes in separate repositories, but the second was built from the first's design system. They still share their stylesheet structure, their dialog handling, their storage and import code, their lock, and much of their wording.

Because of that, a defect found in one is very often present in the other. Four faults fixed before the first public release existed in both applications at once: a tick that could not be seen against the circle behind it, a dialog that let the keyboard escape it, an opened file that could inject its own markup through a name it chose, and an undo button that could not undo what people actually did.

**So: whenever you fix a defect here, check the sibling application for the same fault before closing the issue.** Say in the pull request whether you checked, and what you found. If the fault is present there too, open an issue on that repository and link the two together.

Sibling repository: [Rudrabha Mukherjee's Build Checklist](https://github.com/thisisrudrabhamukherjee/rudrabha-build-checklist)

## Security

Do not open a public issue for a security fault. See [SECURITY.md](SECURITY.md).
