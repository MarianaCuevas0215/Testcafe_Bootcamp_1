import page from './pageModel';
fixture('Practica 10 con testcafe')
    .page ('https://the-internet.herokuapp.com/');

test('Probar una ventana emergente (pop-up)', async t =>{
    await t
        .click(page.link10)
    await t
        .setNativeDialogHandler()
        .rightClick(page.hotspot101)
                
        
});