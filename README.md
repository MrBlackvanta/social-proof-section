# Social proof section

My solution to the [Social proof section](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://social-proof-section.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/social-proof-section

## Built with

- Next.js 16, App Router, static export
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

### One breakpoint, and it is the width the layout actually needs

The design gives two frames, 375 and 1440. The desktop one is a 1110px shell — a 445px copy
column, a 125px gutter, then a 540px column holding the rating pills, with the three cards on
that same 1110px track underneath. A layout like that is only honest at its own width: squeeze
it and every measured number becomes an approximation of itself.

So there is one breakpoint, `--breakpoint-shell: 72.375rem` = **1158px**, which is 1110px of
content plus the page's 24px gutters, and the two-column grid exists only above it. Below, the
same markup stacks and caps at 512px. Nothing lives in between to get wrong: from 1158px up
`grid-template-columns` resolves to literally `445px 540px` and every element sits on the
coordinate the design file gives it.

`<main>` is `box-content`, so `max-w-shell` means 1110px of _content_ rather than 1110px
including its own padding.

### The staggered columns are alignment, not offsets

Desktop puts the three rating pills at x = 735, 783 and 830 — a 47.5px step — and the three
cards at y = 434, 450 and 466 — a 16px step. Both could have been three hard-coded numbers.
Neither is.

The pills are a flex column in the 540px track: pill 1 takes the default start, pill 2 is
`self-center`, pill 3 is `self-end`. A 445px pill in a 540px track leaves 95px of slack, so the
centred one lands at exactly half of it. The design's numbers fall out of the geometry.

The cards spend the same 32px of stagger space as margins — `mb-8`, `my-4`, `mt-8` — so under
grid `stretch` every card is `row − 32` tall, which is how all three end up the same height, while
their tops sit at 0, 16 and 32.

### Motion

The page is 1.9 viewports tall on mobile and under one on desktop, so this is the restrained
tier: a single 700ms rise of 16px, staggered 80ms per element in reading order. Two decisions
inside it are load-bearing.

**The keyframe animates `translate` only, never `opacity`.** Lighthouse scrolls the page during
its run, and axe samples elements part-way through their animation — a half-faded paragraph is
read as a contrast failure and costs Accessibility 100. Translated content is never invisible,
only offset.

**A card gets either a time delay or a scroll timeline, never both.** Above `shell` the cards are
inside the first viewport, so they take steps 5–7 of the time-driven stagger. Below it they start
off-screen, so they take `animation-timeline: view()` and no delay at all, because a time delay
against a non-monotonic timeline can strand an element part-way through its range. The switch is
structural — `shell:` against `max-shell:` — not a runtime check.

`v-rise` is written with animation longhands rather than the shorthand. The shorthand carries an
implicit `animation-delay: 0`, and the base utility and the step utility have the same
specificity, so the stagger would otherwise depend on which rule Tailwind emitted first.

Measured in headless Chrome at 375×812, 412×823, 768×1024, 1024×900 and 1157×1200: every card
reaches progress 1 with `translate: 0` at maximum scroll, including the 1157×1200 case where the
page offers 141px of scroll against a 160px range. The worst first-paint offset is 7.7px, on the
single card that straddles the fold at 1024×900 with 75px of itself on screen. Under
`prefers-reduced-motion: reduce` the page has no animations at all and everything sits on its
design position.

### Where this leaves the design

Measured against the design file's node geometry rather than the JPGs. At 1440 every box is exact
or within 1px except the heading; at 375 the same, and the page height matches the design's 1530
to the pixel.

The heading is the exception and it is a box model difference, not a mistake. Figma's text frame
for a 56px/48px heading is 154px tall — it grows past the fixed line height to fit the ascenders —
where the CSS box is 3 × 48 = 144. No single top padding can put both the frame and the ink where
the design has them, so the padding stays a round 80 / 120 and the rendered heading lands 3px high
on mobile and 2px low on desktop. Everything below it is anchored to the paragraph, which is exact.

Three departures are deliberate.

**The quotation marks have no spaces inside them.** The design file holds
`“ We needed … Excellent! ”` — a word space after every opening mark, and before the closing one
on two of the three cards but not the third. That is a Figma authoring artefact rather than
content; Frontend Mentor's own starter markup has neither. Shipping it would put a literal space
inside the quotation in the DOM, which is wrong for anything that reads the text instead of
looking at it. It costs one visible difference: without the leading space, "and" fits at the end
of the second desktop card's first line, so that card re-wraps.

**The first pill's label is centred.** In the design, pills 2 and 3 have centred labels while
pill 1's sits 4.75px right of centre, because its text box is left-aligned instead. All three are
centred here.

**Two of the three faces are male portraits**, matched to the originals' crop and pixel size, with
the names changed to suit: Irene Roberts → Ivan Roberts, Anne Wallace → Aaron Wallace.

### Colour and contrast

Two of the design's colours fail WCAG AA as drawn. Both moved the smallest amount that passes and
no further, keeping the design's hue and saturation and changing only lightness.

|                              | design                      | shipped                     | ratio               |
| ---------------------------- | --------------------------- | --------------------------- | ------------------- |
| body copy on white           | `#927B91`, hsl(303 10% 53%) | `#80697F`, hsl(303 10% 46%) | 3.83:1 → **4.95:1** |
| "Verified Buyer" on the card | `#EE69A4`                   | `#EF70A8`                   | 4.29:1 → **4.51:1** |

Everything else is the design's own value and clears AA comfortably: the heading and pill labels
at 12.5:1 on white and 11.3:1 on the pill, the names and quotes at 12.5:1 on plum.

axe — the engine Lighthouse embeds — reports no violations at either of Lighthouse's viewports,
1350×940 and 412×823.

### Smaller things

- **The two background patterns are one SVG each**, not the four files the design ships. The
  mobile top pattern is the desktop path scaled by 0.6404, so one `viewBox` and two widths cover
  it. The bottom pattern is the same path at the same scale at both breakpoints and only its
  position changes — 1085px wide, anchored 355px off the left edge on mobile, flush right on
  desktop. The wrapper clips it with `overflow-x: clip` rather than `hidden`, because hidden
  overflow would make the wrapper a scroll container and pin every `view()` timeline inside it at
  progress 0.5.
- **Nothing in `src/` is a client component** — the project contains no `'use client'` — so the
  only JavaScript on the page is Next's own runtime.
- **League Spartan is self-hosted by `next/font`, and asking for 400, 500 and 700 costs one
  file.** Next resolves the three weights to the single variable woff2, so the latin subset is one
  preloaded 23.9KB request. Three static instances would have been 38.6KB across three requests,
  measured against Google's own endpoint.
- The three avatars are 1.0–2.8KB WebP.
- The stars are `aria-hidden`. Each pill already reads "Rated 5 Stars in Reviews", so the rating
  is in the text rather than in five decorative icons.

### Running it

```bash
pnpm install
pnpm dev
```

`pnpm build` writes the static export to `out/`. Every number quoted above was measured against
that build served over HTTP, never against the dev server.

The share card is regenerated from the built site itself:

```bash
node scripts/shoot.mjs http://localhost:3305/ og-panel.webp --width 768 --height 1034 --scroll 245 --reduced-motion
```

then `og-card.mjs` with that panel, `--bg #512051 --fg #ffffff --accent #ef70a8 --muted #d9c4d8`.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
