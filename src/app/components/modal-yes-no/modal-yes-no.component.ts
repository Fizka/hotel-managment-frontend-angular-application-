import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {RoomService} from '../../service/room.service';

@Component({
  selector: 'app-modal-yes-no',
  templateUrl: './modal-yes-no.component.html',
  styleUrls: ['./modal-yes-no.component.css']
})
export class ModalYesNoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalYesNoComponent>) { }
  value: boolean;

  ngOnInit() {
  }

  setValue(val){
    this.dialogRef.close(val);
  }


}
