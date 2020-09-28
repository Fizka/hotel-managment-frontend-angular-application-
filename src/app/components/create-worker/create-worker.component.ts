import { Component, OnInit } from '@angular/core';
import {Worker} from '../../service/worker';
import {WorkerService} from '../../service/worker.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-worker',
  templateUrl: './create-worker.component.html',
  styleUrls: ['./create-worker.component.css']
})
export class CreateWorkerComponent implements OnInit {

  uprawnieniaForm : FormGroup;
  worker : Worker = new Worker();
  password: string;
  submitted: boolean = false;
  uprawnienia = [
    {id : 1, stan :  "aktywny"},
    {id : 2, stan :  "niekatywny"}];

  constructor(private serviceWorker: WorkerService, private router: Router, private formsB : FormBuilder) { }

  ngOnInit() {
    this.uprawnieniaForm = this.formsB.group({
      uprawnienia : new FormControl(),
      login : new FormControl(),
      passwordOrg : new FormControl(),
      password : new FormControl(),
      email : new FormControl(),
      position : new FormControl(),
      firstname : new FormControl(),
      lastname : new FormControl(),
      pesel : new FormControl(),
      dateofemployment : new FormControl(),
      dateofbirth : new FormControl()
    });
  }

  save(){
    this.serviceWorker.createWorker(this.worker).subscribe(
      data => {
        console.log(data);
        this.submitted = true;
        this.router.navigate([''])
      },
      error => console.log(error)
    );
    this.worker = new Worker();
  }

  onSubmit(){
    if(this.worker.password == this.password){
      this.save();
    }else{
      alert("Hasla sie nie zgadzają!");
    }
  }

  sub() {

  if(this.uprawnieniaForm.get("uprawnienia").value == 1){
    this.worker.privileges = "aktywny";
  }else {
    this.worker.privileges = "nieaktywny";
  }
    this.worker.dateofbirth = this.uprawnieniaForm.get("dateofbirth").value;
    this.worker.lastname = this.uprawnieniaForm.get("lastname").value;
    this.worker.firstname = this.uprawnieniaForm.get("firstname").value;
    this.worker.pesel = this.uprawnieniaForm.get("pesel").value;
    this.worker.dateofemployment = this.uprawnieniaForm.get("dateofemployment").value;
    this.worker.email = this.uprawnieniaForm.get("email").value;
    this.worker.login = this.uprawnieniaForm.get("login").value;
    this.worker.password = this.uprawnieniaForm.get("passwordOrg").value;
    this.worker.position = this.uprawnieniaForm.get("position").value;

    if(this.uprawnieniaForm.get("passwordOrg").value == this.uprawnieniaForm.get("password").value && this.uprawnieniaForm.get("password").value != null) {
    if( this.worker.login != null )
      this.save();

    }else{
      alert("Hasla sie nie zgadzają!");
    }
    console.log(this.worker)
  }
}
