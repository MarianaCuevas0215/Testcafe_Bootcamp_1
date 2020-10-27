import page from './pageModel';
fixture('Practica 11 con testcafe')
    .page ('https://the-internet.herokuapp.com/');

test('Probar un slider horizontal', async t =>{
    await t
        .click(page.link11)
    await t
        .click(page.slider111)
        .typeText(page.slider111, "3.5", {speed: 0.1})
        .expect(page.slider111.value).eql("3.5")
});