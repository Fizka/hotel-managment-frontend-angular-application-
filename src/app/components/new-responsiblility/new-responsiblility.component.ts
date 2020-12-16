import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Responsibility} from '../../models/responsibility';
import {ResponsibilityService} from '../../service/responsibility.service';
import {WorkerService} from '../../service/worker.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormControlName, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-responsiblility',
  templateUrl: './new-responsiblility.component.html',
  styleUrls: ['./new-responsiblility.component.css']
})
export class NewResponsiblilityComponent implements OnInit {

  @Input()
  responsibility: Responsibility;
  workers: Observable<any>;
  contactForm:FormGroup;

  constructor(private fb:FormBuilder, private workerService: WorkerService, public dialogRef: MatDialogRef<NewResponsiblilityComponent>, private responsibilityService: ResponsibilityService) {
  }

  ngOnInit() {
    this.responsibility = new Responsibility();
    this.reloadData();
    this.contactForm = this.fb.group({
      worker: [null]
    });
  }

  onSave() {
    this.responsibility.status = 'Do zrobienbia';
    this.responsibilityService.createResponsibility(this.responsibility, this.contactForm.get('worker').value).subscribe((data)=>
    console.log(data));
    this.dialogRef.close(this.responsibility);
    this.reloadData();
  }

  reloadData(){
    this.workers = this.workerService.getAllWorkers();
  }

  onReset() {
    this.dialogRef.close();
  }
}
