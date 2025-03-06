import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "/src/styles/index.scss" as *;`,
        // additionalData: `@use "@/styles/index.scss" as *;`,
        // additionalData: `@import "@/styles/index.scss";`,
        additionalData: `@use "/src/styles/variables.scss" as *;`,


      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve("src"), // ✅ Pas besoin de "__dirname"
    },
  },
});