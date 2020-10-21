import { Selector } from 'testcafe';

class Page {
    constructor (){
    // Practica 2
    this.link2 = Selector('#content > ul > li:nth-child(1) > a');

    }
}

export default new Page();