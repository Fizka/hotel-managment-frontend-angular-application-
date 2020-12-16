import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsibilityService {

  private baseUrl = 'http://localhost:8080/responsibility';

  constructor(private http: HttpClient) {
  }

  getList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createResponsibility(responsibility: any, idWorker: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/new/${idWorker}`, responsibility);
  }

  deleteResponsibility(idResponsibility: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idResponsibility}`);
  }

  updateResponsibility(idResponsibility: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/change/${idResponsibility}`, value);
  }
}
