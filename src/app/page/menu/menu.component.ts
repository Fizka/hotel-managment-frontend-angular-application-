import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

@Injectable({
  providedIn : 'root'
})
export class MenuComponent implements OnInit {

  state: boolean = false;
  visible: string;
  opacity: number;
  logowanie: string = 'Zaloguj';
  stateLogowanie: boolean = false;
  statelog : string = 'log';
  constructor(private router: Router) { }

  ngOnInit() {
      this.checker();
    }


    onSubmit(){
      if(this.IsLogged()){
        sessionStorage.clear();
      }
    }


  hamburger() {
    if (this.state === false) {
      this.visible = 'collapse';
      this.opacity = 0;
      this.state = true;

    } else if (this.state === true) {
      this.visible = 'visible';
      this.opacity = 1;
      this.state = false;

    }
  }

  IsLogged(){
      if(sessionStorage.getItem('login') != null){
        return true;
      }else
        return false;
    }

  checker(){
    if(this.IsLogged()){
      this.logowanie = 'Wyloguj';
      this.statelog = '';
    }else {
      this.logowanie = 'Zaloguj';
    }
  }

  IsOut(){
    alert("Zmiana!")
    this.logowanie = 'Wyloguj';
    this.router.navigate(['rommboard']);
  }

}
