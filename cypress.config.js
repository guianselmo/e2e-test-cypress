const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    projectId: "sc653o",
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 10000,
    video: true,
    env: {
      viewportWidthBreakpoint: 768,
    }
  },
});
