import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../service/reservation.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {


  constructor(private reservationservice: ReservationService) { }

  ngOnInit() {

  }


}
