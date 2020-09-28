import {AfterViewInit, Component, Input, OnInit, Renderer, ViewChild} from '@angular/core';
import {Room} from '../../service/room';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomService} from '../../service/room.service';
import {ReservationService} from '../../service/reservation.service';
import {Observable} from 'rxjs';
import {Reservation} from '../../service/reservation';

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.css']
})

export class ReservationCreateComponent implements OnInit{

  constructor(rnd: Renderer, private router : Router, private route: ActivatedRoute,
              private roomService: RoomService, private reservationservice: ReservationService) { }

  months = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"];

  nazwaAktualnegoMiesiaca : string;
  pierwszyDzienTygodnia : number;

  wolne: number[] = [101,80]
  dni : number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,
    19,20,21,22,23,24,25,26,27,28,29,30,31];

  jup: number[] = [1,2,3,4,5,6,7];
  dniMs : number[] = new Array();

  kolorChecker : boolean[] = [true,true,true,true,true,true,true,true,
    true,true,true,true,true,true,true,false,false,false,false,false,
    false,false,false,false,false,false,false,false,false,false,false,false];

  nazwaDnia: any=["Poniedziałek" , "Wtorek", "Środa", "Czwartek",
    "Piątek", "Sobota", "Niedziela"];

  rzeczywistosc: any[];
  room : Room;
  todaydate = new Date();
  id : any;
  reservationArr: Observable <Reservation[]>;
  EndDate : Date;
  StartDate : Date;
  firstName : string;


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.GetRoom();
    this.DoTable();
  }

  GetRoom(){
    this.roomService.getRoom(this.id).subscribe(
      (data) => {
        this.room = data
      },
      error => console.log(error)
    )
  }

  GetReservationList(){
      this.reservationArr = this.reservationservice.getReservationByRoomId(
        this.room.idRoom);
  }

  DoTable(){

    let miesaic = this.todaydate.getMonth();
    let kaldat = new Date(this.todaydate.getFullYear(), miesaic, 1);
    let dzienTyg = kaldat.getDay();

    this.nazwaAktualnegoMiesiaca = this.months[miesaic];
    this.pierwszyDzienTygodnia = dzienTyg;

    for(let i =1; i<43; i++){

        if (i > dzienTyg || i < 31) {
          let t = this.dni[i - dzienTyg];
          this.dniMs.push(t);
        } else {
          let l = this.wolne[0];
          this.dniMs.push(l);
        }

        if (i % 7 == 0) {
          let d = this.wolne[1];
          this.dniMs.push(d);
        }

    }

   console.log(this.dniMs);
  }

  znajdzKolor(){



  }

  changemonths($event: Event){
    //wyswietl nowy kalendarz
    console.log("Changed month from the Dropdown");
   // console.log(this.wybranyMiesiac);
  }

  onSubmit(){

  }

}
