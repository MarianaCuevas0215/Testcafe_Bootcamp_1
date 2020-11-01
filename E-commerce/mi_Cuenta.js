import page from './pageModel';
import { data } from './data';
import {ClientFunction} from 'testcafe';

const getLocation = ClientFunction(() => document.location.href);

fixture ('Pruebas del modulo Mi cuenta')
    .page('http://automationpractice.com');

test('Validar que un usuario pueda crear una nueva cuenta', async t =>{
    await t 
        .click(page.signin_link)

    console.log("Correo: ", data.email)

    await t
        .typeText(page.emailAddress_input, data.email, {speed:0.01})
        .click(page.createAccount_btn)

    await t
        .click(page.title_rbtn)
        .typeText(page.firstName_input, data.firstName, {speed:0.01})
        .expect(page.firstName_input.value).eql(data.firstName)
        .typeText(page.lastName_input, data.lastName, {speed:0.01})
        .expect(page.lastName_input.value).eql(data.lastName)
        .expect(page.email_input.value).contains(data.email)
        .expect(page.email_input.hasAttribute('readonly')).notOk()
        .typeText(page.passwd_input, data.password, {speed:0.01})
        .expect(page.passwd_input.value).eql(data.password)
        .click(page.dayBirth_dropdown)
        .click(page.dayBirth_value)
        .click(page.monthBirth_dropdown)
        .click(page.monthBirth_value)
        .click(page.yearBirth_dropdown)
        .click(page.yearBirth_value)
    
    await t
        .expect(page.firstNameAddress_input.value).eql(data.firstName)
        .expect(page.lastNameAddress_input.value).eql(data.lastName) 
        .typeText(page.address_input, data.address, {speed:0.01})
        .expect(page.address_input.value).contains(data.address)
        .typeText(page.city_input, data.city, {speed:0.01})
        .expect(page.city_input.value).contains(data.city)
        .click(page.state_dropdown)
        .click(page.state_value)
        .typeText(page.zip_input, data.postcode, {speed:0.01})
        .expect(page.zip_input.value).contains(data.postcode)
        .click(page.country_dropdown)
        .click(page.country_value)
        .typeText(page.phone_input, data.phone, {speed:0.01})
        .expect(page.phone_input.value).eql(data.phone)
        .expect(page.addressAlias_input.value).contains("My address")
        .typeText(page.addressAlias_input, "Mi casa", {replace: true})
        .expect(page.addressAlias_input.value).eql("Mi casa")
        .click(page.register_btn)       
        .expect(page.textInfoAccount_msg.innerText).contains('MY ACCOUNT')      
        
} );

test('Validar que el usuario pueda hacer login con la nueva cuenta creada', async t =>{
    await t 
        .click(page.signin_link)

    await t
        .typeText(page.email_account_input, data.emailValido, {speed: 0.01})
        .expect(page.email_account_input.value).eql(data.emailValido)
        .typeText(page.passwd_account_input, data.password, {speed: 0.01})
        .expect(page.passwd_account_input.value).eql(data.password)
        .click(page.signin_btn)

    await t
        .expect(getLocation()).contains(data.url_myAccount)
        .wait(1000)

} );

test('Validar que el usuario pueda hacer logout a su sesión', async t =>{
    await t 
        .click(page.signin_link)

    await t
        .typeText(page.email_account_input, data.emailValido, {speed: 0.01})
        .expect(page.email_account_input.value).eql(data.emailValido)
        .typeText(page.passwd_account_input, data.password, {speed: 0.01})
        .expect(page.passwd_account_input.value).eql(data.password)
        .click(page.signin_btn)
    await t
        .click(page.logout_link)
    await t
        .expect(getLocation()).contains(data.url_authentication) 

} );

test('Validar que un usuario no pueda crear una nueva cuenta con un correo existente', async t =>{
    await t 


} );

test('Validar que el usuario pueda recuperar su contraseña con un correo válido', async t =>{
    await t 


} );

test('Validar que el usuario no pueda recuperar su contraseña con un correo inválido', async t =>{
    await t 


} );

test('Validar que el usuario pueda modificar información de su cuenta', async t =>{
    await t 


} );