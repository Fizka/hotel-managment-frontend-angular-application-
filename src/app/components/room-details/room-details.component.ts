import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../../models/room';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomService} from '../../service/room.service';
import {CommentService} from '../../service/comment.service';
import {Customer} from '../../models/customer';
import {CommentModel} from '../../models/commentModel';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  customer: Customer;
  room: Room;
  comment: CommentModel;
  addedComments: CommentModel[];
  id: any;
  marks = [1, 2, 3, 4, 5];

  constructor(private router: Router, private route: ActivatedRoute, private roomService: RoomService,
              private commentService: CommentService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.customer = JSON.parse(sessionStorage.getItem('login'));
    this.comment = new CommentModel();
    this.comment.mark = 5;
    this.GetRoom();
  }

  reloadData(){
    this.commentService.getCommentsByRoomId(this.room.idRoom).subscribe(
      data =>{
        this.addedComments = data;
        console.log(data)
      }
    )
  }

  GetRoom() {
    this.roomService.getRoom(this.id).subscribe(
      (data) => {
        this.room = data;
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  MakeReervation() {
    this.router.navigate(['reservationcreate', this.room.idRoom]);
  }

  submitComment() {
    console.log(this.comment)
    this.commentService.createComment(this.room.idRoom, this.customer.idCustomer,  this.comment)
      .subscribe(row=> {
        console.log(row);
        this.comment = new CommentModel();
        this.comment.mark = 5;
      });
  }
}
