"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XLSX = require("xlsx");
const excel_as_json_1 = require("excel-as-json");
var dataFileUrl = "./TestData/CourseData.json";
var datajsonFile = "./TestData/TappingMCQData.json";
// var dataFileUrl = "./TestData/CourseData.xlsx";
// var datajsonFile = "./TestData/CourseData.json";
XLSX.readFile(dataFileUrl);
// export class convertDataToJson{
//       static  convertDataExcel11 = function name(params:type) {
//           return processFile
//       }
// }
exports.convertDataExcel = () => {
    excel_as_json_1.processFile(dataFileUrl, datajsonFile, false, function (err, data) {
    });
};
