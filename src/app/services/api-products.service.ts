import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  [x: string]: any;

  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.baseURL}/products`);
    }
  
    getProductById(id:number):Observable<Iproduct>{
      return this.httpClient.get<Iproduct>(`${environment.baseURL}/products/${id}`);
    }
  
    getProductsByCatId(catId:number):Observable<Iproduct[]>{
      return this.httpClient.get<Iproduct[]>(`${environment.baseURL}/products?categoryid=${catId}`);
    }
  
    addProduct(newProduct:Iproduct):Observable<Iproduct>{
     return this.httpClient.post<Iproduct>(`${environment.baseURL}/products`,JSON.stringify(newProduct))
    }
  
    deleteProductById(id:number){
      return this.httpClient.delete(`${environment.baseURL}/products/${id}`);
    }
    updateProductById(id:number,updatedProduct: Iproduct):Observable<Iproduct>{
    return this.httpClient.put<Iproduct>(`${environment.baseURL}/products/${id}`,updatedProduct)
    }
}
