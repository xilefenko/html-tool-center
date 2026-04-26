# Habit & Mood Visualizer (Habitgrid)

A GitHub-style contribution grid for tracking habits and moods over the past year.

## Features

- Create as many trackers as you like, each with its own name and color scheme
- Two tracker types:
  - **Binary** — Yes/No per day (e.g. "Did I meditate?")
  - **Range** — Numeric scale per day (e.g. mood 0–10)
- Year-view grid (53 weeks × 7 days); cells are color-interpolated by value
- Inline daily log panel on each tracker card — one click to log today
- Click any past cell to open the full entry modal (supports notes)
- Stats row: current streak, total entries, last-30-day fill rate, yes-rate / average score
- Undo last action (`Ctrl/Cmd + Z` or the Undo button)
- Export all tracker data to a `.json` file; import it back on another device
- Data persists in **localStorage**

## Usage

Open `habit-mood-visualizer.html` in any modern browser — no server needed.

Click **+ New Tracker** to get started.

## Notes

- Pure client-side HTML/CSS/JS
- All data stays in the browser's localStorage; nothing is sent externally
- Requires an internet connection only to load the Syne and DM Mono fonts from Google Fonts
