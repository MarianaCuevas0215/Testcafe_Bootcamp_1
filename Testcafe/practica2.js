import { Selector } from 'testcafe';
import page from './pageModel';

fixture('Practica 2 con testcafe')
    .page('https://the-internet.herokuapp.com/');
    
test('Probar dar clic en un enlace', async t => {
    await t
        .click(page.link2)
});

