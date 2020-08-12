"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../utils/browser.utils");
const dataprovider_1 = require("../TestData/dataprovider");
var path = require("path");
class RolesPage {
    rolelink() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Role']"));
    }
    AddRole() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Add Role']"));
    }
    Cancel() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Cancel']"));
    }
    Clear() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Clear']"));
    }
    Save() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Add Role']"));
    }
    Createrole() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/Role/RoleData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                this.rolelink().click();
                protractor_1.browser.sleep(5000);
                this.AddRole().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='roleName']"), record["roleName"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='description']"), record["description"]);
                protractor_1.browser.sleep(1000);
                this.Save().click();
                protractor_1.browser.sleep(5000);
                this.AddRole().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Role is created successfully');
                });
            });
        }
    }
    ClearCreaterolepopupdata() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/Role/RoleData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                this.rolelink().click();
                protractor_1.browser.sleep(5000);
                this.AddRole().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='roleName']"), record["roleName"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='description']"), record["description"]);
                protractor_1.browser.sleep(1000);
                this.Clear().click();
                protractor_1.browser.sleep(1000);
                this.Cancel().click();
                protractor_1.browser.sleep(5000);
                this.AddRole().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Role popup  is cleared successfully');
                });
            });
        }
    }
    CancelCreaterole() {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.sleep(5000);
        this.rolelink().click();
        protractor_1.browser.sleep(5000);
        this.AddRole().click();
        protractor_1.browser.sleep(1000);
        this.Cancel().click();
        protractor_1.browser.sleep(5000);
        this.AddRole().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Role popup is cancelled  successfully');
        });
    }
}
exports.RolesPage = RolesPage;
