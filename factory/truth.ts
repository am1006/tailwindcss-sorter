// Truth generation: sort the corpus with the OFFICIAL prettier-plugin-tailwindcss
// (driven via prettier's API over a synthetic HTML attribute) and write
// truth.json. The gem's compat test replays the corpus against the vendored
// bundle and asserts zero disagreement - that pair is the fidelity tripwire.
import { readFileSync, writeFileSync } from "node:fs";
import prettier from "prettier";

const stylesheet = process.argv[2] ?? new URL("user.css", import.meta.url).pathname;

async function sortViaPlugin(classString: string): Promise<string> {
  const html = `<div class="${classString}"></div>\n`;
  const formatted = await prettier.format(html, {
    parser: "html",
    plugins: ["prettier-plugin-tailwindcss"],
    tailwindStylesheet: stylesheet,
    printWidth: 100000,
  });
  const match = formatted.match(/class="([^"]*)"/);
  if (match === null) throw new Error(`could not extract classes from: ${formatted}`);
  return match[1];
}

// Self-check: prove the plugin actually sorts before trusting it.
const probe = await sortViaPlugin("px-4 flex");
if (probe !== "flex px-4") {
  throw new Error(`plugin is not sorting (probe returned "${probe}")`);
}

const corpus = JSON.parse(readFileSync("corpus.json", "utf-8")) as string[];
const sorted: string[] = [];
for (const classString of corpus) sorted.push(await sortViaPlugin(classString));

writeFileSync("truth.json", JSON.stringify(sorted, null, 2));
console.log(`truth.json written: ${sorted.length} entries (official plugin, stylesheet: ${stylesheet})`);
