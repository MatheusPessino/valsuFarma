import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService} from '@ngneat/hot-toast';
import { API_CONFIG } from '../config/api.config';
import { Brand } from '../models/brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient, toastr: HotToastService) { }


  findAll(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${API_CONFIG.serviceUrl}/brand`);
  }
}
