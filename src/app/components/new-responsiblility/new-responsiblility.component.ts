import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Responsibility} from '../../model/responsibility';
import {ResponsibilityService} from '../../service/responsibility.service';
import {WorkerService} from '../../service/worker.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-responsiblility',
  templateUrl: './new-responsiblility.component.html',
  styleUrls: ['./new-responsiblility.component.css']
})
export class NewResponsiblilityComponent implements OnInit {

  @Input()
  responsibility: Responsibility;
  workers: Observable<any>;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private workerService: WorkerService, public dialogRef: MatDialogRef<NewResponsiblilityComponent>, private responsibilityService: ResponsibilityService) {
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
    this.responsibilityService.createResponsibility(this.responsibility, this.contactForm.get('worker').value).subscribe((data) =>
      console.log(data));
    this.dialogRef.close(this.responsibility);
    this.reloadData();
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  reloadData() {
    this.workers = this.workerService.getAllWorkers();
  }

  onReset() {
    this.dialogRef.close();
  }
}
