import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes("chevrotain")) {
          return "chevrotain";
        }
      },
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.code === "EVAL" &&
          warning.id?.includes("to-fast-properties.js")
        ) {
          return;
        }
        warn(warning);
      },
      output: {},
    },
  },
});
