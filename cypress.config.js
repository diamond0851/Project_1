const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.konga.com",
   "watchForFileChange":false,

    

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
