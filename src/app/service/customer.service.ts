import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080/customer';

  constructor(private http: HttpClient) {
  }

  getCustomer(idCustomer: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/${idCustomer}`);
  }

  getCustomerbylogin(login: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/login/${login}`);
  }

  getCustomerbyMain(mail: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/mail/${mail}`);
  }

  createCustomer(customer: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/new`, customer);
  }

  updateCustomer(idCustomer: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/customer/${idCustomer}`, value);
  }

  deleteCustomer(idCustomer: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/customer/${idCustomer}`);
  }

  getCustomersList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteAllCustomers(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/customers`);
  }

}
