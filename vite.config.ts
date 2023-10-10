/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react";
import million from "million/compiler";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    million.vite({ auto: true }),
    react(),
    checker({ typescript: true, eslint: { lintCommand: "eslint src" } }),
    tsconfigPaths(),
  ],
  server: {
    open: true,
    port: 4321,
  },
});
