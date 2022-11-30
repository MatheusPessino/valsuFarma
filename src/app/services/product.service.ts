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

  delete(id: number): Observable<Product>{
    return this.http.delete<Product>(`${API_CONFIG.serviceUrl}/products/${id}`)
  }
}
