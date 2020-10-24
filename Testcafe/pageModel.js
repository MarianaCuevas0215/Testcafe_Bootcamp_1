import { Selector } from 'testcafe';

class Page {
    constructor (){
    //Practica 2
    this.link2 = Selector('a').withText('A/B Testing');
    this.text21 = Selector ('#content > div > h3');

    //Practica 3
    this.link3 = Selector('a').withText('Forgot Password'); 
    this.input31 = Selector('#email');
    this.btn32 = Selector('#form_submit > i');
    this.msg33 = Selector('#content');
    this.msg34 = Selector('body > h1');

    //Practica 4
    this.link4 = Selector('a').withText('Checkboxes');
    //Checkbox padre
    this.baseCheckbox = Selector('#checkboxes > input[type=checkbox]')
    //Checkbox hijos
    this.checkbox41 = Selector('#checkboxes > input[type=checkbox]:nth-child(1)');
    this.checkbox42 = Selector('#checkboxes > input[type=checkbox]:nth-child(3)');

    //Practica 5
    

    //Practica 7 - Formulario
    this.input71 = Selector('#first-name');
    this.input72 = Selector('#last-name');
    this.input73 = Selector('#job-title');
    this.rbt74 = Selector('#radio-button-1');
    this.rbt75 = Selector('#radio-button-2');
    this.rbt76 = Selector('#radio-button-3');
    this.checkbox77 = Selector('#checkbox-1');
    this.checkbox78 = Selector('#checkbox-2');
    this.checkbox79 = Selector('#checkbox-3');
    this.smenu701 = Selector('#select-menu');
    this.opt702 = Selector('#select-menu > option:nth-child(2)');
    this.date703 = Selector('#datepicker');
    this.datebtn704 = Selector('body > div > form > div > div:nth-child(15) > a')
    //datepicker
    this.text705 = Selector('Thanks for submitting your form');
    this.text706 = Selector('body > div > div');

    //Practica 10
    this.link10 = Selector('')



    }
}

export default new Page();