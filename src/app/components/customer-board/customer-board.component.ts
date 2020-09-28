import { Component, OnInit } from '@angular/core';
import {WorkerService} from '../../service/worker.service';
import {Observable} from 'rxjs';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-board',
  templateUrl: './customer-board.component.html',
  styleUrls: ['./customer-board.component.css']
})
export class CustomerBoardComponent implements OnInit {

  constructor(private customerService : CustomerService) { }
  customerArr: Observable <Worker[]>;


  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.customerArr = this.customerService.getCustomersList();
  }

}
