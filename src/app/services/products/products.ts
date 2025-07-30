import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //Se registra automaticamente como provider global
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProducts(){
   //Llama a un JSON local
    return this.http.get('/assets/products.json');
  }
}
