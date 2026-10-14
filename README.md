# KEROLA — Our Little Universe

A mobile-first, cinematic romantic memory website made with plain HTML, CSS and JavaScript. No backend, no paid API, and no build step required.

## Preview locally

Open `index.html` in a modern browser. For best video/audio behavior, serve the folder through a local static server or deploy it to Vercel.

## Deploy to Vercel for free

1. Upload the contents of this folder to a new GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Keep the framework preset as **Other**. No build command is required; set the output directory to `.` if asked.
4. Deploy. This is a static site; no environment variables are required.

## Included memories

Photos and videos are taken from the uploaded `web.rar`. Files numbered **21, 22, 24 and 26** were intentionally excluded as requested. Images were converted to WebP and videos compressed to H.264/AAC for faster loading. Video playback is user-initiated; only metadata is preloaded in memory cards.

## Passwords

- Main experience: `kerola`
- Hidden moon room: `rolaa`

These are story interactions, not real security. Anyone who can inspect public website source can find client-side passwords. Do not publish highly private material if you need actual access control.

## Music setup

The playlist includes the eight requested tracks:
1. أما براوة — نجاة الصغيرة
2. القريب منك بعيد — نجاة الصغيرة
3. على رمش عيونها — وديع الصافي
4. حبيبتي ملاك — عمرو دياب
5. على حبك — عمرو دياب
6. قمرين — عمرو دياب
7. فاضي شوية — حمزة نمرة
8. ما تيجي أعدي عليكي — توو ليت

No song files were present in the uploaded archive. For local playback, add audio files you have permission to use under `assets/audio/` with these names:

- `01-ama-brawa.mp3`
- `02-el-areeb-menk-baeed.mp3`
- `03-ala-ramsh-oyonha.mp3`
- `04-habibty-malak.mp3`
- `05-ala-hobak.mp3`
- `06-qamarain.mp3`
- `07-fady-shwaya.mp3`
- `08-mateegy-ada3y-aleiky.mp3`

The player checks for these local files at startup. If a file exists, the mini-player plays it and supports pause/progress; if it is missing, the track opens a YouTube search instead of pretending a remote link is a local audio file. Use official/authorized audio sources and check rights before making the website public.

## Current content still awaiting your final material

- The full set of additional short song snippets and which memory each belongs to.
- The separate hidden-room / prank content file.
- The final letter text and the preferred order of the final montage.
- Any extra photos/videos not included in `web.rar`.

## Performance notes

- Images are WebP, scaled to a maximum 1800 px long edge.
- Videos are compressed to H.264/AAC with fast-start metadata for streaming playback.
- The sky uses a lightweight canvas starfield and CSS lighting rather than a heavy 3D library.
- The site respects `prefers-reduced-motion`; the pause button also pauses CSS animation.
- Progress is stored in localStorage on the current browser/device. Clearing browser data can erase it; there is no cross-device sync.

## Files

- `index.html` — screens and page structure
- `style.css` — cinematic styling and responsive motion
- `app.js` — password flows, scene navigation, star map, playlist and local progress
- `assets/photos/` — optimized memory images
- `assets/videos/` — optimized memory clips
- `assets/audio/` — add authorized audio files here
