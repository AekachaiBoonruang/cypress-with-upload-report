
const { defineConfig } = require('cypress')
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/', 'config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/results/",
      charts: true,
      reportPageTitle: "custom-title",
      embeddedScreenshots: true
    },
    screenshotsFolder: "cypress/results/screenshots",
    videosFolder: "cypress/results/videos",
    video: true,
    waitForAnimations: true,
    chromeWebSecurity: false,
    supportFile: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
        const file = config.env.configFile || 'dev'
        return getConfigurationByFile(file)
    }
  },
  
})