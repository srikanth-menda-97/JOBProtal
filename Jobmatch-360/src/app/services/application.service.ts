import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iapplication } from '../interfaces/iapplication';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private url = 'http://localhost:3000/applications';

  constructor(private http: HttpClient) { }

  submitApplication(applicationData: FormData) {
    return this.http.post<Iapplication>(this.url, applicationData);
  }


}
