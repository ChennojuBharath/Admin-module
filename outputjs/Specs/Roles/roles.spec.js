"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rolepage_po_1 = require("../../Pages/Rolepage.po");
let role;
role = new Rolepage_po_1.RolesPage();
describe('Role Creation', () => {
    it('Verify add role is working', () => {
        role.AddRole();
    });
    it('Verify add role popup cancelleation is working', () => {
        role.CancelCreaterole();
    });
    it('Verify add role clear is working', () => {
        role.ClearCreaterolepopupdata();
    });
});
