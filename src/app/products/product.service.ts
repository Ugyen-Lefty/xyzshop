import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  viewAllProductProduct() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) { }

  createProduct(productBody: any):Observable<Product>{
    const baseUrl = "http://localhost:3000/products";
    return this.httpClient.post<Product>(baseUrl, productBody);
  }

  viewProduct(productID: any):Observable<Product>{
    const baseUrl = "http://localhost:3000/products/"+ productID;
    return this.httpClient.get<Product>(baseUrl);
  }

  viewAllProduct():Observable<Product>{
    const baseUrl = "http://localhost:3000/products/";
    return this.httpClient.get<Product>(baseUrl);
  }

  updateProduct(productId: any, productBody: any):Observable<Product>{
    const baseUrl = "http://localhost:3000/products/" + productId;
    return this.httpClient.put<Product>(baseUrl, productBody);
  }

  deleteProduct(productId: any):Observable<Product>{
    const baseUrl = "http://localhost:3000/products/" + productId;
    return this.httpClient.delete<Product>(baseUrl);
  }

  searchPriceProduct(price: any):Observable<Product>{
    const baseUrl = "http://localhost:3000/price=" + price;
    return this.httpClient.get<Product>(baseUrl);
  }
  getCategory(){
    const categoryUrl = "http://localhost:3000/category";
      return this.httpClient.get<Category>(categoryUrl);
  }

}