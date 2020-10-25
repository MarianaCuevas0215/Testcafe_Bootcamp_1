import page from './pageModel';

fixture('Practica 6 con Testcafe')
    .page('https://the-internet.herokuapp.com/');

    test('Verificar que exista elemento Add', async t =>{
        await t
            .click(page.link6)
    
        await t
            .expect(page.btnA61.visible).ok()               
        
    });

    test('Verificar que se agrega un elemento', async t =>{
        await t
            .click(page.link6)
    
        await t
            .expect(page.btnD62.visible).notOk()
            .click(page.btnA61)   
            .expect(page.btnD62.visible).ok() 
            .wait(3000)       
        
    });

    test('Verificar que se elimina un elemento', async t =>{
        await t
            .click(page.link6)
    
        await t
            .click(page.btnA61)   
            .expect(page.btnD62.visible).ok() 
        await t
            .click(page.btnD62) 
            .expect(page.btnD62.visible).notOk           
        
    });

    test('Verificar que se puedan agregar mas de 3 elementos', async t =>{
        await t
            .click(page.link6)
    
        await t
            .click(page.btnA61)
            .click(page.btnA61)
            .click(page.btnA61)   
            .expect(page.btnD62.visible).ok() 
            .expect(page.btnD63.visible).ok()
            .expect(page.btnD64.visible).ok()              
        
    });