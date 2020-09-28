import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WorkerService {

  private baseUrl = 'http://localhost:8080/worker';

  constructor(private http: HttpClient) { }

  getWroker(idWorker : number): Observable<any>{
    return this.http.get(`${this.baseUrl}/worker/${idWorker}`);
  }

   getWorkerBylogin(login : string) : Observable<any>{
    return this.http.get(`${this.baseUrl}/login/${login}`);
  }

  createWorker(worker: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/new`, worker);
  }

  getAllWorkers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

}
