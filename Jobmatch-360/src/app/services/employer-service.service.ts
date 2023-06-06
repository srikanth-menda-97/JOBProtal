import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployerServiceService {
  private SERVER_URL = environment.serverUrl;

  constructor(private httpClient: HttpClient) { }

  // Register new employer
  createEmployer(payload: any) {
    return this.httpClient.post(this.SERVER_URL + "/employers", payload);        
  }
}
