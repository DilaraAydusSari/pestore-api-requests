const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "pki5t1",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

module.exports = defineConfig({
  e2e: {
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/reports",
      "overwrite": false,
      "html": true,
      "json": true,
      "charts": true
    }
  },
});