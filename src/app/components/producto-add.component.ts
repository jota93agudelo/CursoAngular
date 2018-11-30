import {Component} from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
    selector:'producto-add',
    templateUrl:'../views/producto-add.html',
    providers: [ProductoService]
})

export class ProductoAddComponen{
    public titulo:string;
    public producto:Producto;
    constructor(){
        this.titulo='Crear un nuevo producto';
        this.producto = new Producto(0,'','',0,'');
    }
        ngOnInit(){
            console.log('producto-add-componen.ts cargado');
        }

    onSubmit(){
        console.log(this.producto);
    }
}