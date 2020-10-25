import page from './pageModel';

fixture('Practica 5 con Testcafe')
    .page('https://the-internet.herokuapp.com/');

    test('Verificar que no se puedan escribir letras', async t =>{
        await t
            .click(page.link5)
    
        await t
            .typeText(page.input51, "letras", {speed: 0.05})
            .expect(page.input51.value).eql("")
    });

    test('Verificar que se escriban numeros', async t =>{
        await t
            .click(page.link5)

        await t
            .typeText(page.input51, "87979879", {speed: 0.1})
            .expect(page.input51.value).notEql("7687")
            .expect(page.input51.value).eql("87979879")

    });
    
    test('Verificar que se puedan reemplazar valores', async t=>{
        await t
            .click(page.link5)
        await t
            .typeText(page.input51,"666", {replace: true})
            .typeText(page.input51,"%-+^*[]{}¡‚´‚´‚!´", {replace: true})
        await t
            .typeText(page.input51,"8", {replace:true})
            .expect(page.input51.value).eql("8") 
    });
           