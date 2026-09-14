// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";
import keystatic from "@keystatic/astro";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://seamed.com.ar",
  output: "static",
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [keystatic(), react()],
});
