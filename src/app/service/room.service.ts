import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8080/room';

  constructor(private http: HttpClient) {}

  getRoom(idRoom : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/room/${idRoom}`);
  }

  /*
    getRoombyNumberRM(login : string) : Observable<any>{
      return this.http.get(`${this.baseUrl}/login/${login}`);
    }
      */

  createRoom(room: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/new`, room);
  }

  updateRoom(idRoom: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/change/${idRoom}`, value);
  }

  deleteRoom(idRoom: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idRoom}`);
  }

  getRoomsList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteAllRooms(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/rooms`);
  }

}
