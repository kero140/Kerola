# KEROLA — Rebuilt from zero

A fresh mobile-first static website for the KEROLA memory journey. It uses plain HTML, CSS, and JavaScript, with no backend, account, build step, or paid service.

## Publish to GitHub Pages
1. Create a **new repository** so the old version stays untouched.
2. Upload the **contents of this folder** directly to the repository root. Make sure `index.html`, `style.css`, `app.js`, `.nojekyll`, and `assets/` are at the root level (not inside an extra nested folder).
3. In the repository, open **Settings → Pages** and publish from the `main` branch and `/ (root)`.
4. Open the published URL in Chrome/Safari and refresh once.

## Passwords
- Main entry: `kerola`
- Hidden moon page: `rolaa`

These are story passwords only, not real security. A public static website cannot keep client-side passwords secret from someone inspecting its source.

## Preserved memories and soundtrack
The photo/video files from the previous project were carried over. The archive uses all 24 available media files: 17 photos and 7 videos (numbered 01–20, 23, 25, 27, 28). Video poster thumbnails are included so the gallery has a real preview for every clip. and the same eight requested songs:
1. أما براوة — نجاة الصغيرة
2. القريب منك بعيد — نجاة الصغيرة
3. على رمش عيونها — وديع الصافي
4. حبيبتي ملاك — عمرو دياب
5. على حبك — عمرو دياب
6. قمرين — عمرو دياب
7. فاضي شوية — حمزة نمرة
8. ما تيجي أعدي عليكي — توو ليت

**Audio files are not included** in the provided assets. If you own or have permission to use the audio, place the files in `assets/audio/` with the following names:
- `01-ama-brawa.mp3`
- `02-el-areeb-menk-baeed.mp3`
- `03-ala-ramsh-oyonha.mp3`
- `04-habibty-malak.mp3`
- `05-ala-hobak.mp3`
- `06-qamarain.mp3`
- `07-fady-shwaya.mp3`
- `08-mateegy-ada3y-aleiky.mp3`

If a local track isn't present, choosing it opens YouTube search results instead of pretending it played locally. The journey can be started without selecting music.

## Interaction and mobile behavior
- No envelope is used. The opening action is a standalone button with its own screen transition.
- The memory grid uses poster thumbnails for videos; opening a video memory shows native controls and does not autoplay. Photos open large in the memory viewer, with previous/next navigation and a position counter.
- All major buttons have separated hit areas; responsive layouts account for small screens and safe-area insets.
- The moon secret page has its own password and preserves the previously agreed incorrect-password messages.
- The hidden room is a placeholder until its custom prank content is supplied.
- Scene progress is saved in the browser's local storage.

## Project files
- `index.html` — page structure and separate screens
- `style.css` — new design and responsive layout
- `app.js` — passwords, soundtrack, scenes, memories, hidden room
- `assets/photos/` — compressed memory photos
- `assets/videos/` — memory clips
- `assets/audio/` — currently empty except for instructions

## Important verification note
The source files were checked for JavaScript syntax, and all 24 original media files plus all 7 generated video posters are present. This environment could not complete an actual browser navigation test, so please verify the newly published copy on a phone before sharing it. This version is separate from and does not overwrite the previous project.
