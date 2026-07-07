// Builds the oracle bundle from entry.ts straight into the gem's vendor/ -
// no hand copying. Stamps provenance (tailwindcss version + entry.ts sha256)
// into the bundle; the gem's tests assert both, so a stale or hand-edited
// bundle turns the suite red.
import * as esbuild from "esbuild";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const entrySha = createHash("sha256").update(readFileSync("entry.ts")).digest("hex");
const pkg = JSON.parse(readFileSync("node_modules/tailwindcss/package.json", "utf-8")) as { version: string };
const outfile = "../gems/rubocop-tailwindcss/vendor/tw-bundle.js";

await esbuild.build({
  entryPoints: ["entry.ts"],
  bundle: true,
  format: "iife",
  platform: "neutral",
  target: "es2020",
  outfile,
  loader: { ".css": "text" },
  define: {
    TAILWIND_VERSION: JSON.stringify(pkg.version),
    ENTRY_SHA: JSON.stringify(entrySha),
  },
  banner: {
    js: [
      `// tw-bundle.js - BUILT ARTIFACT, DO NOT EDIT`,
      `// source: factory/entry.ts (sha256 ${entrySha})`,
      `// tailwindcss ${pkg.version} - rebuild with: cd factory && npm run build`,
    ].join("\n"),
  },
  logLevel: "info",
});

console.log(`stamped: tailwindcss ${pkg.version}, entry.ts ${entrySha.slice(0, 12)}…`);
