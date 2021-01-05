import {Component, NgZone, OnInit} from '@angular/core';
import {RoomService} from '../../service/room.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-grid-room-worker',
  templateUrl: './grid-room-worker.component.html',
  styleUrls: ['./grid-room-worker.component.css']
})
export class GridRoomWorkerComponent implements OnInit {

  private gridApi;

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    wrapText: true
  };
  columnDefs = [
    {headerName: 'Piętro', field: 'floor', sortable: true, filter: true},
    {headerName: 'Numer Pokoju', field: 'numberRM', sortable: true, filter: true},
    {headerName: 'Cena', field: 'price', sortable: true, filter: true},
    {headerName: 'Pojemność', field: 'maxCapacity', sortable: true, filter: true},
    {headerName: 'Tytuł', field: 'title', sortable: true, filter: true},
    {headerName: 'Opis', field: 'description', sortable: true, filter: true, resizable: false, width: 800},
  ];
  rowData = [];


  constructor(private roomService: RoomService,
              private router: Router,
              private zone: NgZone) {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  ngOnInit() {
    this.reloadData();
  }

  goToReservation(value) {
    //console.log(value.data.idRoom)
    this.zone.run(() => {
      this.router.navigate([`/reservationcreate/${value.data.idRoom}`]);
    });
  }

  public reloadData() {
    this.roomService.getRoomsList().subscribe((data) => {
      this.rowData = data;
      console.log(data);
    });
  }

}
