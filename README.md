# KEROLA — Our Little Universe

A mobile-first, cinematic romantic memory website made with plain HTML, CSS and JavaScript. No backend, no paid API, no build step.

## Deploy on GitHub Pages (free)

1. Upload the project files to the repository (`index.html`, `style.css`, `app.js`, `content.js`, `.nojekyll`, `README.md` and the `assets/` folder).
2. Repository **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**, pick branch `main` and folder `/ (root)`, then **Save**.
4. After a minute the site is live at `https://<username>.github.io/<repo>/`.

`.nojekyll` tells GitHub Pages to serve the files as-is. All paths are relative, so the site works from a repo sub-path.

## Preview locally

Serve the folder with any static server (for example `python3 -m http.server`) and open `http://localhost:8000`. Opening `index.html` directly works for the layout, but audio detection needs a server.

## Filling in the personal content: `content.js`

Everything that still needs your own words lives in one file, `content.js`. Empty fields show a quiet placeholder.

- `finalLetter` — the final letter text (blank line between paragraphs).
- `finalMontage` — memory numbers, in order, for the closing montage.
- `hiddenRoom` — items for the hidden room (title, text, optional photo/video from `assets`).
- `clips` — short music clips tied to a line and a scene.

## Media

Photos and videos share one numbering. Numbers **21, 22, 24 and 26** are intentionally excluded.

- `assets/photos/` — WebP: 01 04 07 08 09 10 11 12 13 14 17 18 19 20 23 27 28
- `assets/videos/` — H.264/AAC: 02 03 05 06 15 16 25
- `assets/audio/` — present: 02, 04, 05, 06, 08. **Missing: 01, 03, 07.**

For the missing songs, add files you have the right to use with these exact names and they will play inside the site automatically:

- `assets/audio/01-ama-brawa.mp3`
- `assets/audio/03-ala-ramsh-oyonha.mp3`
- `assets/audio/07-fady-shwaya.mp3`

Until then those tracks show a "search" label and open a search outside the site. Check rights before making the site public.

## Passwords

- Main experience: `kerola`
- Hidden moon room: `rolaa`

These are story interactions, not security. Anyone who can inspect the page source can find them. Don't publish material that needs real access control.

## How it behaves

- Envelope → password → choose a song → star map with six memory places → closing scene.
- The last star unlocks after the other five have been opened.
- Music starts only after the user taps (a song is chosen and "begin" is pressed). The mini-player has play/pause, seek, a track list and volume.
- Progress (visited stars, volume) is stored in `localStorage` on the current browser only.
- Respects `prefers-reduced-motion`; the pause button also stops animation.

## Files

- `index.html` — screens and structure
- `style.css` — styling and motion
- `app.js` — flows, scenes, star map, player, progress
- `content.js` — your letter, montage order, hidden-room items, short clips
- `assets/` — photos, videos and audio (never deleted or replaced by the build)
