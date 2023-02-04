import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { posts } from './src/lib/collections.js'


/** @type {import('@sveltejs/kit').Config} */
const config = {


	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		prerender: { entries: ["*", ...posts]},
		alias: {
			"$styles": "src/lib/styles",
		}
	}
};


export default config;
