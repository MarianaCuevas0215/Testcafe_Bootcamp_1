import page from './pageModel';
fixture('Practica 7 con testcafe')
    .page ('https://formy-project.herokuapp.com/form');

test('Validar un formulario', async t =>{
    await t
        .typeText(page.input71, "Mariana", {speed:0.1})
        .expect(page.input71.value).eql("Mariana")
        .typeText(page.input72, "Cuevas", {speed:0.1})
        .expect(page.input72.value).eql("Cuevas")
        .typeText(page.input73, "Software engineer in test")
        .expect(page.input73.value).eql("Software engineer in test")
        .click(page.rbt74)
        .expect(page.rbt74.checked).ok()
        .click(page.rbt75)
        .expect(page.rbt75.checked).ok()
        .click(page.rbt76)
        .expect(page.rbt76.checked).ok()
        .click(page.checkbox77)
        .expect(page.checkbox77.checked).ok()
        .click(page.checkbox78)
        .expect(page.checkbox78.checked).ok()
        .click(page.checkbox79)
        .expect(page.checkbox79.checked).ok()
        .click(page.smenu701)
        .click(page.opt702)
        .typeText(page.date703, "01112020")
        .click(page.btn704)

    await t
        .expect(page.text705.visible).ok()
        .expect(page.text706.visible).ok()
                
});