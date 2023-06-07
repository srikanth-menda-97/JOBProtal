import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iapplication } from '../interfaces/iapplication';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private SERVER_URL = environment.serverUrl;
  private url = this.SERVER_URL + '/applications';

  constructor(private http: HttpClient) { }

  submitApplication(applicationData: FormData) {
    return this.http.post<Iapplication>(this.url, applicationData);
  }


}
