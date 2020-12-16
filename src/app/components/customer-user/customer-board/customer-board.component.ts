import {Component, OnInit} from '@angular/core';
import {WorkerService} from '../../../service/worker.service';
import {Observable} from 'rxjs';
import {CustomerService} from '../../../service/customer.service';
import {EditCellRenderComponent} from '../../room-grid/edit-cell-render.component';
import {BlokCustomerComponent} from './blok-customer.component';

@Component({
  selector: 'app-customer-board',
  templateUrl: './customer-board.component.html',
  styleUrls: ['./customer-board.component.css']
})
export class CustomerBoardComponent implements OnInit {
  title = 'Pracownicy';
  private gridApi;

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    wrapText: true
  };

  columnDefs = [
    {
      headerName: '', width: 180, cellRendererFramework: BlokCustomerComponent,
      sortable: false, filter: false, singleClickEdit: false, editable: false
    },
    {headerName: 'Imie', field: 'firstname', sortable: true, filter: true},
    {headerName: 'Nazwisko', field: 'lastname', sortable: true, filter: true},
    {headerName: 'Login', field: 'login', sortable: true, filter: true},
    {headerName: 'Hasło', field: 'password', sortable: true, filter: true},
    {headerName: 'E-mail', field: 'email', sortable: true, filter: true},
    {headerName: 'Uprawnienia', field: 'privileges', sortable: true, filter: true}
  ];

  rowData = [];

  constructor(private customerService: CustomerService) {
  }

  customerArr: Observable<Worker[]>;

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.customerArr = this.customerService.getCustomersList();
    this.customerService.getCustomersList().subscribe(
      (data) => {
        this.rowData = data;
      }
    );
  }

}
