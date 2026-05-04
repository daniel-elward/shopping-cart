import { defineConfig, EnvironmentModuleGraph } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    //DONT EVER DO THIS AGAIN!!!!
    // enviroment: "jsdom",

    environment: "jsdom",
    setupFiles: "./src/tests/setup.js",
  },
});
