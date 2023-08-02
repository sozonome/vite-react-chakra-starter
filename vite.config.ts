/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "~", replacement: resolve(__dirname, "src") }],
  },
});
