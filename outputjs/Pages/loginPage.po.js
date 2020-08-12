"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class loginPage {
    keycloakusername() {
        return protractor_1.element(protractor_1.by.xpath("//input[@id='username']"));
    }
    keycloakpassword() {
        return protractor_1.element(protractor_1.by.xpath("//input[@id='password']"));
    }
    keycloakloginbtn() {
        return protractor_1.element(protractor_1.by.xpath("//input[@name='login']"));
    }
    userName() {
        //return element(by.xpath('//input[@name="username"]'));
        return protractor_1.element(protractor_1.by.xpath('//input[@ng-reflect-name="userName"]'));
    }
    profileicon() {
        return protractor_1.element(protractor_1.by.xpath("//i[text()='person_pin']"));
    }
    logout() {
        return protractor_1.element(protractor_1.by.xpath("//button[@role='menuitem']"));
    }
    passWord() {
        //return element(by.xpath('//input[@name="password"]'));
        return protractor_1.element(protractor_1.by.xpath('//input[@ng-reflect-name="password"]'));
    }
    loginButton() {
        return protractor_1.element(protractor_1.by.xpath('//span[text()="Login"]'));
    }
    OkButton() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='OK']"));
    }
    login(logindata) {
        this.userName().click();
        this.userName().sendKeys(logindata.username);
        this.passWord().clear();
        this.passWord().sendKeys(logindata.password);
        this.loginButton().click();
        protractor_1.browser.getCurrentUrl().then((url) => {
            expect(url).toContain('all-courses');
        });
    }
    keycloak(keycloaklogindata) {
        this.keycloakusername().sendKeys(keycloaklogindata.keycloakusername);
        this.keycloakpassword().sendKeys(keycloaklogindata.keycloakpassword);
        this.keycloakloginbtn().click();
        protractor_1.browser.sleep(2000);
        // browser.getCurrentUrl().then((url)=> {
        //     expect(url).toContain('all-courses')
        //    })
    }
}
exports.loginPage = loginPage;
