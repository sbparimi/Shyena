import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { auditRepository } from "../../scripts/factory/repository-audit.mjs";

test("reports a missing package manifest as blocked", () => {
  const root = mkdtempSync(join(tmpdir(), "shyena-factory-audit-"));
  try {
    const report = auditRepository(root);
    assert.equal(report.status, "blocked");
    assert.equal(report.findings[0]?.code, "PACKAGE_MANIFEST_MISSING");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("identifies missing reproducibility and test infrastructure", () => {
  const root = mkdtempSync(join(tmpdir(), "shyena-factory-audit-"));
  try {
    writeFileSync(join(root, "package.json"), JSON.stringify({
      scripts: { build: "vite build", lint: "eslint .", "content:validate": "node validate.mjs" },
      dependencies: { react: "1.0.0" },
    }));
    const report = auditRepository(root);
    const codes = report.findings.map((finding) => finding.code);
    assert.equal(report.status, "ready-for-baseline-gates");
    assert.ok(codes.includes("LOCKFILE_MISSING"));
    assert.ok(codes.includes("TEST_RUNNER_MISSING"));
    assert.ok(codes.includes("CI_WORKFLOWS_MISSING"));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("accepts the minimum baseline scripts and detects a lockfile and workflow", () => {
  const root = mkdtempSync(join(tmpdir(), "shyena-factory-audit-"));
  try {
    writeFileSync(join(root, "package.json"), JSON.stringify({
      scripts: { build: "vite build", lint: "eslint .", "content:validate": "node validate.mjs" },
      devDependencies: { vitest: "1.0.0" },
    }));
    writeFileSync(join(root, "package-lock.json"), "{}");
    mkdirSync(join(root, ".github", "workflows"), { recursive: true });
    const report = auditRepository(root);
    const codes = report.findings.map((finding) => finding.code);
    assert.equal(report.status, "ready-for-baseline-gates");
    assert.ok(!codes.includes("LOCKFILE_MISSING"));
    assert.ok(!codes.includes("TEST_RUNNER_MISSING"));
    assert.ok(!codes.includes("CI_WORKFLOWS_MISSING"));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
