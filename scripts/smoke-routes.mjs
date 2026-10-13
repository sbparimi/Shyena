// Route smoke test: every static route and sitemap URL must render without a 5xx or the
// error boundary, and every HTML page must expose exactly one <h1>.
// Usage: node scripts/smoke-routes.mjs http://127.0.0.1:3000
import fs from "node:fs";

const base = process.argv[2] ?? "http://127.0.0.1:3000";
const tree = fs.readFileSync("src/routeTree.gen.ts", "utf8");
const block = tree.match(/export interface FileRoutesByFullPath \{([\s\S]*?)\}/)?.[1] ?? "";
const paths = new Set(
  [...block.matchAll(/'([^']+)'/g)]
    .map((m) => m[1])
    .filter((p) => p && !p.includes("$") && !p.startsWith("/api")),
);
for (const f of fs.readdirSync("content/blog"))
  if (/^[a-z0-9-]+\.md$/.test(f)) paths.add(`/blog/${f.replace(/\.md$/, "")}`);

const failures = [];
for (const p of [...paths].sort()) {
  const res = await fetch(base + p, { redirect: "manual" });
  const html = await res.text();
  if (res.status >= 500) failures.push(`${p}: HTTP ${res.status}`);
  else if (res.status === 200) {
    if (/This page didn(?:'|&#x27;|&#39;)t load/.test(html))
      failures.push(`${p}: error boundary rendered`);
    const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
    if (h1 !== 1) failures.push(`${p}: expected one <h1>, found ${h1}`);
  }
}
console.log(`Checked ${paths.size} routes.`);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
