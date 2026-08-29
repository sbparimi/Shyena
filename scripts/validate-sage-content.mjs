import fs from "node:fs";
import path from "node:path";

const root = path.resolve("content");
const failures = [];

// Only content published by the site belongs to this gate. content/sage is the
// SAGE control plane and contains internal contracts, schemas, research, and logs.
const publishRoots = [path.join(root, "blog"), path.join(root, "docs")];

function isPublishableContent(name) {
  return /\.mdx?$/i.test(name) && name !== "README.md" && !/\.(research|review)\.mdx?$/i.test(name);
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (isPublishableContent(entry.name)) validate(file);
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

publishRoots.forEach(walk);

if (failures.length) {
  console.error("SAGE content validation failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("SAGE content validation passed.");
