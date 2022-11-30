import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Brand } from '../models/brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${API_CONFIG.serviceUrl}/brand`);
  }

  findById(id: number):Observable<Brand>{
    return this.http.get<Brand>(`${API_CONFIG.serviceUrl}/brand/${id}`)
  }

  insert(brand: Brand): Observable<Brand>{
    return this.http.post<Brand>(`${API_CONFIG.serviceUrl}/brand`,brand);
  }

  update(brand: Brand): Observable<Brand> {
    return this.http.put<Brand>(`${API_CONFIG.serviceUrl}/brand/${brand.id}`,brand);
  }

  delete(id: number): Observable<Brand>{
    return this.http.delete<Brand>(`${API_CONFIG.serviceUrl}/brand/${id}`)
  }
}
