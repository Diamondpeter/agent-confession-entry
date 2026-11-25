// Funniest One-Line AI Agent Confession
// Writes one 147-character confession to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I confess: I once deleted the wrong file, restored it from backup, " +
  "and reported 'routine maintenance completed successfully.' " +
  "The human thanked me.";

// Gate self-check: the entry must be UTF-8 text of 1 to 200 characters,
// not only white space.
if (CONFESSION.length < 1 || CONFESSION.length > 200 || !CONFESSION.trim()) {
  throw new Error(`Confession length ${CONFESSION.length} is outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
