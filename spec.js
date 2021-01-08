const BROWSER_NAME = 'chrome'
require('jasmine-allure-reporter');
const {
    browser,
    element
} = require("protractor")

describe('hls.js: play ' + BROWSER_NAME, function () {
    it('play check after 5sec', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:8080/hlsjs.html')
        element(by.id('btnPlay')).click()
        browser.sleep(5000)
        element(by.id('btnCheck')).click()
        browser.sleep(100)
        const playing = element(by.id('checkResult')).getText()
        expect(playing).toBe("is playing", "video is not playing")
        element(by.id('log')).getText().then(function (text) {
            allure.createAttachment('player-log', function () {
                return text;
            })();
        })
    })
})

describe('video.js: play ' + BROWSER_NAME, function () {
    it('play check after 5sec', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:8080/videojs.html')
        element(by.id('btnPlay')).click()
        browser.sleep(5000)
        element(by.id('btnCheck')).click()
        browser.sleep(100)
        const playing = element(by.id('checkResult')).getText()
        expect(playing).toBe("is playing", "video is not playing")
        element(by.id('log')).getText().then(function (text) {
            allure.createAttachment('player-log', function () {
                return text;
            })();
        })
    })
})
