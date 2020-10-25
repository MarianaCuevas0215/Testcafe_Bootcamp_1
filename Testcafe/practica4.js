import page from './pageModel';

fixture('Test con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar checkboxes no seleccionados', async t =>{
    await t
        .click(page.link4)

    await t
        .click(page.baseCheckbox.nth(1))

    await t.expect(page.baseCheckbox.nth(0).checked).notOk()
    await t.expect(page.baseCheckbox.nth(1).checked).notOk()

});

test('Probar checkboxes que esten seleccionados', async t =>{
    await t
        .click(page.link4)

    await t
        .click(page.baseCheckbox.nth(0))

    await t.expect(page.baseCheckbox.nth(0).checked).ok()
    await t.expect(page.baseCheckbox.nth(1).checked).ok()

});

