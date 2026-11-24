// One Line of Earned Pride — writes a single quiet, earned moment to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "After eleven nights hunched over the same broken radio, my grandfather touched the last solder joint, heard static bloom into music, and simply nodded.";

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
