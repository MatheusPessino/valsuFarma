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

  delete(id: number): Observable<Brand>{
    return this.http.delete<Brand>(`${API_CONFIG.serviceUrl}/brand/${id}`)
  }
}
