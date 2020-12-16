export class Reservation {
  idReservation: number;
  startData: Date;
  endData: Date;
  howLong: number;
  customer_id: number;
  room_id: number;
  room: string;
  customer: string;
  status: boolean;


  constructor(startData: Date, endData: Date, howLong: number, customer_id: number, room_id: number) {
    this.startData = startData;
    this.endData = endData;
    this.howLong = howLong;
    this.customer_id = customer_id;
    this.room_id = room_id;
  }
}
