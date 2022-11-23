import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, toastr: HotToastService) { }

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${API_CONFIG.serviceUrl}/category`);
  }
}
