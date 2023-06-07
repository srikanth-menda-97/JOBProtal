import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<Iapplication>(this.url, applicationData, {headers: headers});
  }

  downloadResume(payload: any): Observable<Blob>{
    return this.http.post<Blob>(this.SERVER_URL + '/download', payload, {responseType: 'blob' as 'json'});
  }

  viewApplications(jobId: any) : Observable<any>{
    return this.http.get(this.SERVER_URL + '/applications/' + jobId);
  }
}
