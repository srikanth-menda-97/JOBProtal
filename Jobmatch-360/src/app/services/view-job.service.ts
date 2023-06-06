import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IviewJob } from '../interfaces/iview-job';

@Injectable({
  providedIn: 'root'
})
export class ViewJobService {
 
  private url = 'http://localhost:3000/jobs';
  constructor(private http: HttpClient) { }

  getJobById(job_id: number): Observable<IviewJob> {
    const url = `${this.url}/${job_id}`;
    return this.http.get<IviewJob>(url);
  }

}
