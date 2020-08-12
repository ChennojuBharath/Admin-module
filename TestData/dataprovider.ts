import * as fs from 'fs';

export class dataProvider {
    
    /**
     * This method is used to read the json file using dataname 
     */

    static getJsonDataFromFile(dataproviderfile: string, dataName: string) {
        let data = null, result = null;
        data = JSON.parse(fs.readFileSync(dataproviderfile, 'utf8'));
        result = (dataName) ? data[dataName] : data;
        return result;
    }
}
