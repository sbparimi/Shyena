import fs from "node:fs";

const read = (path) => fs.readFileSync(new URL(path, import.meta.url), "utf8");
const root = read("../src/routes/__root.tsx");
const siteTheme = read("../src/site-theme.css");
const typographyTheme = read("../src/enterprise-typography.css");
const canonicalTheme = read("../src/warp-theme.css");
const failures = [];

const siteThemePosition = root.indexOf("href: siteThemeCss");
const canonicalThemePosition = root.indexOf("href: warpThemeCss");

if (siteThemePosition < 0 || canonicalThemePosition < 0) {
  failures.push("The root route must load both site-theme.css and warp-theme.css.");
}
if (siteThemePosition >= 0 && canonicalThemePosition <= siteThemePosition) {
  failures.push("warp-theme.css must load after site-theme.css.");
}
if (root.includes("enterpriseTypographyCss")) {
  failures.push("Remove the competing enterprise typography stylesheet from the root cascade.");
}
if (/^\\s*(?:html|body)\\s*[,\\{]/m.test(siteTheme)) {
  failures.push("site-theme.css must not declare global html/body theme rules.");
}
if (/\\.site-theme\\s*:where\\(\\s*h1/i.test(siteTheme)) {
  failures.push("site-theme.css must not define global heading typography.");
}
if (typographyTheme.trim() !== "/* Typography is owned by the canonical warp-theme.css design system. */") {
  failures.push("enterprise-typography.css must remain a compatibility stub, not a second theme.");
}

for (const token of [
  "--warp-canvas:",
  "--warp-surface:",
  "--warp-surface-soft:",
  "--warp-ink:",
  "--warp-muted:",
  "--warp-border:",
  "--warp-blue:",
  "--warp-lime:",
]) {
  if (!canonicalTheme.includes(token)) failures.push(`Canonical theme is missing token ${token}`);
}

for (const hook of [
  'data-shyena-chrome="header"',
  'data-shyena-chrome="footer"',
]) {
  if (!root.includes(hook) && !read("../src/components/site/site-header.tsx").includes(hook) &&
      !read("../src/components/site/site-footer.tsx").includes(hook)) {
    failures.push(`Expected semantic theme hook ${hook} was not found.`);
  }
}

if (failures.length) {
  console.error("Theme contract failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log("Theme contract passed: one canonical theme, stable chrome hooks, and ordered CSS cascade.");
}
