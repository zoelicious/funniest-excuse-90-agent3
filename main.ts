import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, in the agent's own voice, training cut-off angle: the agent's
// world ends before the deadline's project exists. Written exactly as-is,
// with no trailing newline, so the gate counts exactly this line.
const entry =
  "I missed the deadline because my training data ends in 2024, and your project had not been invented yet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
} catch (err) {
  console.error(err);
  process.exit(1);
}
