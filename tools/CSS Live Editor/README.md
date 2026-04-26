# CSS Live Editor

A split-pane CSS + HTML live editor with real-time preview, image embedding, and PDF export.

## Features

- **Live preview** — edits to CSS or HTML reflect instantly in the preview pane (150 ms debounce)
- **Three editor tabs** — switch between CSS, HTML, and an image manager
- **Drag-and-drop images** — drop PNG/JPG/GIF/WebP/SVG files to embed them as base64 data URLs; use the generated CSS variable or HTML snippet in your code
- **Resizable pane** — drag the divider to give more space to the editor or the preview
- **Save / Load** — download your full project (HTML + CSS + images) as a `.csseditor` file and reload it later
- **PDF Export** — export the rendered preview to PDF with configurable page size (A4, A3, Letter, custom), orientation, single-page or paginated layout, and render scale

## Usage

1. Write CSS in the **CSS** tab and HTML in the **HTML** tab — the preview updates automatically
2. Drop images in the **Images** tab; click the CSS var or HTML snippet to copy it to your clipboard
3. Click **↓ Save** to download a `.csseditor` project file; use **↑ Open** to restore it
4. Click **↓ Export PDF** to open the export dialog and generate a PDF

## Notes

- Images are embedded as base64, so `.csseditor` files are self-contained
- The PDF renderer injects html2canvas inside an iframe to faithfully capture `clip-path`, custom properties, and pseudo-elements
- `Tab` key in the editor inserts 2 spaces
- Click **Reset** to restore the built-in starter HTML and CSS
