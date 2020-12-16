import {Component, Input, OnInit} from '@angular/core';
import {Worker} from '../../../models/worker';
import {Router} from '@angular/router';
import {Customer} from '../../../models/customer';
import {CustomerService} from '../../../service/customer.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {WorkerEditComponent} from '../../worker-user/worker-edit/worker-edit.component';
import {CustomerEditPassComponent} from './customer-edit-pass.component';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer: Customer;
  id: number;

  constructor(public matDialog: MatDialog, private router: Router, private userService: CustomerService) {
  }

  ngOnInit() {
    this.customer = JSON.parse(sessionStorage.getItem('login'));
    this.id = this.customer.idCustomer;
    this.reloadDate();
  }

  reloadDate() {
    this.userService.getCustomer(this.id).subscribe((data) => this.customer = data);
  }

  Goto() {
    this.router.navigate(['', this.customer.idCustomer]);
  }

  edytuj() {
    this.userService.updateCustomer(this.customer.idCustomer, this.customer)
      .subscribe((data) => console.log(data));
  }

  changePassword() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '400px';
    dialogConfig.width = '500px';
    dialogConfig.data = this.customer;
    const modalDialog = this.matDialog.open(CustomerEditPassComponent, dialogConfig);
  }

}
