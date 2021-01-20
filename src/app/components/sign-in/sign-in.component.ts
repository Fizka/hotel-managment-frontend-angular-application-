import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {WorkerService} from '../../service/worker.service';
import {Worker} from '../../model/worker';
import {MenuComponent} from '../../page/menu/menu.component';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  user: Worker;
  loginPodany: string;
  passwordPodane: string;

  constructor(private WS: WorkerService, private router: Router, private menu: MenuComponent) {
  };

  ngOnInit() {
  }

  onSubmit() {
    this.findWorker(this.loginPodany);
  }

  private findWorker(login) {
    this.WS.getWorkerBylogin(login).subscribe(
      data => {
        this.user = data as Worker;
        if (this.loguj(this.passwordPodane)) {
          sessionStorage.setItem('login', JSON.stringify(this.user));
          sessionStorage.setItem('zalogowany', JSON.stringify(true));
          if(this.user.privileges != -1)
          {
            sessionStorage.setItem('uprawnienia', JSON.stringify(true));
          }else {
            sessionStorage.setItem('uprawnienia', JSON.stringify(false));
          }
          if(this.user.privileges == 999)
          {
            sessionStorage.setItem('admin', JSON.stringify(true));
          }else {
            sessionStorage.setItem('admin', JSON.stringify(false));
          }
          this.menu.IsOut();
        } else {
          alert('Blad logowania');
        }
      },
      error => console.log(error));
  }

  loguj(password) {
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
