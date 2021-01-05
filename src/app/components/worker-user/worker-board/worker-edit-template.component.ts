import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ModalYesNoComponent} from '../../modal-yes-no/modal-yes-no.component';
import {AgRendererComponent} from 'ag-grid-angular';
import {WorkerService} from '../../../service/worker.service';
import {WorkerBoardComponent} from '../../worker-user/worker-board/worker-board.component';
import {ICellRendererParams} from 'ag-grid-community';
import {WorkerEditComponent} from '../worker-edit/worker-edit.component';

@Component({
  selector: 'app-worker-edition',
  template: `
      <button type="button" class=" btn-primary" style="width: 60px; height: 24px; margin: 0px; text-align: center; "
              (click)="editRow(this.params.data)">Edytuj
      </button>
      <button type="button" class=" btn-primary" style="width: 60px; height: 24px; margin: 0px; text-align: center; "
              (click)="deleteRow(this.params.data)">Usuń
      </button>`,
})

export class WorkerEditTemplateComponent implements AgRendererComponent {
  params: any;

  constructor(public matDialog: MatDialog, private workerService: WorkerService, private reload: WorkerBoardComponent) {
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

  editRow(value) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '900px';
    dialogConfig.width = '600px';
    dialogConfig.data = value;
    const modalDialog = this.matDialog.open(WorkerEditComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(
      data => {
        (data) ? this.workerService.updateWorker(value.idWorker, value)
          .subscribe((data) => this.reload.reloadData()) : console.log('Nie zapisane!');
      }
    );
  }

  deleteRow(value) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '310px';
    dialogConfig.width = '310px';
    dialogConfig.data = value;
    const modalDialog = this.matDialog.open(ModalYesNoComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(
      data => {
        (data) ? this.workerService.deleteWorker(value.idWorker)
          .subscribe((data) => this.reload.reloadData()) : console.log('Nie usuniete!');
      }
    );
  }
}
