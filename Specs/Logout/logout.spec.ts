import { browser, element, by, ExpectedConditions, utils } from "protractor";
import { BrowserUtils } from '../../utils/browser.utils';
import { loginPage } from '../../Pages/loginPage.po';
import { dataProvider } from '../../TestData/dataprovider'

describe('Verify Login Page', () => {
    let loginPg: loginPage;
    loginPg = new loginPage();
    
    it('logout from application', () => {
        browser.ignoreSynchronization = true
        browser.sleep(2000);
        loginPg.profileicon().click();
        browser.sleep(2000);
        loginPg.logout().click();
        loginPg.keycloakusername().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'logout from application is successful')
         })
      });
    });