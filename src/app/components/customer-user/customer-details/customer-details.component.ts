import {Component, Input, OnInit} from '@angular/core';
import {Worker} from '../../../models/worker';
import {Router} from '@angular/router';
import {Customer} from '../../../models/customer';
import {CustomerService} from '../../../service/customer.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {WorkerEditComponent} from '../../worker-user/worker-edit/worker-edit.component';
import {CustomerEditPassComponent} from './customer-edit-pass.component';
import {Reservation} from '../../../models/reservations';
import {ReservationService} from '../../../service/reservation.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer: Customer;
  id: number;
  reservations: Reservation[];


  constructor(public matDialog: MatDialog,
              private router: Router,
              private userService: CustomerService,
              private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.customer = JSON.parse(sessionStorage.getItem('login'));
    this.id = this.customer.idCustomer;
    this.reloadDate();
  }

  reloadDate() {
    this.userService.getCustomer(this.id).subscribe((data) => {
      this.customer = data
      console.log(data)
    });
    this.reservationService.getReservationByCustomerId(this.id).subscribe(
      row => this.reservations = row
    );
  }

  changeStatus(reservation: Reservation) {
    reservation.status = true;
    this.reservationService.updateReservation(reservation.idReservation, reservation).subscribe(
      row => console.log(row)
    );
  }

  removeReservation(value) {
    this.reservationService.deleteReservation(value.idReservation).subscribe(
      row => {
          const currentUrl = this.router.url;
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
        });
      }
    );
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
    dialogConfig.height = '550px';
    dialogConfig.width = '600px';
    dialogConfig.data = this.customer;
    const modalDialog = this.matDialog.open(CustomerEditPassComponent, dialogConfig);
  }

}
