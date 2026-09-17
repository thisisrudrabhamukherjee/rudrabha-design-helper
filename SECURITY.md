# Security policy

## How to report a vulnerability

Please use [GitHub private vulnerability reporting](https://github.com/thisisrudrabhamukherjee/rudrabha-design-helper/security/advisories/new) for this repository.

Do **not** open a public issue first.

You may also write to thisisrudrabha@gmail.com. That address is the designated intake channel in the [communication protocol](https://docs.google.com/document/d/e/2PACX-1vRvzo16QSnWk8T4OTaQ2RI2c2FJvWJAc6yA48r51bHQAdgpX40P1_6wrcSjbExCYYDMwlqf3Lrff5bI/pub) (Version 1.2, 16 August 2026). Please follow that protocol when you write.

## What a useful report contains

- The affected version or commit
- What an attacker can do
- Steps to reproduce

## What to expect

This software is maintained by one person. Please allow a few days for an acknowledgement. There is no bug bounty. Reporters are credited unless they decline.

## Supported versions

Fixes ship to the latest release only.

## In scope

At minimum:

- Confidentiality of locked work
- Correctness of key handling
- Any way to read locked work without the PIN or the recovery answer
- Any script injection from an opened file
- Anything causing Rudrabha Mukherjee's Design Helper to make a network request after it has loaded, other than the disclosed version check to its own origin
- Anything that writes readable work to disk when the lock is on
- Anything that lets the service worker serve content from another origin
- Anything that poisons the cache so a reader is served something other than the published file
- Anything that keeps a reader pinned on an old version after they have accepted an update

## Out of scope — documented design properties, not vulnerabilities

- **The recovery question is deliberately the weakest way in.** One question, answered by one person. Somebody who knows the reader well, or who can find the answer, may be able to open their work exactly as if they knew the PIN. The app says so on screen before the lock is switched on. This is a chosen trade-off for people who would lose a printed recovery code, not a defect.
- A PIN or answer that the reader chose to be guessable
- Physical access to an unlocked device
- Work that the reader exported to a file while the lock was off — that file is deliberately readable, and the app warns about it
- Anything requiring the reader to paste their own work into a third-party AI assistant
- Browser or operating system vulnerabilities
- The update check itself revealing the reader's internet address to the host, which is inherent to loading any web page and is disclosed in the privacy notice

This policy does not claim that the application is free of vulnerabilities, unbreakable, fully secure, or audited.
