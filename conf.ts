import { Config, browser } from 'protractor';
import { SpecReporter } from 'jasmine-spec-reporter';
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
export let config: Config = {
    allScriptsTimeout: 25000,
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true,
        getPageTimeout: 15000,
        defaultTimeoutInterval: 250000,
        print: function () { }
    },

    onPrepare: () => {
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './Reports',
            screenshotsFolder: './screenshots',
            takeScreenshotsOnlyOnFailures: true
        }))
    },
    params: {
        baseUrl: 'http://rvadmin.walkingtree.tech/'

    },
    specs: ['Specs/**/login.spec.js',
        'Specs/**/Organization.spec.js',
        'Specs/**/usermanagement.spec.js',
        'Specs/**/apps.spec.js',
        'Specs/**/roles.spec.js',
        'Specs/**/logout.spec.js',
    ],
    seleniumAddress: 'http://localhost:4444/wd/hub'
}