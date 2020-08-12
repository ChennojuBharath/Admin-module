import * as XLSX from 'xlsx';
import { processFile } from "excel-as-json";

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
export const convertDataExcel = () => {
    processFile(dataFileUrl, datajsonFile, false, function (err, data) {
    });
};