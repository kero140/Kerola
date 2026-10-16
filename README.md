# KEROLA — Fresh Rebuild

A new mobile-first rebuild of the KEROLA memory website. This is a separate project; it does not overwrite the earlier versions.

## Included memory assets

All supplied numbered media assets that were present in the project are used once in the memory journal. The explicitly excluded IDs **21, 22, 24, and 26** are not included.

- Photos: `01.webp`, `04.webp`, `07.webp`, `08.webp`, `09.webp`, `10.webp`, `11.webp`, `12.webp`, `13.webp`, `14.webp`, `17.webp`, `18.webp`, `19.webp`, `20.webp`, `23.webp`, `27.webp`, `28.webp` (17 photos)
- Videos: `02.mp4`, `03.mp4`, `05.mp4`, `06.mp4`, `15.mp4`, `16.mp4`, `25.mp4` (7 videos)
- Video posters generated from the videos are in `assets/posters/` to make the album previews quick to load.
- Total original memories: **24 media files** (17 photos + 7 videos), corresponding to the 28-number list minus 21, 22, 24, and 26.

## Features

- No envelope: a simple editorial welcome screen, then password `kerola`.
- Wrong-password messages retain their sequence. The fourth message is exactly `الصبر ليه حدود هاااااا` (without `قول كده كتير`).
- Eight-song selection screen. Selecting a song opens YouTube search results because audio files were not included with the supplied assets.
- Responsive memory journal with photo/video filters, dedicated image/video viewer, next/previous navigation, and explicit video play controls.
- Hidden moon password `rolaa`, the existing wrong-password sequence, reveal message, and hidden-room placeholder.
- The final keepsake photo `28.webp` is displayed in the closing letter.
- Static HTML/CSS/JS; no backend or login service.

## Publish on GitHub Pages

Upload the **contents of this folder** to the root of a new repository so `index.html` is at the repository root. Enable GitHub Pages from the main branch/root. The project is self-contained apart from the Google Fonts import; system fallbacks are included if fonts do not load.

## Note on audio

The eight tracks are listed by title and artist, but the actual audio files were not part of the available project files. To enable direct playback, place legally obtained audio files in `assets/audio/` and wire them to the player.
