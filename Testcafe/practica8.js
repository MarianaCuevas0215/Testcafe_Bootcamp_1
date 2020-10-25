import page from './pageModel';

fixture('Practica 8 con Testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar Login a página - con credenciales correctas y msg exitoso', async t =>{
    await t
        .click(page.link8)
    await t
        .typeText(page.input81, "tomsmith", {speed: 0.1})
        .expect(page.input81.value).eql("tomsmith")
    await t
        .typeText(page.input82, "SuperSecretPassword!", {speed: 0.1})
        .expect(page.input82.value).eql("SuperSecretPassword!")
    await t
        .click(page.btn83)
    await t
        .expect(page.msg85.visible).ok()
        .expect(page.msg85.innerText).contains('You logged into a secure area!')
        
});

test('Verificar contenido de la página cuando usuario se loguea exitosamente', async t =>{
    await t
        .click(page.link8)
    await t
        .typeText(page.input81, "tomsmith", {speed: 0.1})
        .expect(page.input81.value).eql("tomsmith")
    await t
        .typeText(page.input82, "SuperSecretPassword!", {speed: 0.1})
        .expect(page.input82.value).eql("SuperSecretPassword!")
    await t
        .click(page.btn83)
    await t
        .expect(page.msg85.visible).ok()
        .expect(page.msg85.innerText).contains('You logged into a secure area!')
        .expect(page.header86.innerText).contains('Secure Area')
        .expect(page.header87.innerText).contains('Welcome to the Secure Area. When you are done click logout below.')
        .expect(page.btn88.visible).ok()
        
});

test('Verificar logout', async t =>{
    await t
        .click(page.link8)
    await t
        .typeText(page.input81, "tomsmith", {speed: 0.1})
        .expect(page.input81.value).eql("tomsmith")
    await t
        .typeText(page.input82, "SuperSecretPassword!", {speed: 0.1})
        .expect(page.input82.value).eql("SuperSecretPassword!")
    await t
        .click(page.btn83)
    await t
        .expect(page.btn88.visible).ok()
        .click(page.btn88)
        .expect(page.msg89.innerText).contains('You logged out of the secure area!')
        
});

test('Probar Login a página - con campos vacíos', async t =>{
    await t
        .click(page.link8)
    await t
        .click(page.btn83)
    await t
        .expect(page.msg84.innerText).contains('Your username is invalid!')
});

test('Probar Login a página - con username incorrecto', async t =>{
    await t
        .click(page.link8)
    await t
        .typeText(page.input81, "12345678", {speed: 0.1})
        .expect(page.input81.value).notEql("tomsmith") 
    await t
        .typeText(page.input82, "SuperSecretPassword!", {speed: 0.1})
        .expect(page.input82.value).eql("SuperSecretPassword!")
    await t
        .click(page.btn83)
        .expect(page.msg90.innerText).contains('Your username is invalid!')  
});

test('Probar Login a página - con password incorrecto', async t =>{
    await t
        .click(page.link8)
    await t
        .typeText(page.input81, "tomsmith", {speed: 0.1})
        .expect(page.input81.value).eql("tomsmith") 
    await t
        .typeText(page.input82, "12345678", {speed: 0.1})
        .expect(page.input82.value).notEql("SuperSecretPassword!")
    await t
        .click(page.btn83)
        .expect(page.msg901.innerText).contains('Your password is invalid!')  
});

test('Verificar que el usuario pueda corregir su password incorrecto y loguearse exitosamente', async t =>{
    await t
        .click(page.link8)
    await t
        .typeText(page.input81, "tomsmith", {speed: 0.1})
        .expect(page.input81.value).eql("tomsmith") 
    await t
        .typeText(page.input82, "12345678", {speed: 0.1})
        .expect(page.input82.value).notEql("SuperSecretPassword!")
    await t
        .typeText(page.input82, "SuperSecretPassword!", {replace: true})
    await t
        .click(page.btn83)
    await t
        .expect(page.msg85.visible).ok()
        .expect(page.msg85.innerText).contains('You logged into a secure area!') 
});




