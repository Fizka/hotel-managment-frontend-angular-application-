import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Worker} from '../../../model/worker';
import {WorkerService} from '../../../service/worker.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  worker: Worker = new Worker();
  id: any;
  isVisible: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute, private workerService: WorkerService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.GetWorker();
  }

  GetWorker() {
    this.workerService.getWroker(this.id).subscribe(
      (data) => {
        this.worker = data;
      },
      error => console.log(error)
    );
  }

  GotoEditWorker() {
    //wyswietlanie komponentu
    this.isVisible = false;
  }

  Zapisz() {

  }

}
