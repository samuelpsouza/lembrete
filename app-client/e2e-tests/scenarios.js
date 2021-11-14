'use strict';

describe('lembrete app', function() {

    it('should automatically redirect to /login when location hash/fragment is empty', function() {
        browser.get('login.html');
        expect(browser.getLocationAbsUrl()).toMatch("/login");
    });

    describe('login', function() {
        beforeEach(function() {
            browser.get('index.html#!/login');
        });

        it('should render login when user navigates to /login', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/partial for view login/);
        });
    });
});
