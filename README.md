# Sakura: demo website (3 designs)

Open `index.html`. It opens Design 1. Use the **‹ ›** arrows on the left and right edges (or the keyboard arrow keys) to switch designs. Each design has its own **Home** page and **Menu** page, and the arrows keep you on the same kind of page.

| Design | Based on | Pages |
|---|---|---|
| 1 · Minimal Ink | white, boxed nav, large brush kanji 桜 and a seal (Omakase Yume style) | `design-1/index.html`, `design-1/menu.html` |
| 2 · Night Counter | brush logo, tracked caps nav, full-screen photo with the hours over it (Omakase SF style) | `design-2/index.html`, `design-2/menu.html` |
| 3 · Blossom Circles | centred logo, round callouts over the photo, rose band (Omakase Aruba style) | `design-3/index.html`, `design-3/menu.html` |

Every page ends with "Created by Yvis Hausen".

## Photos and information

`images/` holds Sakura's own photos (from the photos sent by the user, their TripAdvisor and Wanderlog listings), sharpened and colour-graded for the web.
To add more, drop a file into `images/` and point a `data-img="name"` slot at it. Adding `logo.png` replaces the drawn crest.

- Logo colours: pink crest `#ff0f74` with red centre `#c00000`, taken from their printed take-away menu.
- Hours (Wanderlog): Mon 18:00–22:00; Tue–Sat 12:00–14:30 and 18:00–22:00; closed Sunday.
- Rating: 4.8★ from 882 reviews (Wanderlog).
- Menu (`assets/menu-data.js`): transcribed from photos of their dine-in and take-away menus. Those photos may be older than today's prices (the user reports donburi now at £16.90), so check prices with the restaurant before going live. Edit once and all three menus update.
