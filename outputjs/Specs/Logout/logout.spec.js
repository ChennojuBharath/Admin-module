"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const loginPage_po_1 = require("../../Pages/loginPage.po");
describe('Verify Login Page', () => {
    let loginPg;
    loginPg = new loginPage_po_1.loginPage();
    it('logout from application', () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.sleep(2000);
        loginPg.profileicon().click();
        protractor_1.browser.sleep(2000);
        loginPg.logout().click();
        loginPg.keycloakusername().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'logout from application is successful');
        });
    });
});
