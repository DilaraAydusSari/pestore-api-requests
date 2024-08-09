const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "pki5t1",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
