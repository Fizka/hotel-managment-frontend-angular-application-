import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../../models/room';
import {Router} from '@angular/router';

@Component({
  selector: 'app-room-tab',
  templateUrl: './room-tab.component.html',
  styleUrls: ['./room-tab.component.css']
})
export class RoomTabComponent implements OnInit {

  @Input() room: Room;
  id: any;
  urlimages: string[];


  constructor(private router: Router) {
  }

  ngOnInit() {
    this.urlimages = new Array();
    this.getPictures();
  }

  getPictures() {
    for (let i = 0; i <= 83; i++) {
      this.urlimages.push(i + '.png');
    }
  }

  Goto() {
    this.router.navigate(['roomdetails', this.room.idRoom])
  }

}
