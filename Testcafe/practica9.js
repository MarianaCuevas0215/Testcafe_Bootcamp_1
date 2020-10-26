import page from './pageModel';
fixture('Practica 9 con testcafe')
    .page ('https://the-internet.herokuapp.com/');

test('Verificar que se presione una tecla', async t =>{
    await t
        
        .click(page.link9)
    
    await t
        .pressKey('backspace')
        .wait(500)

    await t
        .pressKey('c')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: C')
        .expect(page.text91.innerText).notContains('You entered: ALT')
    await t
        .pressKey('ENTER')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: ENTER')
        .pressKey('esc')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: ESC')
        .pressKey('shift')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: SHIFT')
        .pressKey('tab')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: TAB')
        .pressKey('capslock')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: CAPS_LOCK')
        .pressKey('up')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: UP')


});