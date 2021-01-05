import {Component, OnInit} from '@angular/core';
import {ICellRendererParams} from 'ag-grid-community';
import {AgRendererComponent} from 'ag-grid-angular';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ModalYesNoComponent} from '../modal-yes-no/modal-yes-no.component';
import {RoomService} from '../../service/room.service';
import {RoomEditComponent} from '../room-edit/room-edit.component';
import {RoomGridComponent} from './room-grid.component';

@Component({
  selector: 'edit-cell-render',
  template: `
      <button class="btn-icony-edit btn-icony"
              (click)="editRow(this.params.data)">
      </button>
      <button class="btn-icony-del btn-icony"
              (click)="deleteRow(this.params.data)">
      </button>`,
  styleUrls: ['./room-grid.component.css']
})
export class EditCellRenderComponent implements AgRendererComponent {

  params: any;

  constructor(private roomService: RoomService, public matDialog: MatDialog, private reload: RoomGridComponent) {
  }

  editRow(value) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '820px';
    dialogConfig.width = '600px';
    dialogConfig.data = value;
    const modalDialog = this.matDialog.open(RoomEditComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(
      data => {
        (data) ? this.roomService.updateRoom(value.idRoom, value)
          .subscribe((data) => this.reload.reloadData()) : console.log('Nie zapisane!');
      }
    );
  }

  deleteRow(value) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '250px';
    dialogConfig.width = '290px';
    dialogConfig.data = value;
    const modalDialog = this.matDialog.open(ModalYesNoComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(
      data => {
        (data) ? this.roomService.deleteRoom(value.idRoom)
          .subscribe((data) => this.reload.reloadData()) : console.log('Nie usuniete!');
      }, error => this.reload.reloadData()
      , () => this.reload.reloadData()
    );

  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

}
