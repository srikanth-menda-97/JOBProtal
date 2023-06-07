import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private SERVER_URL = environment.serverUrl;
  constructor(private httpClient: HttpClient) { }

  // Contact company
  contactUs(payload: any): Observable<any> {
    return this.httpClient.post<any>(this.SERVER_URL + "/contact", payload);        
  }

}
