"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
/**
 * utility class is for commonly called Protractor.browser.methods
 * Methods shoud be static
 */
class BrowserUtils {
    constructor() {
    }
    static dragAndDrop(element, destination) {
        protractor_1.browser.actions().mouseDown(element).perform();
        protractor_1.browser.actions().mouseMove(destination).perform();
        protractor_1.browser.actions().mouseDown(element).perform();
        protractor_1.browser.actions().mouseMove(destination).perform();
        protractor_1.browser.actions().mouseUp().perform();
    }
    static MoveandDrop(element, destination) {
        protractor_1.browser.actions().mouseDown(element).perform();
        protractor_1.browser.actions().mouseMove(destination).perform();
        protractor_1.browser.actions().mouseDown(element).perform();
        protractor_1.browser.actions().mouseMove(destination).perform();
        protractor_1.browser.actions().mouseUp().perform();
    }
    static scrollIntoView(enterLoc) {
        var elm = protractor_1.element(enterLoc);
        protractor_1.browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
    }
    static scrollandClick(enterLoc) {
        var elm = protractor_1.element(enterLoc);
        protractor_1.browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
        elm.click();
    }
    // static getTotalElementCount = function (locator) {
    //     var count = element.all(locator).count();
    //     return count;
    // }
    static getTotalElementCount(enterLoc) {
        var count = protractor_1.element.all(enterLoc).count();
        return count;
    }
    getTotalElementCount(enterLoc) {
        var count = protractor_1.element.all(enterLoc).count();
        return count;
    }
}
exports.BrowserUtils = BrowserUtils;
/**
 * Returns true if element is displayed
 * Max Timeout : 5000 seconds
 */
BrowserUtils.waitUntilReady = function (elem) {
    var EC = protractor_1.protractor.ExpectedConditions;
    // browser.wait(function () {
    //     return elem.isPresent();
    // }, 1200000);
    protractor_1.browser.wait(function () {
        return EC.visibilityOf(elem);
    }, 20000);
};
BrowserUtils.waitUntilElemIsInvisibleFromDOM = function (locator) {
    var EC = protractor_1.protractor.ExpectedConditions;
    protractor_1.browser.wait(function () {
        return EC.stalenessOf(locator);
    }, 5000);
    protractor_1.browser.wait(function () {
        return EC.invisibilityOf(locator);
    }, 8000);
};
BrowserUtils.enterUrl = function () {
    const baseUrl = protractor_1.browser.params.baseUrl;
    return protractor_1.browser.get(baseUrl);
};
BrowserUtils.enterText = function (elem, val) {
    protractor_1.element(elem).click();
    protractor_1.element(elem).sendKeys(val);
};
BrowserUtils.selectDropdownValue = function (selecEle, optionText) {
    var options = protractor_1.element(selecEle).all(protractor_1.by.xpath("option"))
        .then(function (options) {
        options.forEach(elem => {
            elem.getText().then(function (text) {
                if (text === optionText) {
                    console.log("++++++++++++" + elem);
                    protractor_1.browser.sleep(1000);
                    elem.click();
                }
            });
        });
        // options.click();
        protractor_1.browser.sleep(1000);
    });
};
BrowserUtils.selectListValue = function (selecEle, optionText) {
    var options = protractor_1.element(selecEle).then(function (options) {
        options.forEach(elem => {
            elem.getText().then(function (text) {
                if (text === optionText) {
                    elem.click();
                }
            });
        });
    });
};
BrowserUtils.countAndClick = function (locator) {
    protractor_1.element.all(locator).then(function (arr) {
        arr.forEach(element => {
            element.isPresent().then(function (dis) {
                expect(dis).toBe(true);
                element.click();
                protractor_1.browser.sleep(500);
            });
        });
    });
};
BrowserUtils.getCurrentUrl = function () {
    return protractor_1.browser.getCurrentUrl();
};
BrowserUtils.uploadFile = function () {
};
BrowserUtils.clickOnElement = function (locator) {
    protractor_1.element(locator).click();
};
BrowserUtils.getText = function (enterLoc) {
    return protractor_1.element(enterLoc).getText();
};
