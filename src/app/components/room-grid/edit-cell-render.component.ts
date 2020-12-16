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
      <button class="btn-primary" style="width: 60px; height: 24px; margin: 0px; text-align: center; "
              (click)="editRow(this.params.data)">Edytuj
      </button>
      <button class="btn-primary" style="width: 60px; height: 24px; margin: 0px; text-align: center; "
              (click)="deleteRow(this.params.data)">Usuń
      </button>`,
})
export class EditCellRenderComponent implements AgRendererComponent {

  params: any;

  constructor(private roomService: RoomService, public matDialog: MatDialog, private reload: RoomGridComponent) {
  }

  editRow(value) {
    alert(value.idRoom);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '700px';
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
    alert(value.idRoom);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '300px';
    dialogConfig.width = '300px';
    dialogConfig.data = value;
    const modalDialog = this.matDialog.open(ModalYesNoComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(
      data => {
        (data) ? this.roomService.deleteRoom(value.idRoom)
          .subscribe((data) => this.reload.reloadData()) : console.log('Nie usuniete!');
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
