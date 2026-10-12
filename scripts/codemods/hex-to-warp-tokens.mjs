#!/usr/bin/env node
/**
 * One-off codemod: replaces hard-coded hex colours in Tailwind arbitrary-value
 * utilities (bg-[#…], text-[#…], border-[#…], …) with the canonical --warp-*
 * tokens defined in src/warp-theme.css, so every page follows one palette.
 *
 * Mapping is by role and relative luminance, matching the dark Warp-style
 * canvas the site renders on:
 *   - surfaces:  very dark → canvas/surface, everything lighter → surface tones
 *   - text:      dark → ink, mid greys → muted, saturated → accent text
 *   - borders:   light/dark neutrals → border tokens, saturated → strong border
 *   - saturated fills (orange/gold/blue/purple CTAs) → the single lime primary,
 *     and text inside the same class string is switched to on-accent ink.
 *
 * Usage: node scripts/codemods/hex-to-warp-tokens.mjs [--dry]
 */
import fs from "node:fs";
import path from "node:path";

const DRY = process.argv.includes("--dry");
const ROOT = path.resolve(new URL("../..", import.meta.url).pathname);
const SRC = path.join(ROOT, "src");

const UTILITY =
  /(?<![\w-])((?:[a-z0-9-]+:)*)(bg|text|border(?:-[trblxy])?|from|to|via|ring|outline|decoration|divide|placeholder|caret|accent)-\[(#[0-9a-fA-F]{3,8})\](\/[\d.]+)?/g;

function expand(hex) {
  const h = hex.slice(1).toLowerCase();
  if (h.length === 3 || h.length === 4)
    return h
      .slice(0, 3)
      .split("")
      .map((c) => c + c)
      .join("");
  return h.slice(0, 6);
}

function analyse(hex) {
  const h = expand(hex);
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const lin = (v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  const luminance = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const saturation = max === 0 ? 0 : (max - min) / max;
  return { luminance, saturated: saturation > 0.45 && max > 0.35 };
}

function tokenFor(kind, hex) {
  const { luminance, saturated } = analyse(hex);
  if (kind === "bg" || kind === "from" || kind === "to" || kind === "via") {
    if (saturated && luminance > 0.06) return "warp-lime";
    if (luminance <= 0.006) return "warp-canvas";
    if (luminance <= 0.012) return "warp-surface";
    return "warp-surface-soft";
  }
  if (kind === "text" || kind === "placeholder" || kind === "caret" || kind === "decoration") {
    if (saturated) return "warp-accent-text";
    if (luminance < 0.06) return "warp-ink";
    if (luminance > 0.7) return "warp-ink";
    return "warp-muted";
  }
  // borders, rings, outlines, dividers, accent
  if (kind === "ring" || kind === "outline" || kind === "accent") return "warp-lime";
  if (saturated) return "warp-border-strong";
  return luminance < 0.06 ? "warp-border-strong" : "warp-border";
}

const ON_ACCENT_TEXT =
  /(?<![\w-])((?:[a-z0-9-]+:)*)text-(?:white|black|\[var\(--warp-ink\)\]|\[var\(--warp-muted\)\]|\[var\(--warp-accent-text\)\])(?![\w-])/g;
const BUTTONISH = /(?:^|\s)(?:inline-)?flex(?:\s|$)[\s\S]*(?:\s|^)(?:h-\d|py-|min-h-)/;

function transformClassString(cls) {
  let changed = false;
  let out = cls.replace(UTILITY, (match, variants, util, hex, alpha = "") => {
    const kind = util.startsWith("border") ? "border" : util;
    const token = tokenFor(kind, hex);
    changed = true;
    return `${variants}${util}-[var(--${token})]${alpha}`;
  });
  // A filled accent element must carry on-accent text, and gets the unified button style.
  // Template literals often hold an active/inactive ternary ("…" : "…"), so the rule is
  // applied to each quoted branch on its own; otherwise the inactive branch would inherit
  // dark on-accent text.
  const applyAccent = (segment) => {
    if (!/(?<![\w-:])bg-\[var\(--warp-lime\)\](?!\/)/.test(segment)) return segment;
    let next = segment.replace(
      ON_ACCENT_TEXT,
      (_m, variants) => `${variants}text-[var(--warp-on-accent)]`,
    );
    if (!/text-\[var\(--warp-on-accent\)\]/.test(next)) next += " text-[var(--warp-on-accent)]";
    if (BUTTONISH.test(next) && !next.includes("warp-btn")) next += " warp-btn";
    changed = true;
    return next;
  };
  const hasBranches = /\$\{[^}]*\?\s*["'][^"']*["']\s*:\s*["'][^"']*["']/.test(out);
  out = hasBranches
    ? out.replace(/(["'])([^"']*)\1/g, (_m, q, body) => q + applyAccent(body) + q)
    : applyAccent(out);
  return { out, changed };
}

// Class strings: "…", '…' and `…` literals that contain at least one hex utility.
const STRING_LITERAL = /(["'`])((?:(?!\1)[^\\\n]|\\.)*?)\1/g;

let filesChanged = 0;
let replacements = 0;
const walk = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((d) =>
      d.isDirectory()
        ? walk(path.join(dir, d.name))
        : d.name.endsWith(".tsx")
          ? [path.join(dir, d.name)]
          : [],
    );

for (const file of walk(SRC)) {
  const source = fs.readFileSync(file, "utf8");
  let fileReplacements = 0;
  const next = source.replace(STRING_LITERAL, (literal, quote, body) => {
    if (!/-\[#[0-9a-fA-F]{3,8}\]/.test(body)) return literal;
    const { out, changed } = transformClassString(body);
    if (!changed) return literal;
    fileReplacements += (body.match(UTILITY) || []).length;
    return quote + out + quote;
  });
  if (next !== source) {
    filesChanged += 1;
    replacements += fileReplacements;
    if (!DRY) fs.writeFileSync(file, next);
  }
}

console.log(
  `${DRY ? "[dry] " : ""}${replacements} colour utilities replaced in ${filesChanged} files`,
);
