import { Component, OnInit } from '@angular/core';
import {EditCellRenderComponent} from '../room-grid/edit-cell-render.component';
import {RoomService} from '../../service/room.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ModalYesNoComponent} from '../modal-yes-no/modal-yes-no.component';

@Component({
  selector: 'app-grid-room-worker',
  templateUrl: './grid-room-worker.component.html',
  styleUrls: ['./grid-room-worker.component.css']
})
export class GridRoomWorkerComponent implements OnInit {

  private gridApi;

  defaultColDef = {
    sortable: true,
    editable: true,
    filter: true,
    resizable: true,
    wrapText: true
  };
  columnDefs = [
    {headerName: 'Piętro', field: 'floor', sortable: true, filter: true, singleClickEdit: true},
    {headerName: 'Numer Pokoju', field: 'numberRM', sortable: true, filter: true, singleClickEdit: true},
    {headerName: 'Cena', field: 'price', sortable: true, filter: true, singleClickEdit: true},
    {headerName: 'Pojemność', field: 'maxCapacity', sortable: true, filter: true, singleClickEdit: true},
    {headerName: 'Tytuł', field: 'title', sortable: true, filter: true, singleClickEdit: true},
    {headerName: 'Opis', field: 'description', sortable: true, filter: true, resizable: false, width: 800, singleClickEdit: true},
  ];
  rowData = [];

  constructor(private roomService: RoomService,
              public matDialog: MatDialog,
              private router: Router) {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  ngOnInit() {
    this.reloadData();
  }

  goToReservation(value) {
    console.log(value.data.idReservation)
    this.router.navigate(['reservationcreate'], value.data.idReservation);
  }

  public reloadData() {
    this.roomService.getRoomsList().subscribe((data) => {
      this.rowData = data;
      console.log(data);
    });
  }

}
