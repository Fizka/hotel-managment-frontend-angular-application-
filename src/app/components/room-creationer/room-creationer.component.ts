import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Worker} from '../../models/worker';
import {RoomService} from '../../service/room.service';
import {Router} from '@angular/router';
import {Room} from '../../models/room';

@Component({
  selector: 'app-room-creationer',
  templateUrl: './room-creationer.component.html',
  styleUrls: ['./room-creationer.component.css']
})
export class RoomCreationerComponent implements OnInit {

  uprawnieniaForm: FormGroup;
  room: Room = new Room();
  password: string;
  submitted: boolean = false;

  constructor(private roomService: RoomService,
              private router: Router,
              private formsB: FormBuilder) {
  }

  ngOnInit(): void {
    this.uprawnieniaForm = this.formsB.group({
      floor: new FormControl(),
      numberRM: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      maxCapacity: new FormControl(),
      title: new FormControl()
    });
  }

  save() {
    this.roomService.createRoom(this.room).subscribe(
      data => {
        console.log(data);
        this.submitted = true;
        this.router.navigate(['roomgrid', this.room.idRoom]);
        alert('Pokoj stworzony poprawnie!');
        this.router.navigate(['']);
      },
      error => console.log(error)
    );
    this.room = new Room();
  }

  onSubmit() {
    this.save();
  }

  sub() {
    this.room.description = this.uprawnieniaForm.get('description').value;
    this.room.maxCapacity = this.uprawnieniaForm.get('maxCapacity').value;
    this.room.price = this.uprawnieniaForm.get('price').value;
    this.room.floor = this.uprawnieniaForm.get('floor').value;
    this.room.numberRM = this.uprawnieniaForm.get('numberRM').value;
    this.room.title = this.uprawnieniaForm.get('title').value;
    if (this.uprawnieniaForm.get('floor').value != null && this.uprawnieniaForm.get('numberRM').value != null) {
      this.save();
    } else {
      alert('Musisz podac piętro i numer pokoju!');
    }
  }

}
