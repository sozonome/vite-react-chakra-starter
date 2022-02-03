import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(__dirname, "src/components"),
      styles: resolve(__dirname, "src/styles"),
      routes: resolve(__dirname, "src/routes"),
    },
  },
});
