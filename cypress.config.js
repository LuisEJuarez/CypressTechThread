const { defineConfig } = require('cypress');

//VErify download import
const { isFileExist, findFiles } = require('cy-verify-downloads');

module.exports = defineConfig({
  watchForFileChanges: false,
  video: false,
  chromeWebSecurity: false, 
  pageLoadTimeout: 120000,
  //viewportHeight: 1000,  //these are settings to set the size of the screen
  //viewportWidth: 1400,
  //defaultCommandTimeout:30000,   //It is not recomended
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //VErify download import
      on("task", { isFileExist, findFiles});
    },
    env:{
      demoVar: "Hello there, it comes from config.js",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com",
      angular: "https://www.globalsqa.com"
    }
    //specPattern: 'cypress/e2e/**/*.js',
  },
});
