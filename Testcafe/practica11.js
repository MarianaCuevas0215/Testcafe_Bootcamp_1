import page from './pageModel';
fixture('Practica 11 con testcafe')
    .page ('https://the-internet.herokuapp.com/');

test('Probar un slider horizontal capturando un valor', async t =>{
    await t
        .click(page.link11)
    await t
        .click(page.slider111)
        .typeText(page.slider111, "3.5", {speed: 0.1})
        .expect(page.slider111.value).eql("3.5")
});

/*test('Probar un slider horizontal a traves de un drag', async t =>{
    await t
        .click(page.link11)
    await t
        .click(page.slider111)
        .dragElement(page.slider111.value.withText(1))
});*/

//This test only run correctly on FF browser.
test('Probar un slider horizontal moviendo las teclas de right/left', async t =>{
    await t
        .click(page.link11)
    await t
        .click(page.slider111)
        .pressKey('right')
        .pressKey('right')
        .pressKey('right')
        .pressKey('right')
        .pressKey('right')
        .expect(page.slider111.value).eql("2.5")
        .wait(500)
        .pressKey('left')
        .pressKey('left')
        .expect(page.slider111.value).eql("1.5")
        .wait(500)
});