# Schrottgesellschaft — Charakterbogen

A digital character sheet for the *Schrottgesellschaft* homebrew tabletop RPG system (German).

## Features

- **Vital stats** with +/− steppers: HP, Shield, Energy, Carry Load
- **Base attributes**: STK (Strength), GES (Agility), KON (Constitution), WIL (Will), INT (Intelligence)
- **Initiative** bar with visual fill indicator
- **Currency**: Lyka (two tiers), Meds, Level, XP, Talent Points
- **Three skill tables** (General, Combat, Knowledge) — each skill has a Talent Value (TW) stepper; rows can be added or removed
- **Weapons list** with Damage, KW, NL, Load, and special rule field
- **Inventory** with per-item weight counter and a tag syntax (`[+bonus]`, `[-destructible]`)
- **Advantages & Disadvantages** with free-text body and expandable roll tables
- **Class abilities** grid — add/remove cards freely
- **Notes** area on lined paper background
- **Character properties**: Age, Height, Weight, Build, Special Features
- All fields are **contenteditable** — click any text to edit in place
- Save button writes to **localStorage**; Backup exports a `.json`; Load restores from `.json`

## Usage

Open `Schrottgesellschaft.html` in any modern browser — no server needed.

Click any text field to edit. Use the **💾 SPEICHERN** button to save locally, **⬇ BACKUP** to download a `.json` snapshot, and **⬆ LADEN** to restore one.

## Notes

- Pure client-side HTML/CSS/JS (German UI)
- All data stays in the browser's localStorage under the key `charsheet_leer`; nothing is sent externally
- Requires an internet connection only to load Bebas Neue, Share Tech Mono, and Barlow Condensed fonts from Google Fonts
