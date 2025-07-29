import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";
import path from "node:path";

export default defineConfig({
  plugins: [react(), imagetools()], 
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/styles/variables.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },
});
