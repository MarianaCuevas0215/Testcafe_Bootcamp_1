import { Selector } from 'testcafe';
import page from './pageModel';

fixture('Practica 3 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Validar que aparecen correctamente el input y el botón', async t => {
    await t
        .click(page.link3)
    await t
        .expect(page.input31.exists).ok()
        .expect(page.btn32.exists).ok()
       
});

test('Verificar que se pueda escribir un email', async t => {
    await t
        .click(page.link3)
    await t
        .typeText(page.input31, 'mar0215@contact.com')
        .expect(page.input31.value).eql('mar0215@contact.com')        
       
});

test('Verificar que se despliegue un mensaje de confirmacion', async t => {
    await t
        .click(page.link3)
    await t
        .typeText(page.input31, 'mar0215@contact.com')
        .expect(page.input31.value).eql('mar0215@contact.com')
        .click(page.btn32)  
    await t
        .expect(page.msg33.innerText).contains('Your e-mail', 'Prueba exitosa')      
       
});

test('Verificar que se despliegue un mensaje cuando el formulario esta vacio(test negativo)', async t => {
    await t
        .click(page.link3)
    await t
        .typeText(page.input31, ' ')
        .expect(page.input31.value).eql(' ')
        .click(page.btn32)  
    await t
        .expect(page.msg34.innerText).contains('Internal Server Error')   
            
});