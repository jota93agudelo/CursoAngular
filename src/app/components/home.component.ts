import {Component} from '@angular/core';
import { cleanSession } from 'selenium-webdriver/safari';

@Component({
    selector:'home',
    templateUrl:'../views/home.html'
})
export class HomeComponent{
    public titulo:string;

    constructor(){
        this.titulo='Web app de productos con algular 6';
    }

    ngOnInit(){
        console.log('Se ha cargadi ek componente home.component.ts');
    }
}
