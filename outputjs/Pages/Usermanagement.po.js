"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../utils/browser.utils");
const dataprovider_1 = require("../TestData/dataprovider");
var path = require("path");
class UsermanagementPage {
    UserManagementlink() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='User Management']"));
    }
    Importorganization() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Import Oraganization']"));
    }
    usericon() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-icon[text()='supervised_user_circle'])[1]"));
    }
    typefile() {
        return protractor_1.element(protractor_1.by.xpath("//input[@type='file']"));
    }
    editicon() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-icon[text()='edit'])[1]"));
    }
    deleteicon() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-icon[text()='delete'])[1]"));
    }
    namefeild() {
        return protractor_1.element(protractor_1.by.xpath("//input[@formcontrolname='name']"));
    }
    Import() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Import')]"));
    }
    Save() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Save']"));
    }
    Update() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Update']"));
    }
    Cancel() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Cancel']"));
    }
    Clear() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Clear']"));
    }
    okbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Ok']"));
    }
    Adduserbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Add User ']"));
    }
    firstName() {
        return protractor_1.element(protractor_1.by.xpath("//input[@formcontrolname='firstName']"));
    }
    lastName() {
        return protractor_1.element(protractor_1.by.xpath("//input[@formcontrolname='lastName']"));
    }
    userName() {
        return protractor_1.element(protractor_1.by.xpath("//input[@formcontrolname='userName']"));
    }
    mobile() {
        return protractor_1.element(protractor_1.by.xpath("//input[@formcontrolname='mobile']"));
    }
    emailId() {
        return protractor_1.element(protractor_1.by.xpath("//input[@formcontrolname='emailId']"));
    }
    AddUser() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/Usermanagement/UsermanagementData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                this.UserManagementlink().click();
                protractor_1.browser.sleep(5000);
                this.Adduserbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='firstName']"), record["firstName"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='lastName']"), record["lastName"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='userName']"), record["userName"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='mobile']"), record["mobile"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='emailId']"), record["emailId"]);
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='oraganization']"), record["Reporting"]);
                protractor_1.browser.sleep(1000);
                this.Save().click();
                protractor_1.browser.sleep(5000);
                this.Adduserbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'User is created successfully');
                });
            });
        }
    }
    ImportUser() {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.sleep(5000);
        this.UserManagementlink().click();
        protractor_1.browser.sleep(2000);
        this.Import().click();
        protractor_1.browser.sleep(2000);
        var path1 = '../../TestData/users.json';
        var audioPath = path.resolve(__dirname, path1);
        protractor_1.browser.sleep(500);
        this.typefile().sendKeys(audioPath);
        protractor_1.browser.sleep(2000);
        this.Import().click();
        this.Adduserbtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'User  is imported successfully');
        });
    }
    Updateuser() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/Usermanagement/UsermanagementData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                this.UserManagementlink().click();
                protractor_1.browser.sleep(5000);
                this.editicon().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='firstName']"), record["UpdatefirstName"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='lastName']"), record["UpdatelastName"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='userName']"), record["UpdateuserName"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='mobile']"), record["Updatemobile"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='emailId']"), record["UpdateemailId"]);
                protractor_1.browser.sleep(2000);
                this.Update().click();
                protractor_1.browser.sleep(5000);
                this.Adduserbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'User is updated successfully');
                });
            });
        }
    }
    Deleteuser() {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.sleep(5000);
        this.UserManagementlink().click();
        protractor_1.browser.sleep(2000);
        this.deleteicon().click();
        protractor_1.browser.sleep(2000);
        this.Cancel().click();
        protractor_1.browser.sleep(2000);
        this.deleteicon().click();
        protractor_1.browser.sleep(2000);
        this.okbtn().click();
        protractor_1.browser.sleep(4000);
        this.Adduserbtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Delete user  is successful');
        });
    }
    Accessrequestforuser() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/Usermanagement/UsermanagementData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                this.UserManagementlink().click();
                protractor_1.browser.sleep(2000);
                this.usericon().click();
                protractor_1.browser.sleep(5000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='lms']"), record["LMS"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='tAndTab']"), record["Teacher"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='admin']"), record["Admin"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='monitoring']"), record["Monitoring"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='reporting']"), record["UserReporting"]);
                protractor_1.browser.sleep(1000);
                this.Save().click();
                protractor_1.browser.sleep(5000);
                this.Adduserbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Access request for User  is updated successfully');
                });
            });
        }
    }
    CancelAccessrequestpopup() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/Usermanagement/UsermanagementData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                this.UserManagementlink().click();
                protractor_1.browser.sleep(2000);
                this.usericon().click();
                protractor_1.browser.sleep(5000);
                this.Cancel().click();
                protractor_1.browser.sleep(5000);
                this.Adduserbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Cancel for Access request popup is  successfully');
                });
            });
        }
    }
    ClearAccessrequestpopupdata() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/Usermanagement/UsermanagementData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                this.UserManagementlink().click();
                protractor_1.browser.sleep(2000);
                this.usericon().click();
                protractor_1.browser.sleep(5000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='lms']"), record["LMS"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='tAndTab']"), record["Teacher"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='admin']"), record["Admin"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='monitoring']"), record["Monitoring"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='reporting']"), record["UserReporting"]);
                protractor_1.browser.sleep(1000);
                this.Clear().click();
                protractor_1.browser.sleep(1000);
                this.Cancel().click();
                protractor_1.browser.sleep(5000);
                this.Adduserbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Clear Access request popup data for User is successfully');
                });
            });
        }
    }
}
exports.UsermanagementPage = UsermanagementPage;
