import { RolesPage } from '../../Pages/Rolepage.po';
let role: RolesPage
role = new RolesPage();

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


})