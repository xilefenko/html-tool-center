# HTML Tool Control Center

A lightweight dashboard for organizing and launching personal HTML tools — hosted on GitHub Pages.

## How it works

`index.html` fetches `tools.json` and renders a sidebar of tools. Selecting a tool loads it in an embedded iframe. Adding a new tool is as simple as dropping an `.html` file into the `tools/` folder and pushing.

## Usage

| Action | How |
|---|---|
| Search tools | `Ctrl+K` |
| Navigate list | `↑` / `↓` |
| Open tool | `Enter` or click |
| Reload active tool | `Ctrl+R` or Reload button |
| Open in new tab | "Open tab" button |
| Deep-link to a tool | `?tool=Tool+Name` in the URL |

Last opened tool is remembered via `localStorage`.

## Adding a tool

1. Drop your `.html` file into the `tools/` directory.
2. Push to `main`.
3. The GitHub Action runs `scripts/generate-tools.js`, updates `tools.json`, and commits it automatically.
4. The dashboard reflects the new tool on next load.

### Tools outside `tools/`

If your tool lives in its own subdirectory (e.g. `MyTool/MyTool.html`), add the folder name to the `EXTRA_DIRS` array in `scripts/generate-tools.js`:

```js
const EXTRA_DIRS = ['Flashcards', 'MyTool'];
```

## Running the generator locally

```bash
node scripts/generate-tools.js
```

## Project structure

```
repo-root/
├── index.html                  # Dashboard UI
├── tools.json                  # Auto-generated tool registry
├── tools/                      # Drop HTML tools here
├── scripts/
│   └── generate-tools.js       # Scans folders, writes tools.json
└── .github/
    └── workflows/
        └── update-tools.yml    # Auto-regenerates tools.json on push
```

## GitHub Pages setup

1. Go to **Settings → Pages** in your repository.
2. Set source to **Deploy from a branch**, branch `main`, folder `/` (root).
3. Save — your dashboard will be live at `https://<username>.github.io/<repo-name>/`.
