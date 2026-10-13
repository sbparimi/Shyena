// Theme guard: colours must come from the --warp-* tokens. Hard-coded hex literals in TS/TSX
// are frozen at the current per-file counts; any new literal (or a new file with one) fails.
// After removing hex literals run: node scripts/check-hex-baseline.mjs --update
import fs from "node:fs";
import path from "node:path";

const baselinePath = "scripts/hex-baseline.json";
const files = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (/\.(tsx?|jsx?)$/.test(entry.name) && !/routeTree\.gen|generated-content/.test(file))
      files.push(file);
  }
})("src");

const counts = {};
for (const file of files) {
  const n = (fs.readFileSync(file, "utf8").match(/#[0-9a-fA-F]{6}\b/g) ?? []).length;
  if (n) counts[file] = n;
}

if (process.argv.includes("--update")) {
  fs.writeFileSync(baselinePath, JSON.stringify(counts, null, 2) + "\n");
  console.log(`Baseline updated: ${Object.keys(counts).length} files.`);
  process.exit(0);
}

const baseline = JSON.parse(fs.readFileSync(baselinePath, "utf8"));
const failures = Object.entries(counts)
  .filter(([file, n]) => n > (baseline[file] ?? 0))
  .map(
    ([file, n]) =>
      `${file}: ${n} hex colours (allowed ${baseline[file] ?? 0}). Use a --warp-* token.`,
  );
if (failures.length) {
  console.error("Hex colour guard failed:\n" + failures.join("\n"));
  process.exit(1);
}
console.log("Hex colour guard passed.");
