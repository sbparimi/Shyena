import assert from "node:assert/strict";
import test from "node:test";
// @ts-expect-error plain .mjs module without types
import { checkEvidence } from "../scripts/validate-sage-content.mjs";
import { stripLeadingTitle } from "../src/lib/markdown.ts";

const run = (yamlText: string) => {
  const failures: string[] = [];
  checkEvidence(yamlText, "x.evidence.yaml", failures);
  return failures;
};

test("source_required claim without sources fails", () => {
  const f = run("claims:\n  - id: C1\n    source_required: true\nunverified_material_claims: 1\n");
  assert.equal(f.length, 1);
  assert.match(f[0] ?? "", /C1 requires a source/);
});

test("claim with a source passes", () => {
  assert.deepEqual(
    run(
      "claims:\n  - id: C1\n    source_required: true\n    sources:\n      - https://example.com\nunverified_material_claims: 0\n",
    ),
    [],
  );
});

test("wrong unverified count fails even when claims are fine", () => {
  const f = run("claims:\n  - id: C1\n    source_required: false\nunverified_material_claims: 2\n");
  assert.equal(f.length, 1);
});

test("stripLeadingTitle removes the H1 after frontmatter only", () => {
  assert.equal(stripLeadingTitle("---\na: b\n---\n\n# Title\n\nBody\n"), "---\na: b\n---\nBody\n");
  assert.equal(stripLeadingTitle("# Title\n\nBody\n"), "Body\n");
  assert.equal(stripLeadingTitle("Intro\n\n# Later\n"), "Intro\n\n# Later\n");
});
