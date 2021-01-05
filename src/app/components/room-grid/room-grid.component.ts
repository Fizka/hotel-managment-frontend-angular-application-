import {Component, OnInit} from '@angular/core';
import {RoomService} from '../../service/room.service';
import {ModalYesNoComponent} from '../modal-yes-no/modal-yes-no.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {EditCellRenderComponent} from './edit-cell-render.component';


@Component({
  selector: 'app-room-grid',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-grid.component.css']
})
export class RoomGridComponent implements OnInit {
  private gridApi;

  defaultColDef = {
    sortable: true,
    editable: true,
    filter: true,
    resizable: true,
    wrapText: true
  };
  columnDefs = [
    {
      headerName: '', width: 240, cellRendererFramework: EditCellRenderComponent,
      sortable: false, filter: false, singleClickEdit: false, editable: false
    },
    {headerName: 'Piętro', field: 'floor', sortable: true, filter: true, singleClickEdit: true},
    {headerName: 'Numer Pokoju', field: 'numberRM', sortable: true, filter: true, singleClickEdit: true},
    {headerName: 'Cena', field: 'price', sortable: true, filter: true, singleClickEdit: true},
    {headerName: 'Pojemność', field: 'maxCapacity', sortable: true, filter: true, singleClickEdit: true},
    {headerName: 'Tytuł', field: 'title', sortable: true, filter: true, singleClickEdit: true, width: 400},
    {headerName: 'Opis', field: 'description', sortable: true, filter: true, resizable: false, width: 800, singleClickEdit: true},
  ];
  rowData = [];

  constructor(private roomService: RoomService,
              public matDialog: MatDialog) {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  ngOnInit() {
    this.reloadData();
  }

  public reloadData() {
    this.roomService.getRoomsList().subscribe((data) => {
      this.rowData = data;
      console.log(data);
    });
  }

  onCellValueChanged(params) {
    console.log(params.data);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '190PX';
    dialogConfig.width = '290px';
    dialogConfig.data = params.data;
    const modalDialog = this.matDialog.open(ModalYesNoComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(
      data => {
        (data) ? this.roomService.updateRoom(params.data.idRoom, params.data).subscribe((data) => this.reloadData()) : console.log('Nie zapisane!');
      }
    );
  }

}
