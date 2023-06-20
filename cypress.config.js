const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			return require('./cypress/plugins/index.js')(on, config);
		}
	},
	env: {
		apiUrl: 'http://localhost:3000',
		mobileViewportWidthBreakpoint: 414,
		coverage: false,
		codeCoverage: {
			url: 'http://localhost:3000/__coverage__'
		}
	},
	experimentalStudio: true
});
