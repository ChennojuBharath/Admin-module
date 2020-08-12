import { browser, element, by, ExpectedConditions, utils } from "protractor";
import { BrowserUtils } from '../../utils/browser.utils';
import { loginPage } from '../../Pages/loginPage.po';
import { dataProvider } from '../../TestData/dataprovider'


describe('Verify Login Page', () => {
  let loginPg: loginPage;
  loginPg = new loginPage();

  beforeAll(() => {
    browser.manage().window().maximize();
    BrowserUtils.enterUrl();
   
  });
  it('keycloak login', () => {
    browser.ignoreSynchronization = true
    browser.waitForAngularEnabled(false);
    var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'keycloakdata')
    loginPg.keycloak(dataObj);
    setTimeout(() => {
      browser.waitForAngularEnabled(true);  
    }, 20000);
  });
});