"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class dataProvider {
    /**
     * This method is used to read the json file using dataname
     */
    static getJsonDataFromFile(dataproviderfile, dataName) {
        let data = null, result = null;
        data = JSON.parse(fs.readFileSync(dataproviderfile, 'utf8'));
        result = (dataName) ? data[dataName] : data;
        return result;
    }
}
exports.dataProvider = dataProvider;
