import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${API_CONFIG.serviceUrl}/category`);
  }

  findById(id: number):Observable<Category>{
    return this.http.get<Category>(`${API_CONFIG.serviceUrl}/category/${id}`)
  }

  insert(category: Category): Observable<Category>{
    return this.http.post<Category>(`${API_CONFIG.serviceUrl}/category`,category);
  }

  update(category: Category): Observable<Category> {
    return this.http.put<Category>(`${API_CONFIG.serviceUrl}/brand/${category.id}`,category);
  }

  delete(id: number): Observable<Category>{
    return this.http.delete<Category>(`${API_CONFIG.serviceUrl}/category/${id}`)
  }
}
