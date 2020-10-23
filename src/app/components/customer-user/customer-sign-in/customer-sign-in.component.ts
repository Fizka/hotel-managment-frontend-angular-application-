import { Component, OnInit } from '@angular/core';
import {Worker} from '../../../models/worker';
import {WorkerService} from '../../../service/worker.service';
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

  user : Customer;
  loginPodany: string;
  passwordPodane: string;
  constructor( private router: Router, private menu : MenuComponent,
              private customerService : CustomerService) { };

  ngOnInit() {

  }

  onSubmit(){
    this.findWorker(this.loginPodany);
  }

  private findWorker(login){

    this.customerService.getCustomerbylogin(login).subscribe(
      data => {
        this.user = data as Customer;
        console.log(data);
        if(this.loguj(this.passwordPodane)){
          sessionStorage.setItem('login', JSON.stringify(this.user));
          alert("Udało się");
          this.menu.IsOut();

        }else{
          alert("Blad logowania");
        }
      },
      error => console.log(error));

  }

  loguj( password ) {

    if(this.user !== undefined){
      if( password == this.user.password ){
        return true;
      }else{
        return false;
      }
    }

  }

  logOut(){
    sessionStorage.clear();
  }

}
