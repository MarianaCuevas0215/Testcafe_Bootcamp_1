import { Selector } from 'testcafe';

class Page {
    constructor () {

        //Validar que un usuario pueda crear una nueva cuenta
        this.signin_link = Selector('a').withText('Sign in');
        this.emailAddress_input = Selector('#email_create');
        this.createAccount_btn = Selector('#SubmitCreate');
        this.title_rbtn = Selector('#id_gender2');
        this.firstName_input = Selector('#customer_firstname');
        this.lastName_input = Selector('#customer_lastname');
        this.email_input = Selector('#email');
        this.passwd_input = Selector('#passwd');
        this.dayBirth_dropdown = Selector('#days');
        this.dayBirth_value = Selector('#days > option:nth-child(3)');
        this.monthBirth_dropdown = Selector('#months');
        this.monthBirth_value = Selector('#months > option:nth-child(3)');
        this.yearBirth_dropdown = Selector('#years');
        this.yearBirth_value = Selector('#years > option:nth-child(22)');
        this.firstNameAddress_input = Selector('#firstname');
        this.lastNameAddress_input = Selector('#lastname');
        this.address_input = Selector('#address1');
        this.city_input = Selector('#city');
        this.state_dropdown = Selector('#id_state');
        this.state_value = Selector('#id_state > option:nth-child(51)');
        this.zip_input = Selector('#postcode');
        this.country_dropdown = Selector('#id_country');
        this.country_value = Selector('#id_country > option:nth-child(2)');
        this.phone_input = Selector('#phone_mobile');
        this.addressAlias_input = Selector('#alias');
        this.register_btn = Selector('#submitAccount');
        this.textInfoAccount_msg = Selector('#center_column > h1'); 

        //Validar que el usuario pueda hacer login con la nueva cuenta creada
        this.email_account_input = Selector('#email');
        this.passwd_account_input = Selector('#passwd');
        this.signin_btn = Selector('#SubmitLogin');
    }
}

export default new Page();