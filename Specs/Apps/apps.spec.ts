import { AppsPage } from '../../Pages/Appspage.po';
let Apps: AppsPage
Apps = new AppsPage();

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


})