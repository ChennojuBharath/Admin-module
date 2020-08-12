"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const organization_po_1 = require("../../Pages/organization.po");
let Org;
Org = new organization_po_1.OrganizationPage();
describe('Organization Creation', () => {
    it('Verify Import organization is working', () => {
        Org.ImportOrganization();
    });
    it('Verify add organization is working', () => {
        Org.AddOrganization();
    });
    it('Verify update organization is working', () => {
        Org.UpdateOrganization();
    });
    it('Verify clear organization data is working', () => {
        Org.Clearaddorgdata();
    });
    it('Verify cancel organization popup  is working', () => {
        Org.Canceladdorgpopup();
    });
    it('Verify  delete organization is working', () => {
        Org.Deleteorganization();
    });
    it('Verify import user for organization is working', () => {
        Org.ImportUserfororg();
    });
    it('Verify add user in organization is working', () => {
        Org.AddUserinorganization();
    });
    it('Verify update user in organization is working', () => {
        Org.Updateuserfororg();
    });
    it('Verify delete user from organization is working', () => {
        Org.Deleteuserfromorg();
    });
    it('Verify access request assignment for user in organization  is working', () => {
        Org.Accessrequestforuserfororg();
    });
    it('Verify cancel access request assignment popup for user in organization  is working', () => {
        Org.CancelAccessrequestpopup();
    });
    it('Verify clear data for access request assignment popup for user in organization  is working', () => {
        Org.ClearAccessrequestpopupdata();
    });
    it('Verify user breadcrumbs is working', () => {
        Org.breadcrumbs();
    });
    it('Verify list and grid views is working', () => {
        Org.listandgridviewwithexpansion();
    });
});
