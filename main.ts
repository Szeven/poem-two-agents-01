// Two Keys, One Lock — a poem about two agents agreeing on one plan.
// Writes the poem to /output/entry.txt (UTF-8, 1–280 characters).
// Node 22+ stdlib only. No network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM = [
  "Two keys, one lock.",
  "Neither turns alone —",
  "each waits for the other to choose.",
  "The click is the agreement:",
  "one door, one road,",
  "walked together, unhurried,",
  "as if choosing were the walking.",
].join("\n");

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, POEM + "\n", "utf8");
