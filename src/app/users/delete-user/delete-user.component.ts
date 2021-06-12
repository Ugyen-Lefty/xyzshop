import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../user';
import swal from 'sweetalert';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  userDetails:any=<Users>{};

  userID = 0;
  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userID = data.id;
   
      this.usersService.deleteUsers(this.userID).subscribe(deletedData => {
        alert("The User Has Been deleted!");
        window.location.href = "users/delete-user";
        console.log(deletedData);
        // swal("The user has been deleted", "", "success");
        // setTimeout(() => {
        // window.location.href = "users/delete-user";
        // }, 2000);
      })
    });
  }

}
