import {Component, Input, OnInit} from '@angular/core';
import {Worker} from '../../../models/worker';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.css']
})
export class WorkerEditComponent implements OnInit {

  @Input()
  worker : Worker;
  uprawnieniaForm : FormGroup;
  uprawnienia = [
    {id : 1, stan :  "aktywny"},
    {id : 2, stan :  "niekatywny"}];

  constructor(private formsB : FormBuilder) { }

  ngOnInit() {
    this.uprawnieniaForm = this.formsB.group({
      uprawnienia : new FormControl(),
      login : new FormControl(),
      password : new FormControl(),
      email : new FormControl(),
      position : new FormControl(),
      firstname : new FormControl(),
      lastname : new FormControl(),
      pesel : new FormControl(),
      dateofemployment : new FormControl(),
      dateofbirth : new FormControl(),
      responsibilities : new FormControl(),
      workinghours : new FormControl(),
      salary: new FormControl(),
      activity: new FormControl()
    });
  }

  Zapisz(){

  }

}
