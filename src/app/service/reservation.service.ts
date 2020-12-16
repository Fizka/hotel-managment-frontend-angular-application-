import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = 'http://localhost:8080/reservation';

  constructor(private http: HttpClient) {
  }

  getReservation(idReservation: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/reservation/${idReservation}`);
  }

  getReservationByRoomId(roomId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/roomId/${roomId}`);
  }

  getReservetByRoomId(roomId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/reservet/${roomId}`);
  }

  getReservationByCustomerId(customerId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/customerId/${customerId}`);
  }

  createReservation(idRoom: number, idCustomer: number, reservation: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/new/${idRoom}/${idCustomer}`, reservation);
  }

  updateReservation(idReservation: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/change/${idReservation}`, value);
  }

  deleteReservation(idReservation: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/reservation/${idReservation}`);
  }

  getReservationsList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteAllReservations(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/reservations`);
  }

}
