const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://automationexercise.com',
    //viewportHeight: 500,
   // viewportWidth: 500,
   // watchForFileChanges: by default true but we can change it to false if we don't want to watch for file changes,
  },
});
