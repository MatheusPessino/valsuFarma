import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_CONFIG.serviceUrl}/products`);
  }

  findById(id: number):Observable<Product>{
    return this.http.get<Product>(`${API_CONFIG.serviceUrl}/products/${id}`)
  }

  insert(product: Product): Observable<Product>{
    return this.http.post<Product>(`${API_CONFIG.serviceUrl}/products`,product);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${API_CONFIG.serviceUrl}/products/${product.id}`,product);
  }

  delete(id: number): Observable<Product>{
    return this.http.delete<Product>(`${API_CONFIG.serviceUrl}/products/${id}`)
  }
}
