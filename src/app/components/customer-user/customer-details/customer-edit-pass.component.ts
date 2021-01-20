import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer.service';
import {Customer} from '../../../model/customer';
import {FormBuilder} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-customer-details',
  template: '<div class="jumbotron">' +
    '      <label style="color: whitesmoke;">Stare hasło:</label>\n' +
    ' <input class="inputform" type="text" name="lastname" id="lastname" style="color: whitesmoke; width: 450px;" required [(ngModel)]="odlPassword">' +
    ' <br/> <br/>\n' +
    '<label style="color: whitesmoke;">Nowe hasło:</label>' +
    '<input class="inputform" type="text" name="email" id="email" style="color: whitesmoke; width: 450px;" required [(ngModel)]="newPassword">' +
    '<br/> <br/>\n'+
    '<button type="button" style="width: 220px" class="btn btn-primary" (click)="reset()">Wróć</button>'+
    '<button type="button" style="width: 220px" class="btn btn-primary" (click)="save()">Zapisz</button>' +
  '</div>',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerEditPassComponent implements OnInit {
  odlPassword: string;
  newPassword: string;
  customer: Customer;
  id: number;

  constructor( public dialogRef: MatDialogRef<CustomerEditPassComponent>, private userService: CustomerService){

  }

  reloadDate(){
    this.userService.getCustomer(this.id).subscribe((data )=> this.customer = data);
  }

  ngOnInit(): void {
    this.customer = JSON.parse(sessionStorage.getItem('login'));
    this.id = this.customer.idCustomer;
    this.reloadDate();
  }

  reset(){
    this.dialogRef.close();
  }

  save() {
    if (this.customer.password === this.odlPassword) {
      this.customer.password = this.newPassword;
      console.log(this.newPassword)
      this.userService.updateCustomer(this.customer.idCustomer, this.customer)
        .subscribe((data) => {
          console.log(data);
          this.dialogRef.close();
          this.reloadDate();
        })
    }else{
      alert("Hasła się nie zgadzają!")
    }
  }
}
