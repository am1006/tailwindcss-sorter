const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

const production = process.argv.includes('--production');
const watch = process.argv.includes('--watch');

/**
 * Copy Tailwind CSS files needed for design system loading
 */
function copyTailwindCssFiles() {
	const tailwindPkgPath = path.dirname(require.resolve('tailwindcss/package.json'));
	const destDir = path.join(__dirname, 'dist', 'tailwindcss');

	// Ensure destination directory exists
	fs.mkdirSync(destDir, { recursive: true });

	// CSS files needed for @import "tailwindcss" to work
	const cssFiles = ['index.css', 'theme.css', 'preflight.css', 'utilities.css'];

	for (const file of cssFiles) {
		const src = path.join(tailwindPkgPath, file);
		const dest = path.join(destDir, file);
		if (fs.existsSync(src)) {
			fs.copyFileSync(src, dest);
			console.log(`Copied ${file} to dist/tailwindcss/`);
		}
	}
}

/**
 * @type {import('esbuild').Plugin}
 */
const esbuildProblemMatcherPlugin = {
	name: 'esbuild-problem-matcher',

	setup(build) {
		build.onStart(() => {
			console.log('[watch] build started');
		});
		build.onEnd((result) => {
			result.errors.forEach(({ text, location }) => {
				console.error(`✘ [ERROR] ${text}`);
				console.error(`    ${location.file}:${location.line}:${location.column}:`);
			});
			console.log('[watch] build finished');
		});
	},
};

async function main() {
	// Copy Tailwind CSS files before building
	copyTailwindCssFiles();

	const ctx = await esbuild.context({
		entryPoints: [
			'src/extension.ts'
		],
		bundle: true,
		format: 'cjs',
		minify: production,
		sourcemap: !production,
		sourcesContent: false,
		platform: 'node',
		outfile: 'dist/extension.js',
		external: ['vscode'],
		logLevel: 'silent',
		plugins: [
			/* add to the end of plugins array */
			esbuildProblemMatcherPlugin,
		],
	});
	if (watch) {
		await ctx.watch();
	} else {
		await ctx.rebuild();
		await ctx.dispose();
	}
}

main().catch(e => {
	console.error(e);
	process.exit(1);
});
