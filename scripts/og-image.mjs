// Renders og/og-image.html to public/og-image.png (1200×630) with headless Chrome.
// Usage: npm run og   (set CHROME=/path/to/chrome if it isn't found)
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const candidates = [
  process.env.CHROME,
  "google-chrome-stable",
  "google-chrome",
  "chromium",
  "chromium-browser",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

function findChrome() {
  for (const bin of candidates) {
    try {
      execFileSync(bin, ["--version"], { stdio: "ignore" });
      return bin;
    } catch {
      // try the next one
    }
  }
  throw new Error("Chrome not found; set CHROME=/path/to/chrome");
}

const source = pathToFileURL(resolve("og/og-image.html")).href;
const out = resolve("public/og-image.png");
const profile = mkdtempSync(join(tmpdir(), "og-chrome-"));

try {
  execFileSync(
    findChrome(),
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      // the template reads the drawing's pixels from a local file
      "--allow-file-access-from-files",
      `--user-data-dir=${profile}`,
      "--window-size=1200,630",
      "--virtual-time-budget=5000",
      `--screenshot=${out}`,
      source,
    ],
    { stdio: "inherit" }
  );
} finally {
  rmSync(profile, { recursive: true, force: true });
}

if (!existsSync(out)) throw new Error("No screenshot was written");
console.log(`Wrote ${out}`);
