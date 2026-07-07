// The engine-agnostic oracle bundle: Tailwind's design system + the sort shell,
// with the four CSS data files embedded as strings. No node APIs, no fs - the
// same resolution logic as v1's context.ts, minus the filesystem.
import { __unstable__loadDesignSystem } from "tailwindcss";
import indexCss from "tailwindcss/index.css";
import themeCss from "tailwindcss/theme.css";
import preflightCss from "tailwindcss/preflight.css";
import utilitiesCss from "tailwindcss/utilities.css";

type DesignSystem = Awaited<ReturnType<typeof __unstable__loadDesignSystem>>;

// Injected by build.ts at bundle time.
declare const TAILWIND_VERSION: string;
declare const ENTRY_SHA: string;

declare global {
  var __twMeta: { tailwind: string; entrySha: string };
  var __tw: {
    design: DesignSystem | null;
    error: string | null;
    ready: boolean;
    warnings: string[];
  };
  var __twInit: (userCss: string) => void;
  var __twSort: (classString: string) => string;
  var __twSortBatch: (jsonArray: string) => string;
}

const EMBEDDED_BASE = "//tailwindcss";
const EMBEDDED: Record<string, string> = {
  "index.css": indexCss,
  "theme.css": themeCss,
  "preflight.css": preflightCss,
  "utilities.css": utilitiesCss,
};

function resolveEmbedded(id: string, base: string): string | null {
  if (id === "tailwindcss") return "index.css";
  if (id.startsWith("tailwindcss/")) return id.slice("tailwindcss/".length);
  if (base === EMBEDDED_BASE) return id.replace(/^\.\//, "");
  return null;
}

// Provenance - the gem's freshness tests assert both.
globalThis.__twMeta = { tailwind: TAILWIND_VERSION, entrySha: ENTRY_SHA };

globalThis.__tw = { design: null, error: null, ready: false, warnings: [] };

globalThis.__twInit = function (userCss: string): void {
  __unstable__loadDesignSystem(userCss, {
    base: "//app",

    // Plugins aren't needed for sorting - mirror v1's empty-module tolerance
    loadModule: async (id: string, base: string) => ({ path: id, base, module: {} }),

    loadStylesheet: async (id: string, base: string) => {
      const key = resolveEmbedded(id, base);
      if (key !== null && EMBEDDED[key] !== undefined) {
        return { path: key, base: EMBEDDED_BASE, content: EMBEDDED[key] };
      }
      globalThis.__tw.warnings.push(`unresolved stylesheet: ${id} (base ${base})`);
      return { path: id, base, content: "" };
    },
  })
    .then((design) => {
      globalThis.__tw.design = design;
      globalThis.__tw.ready = true;
    })
    .catch((error: unknown) => {
      globalThis.__tw.error = String(error instanceof Error ? error.stack ?? error : error);
    });
};

// The ported 40-line shell: rank via the design system, stable-sort with
// unknowns first, dedupe known classes.
function bigSign(value: bigint): number {
  return Number(value > 0n) - Number(value < 0n);
}

globalThis.__twSort = function (classString: string): string {
  const design = globalThis.__tw.design;
  if (design === null) throw new Error("design system not initialized - call __twInit first");

  const classes = classString.split(/\s+/).filter(Boolean);
  const ordered = design.getClassOrder(classes);

  ordered.sort(([, a], [, z]) => {
    if (a === z) return 0;
    if (a === null) return -1;
    if (z === null) return 1;
    return bigSign(a - z);
  });

  const seen = new Set<string>();
  const result: string[] = [];
  for (const [cls, order] of ordered) {
    if (seen.has(cls)) continue;
    if (order !== null) seen.add(cls);
    result.push(cls);
  }
  return result.join(" ");
};

globalThis.__twSortBatch = function (jsonArray: string): string {
  const strings = JSON.parse(jsonArray) as string[];
  return JSON.stringify(strings.map((s) => globalThis.__twSort(s)));
};

export {};
