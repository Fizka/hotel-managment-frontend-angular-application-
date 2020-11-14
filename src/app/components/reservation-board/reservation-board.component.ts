import {Component, OnInit} from '@angular/core';
import {ReservationService} from '../../service/reservation.service';

@Component({
  selector: 'app-reservation-board',
  templateUrl: './reservation-board.component.html',
  styleUrls: ['./reservation-board.component.css']
})
export class ReservationBoardComponent implements OnInit {

  private gridApi;
  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true
  };
  columnDefs = [
    {headerName: 'Data Rezerwacji', field: 'startData', sortable: true, filter: true},
    {headerName: 'Koniec Rezerwacji', field: 'endData', sortable: true, filter: true},
    {headerName: 'Długość pobytu [dni]', field: 'howLong', sortable: true, filter: true},
    {headerName: 'Klient', field: 'customer', sortable: true, filter: true},
    {headerName: 'Pokoj', field: 'room', sortable: true, filter: true}
  ];
  rowData = [];

  constructor(private reservationServic: ReservationService) {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.reservationServic.getReservationsList().subscribe((data) => {
      this.rowData = data;
      console.log(data);
    });
  }
}
