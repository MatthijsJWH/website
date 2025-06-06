import adapter from "@sveltejs/adapter-static"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapters for more info
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
    // paths: {
    //   base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
    // },
    prerender: {
      handleHttpError: "warn",
    },
  },
}

export default config
