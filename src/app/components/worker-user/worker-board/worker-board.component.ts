import { Component, OnInit } from '@angular/core';
import {RoomService} from '../../../service/room.service';
import {Observable} from 'rxjs';
import {Room} from '../../../model/room';
import {WorkerService} from '../../../service/worker.service';
import {EditCellRenderComponent} from '../../room-grid/edit-cell-render.component';
import {WorkerEditTemplateComponent} from './worker-edit-template.component';

@Component({
  selector: 'app-worker-board',
  templateUrl: './worker-board.component.html',
  styleUrls: ['./worker-board.component.css']
})
export class WorkerBoardComponent implements OnInit {

  constructor(private workerService : WorkerService) { }
  workerArr: Observable <Worker[]>;
  title = 'Pracownicy';

  defaultColDef = {
    sortable: true,
    filter: true
  };

  columnDefs = [
    {
      headerName: '', width: 180, cellRendererFramework: WorkerEditTemplateComponent,
      sortable: false, filter: false, singleClickEdit: false, editable: false
    },
    {  headerName: "Imie",field: 'firstname',sortable: true,  filter: true },
    {  headerName: "Nazwisko",field: 'lastname',sortable: true,filter: true },
    {  headerName: "Login",field: 'login',sortable: true,filter: true },
    {  headerName: "Hasło",field: 'password',sortable: true,filter: true },
    {  headerName: "E-mail",field: 'email',sortable: true,filter: true },
    {  headerName: "Obowiązki",field: 'responsibilities',sortable: true,filter: true, width: 500 },
    {  headerName: "Data Zatrudnienia",field: 'dateofemployment',sortable: true,filter: true },
    {  headerName: "Data Urodzenia",field: 'dateofbirth',sortable: true,filter: true },
    {  headerName: "Uprawnienia",field: 'privileges',sortable: true,filter: true },
    {  headerName: "Godziny Pracy",field: 'workinghours',sortable: true,filter: true },
    {  headerName: "Pensja",field: 'salary',sortable: true,filter: true }
  ];
  rowData = [];

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.workerArr = this.workerService.getAllWorkers();
     this.workerService.getAllWorkers().subscribe( (data) => {
      this.rowData = data;
    });
  }

}
