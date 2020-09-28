import {Component, Input, OnInit} from '@angular/core';
import {Worker} from '../../service/worker';
import {Router} from '@angular/router';
import {Customer} from '../../service/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer : Customer;
  id : any;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  Goto(){
    this.router.navigate(['', this.customer.idCustomer])
  }

}
