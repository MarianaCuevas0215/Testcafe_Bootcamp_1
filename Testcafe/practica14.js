import { Selector} from 'testcafe';
import {ClientFunction} from 'testcafe';

const getLocation = ClientFunction(() => document.location.href);

fixture('Practica 14 con testcafe')
    .page ('https://the-internet.herokuapp.com/upload');

test('Probar adjuntar un archivo', async t =>{
    await t
        .expect(Selector('#file-upload').visible).ok()
        .setFilesToUpload(Selector('#file-upload'),'./Gatito.jpg')
        .click('#file-submit')

    await t
        .wait(1000)
        .expect(Selector('h3').innerText).contains('Uploaded')
        .expect(Selector('#uploaded-files').innerText).contains('Gatito.jpg')

});


test('Validar que la URL sea correcta', async t =>{
    await t
        .expect(getLocation()).contains('https://the-internet.herokuapp.com/upload')
                
});