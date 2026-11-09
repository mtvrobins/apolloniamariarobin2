# Sakura: demo website (3 designs)

Open `index.html`. It opens Design 1. Use the **‹ ›** arrows on the left and right edges (or the keyboard arrow keys) to switch designs. Each design has its own **Home** page and **Menu** page, and the arrows keep you on the same kind of page.

| Design | Based on | Pages |
|---|---|---|
| 1 · Minimal Ink | white, boxed nav, large brush kanji 桜 and a seal (Omakase Yume style) | `design-1/index.html`, `design-1/menu.html` |
| 2 · Night Counter | brush logo, tracked caps nav, full-screen photo with the hours over it (Omakase SF style) | `design-2/index.html`, `design-2/menu.html` |
| 3 · Blossom Circles | centred logo, round callouts over the photo, rose band (Omakase Aruba style) | `design-3/index.html`, `design-3/menu.html` |

Every page ends with "Created by Yvis Hausen".

## Photos

`images/` holds Sakura's own photos, sharpened and colour-graded for the web:
`hero.jpg` (sashimi and roll platter), `fish.jpg` (fresh fish), `noren.jpg` (dining room) and `storefront.jpg` (the shop front on the Boulevard).
To add more, drop a file into `images/` and point a `data-img="name"` slot at it. Adding `logo.png` replaces the drawn crest logo.

## To confirm with the restaurant
Address, phone and email come from their Facebook page. Still to confirm: opening hours (taken from a directory listing) and the real dishes and prices. The menu in `assets/menu-data.js` is a sample in £; edit it once and all three menus update.
