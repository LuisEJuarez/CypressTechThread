const { defineConfig } = require('cypress');

//Verify download import
const { isFileExist, findFiles } = require('cy-verify-downloads');

//Excel requirements ****npm install node-xlsx --save-dev
const xlsx = require("node-xlsx").default;
const fs = require("fs"); // for file
const path = require("path"); // for file path

module.exports = defineConfig({
  watchForFileChanges: false,
  video: false,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  pageLoadTimeout: 120000,
  //viewportHeight: 1000,  //these are settings to set the size of the screen
  //viewportWidth: 1400,
  //defaultCommandTimeout:30000,   //It is not recomended
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Tech Thread',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //VErify download import
      on("task", { isFileExist, findFiles });

      //Excel implementation
      on("task",{
        parseXlsx({ filePath }){
            return new Promise((resolve, reject) => {
              try{
                const jsonData = xlsx.parse(fs.readFileSync(filePath));
                resolve(jsonData);
              }catch(e){
                reject(e);
              }
            });
        },
      });
      //For the mocha awesome reporter  https://www.npmjs.com/package/cypress-mochawesome-reporter
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env: {
      demoVar: "Hello there, it comes from config.js",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com",
      angular: "https://www.globalsqa.com"
    }
    //specPattern: 'cypress/e2e/**/*.js',
  },
});
