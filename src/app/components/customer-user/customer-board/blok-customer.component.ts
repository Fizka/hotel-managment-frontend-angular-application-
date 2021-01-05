import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ICellRendererParams} from 'ag-grid-community';
import {CustomerService} from '../../../service/customer.service';
import {ModalYesNoComponent} from '../../modal-yes-no/modal-yes-no.component';
import {Router} from '@angular/router';

@Component({
  selector: 'blok-customer',
  template: `
      <button class="btn-primary" style="margin-top: 0px; width: 160px; align-items: center;" (click)="zablokuj(this.params.data)">Zablokuj
      </button>
      <button class="btn-primary" style="margin-top: 0px; width: 160px; align-items: center;" (click)="usun(this.params.data)">Usuń
      </button>`
})
export class BlokCustomerComponent implements AgRendererComponent {

  params: any;

  constructor(private userService: CustomerService,
              public matDialog: MatDialog,
              private router: Router) {
  }

  zablokuj(value) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '250px';
    dialogConfig.width = '290px';
    const modalDialog = this.matDialog.open(ModalYesNoComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(
      data => {
        if (data) {
          console.log(value.privileges);
          value.privileges = -1;
          console.log(value);
          this.userService.updateCustomer(value.idCustomer, value).subscribe((data) => console.log(data));
        } else {
          console.log('Nie zapisane!');
        }
      }
    );
  }

  usun(vale) {
    this.userService.deleteCustomer(vale.idCustomer).subscribe(
    row=>{
      const currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      });
    })
  }


  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

}
