import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    global: true,
    environment: "jsdom",
    include: ["tests/**/*.test.js", "src/lib/**/*.test.js"],
    exclude: ["src/routes/**/*.{test,spec}.{js,ts,svelte}"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
  handleHttpError: "warn",
})
