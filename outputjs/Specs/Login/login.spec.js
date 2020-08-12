"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../../utils/browser.utils");
const loginPage_po_1 = require("../../Pages/loginPage.po");
const dataprovider_1 = require("../../TestData/dataprovider");
describe('Verify Login Page', () => {
    let loginPg;
    loginPg = new loginPage_po_1.loginPage();
    beforeAll(() => {
        protractor_1.browser.manage().window().maximize();
        browser_utils_1.BrowserUtils.enterUrl();
    });
    it('keycloak login', () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.waitForAngularEnabled(false);
        //browser.waitForAngularEnabled(true);
        var dataObj = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'keycloakdata');
        loginPg.keycloak(dataObj);
        setTimeout(() => {
            protractor_1.browser.waitForAngularEnabled(true);
        }, 20000);
    });
    // it('display error message on accessing wth invaid credentials', () => {
    //   var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'invalidLoginData')
    //    loginPg.login(dataObj);
    //    loginPg.OkButton().click();
    // });
    // it('login is successful with valid credentials', () => {
    //    loginPg.userName().clear();
    //    loginPg.passWord().clear();
    //   var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'validLoginData')
    //   loginPg.login(dataObj);
    // });
});
