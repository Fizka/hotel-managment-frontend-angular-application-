import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {WorkerService} from '../../service/worker.service';
import { Worker } from '../../models/worker'
import {MenuComponent} from '../../page/menu/menu.component';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  user : Worker;
  loginPodany: string;
  passwordPodane: string;
  constructor(private WS: WorkerService, private router: Router, private menu : MenuComponent) { };

  ngOnInit() {
  }

  onSubmit(){
    this.findWorker(this.loginPodany);
  }

  private findWorker(login){

    this.WS.getWorkerBylogin(login).subscribe(
      data => {
        this.user = data as Worker;
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
