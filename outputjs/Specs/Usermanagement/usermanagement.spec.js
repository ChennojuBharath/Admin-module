"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usermanagement_po_1 = require("../../Pages/Usermanagement.po");
let Usermgmt;
Usermgmt = new Usermanagement_po_1.UsermanagementPage();
describe('User management Creation', () => {
    it('Verify Import user is working', () => {
        Usermgmt.Import();
    });
    it('Verify add user is working', () => {
        Usermgmt.AddUser();
    });
    it('Verify update User is working', () => {
        Usermgmt.Update();
    });
    it('Verify clear user data is working', () => {
        Usermgmt.Clear();
    });
    it('Verify cancel organization popup  is working', () => {
        Usermgmt.Cancel();
    });
    it('Verify  delete organization is working', () => {
        Usermgmt.Deleteuser();
    });
});
