// An example configuration file.
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
   
    //seleniumArgs: ['-Dwebdriver.ie.driver=C:\Users\tomson.ngassa\AppData\Roaming\npm\node_modules\protractor\IEDriverServer.exe'],
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
          'browserName': 'chrome'
        // 'browserName': 'firefox'
        //'browserName': 'internet explorer'
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    //specs: ['mocha/onMocha.js'],
    specs: ['../e2e/bham.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
