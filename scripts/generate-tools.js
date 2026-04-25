#!/usr/bin/env node
// Recursively scans /tools for .html files and writes tools.json.
// Flat files:        tools/calculator.html      → "Calculator"
// Subfolder tools:   tools/Flashcards/Flashcards.html → "Flashcards"
// Files prefixed with _ are skipped (partials/templates).

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TOOLS_DIR = path.join(ROOT, 'tools');
const OUTPUT = path.join(ROOT, 'tools.json');

function toDisplayName(filepath) {
  return path.basename(filepath, '.html')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

function walk(dir, entries = []) {
  const items = fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));
  for (const item of items) {
    if (item.name.startsWith('_') || item.name.startsWith('.')) continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      walk(full, entries);
    } else if (item.isFile() && item.name.endsWith('.html')) {
      const rel = path.relative(ROOT, full).replace(/\\/g, '/');
      entries.push({ name: toDisplayName(item.name), file: rel });
    }
  }
  return entries;
}

if (!fs.existsSync(TOOLS_DIR)) {
  console.log('tools/ directory not found — writing empty tools.json');
  fs.writeFileSync(OUTPUT, '[]\n');
  process.exit(0);
}

const entries = walk(TOOLS_DIR);

// Sort alphabetically by name
entries.sort((a, b) => a.name.localeCompare(b.name));

fs.writeFileSync(OUTPUT, JSON.stringify(entries, null, 2) + '\n');
console.log(`tools.json updated — ${entries.length} tool(s):`);
entries.forEach(t => console.log(`  ${t.name} → ${t.file}`));
