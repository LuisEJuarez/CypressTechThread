const { defineConfig } = require('cypress');

module.exports = defineConfig({
  watchForFileChanges: false,
  video: false,
  chromeWebSecurity: false, 
  pageLoadTimeout: 120000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //specPattern: 'cypress/e2e/**/*.js',
  },
});
