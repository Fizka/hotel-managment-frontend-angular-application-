import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';
import {Room} from '../../models/room';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {

  room: Room = new Room();

  constructor(public dialogRef: MatDialogRef<RoomEditComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.room = data;
  }

  ngOnInit(): void {
  }

  onSave() {
    console.log(this.room);
    this.dialogRef.close(this.room);
  }

  onReset() {
    this.dialogRef.close();
  }
}
