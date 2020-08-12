"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../utils/browser.utils");
const dataprovider_1 = require("../TestData/dataprovider");
var path = require("path");
class AppsPage {
    applink() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Apps']"));
    }
    editicon() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-icon[text()='edit'])[1]"));
    }
    Submit() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Submit']"));
    }
    Cancel() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Cancel']"));
    }
    Clear() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Clear']"));
    }
    Updateapp() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/Apps/AppsData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                this.applink().click();
                protractor_1.browser.sleep(5000);
                this.editicon().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='appName']"), record["appName"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='appURL']"), record["appURL"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@type='url']"), record["url"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='description']"), record["description"]);
                protractor_1.browser.sleep(1000);
                this.Submit().click();
                protractor_1.browser.sleep(5000);
                this.editicon().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'App is updated successfully');
                });
            });
        }
    }
    ClearUpdateappopup() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/Apps/AppsData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                this.applink().click();
                protractor_1.browser.sleep(5000);
                this.editicon().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='appName']"), record["appName"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='appURL']"), record["appURL"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@type='url']"), record["url"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='description']"), record["description"]);
                protractor_1.browser.sleep(1000);
                this.Clear().click();
                protractor_1.browser.sleep(1000);
                this.Cancel().click();
                protractor_1.browser.sleep(5000);
                this.editicon().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'App popup is cleaered successfully');
                });
            });
        }
    }
    CancelUpdateappopup() {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.sleep(5000);
        this.applink().click();
        protractor_1.browser.sleep(5000);
        this.editicon().click();
        protractor_1.browser.sleep(1000);
        this.Cancel().click();
        protractor_1.browser.sleep(5000);
        this.editicon().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'App popup is cancelled successfully');
        });
    }
}
exports.AppsPage = AppsPage;
