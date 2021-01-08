const BROWSER_NAME = 'chrome'
var AllureReporter = require('jasmine-allure-reporter');
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        browserName: BROWSER_NAME
    },
    onPrepare: () => {
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach((done) => {
            browser.takeScreenshot().then((png) => {
                allure.createAttachment('Screenshot', () => {
                    return Buffer.from(png, 'base64')
                }, 'image/png')();
                done();
            });
        });
    }
};