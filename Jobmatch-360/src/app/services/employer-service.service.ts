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

  // Login employer
  loginEmployer(payload: any) {
    return this.httpClient.post(this.SERVER_URL + "/employer-login", payload);        
  }

  // GET Job data of employer
  getPostedJobData(employer_id: any) {
    return this.httpClient.get(this.SERVER_URL + "/employers/"+ employer_id + "/jobs");    
  }

  // POST a Job
  createJob(payload: any) {
    return this.httpClient.post(this.SERVER_URL + "/jobs", payload);    
  }
}
