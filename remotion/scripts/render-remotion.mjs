// Renders the branded hero video and writes it straight into the site's
// public/ directory as a normal static asset — no Lovable asset-proxy
// dependency (see git history for why that mattered: videos referenced
// through Lovable's own hosting 404 on this git-synced deployment, twice).
//
// Invoked from .github/workflows/render-hero-video.yml on a GitHub Actions
// ubuntu-latest runner, NOT from Vercel's build step — Vercel's build image
// (Amazon Linux 2023) is missing shared libraries headless Chrome needs at
// runtime (libnspr4 and friends) and its build sandbox has no root access
// to install them, which makes build-time rendering there a dead end.
// ubuntu-latest ships Chrome preinstalled, so this runs there instead and
// commits the output; Vercel just serves the resulting static file.
import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition, openBrowser } from "@remotion/renderer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT = process.env.OUT ?? path.resolve(__dirname, "../../public/hero-video.mp4");

async function main() {
  const bundled = await bundle({
    entryPoint: path.resolve(__dirname, "../src/index.ts"),
    webpackOverride: (config) => config,
  });

  // No browserExecutable override unless explicitly provided — Remotion
  // downloads and manages its own Chrome Headless Shell by default, which
  // is portable across build environments (Vercel included) instead of
  // depending on a path that only exists in one specific container.
  const browser = await openBrowser("chrome", {
    ...(process.env.PUPPETEER_EXECUTABLE_PATH
      ? { browserExecutable: process.env.PUPPETEER_EXECUTABLE_PATH }
      : {}),
    chromiumOptions: {
      args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"],
    },
    chromeMode: "chrome-for-testing",
  });

  try {
    const composition = await selectComposition({
      serveUrl: bundled,
      id: "main",
      puppeteerInstance: browser,
    });

    await renderMedia({
      composition,
      serveUrl: bundled,
      codec: "h264",
      outputLocation: OUTPUT,
      puppeteerInstance: browser,
      concurrency: 1,
    });
  } finally {
    await browser.close({ silent: false });
  }

  console.log(`Remotion render complete: ${OUTPUT}`);
}

main().catch((error) => {
  console.error("Remotion render failed (non-fatal, site build continues):", error);
  process.exit(1);
});
