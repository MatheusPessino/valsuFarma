import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { API_CONFIG } from '../config/api.config';
import { Product } from '../models/product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, toastr: HotToastService) { }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_CONFIG.serviceUrl}/products`);
  }
}
