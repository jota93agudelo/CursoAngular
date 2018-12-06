import {Component, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { GLOBAL } from './global';
import { Producto } from '../models/producto';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable()
export class ProductoService{
    public url:string;

    constructor(public http:HttpClient){
        this.url=GLOBAL.url;
    }

    getProductos():Observable<any>{
        return this.http.get(this.url+'productos');
    }

    getProducto(id):Observable<any>{
        return this.http.get(this.url+'producto/'+id);
    }

    addProducto(producto:Producto):Observable<any>{
        //se crea variable json para enviar al servicio, se convierte el producto a un string de json
        let json = JSON.stringify(producto);
        // los parametros que se van a enviar y se le concatena el json
        let params = 'json='+json;
        let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');
        return this.http.post(this.url+'productos',params,{headers:headers});
    }

    editProducto(id,producto:Producto):Observable<any>{
        let json =JSON.stringify(producto);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this.http.post(this.url+'update-producto/'+id,params,{headers:headers});
    }

    deleteProducto(id):Observable<any>{
        return this.http.get(this.url+'delete-producto/'+id);
    }

    makeFileRequest(url: string, params:Array<string>, files: Array<File>){
        return new Promise((resolve,reject)=>{
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();

            for (let index = 0; index <files.length; index++) {
                formData.append('uploads[]',files[index],files[index].name);
                
            }
            xhr.onreadystatechange = function(){
                if(xhr.readyState==4){
                    if(xhr.status==200){
                    resolve(JSON.parse(xhr.response))
                    }else{
                        reject(xhr.response);
                    }
                }
            };
            // abrir la peticion ajax, se le indica el metodo, la url , y el true para que la lance
            xhr.open("POST",url,true);
            // se le envia el formulario completo a la urk que se le ha indicadi por post
            xhr.send(formData);

        });
        
    }
}