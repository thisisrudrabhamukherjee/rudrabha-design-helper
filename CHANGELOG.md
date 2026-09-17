# Changelog

All notable changes to Rudrabha Mukherjee's Design Helper are documented here.
Taken from the application's own "What has changed" screen.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project follows [Semantic Versioning](https://semver.org/).

## [3.10.3] — 17 September 2026

### Fixed

- Installing the app did not actually work in the last version. The part that keeps a copy on your device could not save its files, so the app could not be installed properly, could not open without the internet, and could not tell you when a new version was ready. It works now.

### Changed

- New icons, drawn to stay clear at the small size a phone actually shows them.
- The Updates screen now tells you plainly whether you have the newest version, when it last checked, and offers the new version when there is one.

## [3.10.2] — 17 September 2026

### Fixed

- When the lock was on, the foot of the screen still showed an old version number. It now shows the version you are using.

## [3.10.1] — 17 September 2026

### Fixed

- The Updates screen in Settings opened and then snapped back to Home. It now stays open.

## [3.10.0] — 17 September 2026

### Added

- You can now install this app on your phone, tablet or computer, so it sits with your other apps and opens without a browser window. Open it in your browser and choose to install it; on an iPhone or iPad, use Share, then Add to Home Screen.
- Once installed, it opens and works with no internet at all.
- When a newer version exists, the app tells you and asks whether to take it. Your work is never affected, and nothing changes until you press the button.
- A new setting to check for a new version yourself, and to switch off the automatic check altogether.

### Changed

- The app used to make no connection to the internet at all once it was open. It now asks the address it came from whether a newer version exists, unless you switch that off in Settings. Nothing you have written is ever part of that request. The privacy notice explains what is and is not sent.
- The security rules for the hosted page now allow its own icons, its install file and its update worker. The app still never opens a network connection of its own to send your work.

## [3.9.0] — 16 September 2026

### Added

- New screen: Move or back up my work. It puts everything into one file so your work can travel to another web address, another phone, or a fresh browser.
- If this app is ever published at a new address, every screen on the old one carries a notice and a button that takes your work across.
- If you open the app with nothing saved, it now offers to bring your work in from a file first.
- You can save the app itself, so your copy keeps working whatever happens to any website.

### Changed

- If your lock is on, your work stays scrambled the whole way across, and you open it with the same PIN at the other end. Nothing readable is written to disk.

## [3.8.0] — 16 September 2026

### Removed

- The Undo button. It could not undo typing, which is most of what you do here, so it told you there was nothing to undo far more often than it helped. Every step that deletes something still asks you first, and your old copies are still kept.

### Changed

- Messages at the foot of the screen now clear themselves after a few seconds, and no longer cover the buttons underneath.
- The name at the top is left blank until you name your app, instead of reading "no name yet".
- The picture on the Lock screen showed a code on paper, which the lock no longer uses. It now shows your question.

## [3.7.0] — 16 September 2026

### Changed

- The way back in, if you forget your PIN, is now a question you choose and answer yourself, instead of a code written on paper. Nothing has to be kept on paper any more.
- The lock screen now says plainly that somebody who knows you may be able to answer your question and open your work, and asks you to write your own question if you can.
- Your answer is checked more slowly than a PIN on purpose, which makes guessing it dearer.
- Work locked by an earlier version still opens with its printed code, and you can swap that code for a question at any time.

## [3.6.0] — 16 September 2026

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

## [3.5.0] — 16 September 2026

### Fixed

- Corrected migration of publisher and licence metadata from earlier versions.

## [3.4.0] — 16 September 2026

### Added

- Added the full communication notice, which can be read again or saved as a file at any time.

## [3.3.0] — 16 September 2026

### Added

- Added consistent creator attribution and complete release information.

## [3.2.0] — 16 September 2026

### Added

- Added the Contact and Notices pages, covering how to write in and what the app does and does not promise.
- Added a new Acceptable use document, saved and shared alongside the others.
- Added links to Privacy, Licence, Notices and Contact at the bottom of every screen.

## [3.1.0] — 16 September 2026

### Fixed

- Fixed an Undo button that could appear when there was nothing to undo.

### Changed

- Settings became a simple menu, with long pages split into shorter ones.
- Screen settings split into colours, text size and brightness.

## [3.0.0] — 16 September 2026

### Added

- Added a new step for your own brand: your colours, letters and feel, carried into every later step.
- Added a lock that scrambles your work on this device, with a second way in if the PIN is forgotten.
- Added four ways to view the screen and a brightness control.
- Added the Licence and Privacy pages, with the full documents.

### Changed

- Simpler wording throughout, in British English.

## [2.0.0] — 16 September 2026

### Added

- Added pictures to the How to use screen, drawn by the app itself.
- Added share buttons to every step, and the ability to pass the app on as a single file.
- Added delete buttons where they were needed, each one asking first.
- Message wording can now be changed, or replaced from a file.

## [1.0.0] — 16 September 2026

### Added

- First release: the steps, the words to copy, old copies kept, and saving to a file.
