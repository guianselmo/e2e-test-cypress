const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 10000,
    video: true,
    env: {
      viewportWidthBreakpoint: 768,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
