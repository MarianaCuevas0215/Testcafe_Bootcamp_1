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
    this.link5 = Selector('a').withText('Inputs');
    this.input51 = Selector('#content > div > div > div > input[type=number]');
    
    //Practica 6
    this.link6 = Selector('a').withText('Add/Remove Elements');
    this.btnA61 = Selector('#content > div > button');
    this.btnD62 = Selector('#elements > button');
    this.btnD63 = Selector('#elements > button:nth-child(2)');
    this.btnD64 = Selector('#elements > button:nth-child(3)');
    
    
    
    

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
    this.btn704 = Selector('body > div > form > div > div:nth-child(15) > a');
    this.text705 = Selector('h1').withText('Thanks for submitting your form'); 
    this.text706 = Selector('body > div > div'); 

    //Practica 8
    this.link8 = Selector('a').withText('Form Authentication');
    this.input81 = Selector('#username');
    this.input82 = Selector('#password');
    this.btn83 = Selector('#login > button > i');
    this.msg84 = Selector('#flash').withText('Your username is invalid!');
    this.msg85 = Selector('#flash').withText('You logged into a secure area!');
    this.header86 = Selector('#content > div > h2');
    this.header87 = Selector('#content > div > h4');
    this.btn88 = Selector('#content > div > a'); 
    this.msg89 = Selector('#flash').withText('You logged out of the secure area!');
    this.msg90 = Selector ('#flash').withText('Your username is invalid!');
    this.msg901 = Selector('#flash').withText('Your password is invalid!');

    //Practica 9
    this.link9 = Selector('a').withText('Key Presses');
    this.text91 = Selector('#result');

    //Practica 10
    this.link10 = Selector('a').withText('Context Menu');
    this.hotspot101 = Selector('#hot-spot');

    }
}

export default new Page();
