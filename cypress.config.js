const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: "cypress/e2e/TESTS/**/*.cy.js",
    reporter : "cypress-mochawesome-reporter"
  },
  env: {
    BASE_URL : 'https://www.saucedemo.com/',
    USERNAME : 'standard_user',
    PASSWORD : 'secret_sauce'
  }
  
  
 
})
