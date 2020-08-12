"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Appspage_po_1 = require("../../Pages/Appspage.po");
let Apps;
Apps = new Appspage_po_1.AppsPage();
describe('App Creation', () => {
    it('Verify app update is working', () => {
        Apps.Updateapp();
    });
    it('Verify update app popup cancelleation is working', () => {
        Apps.CancelUpdateappopup();
    });
    it('Verify clear app popup cancelleation is working', () => {
        Apps.ClearUpdateappopup();
    });
});
