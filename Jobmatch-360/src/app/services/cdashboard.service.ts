import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icdashboard } from '../interfaces/icdashboard';

@Injectable({
  providedIn: 'root'
})
export class CdashboardService {

  private url = 'http://localhost:3000/jobs';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
