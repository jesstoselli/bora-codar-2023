import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      input: {
        // entry point for compilation; normally would be "./index.html"
        app: "./index.html",
      },
    },
  },
});
