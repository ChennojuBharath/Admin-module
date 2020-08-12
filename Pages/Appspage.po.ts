import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
var path = require("path");
export class AppsPage {
    applink() {
        return element(by.xpath("//div[text()='Apps']"));
    }
    editicon() {
        return element(by.xpath("(//mat-icon[text()='edit'])[1]"));
    }
    Submit() {
        return element(by.xpath("//span[text()='Submit']"))
    }
    Cancel() {
        return element(by.xpath("//span[text()='Cancel']"))
    }
    Clear() {
        return element(by.xpath("//span[text()='Clear']"))
    }
Updateapp(){
    browser.ignoreSynchronization = true
    var dataRecs = dataProvider.getJsonDataFromFile('./TestData/Apps/AppsData.json', null)
    if (dataRecs && dataRecs.length > 0) {
        dataRecs.forEach(record => {
            browser.sleep(5000);
            this.applink().click();
            browser.sleep(5000);
            this.editicon().click();
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//input[@formcontrolname='appName']"), record["appName"]);
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//input[@formcontrolname='appURL']"), record["appURL"]);
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//input[@type='url']"), record["url"]);
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//input[@formcontrolname='description']"), record["description"]);
            browser.sleep(1000);
            this.Submit().click();
            browser.sleep(5000);
            this.editicon().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'App is updated successfully')
            })
        })
    }  
}
ClearUpdateappopup(){
    browser.ignoreSynchronization = true
    var dataRecs = dataProvider.getJsonDataFromFile('./TestData/Apps/AppsData.json', null)
    if (dataRecs && dataRecs.length > 0) {
        dataRecs.forEach(record => {
            browser.sleep(5000);
            this.applink().click();
            browser.sleep(5000);
            this.editicon().click();
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//input[@formcontrolname='appName']"), record["appName"]);
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//input[@formcontrolname='appURL']"), record["appURL"]);
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//input[@type='url']"), record["url"]);
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//input[@formcontrolname='description']"), record["description"]);
            browser.sleep(1000);
            this.Clear().click();
            browser.sleep(1000);
            this.Cancel().click();
            browser.sleep(5000);
            this.editicon().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'App popup is cleaered successfully')
            })
        })
    }  
}
CancelUpdateappopup(){
    browser.ignoreSynchronization = true
            browser.sleep(5000);
            this.applink().click();
            browser.sleep(5000);
            this.editicon().click();
            browser.sleep(1000);
            this.Cancel().click();
            browser.sleep(5000);
            this.editicon().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'App popup is cancelled successfully')
            })
  
}
}