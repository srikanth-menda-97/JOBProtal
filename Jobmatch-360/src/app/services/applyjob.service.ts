import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iapplication } from '../interfaces/iapplication';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyjobService {
  private url = 'http://localhost:3000/applications';

  constructor(private http: HttpClient) { }

  submitApplication(application: Iapplication): Observable<Iapplication> {
    return this.http.post<Iapplication>(this.url, application);
  }

  
}
