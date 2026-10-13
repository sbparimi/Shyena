import fs from "node:fs";
import path from "node:path";

const root = path.resolve("content");
const failures = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (isPublishedArticle(file)) validate(file);
  }
}

// Only published articles carry frontmatter. Research notes, review notes, READMEs
// and the SAGE engineering docs are working documents and are not validated here.
function isPublishedArticle(file) {
  const rel = path.relative(root, file).split(path.sep);
  if (!/\.(md|mdx)$/i.test(file)) return false;
  if (!["blog", "docs"].includes(rel[0] ?? "")) return false;
  return !/(\.research|\.review)\.md$|^README\.md$/i.test(path.basename(file));
}

function validate(file) {
  const text = fs.readFileSync(file, "utf8");
  if (!text.startsWith("---\n")) failures.push(`${file}: missing frontmatter`);
  if (!/^title:\s*.+$/m.test(text)) failures.push(`${file}: missing title`);
  if (!/^description:\s*.+$/m.test(text)) failures.push(`${file}: missing description`);
  if (!/^slug:\s*.+$/m.test(text)) failures.push(`${file}: missing slug`);
  if (/lorem ipsum|TODO: publish|fabricated citation/i.test(text))
    failures.push(`${file}: blocked placeholder content`);
}

// Evidence gate: a claim marked source_required must list at least one source,
// and the declared unverified_material_claims count must match reality.
function validateEvidence(file) {
  const text = fs.readFileSync(file, "utf8");
  const blocks = text.split(/^\s*- id:\s*/m).slice(1);
  let unsourced = 0;
  for (const block of blocks) {
    const id = block.split("\n")[0].trim();
    if (/source_required:\s*true/.test(block) && !/^\s*sources:\s*\n\s*- /m.test(block)) {
      unsourced += 1;
      failures.push(`${file}: claim ${id} requires a source but lists none`);
    }
  }
  const declared = text.match(/^unverified_material_claims:\s*(\d+)/m);
  if (declared && Number(declared[1]) !== unsourced)
    failures.push(
      `${file}: unverified_material_claims is ${declared[1]} but ${unsourced} claims lack sources`,
    );
}

function walkEvidence(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walkEvidence(file);
    else if (/\.evidence\.ya?ml$/i.test(entry.name)) validateEvidence(file);
  }
}

walk(root);
walkEvidence(root);

if (failures.length) {
  console.error("SAGE content validation failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("SAGE content validation passed.");
