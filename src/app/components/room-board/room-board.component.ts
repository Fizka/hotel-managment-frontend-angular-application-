import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Room} from '../../model/room';
import {RoomService} from '../../service/room.service';

@Component({
  selector: 'app-room-board',
  templateUrl: './room-board.component.html',
  styleUrls: ['./room-board.component.css']
})
export class RoomBoardComponent implements OnInit {

  constructor(private roomService: RoomService) {
  }

  serachtext: string = '';
  serachprice: number = 0;
  serachnumber: number;
  roomArr: Room[];
  filterbackup: Room[];

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.roomService.getRoomList()
      .subscribe(
        res => {
          this.roomArr = res.map(data => {
            return this.mapToRoom(data);
          });
        }, () => console.log('blad'),
        () => this.filterbackup = this.roomArr
      );
  }

  mapToRoom(value: Room) {
    const room: Room = new Room();
    room.idRoom = value.idRoom;
    room.maxCapacity = value.maxCapacity;
    room.numberRM = value.numberRM;
    room.floor = value.floor;
    room.urlImages = value.urlImages;
    room.price = value.price;
    room.description = value.description;
    room.title = value.title;
    return room;
  }

  filterRoom() {
    console.log(this.serachtext + ' ' + this.serachprice);
    this.roomArr = this.filterbackup;
    if (this.serachtext != '' && this.serachprice == 0) {
      console.log('warunek 1');
      this.roomArr = this.roomArr.filter(
        row => row.title.toUpperCase().includes(this.serachtext.toUpperCase()) ? true : false
      );
      this.serachtext = '';
    } else if (this.serachprice != 0 && this.serachtext == '') {
      console.log('warunek 2');
      this.roomArr = this.roomArr.filter(
        row => row.price < this.serachprice
      );
      this.serachprice = 0;
    } else if (this.serachtext != '' && this.serachprice != 0) {
      console.log('warunek 3');
      this.roomArr = this.roomArr.filter(
        row => {
          row.title.toUpperCase().includes(this.serachtext.toUpperCase()) ? true : false && row.price < this.serachprice;
        }
      );
      this.serachtext = '';
      this.serachprice = 0;
    } else {
      this.roomArr = this.filterbackup;
    }

  }
}
