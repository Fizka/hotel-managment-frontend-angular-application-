import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CommentModel} from '../model/commentModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = 'http://localhost:8080/comment';

  constructor(private http: HttpClient) {
  }

  createComment(idRoom: number, idCustomer: number, comment: any): Observable<CommentModel> {
    return this.http.post<CommentModel>(`${this.baseUrl}/new/${idRoom}/${idCustomer}`, comment);
  }

  getCommentsByRoomId(roomId: number): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`${this.baseUrl}/list/${roomId}`);
  }

  getComments(): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(this.baseUrl);
  }

}
