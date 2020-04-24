import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn(warning);

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		moduleContext: (id) => {
			// In order to match native module behaviour, Rollup sets `this`
			// as `undefined` at the top level of modules. Rollup also outputs
			// a warning if a module tries to access `this` at the top level.
			// The following modules use `this` at the top level and expect it
			// to be the global `window` object, so we tell Rollup to set
			// `this = window` for these modules.
			const thisAsWindowForModules = [
				'node_modules/intl-messageformat/lib/core.js',
				'node_modules/intl-messageformat/lib/formatters.js',
				'node_modules/intl-format-cache/lib/index.js',
				'node_modules/intl-messageformat-parser/lib/normalize.js',
				'node_modules/intl-messageformat-parser/lib/parser.js',
				'node_modules/intl-messageformat-parser/lib/skeleton.js',
			];
			if (thisAsWindowForModules.some(id_ => id.trimRight().endsWith(id_))) {
				return 'window';
			}
		},
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true,
				preserveWhitespace: true,
				preserveComments: true,
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			json({
				namedExports: false,
				compact: !dev,
			}),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				runtimeHelpers: true,
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		moduleContext: (id) => {
			// In order to match native module behaviour, Rollup sets `this`
			// as `undefined` at the top level of modules. Rollup also outputs
			// a warning if a module tries to access `this` at the top level.
			// The following modules use `this` at the top level and expect it
			// to be the global `window` object, so we tell Rollup to set
			// `this = window` for these modules.
			const thisAsWindowForModules = [
				'node_modules/intl-messageformat/lib/core.js',
				'node_modules/intl-messageformat/lib/formatters.js',
				'node_modules/intl-format-cache/lib/index.js',
				'node_modules/intl-messageformat-parser/lib/normalize.js',
				'node_modules/intl-messageformat-parser/lib/parser.js',
				'node_modules/intl-messageformat-parser/lib/skeleton.js',
			];
			if (thisAsWindowForModules.some(id_ => id.trimRight().endsWith(id_))) {
				return 'this';
			}
		},
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				generate: 'ssr',
				dev,
				preserveWhitespace: true,
				preserveComments: true,
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs(),
			json({
				namedExports: false,
				compact: !dev,
			}),
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),

		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			commonjs(),
			!dev && terser()
		],

		onwarn,
	}
};
