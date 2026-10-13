import fs from "node:fs";
import path from "node:path";
import * as yaml from "js-yaml";

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

// Evidence gate: a claim marked source_required must list at least one source, and the declared
// unverified_material_claims count must match reality.
export function checkEvidence(text, file, failures) {
  let doc;
  try {
    doc = yaml.load(text);
  } catch (error) {
    failures.push(`${file}: invalid YAML (${error.message.split("\n")[0]})`);
    return;
  }
  const claims = Array.isArray(doc?.claims) ? doc.claims : [];
  let unsourced = 0;
  for (const claim of claims) {
    const sources = Array.isArray(claim.sources) ? claim.sources.filter(Boolean) : [];
    if (claim.source_required === true && sources.length === 0) {
      unsourced += 1;
      failures.push(`${file}: claim ${claim.id} requires a source but lists none`);
    }
  }
  if (
    doc &&
    doc.unverified_material_claims !== undefined &&
    doc.unverified_material_claims !== unsourced
  )
    failures.push(
      `${file}: unverified_material_claims is ${doc.unverified_material_claims} but ${unsourced} claims lack sources`,
    );
}

function validateEvidence(file) {
  checkEvidence(fs.readFileSync(file, "utf8"), file, failures);
}

function walkEvidence(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walkEvidence(file);
    else if (/\.evidence\.ya?ml$/i.test(entry.name)) validateEvidence(file);
  }
}

const isMain =
  process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname;
if (isMain) {
  walk(root);
  walkEvidence(root);

  if (failures.length) {
    console.error("SAGE content validation failed:");
    failures.forEach((failure) => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log("SAGE content validation passed.");
}
