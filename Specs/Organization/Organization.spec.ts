import { OrganizationPage } from '../../Pages/organization.po';
let Org: OrganizationPage
Org = new OrganizationPage();

describe('Organization Creation :', () => {
   it('Verify  delete organization is working', () => {
        Org.Deleteorganization();
    });
    it('Verify Cancel Import organization popup is working', () => {
        Org.CancelImportOrganizationpopup();
    });
    it('Verify Import organization is working', () => {
        Org.ImportOrganization();
    });
     it('Verify cancel organization popup  is working', () => {
        Org.Canceladdorgpopup();
    });
    // it('Verify add organization is working', () => {
    //     Org.AddOrganization();
    // });
    // it('Verify update organization is working', () => {
    //     Org.UpdateOrganization();
    // });
    //    it('Verify clear organization data is working', () => {
    //       Org.Clearaddorgdata();
    //    });
    //    it('Verify import user for organization is working', () => {
    //       Org.ImportUserfororg();
    //    });
    //    it('Verify add user in organization is working', () => {
    //       Org.AddUserinorganization();
    //    });
    //    it('Verify update user in organization is working', () => {
    //       Org.Updateuserfororg();
    //    });
    //    it('Verify delete user from organization is working', () => {
    //       Org.Deleteuserfromorg();
    //    });
    //    it('Verify access request assignment for user in organization  is working', () => {
    //       Org.Accessrequestforuserfororg();
    //    });
    //    it('Verify cancel access request assignment popup for user in organization  is working', () => {
    //       Org.CancelAccessrequestpopup();
    //    });
    //    it('Verify clear data for access request assignment popup for user in organization  is working', () => {
    //       Org.ClearAccessrequestpopupdata();
    //    });
    //    it('Verify user breadcrumbs is working', () => {
    //       Org.breadcrumbs();
    //    });
    //    it('Verify list and grid views is working', () => {
    //       Org.listandgridviewwithexpansion();
    //    });
})