import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ICellRendererParams} from 'ag-grid-community';
import {CustomerService} from '../../../service/customer.service';
import {ModalYesNoComponent} from '../../modal-yes-no/modal-yes-no.component';

@Component({
  selector: 'blok-customer',
  template: `
      <button class="btn-primary" style="width: 60px; height: 24px; margin: 0px; text-align: center; "
              (click)="zablokuj(this.params.data)">Zablokuj
      </button>`
})
export class BlokCustomerComponent implements AgRendererComponent {

  params: any;

  constructor(private userService: CustomerService, public matDialog: MatDialog) {
  }

  zablokuj(value) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '350px';
    dialogConfig.width = '600px';
    const modalDialog = this.matDialog.open(ModalYesNoComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(
      data => {
        if(data)  {
          console.log(value.privileges)
          value.privileges = -1;
          console.log(value)
          this.userService.updateCustomer(value.idCustomer, value).subscribe((data) => console.log(data))}
        else{
          console.log('Nie zapisane!');
        }
      }
    );
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

}
