import { browser, element, by, ExpectedConditions, Browser } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';


export class loginPage {

    keycloakusername(){
        return element(by.xpath("//input[@id='username']"));
    }
    keycloakpassword(){
        return element(by.xpath("//input[@id='password']"));
    }
    keycloakloginbtn(){
        return element(by.xpath("//input[@name='login']"));
    }
    userName() {
        //return element(by.xpath('//input[@name="username"]'));
        return element(by.xpath('//input[@ng-reflect-name="userName"]'));
    }
    profileicon(){
        return element(by.xpath("//div[@class='nav-profile-name']"));     
    }
    logout(){
        return element(by.xpath("//button[text()='Logout']")); 
    }
    passWord() {
        //return element(by.xpath('//input[@name="password"]'));
        return element(by.xpath('//input[@ng-reflect-name="password"]'));
    }
    loginButton() {
        return element(by.xpath('//span[text()="Login"]'));
    }
    OkButton() {
        return element(by.xpath("//button[text()='OK']"));
    }

    login(logindata) {
        this.userName().click();
        this.userName().sendKeys(logindata.username);
        this.passWord().clear();
        this.passWord().sendKeys(logindata.password);
        this.loginButton().click();
        browser.getCurrentUrl().then((url)=> {
         expect(url).toContain('all-courses')
        })
    }
    keycloak(keycloaklogindata){
        this.keycloakusername().sendKeys(keycloaklogindata.keycloakusername);
        this.keycloakpassword().sendKeys(keycloaklogindata.keycloakpassword);
        this.keycloakloginbtn().click();
        browser.sleep(25000);        // browser.getCurrentUrl().then((url)=> {
        //     expect(url).toContain('all-courses')
        //    })
    }

}