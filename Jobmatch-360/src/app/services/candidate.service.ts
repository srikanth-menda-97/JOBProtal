import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icandidate } from '../interfaces/icandidate';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private url = 'http://localhost:3000/candidates';

  constructor(private http: HttpClient) { }

  registerCandidate(candidate: Icandidate): Observable<Icandidate> {
    return this.http.post<Icandidate>(this.url, candidate);
  }
}
  