import { Component, OnInit } from '@angular/core';
import {RoomService} from '../../../service/room.service';
import {Observable} from 'rxjs';
import {Room} from '../../../models/room';
import {WorkerService} from '../../../service/worker.service';

@Component({
  selector: 'app-worker-board',
  templateUrl: './worker-board.component.html',
  styleUrls: ['./worker-board.component.css']
})
export class WorkerBoardComponent implements OnInit {

  constructor(private workerService : WorkerService) { }
  workerArr: Observable <Worker[]>;


  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.workerArr = this.workerService.getAllWorkers();
  }

}
