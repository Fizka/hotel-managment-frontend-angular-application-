import { Component, OnInit } from '@angular/core';
import {Room} from '../../service/room';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomService} from '../../service/room.service';
import {Worker} from '../../service/worker';
import {WorkerService} from '../../service/worker.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  worker : Worker;
  id : any;

  constructor(private router : Router, private route: ActivatedRoute, private workerService: WorkerService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.GetWorker();
  }

  GetWorker(){
    this.workerService.getWroker(this.id).subscribe(
      (data) => {
        this.worker = data
      },
      error => console.log(error)
    )
  }


}
