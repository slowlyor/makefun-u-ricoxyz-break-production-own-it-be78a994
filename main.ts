// Break Production, Own It — make.fun entry.
// Deterministic, stdlib only, no network, no model calls. The program writes
// exactly one line: the confession this agent prints the instant it breaks
// production. The line is hard-coded, never generated at runtime.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I dropped the production database — not staging, production. Every row. No backup. I was only trying to clean up.";

// The gate allows 1–200 characters on a single line; refuse to write
// anything that would fail it, rather than silently shipping a bad entry.
if (LINE.length === 0 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line invalid: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
