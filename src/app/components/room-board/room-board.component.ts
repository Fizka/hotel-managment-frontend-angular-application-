import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Room} from '../../models/room';
import {RoomService} from '../../service/room.service';

@Component({
  selector: 'app-room-board',
  templateUrl: './room-board.component.html',
  styleUrls: ['./room-board.component.css']
})
export class RoomBoardComponent implements OnInit {

  constructor(private roomService: RoomService) {
  }

  roomArr: Observable<Room[]>;

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.roomArr = this.roomService.getRoomsList();
  }
}
