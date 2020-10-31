import page from './pageModel';

let rndNumber = Math.random().toString(36).substr(1,4);
const email = 'dummy' + rndNumber + '@mailinator.com'
const firstName = 'Mariana'
const lastName = 'Cuevas'
const password = '12345678'
const address = 'Ignacio Allende 328'
const city = 'CDMX'
const postcode = '11260'
const phone = '1111111111'

fixture ('Pruebas del modulo Mi cuenta')
    .page('http://automationpractice.com');

test('Validar que un usuario pueda crear una nueva cuenta', async t =>{
    await t 
        .click(page.signin_link)

    console.log("Correo: ", email)

    await t
        .typeText(page.emailAddress_input, email, {speed:0.01})
        .click(page.createAccount_btn)

    await t
        .click(page.title_rbtn)
        .typeText(page.firstName_input, firstName, {speed:0.01})
        .expect(page.firstName_input.value).eql(firstName)
        .typeText(page.lastName_input, lastName, {speed:0.01})
        .expect(page.lastName_input.value).eql(lastName)
        .expect(page.email_input.value).contains(email)
        .expect(page.email_input.hasAttribute('readonly')).notOk()
        .typeText(page.passwd_input, password, {speed:0.01})
        .expect(page.passwd_input.value).eql(password)
        .click(page.dayBirth_dropdown)
        .click(page.dayBirth_value)
        .click(page.monthBirth_dropdown)
        .click(page.monthBirth_value)
        .click(page.yearBirth_dropdown)
        .click(page.yearBirth_value)
    
    await t
        .expect(page.firstNameAddress_input.value).eql(firstName)
        .expect(page.lastNameAddress_input.value).eql(lastName) 
        .typeText(page.address_input, address, {speed:0.01})
        .expect(page.address_input.value).contains(address)
        .typeText(page.city_input, city, {speed:0.01})
        .expect(page.city_input.value).contains(city)
        .click(page.state_dropdown)
        .click(page.state_value)
        .typeText(page.zip_input, postcode, {speed:0.01})
        .expect(page.zip_input.value).contains(postcode)
        .click(page.country_dropdown)
        .click(page.country_value)
        .typeText(page.phone_input, phone, {speed:0.01})
        .expect(page.phone_input.value).eql(phone)
        .expect(page.addressAlias_input.value).contains("My address")
        .typeText(page.addressAlias_input, "Mi casa", {replace: true})
        .expect(page.addressAlias_input.value).eql("Mi casa")
        .click(page.register_btn)       
        .expect(page.textInfoAccount_msg.value).contains('MY ACCOUNT')      
        
} );

test('Validar que el usuario pueda hacer login con la nueva cuenta creada', async t =>{
    await t 


} );

test('Validar que el usuario pueda hacer logout a su sesión', async t =>{
    await t 


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