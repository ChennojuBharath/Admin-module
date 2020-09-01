import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
var path = require("path");
export class UsermanagementPage {
    UserManagementlink() {
        return element(by.xpath("//div[text()='User Management']"));
    }
    Importorganization() {
        return element(by.xpath("//span[text()='Import Oraganization']"));
    }
    usericon() {
        return element(by.xpath("(//mat-icon[text()='supervised_user_circle'])[1]"));
    }
    typefile() {
        return element(by.xpath("//input[@type='file']"))
    }
    editicon() {
        return element(by.xpath("(//mat-icon[text()='edit'])[8]"));
    }
    deleteicon() {
        return element(by.xpath("(//mat-icon[text()='delete'])[1]"));
    }
    namefeild() {
        return element(by.xpath("//input[@formcontrolname='name']"))
    }
    Import() {
        return element(by.xpath("//span[contains(text(),'Import')]"))
    }
    Save() {
        return element(by.xpath("//span[text()='Save']"))
    }
    Update() {
        return element(by.xpath("//span[text()='Update']"))
    }
    Cancel() {
        return element(by.xpath("//span[text()='Cancel']"))
    }
    Clear() {
        return element(by.xpath("//span[text()='Clear']"))
    }
    okbtn() {
        return element(by.xpath("//span[text()='Ok']"))
    }
    Adduserbtn() {
        return element(by.xpath("//span[text()='Add User ']"))
    }
    firstName() {
        return element(by.xpath("//input[@formcontrolname='firstName']"))
    }
    lastName() {
        return element(by.xpath("//input[@formcontrolname='lastName']"))
    }
    userName() {
        return element(by.xpath("//input[@formcontrolname='userName']"))
    }
    mobile() {
        return element(by.xpath("//input[@formcontrolname='mobile']"))
    }
    emailId() {
        return element(by.xpath("//input[@formcontrolname='emailId']"))
    }
    AddUser() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/Usermanagement/UsermanagementData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                this.UserManagementlink().click();
                browser.sleep(5000);
                this.Adduserbtn().click();
                browser.sleep(5000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='firstName']"), record["firstName"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='lastName']"), record["lastName"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='userName']"), record["userName"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='mobile']"), record["mobile"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='emailId']"), record["emailId"]);
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='oraganization']"), record["Reporting"]);
                browser.sleep(1000);
                this.Save().click();
                browser.sleep(5000);
                this.Adduserbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'User is created successfully')
                })
            })
        }
    }
    ImportUser() {
        browser.ignoreSynchronization = true
                browser.sleep(5000);
                this.UserManagementlink().click();
                browser.sleep(2000);
                this.Import().click();
                browser.sleep(2000);
                var path1 = '../../TestData/users.json';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile().sendKeys(audioPath);
                browser.sleep(2000);
                this.Import().click();
                this.Adduserbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'User  is imported successfully')
                })
    }
Updateuser(){
    browser.ignoreSynchronization = true
    var dataRecs = dataProvider.getJsonDataFromFile('./TestData/Usermanagement/UsermanagementData.json', null)
    if (dataRecs && dataRecs.length > 0) {
        dataRecs.forEach(record => {
            browser.sleep(5000);
            this.UserManagementlink().click();
            browser.sleep(5000);
            this.editicon().click();
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//input[@formcontrolname='firstName']"), record["UpdatefirstName"]);
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//input[@formcontrolname='lastName']"), record["UpdatelastName"]);
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//input[@formcontrolname='userName']"), record["UpdateuserName"]);
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//input[@formcontrolname='mobile']"), record["Updatemobile"]);
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//input[@formcontrolname='emailId']"), record["UpdateemailId"]);
            browser.sleep(2000);
            this.Update().click();
            browser.sleep(5000);
            this.Adduserbtn().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'User is updated successfully')
            })
        })
    }  
}
Deleteuser() {
    browser.ignoreSynchronization = true
    browser.sleep(5000);
    this.UserManagementlink().click();
    browser.sleep(2000);
    this.deleteicon().click();
    browser.sleep(2000);
    this.Cancel().click();
    browser.sleep(2000);
    this.deleteicon().click();
    browser.sleep(2000);
    this.okbtn().click();
    browser.sleep(4000);
    this.Adduserbtn().isDisplayed().then(function (dis) {
        expect(dis).toBe(true, 'Delete user  is successful')
    })   
}
Accessrequestforuser(){
    browser.ignoreSynchronization = true
    var dataRecs = dataProvider.getJsonDataFromFile('./TestData/Usermanagement/UsermanagementData.json', null)
    if (dataRecs && dataRecs.length > 0) {
        dataRecs.forEach(record => {
            browser.sleep(5000);
            this.UserManagementlink().click();
            browser.sleep(2000);
            this.usericon().click();
            browser.sleep(5000);
            BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='lms']"), record["LMS"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='tAndTab']"), record["Teacher"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='admin']"), record["Admin"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='monitoring']"), record["Monitoring"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='reporting']"), record["UserReporting"]);
                browser.sleep(1000);
            this.Save().click();
            browser.sleep(5000);
            this.Adduserbtn().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'Access request for User  is updated successfully')
            })
        })
    }  
}
CancelAccessrequestpopup(){
    browser.ignoreSynchronization = true
    var dataRecs = dataProvider.getJsonDataFromFile('./TestData/Usermanagement/UsermanagementData.json', null)
    if (dataRecs && dataRecs.length > 0) {
        dataRecs.forEach(record => {
            browser.sleep(5000);
            this.UserManagementlink().click();
            browser.sleep(2000);
            this.usericon().click();
            browser.sleep(5000);
            this.Cancel().click();
            browser.sleep(5000);
            this.Adduserbtn().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'Cancel for Access request popup is  successfully')
            })
        })
    }  
}
ClearAccessrequestpopupdata(){
    browser.ignoreSynchronization = true
    var dataRecs = dataProvider.getJsonDataFromFile('./TestData/Usermanagement/UsermanagementData.json', null)
    if (dataRecs && dataRecs.length > 0) {
        dataRecs.forEach(record => {
            browser.sleep(5000);
            this.UserManagementlink().click();
            browser.sleep(2000);
            this.usericon().click();
            browser.sleep(5000);
            BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='lms']"), record["LMS"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='tAndTab']"), record["Teacher"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='admin']"), record["Admin"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='monitoring']"), record["Monitoring"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='reporting']"), record["UserReporting"]);
                browser.sleep(1000);
            this.Clear().click();
            browser.sleep(1000);
            this.Cancel().click();
            browser.sleep(5000);
            this.Adduserbtn().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'Clear Access request popup data for User is successfully')
            })
        })
    }  
}



}