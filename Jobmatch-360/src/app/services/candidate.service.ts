import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icandidate } from '../interfaces/icandidate';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private url = 'http://localhost:3000/candidates';
  private SERVER_URL = environment.serverUrl;

  constructor(private http: HttpClient) { }

  registerCandidate(candidate: Icandidate): Observable<Icandidate> {
    return this.http.post<Icandidate>(this.SERVER_URL + '/candidates', candidate);
  }

  loginCandidate(candidate: Icandidate): Observable<Icandidate> {
    return this.http.post<Icandidate>(this.SERVER_URL + '/candidate-login', candidate);
  }
}
  