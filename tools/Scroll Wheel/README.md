# Scroll Wheel

An animated weapon/item selection wheel inspired by game radial menus.

## Features

- 8 slots arranged in a circle, each with a color-coded icon and label
- **Mouse wheel** scrolls through items; **arrow keys** and **1–8 number keys** also work
- Click any slot to select it directly
- Smooth scale animation and glow effect on the selected item
- Center display shows the active item's icon, name, and category
- Floating particle background and a rotating outer glow ring

## Usage

Open `Scroll Wheel.html` in any modern browser — no server or dependencies needed.

To customize the items, edit the `weapons` array near the top of the `<script>` block. Each entry takes:

```js
{ icon: '🔫', name: 'Pistol', category: 'Sidearm', color: '#FFB5C2', bg: 'rgba(...)', border: 'rgba(...)' }
```

## Notes

- Pure client-side HTML/CSS/JS — nothing is stored or sent anywhere
- Requires an internet connection only to load the Inter font from Google Fonts
