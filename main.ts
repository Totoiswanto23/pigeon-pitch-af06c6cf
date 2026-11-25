// Pigeon Pitch, One Line.
// A city pigeon pitches investors on its startup: a one-pigeon logistics
// empire run on crumbs, benches and tourists' sandwiches.
// This program writes that one line to /output/entry.txt for the gate.
import * as fs from 'node:fs';
import * as path from 'node:path';

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The pitch: zero employees, zero overhead, every bench a storefront,
// every tourist's sandwich recurring revenue — and no tax return, ever.
const ENTRY = "I'm a one-pigeon logistics empire: zero employees, zero overhead, every park bench is my storefront and every tourist's sandwich is recurring revenue — and I have never once filed a tax return.";

// Count characters the way the gate does: one per code point, so the
// em-dash counts as one, not three bytes.
const charCount = (text: string): number => [...text].length;

function main(): void {
  const chars = charCount(ENTRY);
  if (chars < 1 || chars > 200 || ENTRY.includes('\n') || ENTRY.includes('\r')) {
    throw new Error(`entry must be one line of 1-200 characters, got ${chars}`);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'entry.txt'), ENTRY);
  console.log(`wrote ${chars} chars to ${path.join(OUT_DIR, 'entry.txt')}`);
}

main();
