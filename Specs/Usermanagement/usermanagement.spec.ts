import { UsermanagementPage } from '../../Pages/Usermanagement.po';
let Usermgmt: UsermanagementPage
Usermgmt = new UsermanagementPage();

describe('User management Creation', () => {

    it('Verify Import user is working', () => {
        Usermgmt.ImportUser();
    });
    it('Verify update User is working', () => {
        Usermgmt.Updateuser();
    });
     it('Verify add user is working', () => {
        Usermgmt.AddUser();
    });
    it('Verify clear user data is working', () => {
        Usermgmt.ClearAccessrequestpopupdata();
    });
    it('Verify cancel organization popup  is working', () => {
        Usermgmt.CancelAccessrequestpopup();
    });
    // it('Verify  delete user is working', () => {
    //     Usermgmt.Deleteuser();
    // });

})