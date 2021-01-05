import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuComponent} from '../../../page/menu/menu.component';
import {CustomerService} from '../../../service/customer.service';
import {Customer} from '../../../models/customer';

@Component({
  selector: 'app-customer-sign-in',
  templateUrl: './customer-sign-in.component.html',
  styleUrls: ['./customer-sign-in.component.css']
})
export class CustomerSignInComponent implements OnInit {

  user: Customer;
  loginPodany: string;
  passwordPodane: string;

  constructor(private router: Router, private menu: MenuComponent,
              private customerService: CustomerService) {
  };

  ngOnInit() {

  }

  onSubmit() {
    this.findWorker(this.loginPodany);
  }

  private findWorker(login) {
    this.customerService.getCustomerbylogin(login).subscribe(
      data => {
        this.user = data as Customer;
        if (this.loguj(this.passwordPodane)) {
          sessionStorage.setItem('login', JSON.stringify(this.user));
          sessionStorage.setItem('zalogowany', JSON.stringify(true));
          //TODO - zablokowanie logowania dla upr = -1
          sessionStorage.setItem('uprawnienia', JSON.stringify(false));
          sessionStorage.setItem('admin', JSON.stringify(false));
          this.menu.IsOut();
        } else {
          alert('Blad logowania');
        }
      },
      error => console.log(error));
  }

  loguj(password) {
    console.log(this.user.password);
    if (this.user !== undefined) {
      if (password == this.user.password) {
        return true;
      } else {
        return false;
      }
    }
  }

  logOut() {
    sessionStorage.clear();
  }

}
