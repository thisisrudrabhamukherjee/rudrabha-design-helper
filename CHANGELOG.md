# Changelog

All notable changes to Rudrabha Mukherjee's Design Helper are recorded here.
The release history is taken from the application's own "What has changed" screen.

Versions follow [Semantic Versioning](https://semver.org/).
This file uses [Keep a Changelog](https://keepachangelog.com/) section headings.

## [3.9.0] — 2026-09-16

### Added

- New screen: Move or back up my work. It puts everything into one file so your work can travel to another web address, another phone, or a fresh browser.
- If this app is ever published at a new address, every screen on the old one carries a notice and a button that takes your work across.
- If you open the app with nothing saved, it now offers to bring your work in from a file first.
- You can save the app itself, so your copy keeps working whatever happens to any website.

### Changed

- If your lock is on, your work stays scrambled the whole way across, and you open it with the same PIN at the other end. Nothing readable is written to disk.

## [3.8.0] — 2026-09-16

### Removed

- The Undo button. It could not undo typing, which is most of what you do here, so it told you there was nothing to undo far more often than it helped. Every step that deletes something still asks you first, and your old copies are still kept.

### Changed

- Messages at the foot of the screen now clear themselves after a few seconds, and no longer cover the buttons underneath.
- The name at the top is left blank until you name your app, instead of reading "no name yet".
- The picture on the Lock screen showed a code on paper, which the lock no longer uses. It now shows your question.

## [3.7.0] — 2026-09-16

### Changed

- The way back in, if you forget your PIN, is now a question you choose and answer yourself, instead of a code written on paper. Nothing has to be kept on paper any more.
- The lock screen now says plainly that somebody who knows you may be able to answer your question and open your work, and asks you to write your own question if you can.
- Your answer is checked more slowly than a PIN on purpose, which makes guessing it dearer.
- Work locked by an earlier version still opens with its printed code, and you can swap that code for a question at any time.

## [3.6.0] — 2026-09-16

### Changed

- Refined creator attribution, simplified contact information and improved the public release history.
- Plans and notes you save from the app now carry one short credit line instead of a block of licence wording.
- The licence pages now separate what the licence requires for copies of the app from what you may do with your own plans and notes.
- The contact address is shown directly, with short guidance. The full communication notice is still there to read or save, but you no longer have to accept it first.
- The PIN is now six numbers or more, and the lock screen describes what it does and does not protect.

### Fixed

- A work file opened from somebody else could carry hidden instructions of its own. Files are now cleaned before anything in them is used.
- A work file opened from somebody else could quietly replace the wording the app writes for the AI. Only wording the app recognises is taken from a file now, and you are told when a file carried any.
- On the Daylight and Strong contrast screens, the tick on the step you were standing on could not be seen against the circle behind it.
- With a keyboard, the Tab key could leave an open question box and Escape then stopped working. The keyboard now stays inside, and returns to the button that opened it.

## [3.5.0] — 2026-09-16

### Fixed

- Corrected migration of publisher and licence metadata from earlier versions.

## [3.4.0] — 2026-09-16

### Added

- The full communication notice, which can be read again or saved as a file at any time.

## [3.3.0] — 2026-09-16

### Added

- Consistent creator attribution and complete release information.

## [3.2.0] — 2026-09-16

### Added

- The Contact and Notices pages, covering how to write in and what the app does and does not promise.
- A new Acceptable use document, saved and shared alongside the others.
- Links to Privacy, Licence, Notices and Contact at the bottom of every screen.

## [3.1.0] — 2026-09-16

### Fixed

- An Undo button that could appear when there was nothing to undo.

### Changed

- Settings became a simple menu, with long pages split into shorter ones.
- Screen settings split into colours, text size and brightness.

## [3.0.0] — 2026-09-16

### Added

- A new step for your own brand: your colours, letters and feel, carried into every later step.
- A lock that scrambles your work on this device, with a second way in if the PIN is forgotten.
- Four ways to view the screen and a brightness control.
- The Licence and Privacy pages, with the full documents.

### Changed

- Simpler wording throughout, in British English.

## [2.0.0] — 2026-09-16

### Added

- Pictures to the How to use screen, drawn by the app itself.
- Share buttons to every step, and the ability to pass the app on as a single file.
- Delete buttons where they were needed, each one asking first.

### Changed

- Message wording can now be changed, or replaced from a file.

## [1.0.0] — 2026-09-16

### Added

- First release: the steps, the words to copy, old copies kept, and saving to a file.
