# TRACKR

A hierarchical project progress tracker. Build a tree of progress bars and task lists, then watch your overall completion update automatically.

## Features

- **Projects** — top-level progress bars with a configurable step size (+ / − buttons)
- **Nested children** — add sub-bars or task lists inside any project for granular tracking
- **Weighted progress** — each child has a configurable weight, so heavier milestones count more toward the parent
- **Color modes** — choose a single bar color or a gradient range that shifts from 0% to 100%
- **Task lists** — checkbox-based sub-items that auto-calculate their bar's progress
- **Import / Export** — save and restore your full workspace as a `.json` file
- **Inline rename** — click any bar or task list name to rename it in place

## Usage

1. Click **+ New Project** to create a top-level bar
2. Expand a project and use **+ Bar** or **+ Tasks** to add children
3. Adjust progress with the **−** and **+** buttons (or check off tasks)
4. Click the **⚙** icon to change colors and weights
5. Use **Export** to save your data and **Import** to restore it later

## Tips

- Set the step input (default `5`) to any value for finer or coarser increments
- Use **Color Range** mode (red → green) to get an instant visual signal of completion
- Weights let you make certain milestones count more — a weight of `2` counts twice as much as the default `1`
