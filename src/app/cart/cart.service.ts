import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }

  viewCart():Observable<Cart>{
    const baseUrl = "http://localhost:3000/cart/";
    return this.httpClient.get<Cart>(baseUrl);
  }

  createCart(cartBody: any):Observable<Cart>{
    const baseUrl = "http://localhost:3000/cart/";
    return this.httpClient.post<Cart>(baseUrl, cartBody);
  }
  
  deleteCart(id: any):Observable<Cart>{
    const baseUrl = "http://localhost:3000/cart/" + id;
    return this.httpClient.delete<Cart>(baseUrl);
  }

}