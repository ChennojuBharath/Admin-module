import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
var path = require("path");
export class OrganizationPage {
    Organizationlink() {
        return element(by.xpath("//div[text()='Organization']"));
    }
    Importorganization() {
        return element(by.xpath("//span[text()='Import Oraganization']"));
    }
    addorganization() {
        return element(by.xpath("//span[contains(text(),'Add Oraganization Item')]"));
    }
    appicon() {
        return element(by.xpath("//mat-icon[text()='apps']"));
    }
    clearicon() {
        return element(by.xpath("//mat-icon[text()='clear_all']"));
    }
    expand1() {
        return element(by.xpath("(//mat-icon[text()=' chevron_right '])[1]"));
    }
    expand2() {
        return element(by.xpath("(//mat-icon[text()=' chevron_right '])[2]"));
    }

    usericon() {
        return element(by.xpath("(//mat-icon[text()='supervised_user_circle'])[1]"));
    }
    typefile() {
        return element(by.xpath("//input[@type='file']"))
    }
    editicon() {
        return element(by.xpath("(//mat-icon[text()='edit'])[1]"));
    }
    deleteicon() {
        return element(by.xpath("(//mat-icon[text()='delete'])[1]"));
    }
    namefeild() {
        return element(by.xpath("//input[@formcontrolname='name']"))
    }
    Import() {
        return element(by.xpath("(//span[contains(text(),'Import')])[2]"))
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
    Userpagebreadcrumb() {
        return element(by.xpath("//a[@routerlinkactive='router-link-active']"))
    }
     CancelImportOrganizationpopup() {
        browser.ignoreSynchronization = true
        browser.sleep(5000);
        this.Organizationlink().click();
        browser.sleep(2000);
        this.Importorganization().click();
         browser.sleep(2000);
        this.Cancel().click();
        browser.sleep(2000);
          this.addorganization().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Cancel Import Organizationpopup  is successful')
                })
    }
    ImportOrganization() {
        browser.ignoreSynchronization = true
        browser.sleep(5000);
        this.Organizationlink().click();
        browser.sleep(2000);
        this.Importorganization().click();
        browser.sleep(2000);
        var path1 = '../../TestData/sample.json';
        var audioPath = path.resolve(__dirname, path1);
        browser.sleep(500);
        this.typefile().sendKeys(audioPath);
        browser.sleep(2000);
        this.Import().click();
        browser.sleep(2000);
         this.addorganization().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Import Organization  is successful')
                })
    }
    AddOrganization() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/Organization/OrganizationData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                this.Organizationlink().click();
                browser.sleep(2000);
                this.addorganization().click();
                browser.sleep(5000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='type']"), record["OrgType"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='name']"), record["Orgname"]);
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='parent']"), record["Orgparent"]);
                this.Save().click();
                this.addorganization().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Addorganization  is successful')
                })
            })
        }

    }
    UpdateOrganization() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/Organization/OrganizationData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                this.Organizationlink().click();
                browser.sleep(2000);
                this.editicon().click();
                browser.sleep(5000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='type']"), record["UpdateOrgType"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='name']"), record["UpdateOrgname"]);
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='parent']"), record["UpdateOrgparent"]);
                this.Update().click();
                browser.sleep(5000);
                this.addorganization().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Edit organization  is successful')
                })
            })
        }
    }
    Clearaddorgdata() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/Organization/OrganizationData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                this.Organizationlink().click();
                browser.sleep(2000);
                this.addorganization().click();
                browser.sleep(5000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='type']"), record["OrgType"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='name']"), record["Orgname"]);
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='parent']"), record["Orgparent"]);
                this.Clear().click();
                browser.sleep(2000);
                this.Cancel().click();
                browser.sleep(2000);
                this.addorganization().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Clear organization data in popup is successful')
                })
            })
        }
    }
    Canceladdorgpopup() {
        browser.ignoreSynchronization = true
        browser.sleep(5000);
        this.addorganization().click();
        browser.sleep(5000);
        this.Cancel().click();
        browser.sleep(2000);
        this.addorganization().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Cancel organization popup is successful')
        })
    }
    Deleteorganization() {
        browser.ignoreSynchronization = true
        browser.sleep(5000);
        this.Organizationlink().click();
        browser.sleep(2000);
        this.deleteicon().click();
        browser.sleep(2000);
        this.Cancel().click();
        browser.sleep(2000);
        this.deleteicon().click();
        browser.sleep(2000);
        this.okbtn().click();
        browser.sleep(4000);
        this.addorganization().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Cancel organization popup is successful')
        })
    }
    AddUserinorganization() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/Organization/OrganizationData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                this.Organizationlink().click();
                browser.sleep(2000);
                this.usericon().click();
                browser.sleep(5000);
                this.Adduserbtn().click();
                browser.sleep(1000);
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
                this.Save().click();
                browser.sleep(5000);
                this.Adduserbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Usert in organization is created successfully')
                })
            })
        }
    }
    ImportUserfororg() {
        browser.ignoreSynchronization = true
                browser.sleep(5000);
                this.Organizationlink().click();
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
Updateuserfororg(){
    browser.ignoreSynchronization = true
    var dataRecs = dataProvider.getJsonDataFromFile('./TestData/Organization/OrganizationData.json', null)
    if (dataRecs && dataRecs.length > 0) {
        dataRecs.forEach(record => {
            browser.sleep(5000);
            this.Organizationlink().click();
            browser.sleep(2000);
            this.usericon().click();
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
                expect(dis).toBe(true, 'User in organization is updated successfully')
            })
        })
    }  
}
Deleteuserfromorg() {
    browser.ignoreSynchronization = true
    browser.sleep(5000);
    this.Organizationlink().click();
    browser.sleep(2000);
    this.usericon().click();
    browser.sleep(2000);
    this.deleteicon().click();
    browser.sleep(2000);
    this.Cancel().click();
    browser.sleep(2000);
    this.deleteicon().click();
    browser.sleep(2000);
    this.okbtn().click();
    browser.sleep(4000);
    this.addorganization().isDisplayed().then(function (dis) {
        expect(dis).toBe(true, 'Delete user for organization is successful')
    })   
}
Accessrequestforuserfororg(){
    browser.ignoreSynchronization = true
    var dataRecs = dataProvider.getJsonDataFromFile('./TestData/Organization/OrganizationData.json', null)
    if (dataRecs && dataRecs.length > 0) {
        dataRecs.forEach(record => {
            browser.sleep(5000);
            this.Organizationlink().click();
            browser.sleep(2000);
            this.usericon().click();
            browser.sleep(5000);
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
                BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='reporting']"), record["Reporting"]);
                browser.sleep(1000);
            this.Save().click();
            browser.sleep(5000);
            this.Adduserbtn().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'Access request for User in organization is updated successfully')
            })
        })
    }  
}
CancelAccessrequestpopup(){
    browser.ignoreSynchronization = true
    var dataRecs = dataProvider.getJsonDataFromFile('./TestData/Organization/OrganizationData.json', null)
    if (dataRecs && dataRecs.length > 0) {
        dataRecs.forEach(record => {
            browser.sleep(5000);
            this.Organizationlink().click();
            browser.sleep(2000);
            this.usericon().click();
            browser.sleep(5000);
            this.usericon().click();
            browser.sleep(5000);
            this.Cancel().click();
            browser.sleep(5000);
            this.Adduserbtn().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'Cancel for Access request popup in organization is  successfully')
            })
        })
    }  
}
ClearAccessrequestpopupdata(){
    browser.ignoreSynchronization = true
    var dataRecs = dataProvider.getJsonDataFromFile('./TestData/Organization/OrganizationData.json', null)
    if (dataRecs && dataRecs.length > 0) {
        dataRecs.forEach(record => {
            browser.sleep(5000);
            this.Organizationlink().click();
            browser.sleep(2000);
            this.usericon().click();
            browser.sleep(5000);
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
                BrowserUtils.selectDropdownValue(by.xpath("//select[@formcontrolname='reporting']"), record["Reporting"]);
                browser.sleep(1000);
            this.Clear().click();
            browser.sleep(1000);
            this.Cancel().click();
            browser.sleep(5000);
            this.Adduserbtn().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'Clear Access request popup data for User in organization is successfully')
            })
        })
    }  
}
breadcrumbs(){
    browser.sleep(5000);
    this.Organizationlink().click();
    browser.sleep(2000);
    this.usericon().click();
    browser.sleep(5000);
    this.Userpagebreadcrumb().click();
    browser.sleep(2000);
    this.Adduserbtn().isDisplayed().then(function (dis) {
        expect(dis).toBe(true, 'User page brewadcrumb is working is successfully')
    })
}
listandgridviewwithexpansion(){
    browser.sleep(5000);
    this.Organizationlink().click();
    browser.sleep(2000);
    this.clearicon().click();
    browser.sleep(5000);
    this.expand1().click();  
    browser.sleep(500);
    this.expand1().click(); 
    browser.sleep(2000);
    this.appicon().click();
    browser.sleep(5000);
    this.Adduserbtn().isDisplayed().then(function (dis) {
        expect(dis).toBe(true, 'App icon and list icons are working successfully')
    })
}


}