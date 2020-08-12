import { browser, element, by, ExpectedConditions, protractor, ElementFinder } from "protractor";
import { ECANCELED } from "constants";

/**
 * utility class is for commonly called Protractor.browser.methods
 * Methods shoud be static
 */

export class BrowserUtils {
    constructor() {
    }

    /**
     * Returns true if element is displayed
     * Max Timeout : 5000 seconds
     */
    static waitUntilReady = function (elem) {
        var EC = protractor.ExpectedConditions;
        // browser.wait(function () {
        //     return elem.isPresent();
        // }, 1200000);
        browser.wait(function () {
            return EC.visibilityOf(elem);
        }, 20000);
    }

    static waitUntilElemIsInvisibleFromDOM = function (locator) {
        var EC = protractor.ExpectedConditions;

        browser.wait(function () {
            return EC.stalenessOf(locator)
        }, 5000);
        browser.wait(function () {
            return EC.invisibilityOf(locator)
        }, 8000);
    }

    static enterUrl = function () {
        const baseUrl = browser.params.baseUrl;
        return browser.get(baseUrl);
    }
    static enterText = function (elem, val) {
        element(elem).click();
        element(elem).sendKeys(val);
    }
    static selectDropdownValue = function (selecEle, optionText) {
        var options = element(selecEle).all(by.xpath("option"))
            .then(function (options) {
                options.forEach(elem => {
                    elem.getText().then(function (text) {
                        if (text === optionText) {
                            console.log("++++++++++++" + elem);
                            browser.sleep(1000);
                            elem.click();

                        }
                    });
                });
                // options.click();
                browser.sleep(1000);
            });
    }
    static selectListValue = function (selecEle, optionText) {
        var options = element(selecEle).then(function (options) {
            options.forEach(elem => {
                elem.getText().then(function (text) {
                    if (text === optionText) {
                        elem.click();
                    }
                });
            })
        })
    }
    static dragAndDrop(element, destination) {
        browser.actions().mouseDown(element).perform();
        browser.actions().mouseMove(destination).perform();
        browser.actions().mouseDown(element).perform();
        browser.actions().mouseMove(destination).perform();
        browser.actions().mouseUp().perform();
    }
    static MoveandDrop(element, destination) {
        browser.actions().mouseDown(element).perform();
        browser.actions().mouseMove(destination).perform();
        browser.actions().mouseDown(element).perform();
        browser.actions().mouseMove(destination).perform();
        browser.actions().mouseUp().perform();
      
            }
    static scrollIntoView(enterLoc) {
        var elm = element(enterLoc);
        browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
    }
    static scrollandClick(enterLoc) {
        var elm = element(enterLoc);
        browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
        elm.click();
    }

    static countAndClick = function (locator) {
        element.all(locator).then(function (arr) {
            arr.forEach(element => {
                element.isPresent().then(function (dis) {
                    expect(dis).toBe(true);
                    element.click();
                    browser.sleep(500);
                })
            });
        })
    }

    static getCurrentUrl = function () {
        return browser.getCurrentUrl();
    }
    static uploadFile = function () {

    }

    // static getTotalElementCount = function (locator) {
    //     var count = element.all(locator).count();
    //     return count;
    // }
    static getTotalElementCount(enterLoc) {
        var count = element.all(enterLoc).count();
        return count;
    }

    static clickOnElement = function (locator) {
        element(locator).click();
    }

    static getText = function (enterLoc) {

        return element(enterLoc).getText() as Promise<string>
    }


    getTotalElementCount(enterLoc) {

        var count = element.all(enterLoc).count();

        return count;

    }

}