import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { API_CONFIG } from '../config/api.config';
import { ProductLog } from '../models/productLog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductLogService {

  constructor(private http: HttpClient, toastr: HotToastService) { }

  findAll(): Observable<ProductLog[]> {
    return this.http.get<ProductLog[]>(`${API_CONFIG.serviceUrl}/log/product/update`);
  }
}
