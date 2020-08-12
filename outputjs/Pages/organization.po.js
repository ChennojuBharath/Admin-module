"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../utils/browser.utils");
const dataprovider_1 = require("../TestData/dataprovider");
var path = require("path");
class OrganizationPage {
    Organizationlink() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Organization']"));
    }
    Importorganization() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Import Oraganization']"));
    }
    addorganization() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Add Oraganization Item']"));
    }
    appicon() {
        return protractor_1.element(protractor_1.by.xpath("//mat-icon[text()='apps']"));
    }
    clearicon() {
        return protractor_1.element(protractor_1.by.xpath("//mat-icon[text()='clear_all']"));
    }
    expand1() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-icon[text()=' chevron_right '])[1]"));
    }
    expand2() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-icon[text()=' chevron_right '])[2]"));
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
    Userpagebreadcrumb() {
        return protractor_1.element(protractor_1.by.xpath("//a[@routerlinkactive='router-link-active']"));
    }
    ImportOrganization() {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.sleep(5000);
        this.Organizationlink().click();
        protractor_1.browser.sleep(2000);
        this.Importorganization().click();
        protractor_1.browser.sleep(2000);
        var path1 = '../../TestData/sample.json';
        var audioPath = path.resolve(__dirname, path1);
        protractor_1.browser.sleep(500);
        this.typefile().sendKeys(audioPath);
        protractor_1.browser.sleep(2000);
        this.Import().click();
    }
    AddOrganization() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/Organization/OrganizationData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                this.Organizationlink().click();
                protractor_1.browser.sleep(2000);
                this.addorganization().click();
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='type']"), record["OrgType"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='name']"), record["Orgname"]);
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='parent']"), record["Orgparent"]);
                this.Save().click();
                this.addorganization().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Addorganization  is successful');
                });
            });
        }
    }
    UpdateOrganization() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/Organization/OrganizationData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                this.Organizationlink().click();
                protractor_1.browser.sleep(2000);
                this.editicon().click();
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='type']"), record["UpdateOrgType"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='name']"), record["UpdateOrgname"]);
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='parent']"), record["UpdateOrgparent"]);
                this.Update().click();
                protractor_1.browser.sleep(5000);
                this.addorganization().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Edit organization  is successful');
                });
            });
        }
    }
    Clearaddorgdata() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/Organization/OrganizationData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                this.Organizationlink().click();
                protractor_1.browser.sleep(2000);
                this.editicon().click();
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='type']"), record["OrgType"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='name']"), record["Orgname"]);
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='parent']"), record["Orgparent"]);
                this.Clear().click();
                protractor_1.browser.sleep(2000);
                this.Cancel().click();
                protractor_1.browser.sleep(2000);
                this.addorganization().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Clear organization data in popup is successful');
                });
            });
        }
    }
    Canceladdorgpopup() {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.sleep(5000);
        this.Organizationlink().click();
        protractor_1.browser.sleep(2000);
        this.editicon().click();
        protractor_1.browser.sleep(2000);
        this.Cancel().click();
        protractor_1.browser.sleep(2000);
        this.addorganization().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Cancel organization popup is successful');
        });
    }
    Deleteorganization() {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.sleep(5000);
        this.Organizationlink().click();
        protractor_1.browser.sleep(2000);
        this.deleteicon().click();
        protractor_1.browser.sleep(2000);
        this.Cancel().click();
        protractor_1.browser.sleep(2000);
        this.deleteicon().click();
        protractor_1.browser.sleep(2000);
        this.okbtn().click();
        protractor_1.browser.sleep(4000);
        this.addorganization().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Cancel organization popup is successful');
        });
    }
    AddUserinorganization() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/Organization/OrganizationData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                this.Organizationlink().click();
                protractor_1.browser.sleep(2000);
                this.usericon().click();
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
                this.Save().click();
                protractor_1.browser.sleep(5000);
                this.Adduserbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Usert in organization is created successfully');
                });
            });
        }
    }
    ImportUserfororg() {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.sleep(5000);
        this.Organizationlink().click();
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
    Updateuserfororg() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/Organization/OrganizationData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                this.Organizationlink().click();
                protractor_1.browser.sleep(2000);
                this.usericon().click();
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
                    expect(dis).toBe(true, 'User in organization is updated successfully');
                });
            });
        }
    }
    Deleteuserfromorg() {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.sleep(5000);
        this.Organizationlink().click();
        protractor_1.browser.sleep(2000);
        this.usericon().click();
        protractor_1.browser.sleep(2000);
        this.deleteicon().click();
        protractor_1.browser.sleep(2000);
        this.Cancel().click();
        protractor_1.browser.sleep(2000);
        this.deleteicon().click();
        protractor_1.browser.sleep(2000);
        this.okbtn().click();
        protractor_1.browser.sleep(4000);
        this.addorganization().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Delete user for organization is successful');
        });
    }
    Accessrequestforuserfororg() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/Organization/OrganizationData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                this.Organizationlink().click();
                protractor_1.browser.sleep(2000);
                this.usericon().click();
                protractor_1.browser.sleep(5000);
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
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='reporting']"), record["Reporting"]);
                protractor_1.browser.sleep(1000);
                this.Save().click();
                protractor_1.browser.sleep(5000);
                this.Adduserbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Access request for User in organization is updated successfully');
                });
            });
        }
    }
    CancelAccessrequestpopup() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/Organization/OrganizationData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                this.Organizationlink().click();
                protractor_1.browser.sleep(2000);
                this.usericon().click();
                protractor_1.browser.sleep(5000);
                this.usericon().click();
                protractor_1.browser.sleep(5000);
                this.Cancel().click();
                protractor_1.browser.sleep(5000);
                this.Adduserbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Cancel for Access request popup in organization is  successfully');
                });
            });
        }
    }
    ClearAccessrequestpopupdata() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/Organization/OrganizationData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                this.Organizationlink().click();
                protractor_1.browser.sleep(2000);
                this.usericon().click();
                protractor_1.browser.sleep(5000);
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
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@formcontrolname='reporting']"), record["Reporting"]);
                protractor_1.browser.sleep(1000);
                this.Clear().click();
                protractor_1.browser.sleep(1000);
                this.Cancel().click();
                protractor_1.browser.sleep(5000);
                this.Adduserbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Clear Access request popup data for User in organization is successfully');
                });
            });
        }
    }
    breadcrumbs() {
        protractor_1.browser.sleep(5000);
        this.Organizationlink().click();
        protractor_1.browser.sleep(2000);
        this.usericon().click();
        protractor_1.browser.sleep(5000);
        this.Userpagebreadcrumb().click();
        protractor_1.browser.sleep(2000);
        this.Adduserbtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'User page brewadcrumb is working is successfully');
        });
    }
    listandgridviewwithexpansion() {
        protractor_1.browser.sleep(5000);
        this.Organizationlink().click();
        protractor_1.browser.sleep(2000);
        this.clearicon().click();
        protractor_1.browser.sleep(5000);
        this.expand1().click();
        protractor_1.browser.sleep(500);
        this.expand1().click();
        protractor_1.browser.sleep(2000);
        this.appicon().click();
        protractor_1.browser.sleep(5000);
        this.Adduserbtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'App icon and list icons are working successfully');
        });
    }
}
exports.OrganizationPage = OrganizationPage;
