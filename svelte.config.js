import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		paths: {
			base: dev ? '' : '/cdc-landing',
			// base: dev ? '' : process.env.BASE_PATH,
			relative: false, // For github pages
		},
	},
	preprocess: [vitePreprocess()]
};

export default config;
