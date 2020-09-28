import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../../service/room';
import {Router} from '@angular/router';

@Component({
  selector: 'app-room-tab',
  templateUrl: './room-tab.component.html',
  styleUrls: ['./room-tab.component.css']
})
export class RoomTabComponent implements OnInit {

  @Input() room : Room;
  id : any;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  Goto(){
    this.router.navigate(['roomdetails', this.room.idRoom])
  }

}
