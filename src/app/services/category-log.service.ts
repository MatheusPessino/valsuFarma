import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { API_CONFIG } from '../config/api.config';
import { CategoryLog } from '../models/categoryLog';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryLogService {

  constructor(private http: HttpClient, toastr: HotToastService) { }


  findAll(): Observable<CategoryLog[]> {
    return this.http.get<CategoryLog[]>(`${API_CONFIG.serviceUrl}/log/category/update`);
  }
}
