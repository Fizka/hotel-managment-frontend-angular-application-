import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../../models/room';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomService} from '../../service/room.service';
import {error} from 'util';
import {WorkerService} from '../../service/worker.service';
import {Worker} from '../../models/worker';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  room : Room;
  id : any;

  constructor(private router : Router, private route: ActivatedRoute, private roomService: RoomService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.GetRoom();
  }

  GetRoom(){
    this.roomService.getRoom(this.id).subscribe(
      (data) => {
        this.room = data
      },
      error => console.log(error)
    )
  }

  MakeReervation(){
    this.router.navigate(['reservationcreate', this.room.idRoom])
  }
}
