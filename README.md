# Sakura: demo website (3 designs)

Open `index.html`. It opens Design 1. Use the **‹ ›** arrows on the left and right edges (or the keyboard arrow keys) to switch designs. Each design has its own **Home** page and **Menu** page, and the arrows keep you on the same kind of page.

| Design | Based on | Pages |
|---|---|---|
| 1 · Minimal Ink | white, boxed nav, large brush kanji 桜 and a seal (Omakase Yume style) | `design-1/index.html`, `design-1/menu.html` |
| 2 · Night Counter | brush logo, tracked caps nav, full-screen photo with the hours over it (Omakase SF style) | `design-2/index.html`, `design-2/menu.html` |
| 3 · Blossom Circles | centred logo, round callouts over the photo, rose band (Omakase Aruba style) | `design-3/index.html`, `design-3/menu.html` |

Every page ends with "Created by Yvis Hausen".

## Adding Sakura's photos (only their photos are used)

Save the photos from Sakura's Facebook page into the `images/` folder with these names. `.jpg`, `.jpeg`, `.png` and `.webp` all work. Each one appears in all three designs automatically.

| File | Best photo to use |
|---|---|
| `logo.png` | their logo (transparent PNG if possible). Replaces the placeholder 桜 / blossom logo everywhere |
| `hero.jpg` | the single best dish shot, landscape |
| `sushi-1.jpg` … `sushi-4.jpg` | close-ups of nigiri, rolls and platters |
| `interior.jpg` | the counter or dining room |
| `chef.jpg` | the chef at work |

Until a photo is added, its slot shows a dark placeholder with the file name.

**Making the photos look Michelin-quality.** Facebook compresses images, so:
1. Download the largest version (open the photo, then "Download" from the ⋯ menu).
2. Upscale ×2 to ×4 with an AI upscaler (Photoshop Super Resolution, Topaz, Higgsfield upscale or similar).
3. Crop tight on the food, on dark backgrounds where possible.

The site already applies light grading to the photos (contrast, saturation, vignette).

## To confirm with the restaurant
Address, phone, opening hours, the dishes and prices (`assets/menu-data.js`: edit once and all three menus update), and their Instagram and Facebook links.
