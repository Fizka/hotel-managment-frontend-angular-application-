import {Component, OnInit} from '@angular/core';
import {ResponsibilityService} from '../../service/responsibility.service';
import {Responsibility} from '../../model/responsibility';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {WorkerEditComponent} from '../worker-user/worker-edit/worker-edit.component';
import {NewResponsiblilityComponent} from '../new-responsiblility/new-responsiblility.component';

@Component({
  selector: 'app-panel-worker-responsibility',
  templateUrl: './panel-worker-responsibility.component.html',
  styleUrls: ['./panel-worker-responsibility.component.css']
})
export class PanelWorkerResponsibilityComponent implements OnInit {


  constructor(public matDialog: MatDialog, private responsibilityService: ResponsibilityService) {
  }

  status = [
    {id: 1, val: 'Wykonane'},
    {id: 2, val: 'Do zrobienbia'},
    {id: 3, val: 'W trakcie'}];
  filter: string;
  responsibility: Responsibility[];

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.responsibilityService.getList().subscribe((data) =>
      this.responsibility = data
    );
  }

  zmienStatus(val) {
    let status = val.status === 'Do zrobienbia' ? 'W trakcie' : 'Wykonane';
    val.status = status;
    this.responsibilityService.updateResponsibility(val.idResponsibility, val).subscribe((data) =>
      console.log(data));
  }

  checkStatus(val) {
    return val === 'Wykonane' ? true : false;
  }

  checker(row) {
    return row.responsible.toUpperCase().includes(this.filter.toUpperCase());
  }

  newResponsibility() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '760px';
    dialogConfig.width = '600px';
    const modalDialog = this.matDialog.open(NewResponsiblilityComponent, dialogConfig);
    this.reloadData();
  }

  deleteResponsibility(value) {
    this.responsibilityService.deleteResponsibility(value.idResponsibility)
      .subscribe(  ()=>this.reloadData());
  }

  filterFunction() {
    this.filter !== '' ?
      this.responsibility = this.responsibility.filter((row) => row.responsible.toUpperCase().includes(this.filter.toUpperCase()))
      : this.reloadData();
  }

}
