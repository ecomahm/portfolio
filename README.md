# Creative strategist portfolio

A static site (HTML + CSS + JS, no build step) for GitHub Pages.

## 1. Add your media

Put these files in `assets/`:

| File | What it is |
|---|---|
| `assets/me.jpg` | Your headshot (nav avatar + About photo). |
| `assets/ads/ad1.mp4`, `ad1.jpg`, … | Each winning ad (9:16) and a still frame from it. |

Compress videos before uploading (HandBrake, "Fast 1080p30" preset), because GitHub rejects files over 100 MB.

## 2. Edit the text

- **`index.html`**: all page text (hero, About, case study, What I do, contact).
- **Hero video** is a Loom embed. To swap it, change the video ID after `loom.com/embed/` in `index.html`.
- **`script.js`**: the `ADS` list at the top builds the "Winning ads" grid. Add or remove entries there.

## 3. Publish on GitHub Pages

1. Create a GitHub account if you don't have one.
2. Make a new **public** repository. Name it `portfolio`, or name it `<your-username>.github.io` to get the shorter address.
3. Upload everything in this folder (drag and drop on the repo page → **Add file → Upload files**), then commit.
4. Repo **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` / `(root)` → Save.
5. After a minute it's live at `https://<your-username>.github.io/portfolio/`.

## Preview locally

```
npx http-server portfolio -p 5173
```
then open http://localhost:5173.
