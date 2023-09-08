/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react";
import million from "million/compiler";
import { resolve } from "path";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    million.vite({ auto: true }),
    react(),
    checker({ typescript: true, eslint: { lintCommand: "eslint src" } }),
  ],
  resolve: {
    alias: [{ find: "~", replacement: resolve(__dirname, "src") }],
  },
});
