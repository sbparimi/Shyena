import fs from "node:fs";
import path from "node:path";

const root = path.resolve("content");
const failures = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (/\.(md|mdx)$/i.test(entry.name)) validate(file);
  }
}

function validate(file) {
  const text = fs.readFileSync(file, "utf8");
  if (!text.startsWith("---\n")) failures.push(`${file}: missing frontmatter`);
  if (!/^title:\s*.+$/m.test(text)) failures.push(`${file}: missing title`);
  if (!/^description:\s*.+$/m.test(text)) failures.push(`${file}: missing description`);
  if (!/^slug:\s*.+$/m.test(text)) failures.push(`${file}: missing slug`);
  if (/lorem ipsum|TODO: publish|fabricated citation/i.test(text)) failures.push(`${file}: blocked placeholder content`);
}

walk(root);

if (failures.length) {
  console.error("SAGE content validation failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("SAGE content validation passed.");
