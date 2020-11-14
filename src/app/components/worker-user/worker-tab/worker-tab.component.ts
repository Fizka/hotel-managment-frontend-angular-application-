import {Component, Input, OnInit} from '@angular/core';
import {Worker} from '../../../models/worker';
import {Router} from '@angular/router';

@Component({
  selector: 'app-worker-tab',
  templateUrl: './worker-tab.component.html',
  styleUrls: ['./worker-tab.component.css']
})
export class WorkerTabComponent implements OnInit {

  @Input() worker : Worker;
  id : any;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  Goto(){
    this.router.navigate(['workerdetails', this.worker.idWorker])
  }

}
