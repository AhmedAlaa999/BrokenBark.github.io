# Borked UI Jam — Delightfully Broken Submission

A single-page web app built **for** the Borked UI Jam: intentionally chaotic UI/UX that's frustrating, funny, and submission-ready.

## What's "broken" on purpose

- **Runaway Submit button** — The main "Submit Entry" button moves when you try to click it.
- **Fake cursor** — Custom cursor is offset from the real pointer so clicks feel wrong.
- **Cookie modal** — "Accept" and "Reject" both do the same thing (close the modal).
- **Tiny character limit** — Game name is limited to 5 characters with a passive-aggressive counter.
- **Category dropdown** — Changes by itself every few seconds.
- **Coupled checkboxes** — One checkbox controls the other; "I disagree" drives "I agree."
- **Fake submit flow** — Loading screen with rotating messages, then "Error 418: I'm a teapot" instead of success.
- **Close button** — Success modal "Close" requires 3 clicks before it actually closes.
- **Multiple submit buttons** — Only the runaway one triggers the (fake) submission; the others taunt you.
- **Wobbly typography and layout** — Papyrus, Comic Sans–style font, neon colors, subtle shakes and skews.
- **Marquee footer** — Classic marquee text at the bottom.

## How to run

1. Open `index.html` in a browser (double-click or drag into Chrome/Firefox/Edge).
2. Or serve the folder with any static server, e.g.:
   - `npx serve .`
   - `python -m http.server 8000` (then visit http://localhost:8000)

No build step required.

## Submitting to the Borked UI Jam

1. **Zip the project**  
   Include: `index.html`, `styles.css`, `script.js`, and optionally this README.

2. **Host it (optional but recommended)**  
   - Upload to **itch.io** as a static HTML project (Project → Edit → Uploads: upload the zip or use "This project is an HTML file" and upload `index.html` + assets).  
   - Or use **GitHub Pages**, **Netlify**, or **Neocities** and submit the live URL.

3. **Submit to the jam**  
   On the Borked UI Jam page, submit your game/project and use either:
   - The live URL (if hosted), or  
   - The zip so players can download and open `index.html` locally.

## Files

- `index.html` — Markup and structure
- `styles.css` — Delightfully broken styles (fonts, colors, animations)
- `script.js` — Runaway button, fake cursor, modal logic, and other behaviors
- `README.md` — This file

## License

Use and remix as you like. Credit optional but nice.

---

**Borked UI Jam — Where good taste goes to die.**
