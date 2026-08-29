import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const BLOG = join(ROOT, "content", "blog");
const DOCS = join(ROOT, "content", "docs");

// Only plain Markdown files are publishable content. SAGE working artifacts
// (for example *.research.md and *.review.md) must never enter the publish gate.
function isPublishableMarkdown(name) {
  return name.endsWith(".md") && name !== "README.md" && !/\.(research|review)\.md$/i.test(name);
}

function files(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter(isPublishableMarkdown);
}

function frontmatter(source, file) {
  if (!source.startsWith("---\n")) throw new Error(`${file}: missing frontmatter`);
  const end = source.indexOf("\n---", 4);
  if (end === -1) throw new Error(`${file}: unterminated frontmatter`);
  const values = {};
  for (const line of source.slice(4, end).split("\n")) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (match) values[match[1]] = match[2].trim().replace(/^['"]|['"]$/g, "");
  }
  return values;
}

const errors = [];
const seenSlugs = new Set();
const seenTitles = new Set();

for (const [type, dir] of [["blog", BLOG], ["docs", DOCS]]) {
  for (const name of files(dir)) {
    const file = join(dir, name);
    const meta = frontmatter(readFileSync(file, "utf8"), file);
    for (const required of ["title", "description", "slug"]) {
      if (!meta[required]) errors.push(`${file}: missing ${required}`);
    }
    if (meta.slug && seenSlugs.has(meta.slug)) errors.push(`${file}: duplicate slug ${meta.slug}`);
    if (meta.title && seenTitles.has(meta.title)) errors.push(`${file}: duplicate title`);
    if (meta.slug) seenSlugs.add(meta.slug);
    if (meta.title) seenTitles.add(meta.title);
    if (type === "blog" && !meta.primary_keyword) errors.push(`${file}: blog article missing primary_keyword`);

    const source = readFileSync(file, "utf8");
    if (/javascript:/i.test(source)) errors.push(`${file}: executable URL detected`);
    if (/DECISION:\s*REJECT/i.test(source)) errors.push(`${file}: rejected content cannot be published`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Content validation passed.");
