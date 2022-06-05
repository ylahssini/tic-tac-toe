import adapter from "@sveltejs/adapter-static";
import sveltePreprocess from 'svelte-preprocess';

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
	preprocess: sveltePreprocess(),
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        paths: {
            base: dev ? "" : "/tic-tac-toe",
        },
		prerender: {
			default: true,
		}
    }
};

export default config;
