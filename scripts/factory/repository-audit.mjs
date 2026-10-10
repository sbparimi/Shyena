#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const LOCKFILES = ["bun.lock", "bun.lockb", "package-lock.json", "pnpm-lock.yaml", "yarn.lock"];

export function auditRepository(root = process.cwd()) {
  const findings = [];
  const packagePath = join(root, "package.json");

  if (!existsSync(packagePath)) {
    return {
      schemaVersion: 1,
      status: "blocked",
      findings: [{ severity: "error", code: "PACKAGE_MANIFEST_MISSING", message: "package.json is missing." }],
    };
  }

  let manifest;
  try {
    manifest = JSON.parse(readFileSync(packagePath, "utf8"));
  } catch {
    return {
      schemaVersion: 1,
      status: "blocked",
      findings: [{ severity: "error", code: "PACKAGE_MANIFEST_INVALID", message: "package.json is not valid JSON." }],
    };
  }

  const scripts = manifest.scripts ?? {};
  for (const name of ["build", "lint", "content:validate"]) {
    if (typeof scripts[name] !== "string") {
      findings.push({ severity: "error", code: "REQUIRED_SCRIPT_MISSING", message: `Required package script "${name}" is missing.` });
    }
  }

  const lockfiles = LOCKFILES.filter((name) => existsSync(join(root, name)));
  if (lockfiles.length === 0) {
    findings.push({
      severity: "warning",
      code: "LOCKFILE_MISSING",
      message: "No supported package-manager lockfile is present; dependency resolution is not reproducible.",
    });
  } else if (lockfiles.length > 1) {
    findings.push({
      severity: "warning",
      code: "MULTIPLE_LOCKFILES",
      message: `Multiple package-manager lockfiles are present: ${lockfiles.join(", ")}.`,
    });
  }

  const dependencies = { ...(manifest.dependencies ?? {}), ...(manifest.devDependencies ?? {}) };
  if (!("playwright" in dependencies) && !("@playwright/test" in dependencies) && !("vitest" in dependencies) && !("jest" in dependencies)) {
    findings.push({
      severity: "warning",
      code: "TEST_RUNNER_MISSING",
      message: "No dedicated automated test runner is declared in package.json.",
    });
  }

  if (!existsSync(join(root, ".github", "workflows"))) {
    findings.push({
      severity: "warning",
      code: "CI_WORKFLOWS_MISSING",
      message: "No GitHub Actions workflow directory is present.",
    });
  }

  if (!existsSync(join(root, ".env.example")) && !existsSync(join(root, ".env.template"))) {
    findings.push({
      severity: "info",
      code: "ENVIRONMENT_TEMPLATE_MISSING",
      message: "No .env.example or .env.template was found; required environment variables may not be documented in one place.",
    });
  }

  const errors = findings.filter((finding) => finding.severity === "error");
  return {
    schemaVersion: 1,
    status: errors.length ? "blocked" : "ready-for-baseline-gates",
    findings,
    inventory: {
      packageManagerLockfiles: lockfiles,
      declaredScripts: Object.keys(scripts).sort(),
      dependencyCount: Object.keys(dependencies).length,
      testRunnerDeclared: ["playwright", "@playwright/test", "vitest", "jest"].some((name) => name in dependencies),
      githubActionsDirectoryPresent: existsSync(join(root, ".github", "workflows")),
    },
  };
}

function main() {
  const report = auditRepository(process.cwd());
  console.log(JSON.stringify(report, null, 2));
  if (report.status === "blocked" || (process.argv.includes("--strict") && report.findings.some((finding) => finding.severity === "warning" || finding.severity === "error"))) {
    process.exitCode = 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
