import {AfterViewInit, Component, Input, OnInit, ViewChild, Renderer2} from '@angular/core';
import {Room} from '../../models/room';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomService} from '../../service/room.service';
import {ReservationService} from '../../service/reservation.service';
import {Observable} from 'rxjs';
import {Reservation} from '../../models/reservations';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Reservet} from '../../models/reservet';
import {Customer} from '../../models/customer';
import {CustomerService} from '../../service/customer.service';
import {MenuComponent} from '../../page/menu/menu.component';

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.css']
})

export class ReservationCreateComponent implements OnInit {

  constructor(private fb: FormBuilder,
              rnd: Renderer2,
              private router: Router,
              private route: ActivatedRoute,
              private roomService: RoomService,
              private reservationservice: ReservationService,
              private customerService: CustomerService,
              public menuchecker: MenuComponent) {
  }

  customer: Customer;
  reservets: Reservet[];
  months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień',
    'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień',
    'Pażdziernik', 'Listopad', 'Grudzień'];
  contactForm: FormGroup;
  nazwaAktualnegoMiesiaca: string;
  pierwszyDzienTygodnia: number;
  customers: Observable<any>;

  wolne: number[] = [101, 80];
  dni = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18',
    '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  years = [2020, 2021];
  jup: number[] = [1, 2, 3, 4, 5, 6, 7];
  dniMs: number[] = new Array();
  miesiacToDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  kolorChecker: boolean[] = [true, true, true, true, true, true, true, true,
    true, true, true, true, true, true, true, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false, false, false];

  nazwaDnia = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek',
    'Piątek', 'Sobota', 'Niedziela'];

  rzeczywistosc: any[];
  room: Room;
  todaydate = new Date();
  id: any = 0;
  reservationArr: Observable<Reservation[]>;
  EndDate: Date;
  StartDate: Date;
  firstName: string;


  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.GetRoom();
    this.DoTable();
    this.contactForm = this.fb.group({
      monthStart: [null],
      dayStart: [null],
      yearStart: [null],
      monthEnd: [null],
      dayEnd: [null],
      yearEnd: [null],
      customer: [null]
    });
    if (JSON.parse(sessionStorage.getItem('login'))) {
      console.log("JSON")
      this.customer = JSON.parse(sessionStorage.getItem('login'));
    } else {
      this.customer = new Customer();
      this.customer.idCustomer = -1;
    }
    this.getCustomers();
  }

  GetRoom() {
    this.roomService.getRoom(this.id).subscribe(
      (data) => {
        this.room = data;
        this.reservationservice.getReservetByRoomId(this.room.idRoom).subscribe((rows) => {
          this.reservets = rows;
        });
      },
      error => console.log(error)
    );
  }

  GetReservationList() {
    this.reservationArr = this.reservationservice.getReservationByRoomId(
      this.room.idRoom);
  }

  getCustomers() {
    this.customers = this.customerService.getCustomersList();
  }


  getDays() {
    let month = this.months.indexOf(this.contactForm.get('monthStart').value);
    let kaldat = new Date(this.todaydate.getFullYear(), month, 1);
    let daysInMonth = this.miesiacToDays[kaldat.getMonth()];
    let daysfinally = new Array();
    if (daysInMonth != 31) {
      this.dni.splice(daysInMonth);
    }
    let daysFromReservation =
      this.reservets
        .filter(
          (row) => {
            return new Date(row.dateReservation).getMonth() == month;
          })
        .map((row) => row.dateReservation);
    for (let rows = 0; rows < daysFromReservation.length; rows++) {
      let part = daysFromReservation[rows].toString().split('-');
      daysfinally.push(part[2]);
      this.dni = this.dni.filter(row => row !== part[2]);
    }
    console.log(daysfinally);
    console.log(this.dni);
  }

  DoTable() {
    let miesaic = this.todaydate.getMonth();
    let kaldat = new Date(this.todaydate.getFullYear(), miesaic, 1);
    let dzienTyg = kaldat.getDay();
    this.nazwaAktualnegoMiesiaca = this.months[miesaic];
    this.pierwszyDzienTygodnia = dzienTyg;
    for (let i = 1; i < 43; i++) {
      if (i > dzienTyg || i < 31) {
        let t = this.dni[i - dzienTyg];
        this.dniMs.push(Number(t));
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

  onSubmit() {
    let monthStart = this.months.indexOf(this.contactForm.get('monthStart').value) + 1;
    let monthEnd = this.months.indexOf(this.contactForm.get('monthEnd').value) + 1;
    console.log(this.contactForm.get('monthStart').value + ' ' +
      this.contactForm.get('dayStart').value + ' ' +
      this.contactForm.get('yearStart').value + ' ' +
      this.contactForm.get('monthEnd').value + ' ' +
      this.contactForm.get('dayEnd').value + ' ' +
      this.contactForm.get('yearEnd').value);
    this.StartDate = new Date(this.contactForm.get('yearStart').value +
      '-' + monthStart + '-' + this.contactForm.get('dayStart').value);
    this.EndDate = new Date(this.contactForm.get('yearEnd').value +
      '-' + monthEnd + '-' + this.contactForm.get('dayEnd').value);

    let howLong = (this.EndDate.getTime() - this.StartDate.getTime()) / (1000 * 3600 * 24);
    console.log(howLong);
    console.log(this.customer);
    console.log(this.contactForm.get('customer').value);
    if (this.customer.idCustomer == -1) {
      this.customer.idCustomer = this.contactForm.get('customer').value;
    }
    let reservation: Reservation = new Reservation(this.StartDate, this.EndDate, this.room.idRoom, this.customer.idCustomer, howLong);
    console.log(this.StartDate);
    this.reservationservice.createReservation(this.room.idRoom, this.customer.idCustomer, reservation).subscribe(() => this.router.navigate([`/reservationcreate/${this.room.idRoom}`]));
    this.router.navigate([`/reservationcreate/${this.room.idRoom}`]);
  }

}
