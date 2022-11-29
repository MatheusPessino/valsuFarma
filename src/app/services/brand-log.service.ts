import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { API_CONFIG } from '../config/api.config';
import { BrandLog } from '../models/brandLog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandLogService {

  constructor(private http: HttpClient, toastr: HotToastService) { }


  findAll(): Observable<BrandLog[]> {
    return this.http.get<BrandLog[]>(`${API_CONFIG.serviceUrl}/log/brand/update`);
  }
}

