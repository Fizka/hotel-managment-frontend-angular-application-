import { Component, OnInit } from '@angular/core';
import {Worker} from '../../models/worker';
import {Router} from '@angular/router';
import {WorkerService} from '../../service/worker.service';
import {Customer} from '../../models/customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user : Customer = new Customer();
  password: string;
  submitted: boolean = false;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  save(){
    this.customerService.createCustomer(this.user).subscribe(
      data => {
        console.log(data);
        this.submitted = true;
        this.router.navigate([''])
      },
      error => console.log(error)
    );
    this.user = new Customer();
  }

  onSubmit(){
    if(this.user.password == this.password){
      this.save();
    }else{
      alert("Hasla sie nie zgadzają!");
    }
  }


}
