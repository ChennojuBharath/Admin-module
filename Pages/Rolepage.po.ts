import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
var path = require("path");
export class RolesPage {
    rolelink() {
        return element(by.xpath("//div[text()='Role']"));
    }
    AddRole() {
        return element(by.xpath("//span[text()='Add Role']"))
    }
    Cancel() {
        return element(by.xpath("//span[text()='Cancel']"))
    }
    Clear() {
        return element(by.xpath("//span[text()='Clear']"))
    }
    Save() {
        return element(by.xpath("//span[text()='Add Role']"))
    }
Createrole(){
    browser.ignoreSynchronization = true
    var dataRecs = dataProvider.getJsonDataFromFile('./TestData/Role/RoleData.json', null)
    if (dataRecs && dataRecs.length > 0) {
        dataRecs.forEach(record => {
            browser.sleep(5000);
            this.rolelink().click();
            browser.sleep(5000);
            this.AddRole().click();
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//input[@formcontrolname='roleName']"), record["roleName"]);
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//input[@formcontrolname='description']"), record["description"]);
            browser.sleep(1000);
            this.Save().click();
            browser.sleep(5000);
            this.AddRole().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'Role is created successfully')
            })
        })
    }  
}
ClearCreaterolepopupdata(){
    browser.ignoreSynchronization = true
    var dataRecs = dataProvider.getJsonDataFromFile('./TestData/Role/RoleData.json', null)
    if (dataRecs && dataRecs.length > 0) {
        dataRecs.forEach(record => {
            browser.sleep(5000);
            this.rolelink().click();
            browser.sleep(5000);
            this.AddRole().click();
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//input[@formcontrolname='roleName']"), record["roleName"]);
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//input[@formcontrolname='description']"), record["description"]);
            browser.sleep(1000);
            this.Clear().click();
            browser.sleep(1000);
            this.Cancel().click();
            browser.sleep(5000);
            this.AddRole().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'Role popup  is cleared successfully')
            })
        })
    }  
}
CancelCreaterole(){
    browser.ignoreSynchronization = true
            browser.sleep(5000);
            this.rolelink().click();
            browser.sleep(5000);
            this.AddRole().click();
            browser.sleep(1000);
            this.Cancel().click();
            browser.sleep(5000);
            this.AddRole().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'Role popup is cancelled  successfully')
            })
  
}
}