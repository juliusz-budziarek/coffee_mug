import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.automationpractice.pl/index.php",
  },
  "defaultCommandTimeout": 10000,
  "viewportHeight": 1080,
  "viewportWidth": 1920,
  "watchForFileChanges": false
});

