const assert = require('assert');
const Browser = require('zombie');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('example.com', 4000);

describe('User visits login page', function () {

    const browser = new Browser();

    before(function (done) {
        browser.visit('/auth/login', done);
    });

    describe('submits form', function () {

        before(function (done) {
            browser.fill('email', 'admin@admin.com')
            browser.fill('password', '123456')
            return browser.pressButton('Sign In', done);
        });

        it('should be successful', function () {
            browser.assert.redirected();
            assert(browser.cookies.length > 0)
        });
    });
});