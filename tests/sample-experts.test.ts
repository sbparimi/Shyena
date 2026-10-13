import assert from "node:assert/strict";
import test from "node:test";
import { SAMPLE_CANDIDATES } from "../src/data/sample-experts.ts";

test("ten sample profiles, all labelled as samples with unique ids", () => {
  assert.equal(SAMPLE_CANDIDATES.length, 10);
  assert.equal(new Set(SAMPLE_CANDIDATES.map((c) => c.id)).size, 10);
  assert.ok(SAMPLE_CANDIDATES.every((c) => c.is_sample === true && c.id.startsWith("sample-")));
  assert.ok(SAMPLE_CANDIDATES.every((c) => c.bio?.endsWith("Sample profile.")));
});

test("every profile is based in both the Netherlands and India and has skills and domains", () => {
  for (const c of SAMPLE_CANDIDATES) {
    assert.match(c.location, /NL/);
    assert.match(c.location, /IN/);
    assert.ok(c.core_skills.length >= 3 && c.domains.length >= 1);
  }
});

test("samples never name a real employer or carry a resume or photo", () => {
  const text = JSON.stringify(SAMPLE_CANDIDATES).toLowerCase();
  for (const name of ["vanilla steel", "vialto", "postnl", "canon", "oracle corporation"])
    assert.ok(!text.includes(name), name);
  assert.ok(SAMPLE_CANDIDATES.every((c) => c.resume_path === null && c.avatar_url === null));
});
