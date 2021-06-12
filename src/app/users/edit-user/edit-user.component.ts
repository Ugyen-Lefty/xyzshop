import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';
import { Users } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userDetails:any=<Users>{};

  userID = 0;
  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.userID = data.id;

      this.usersService.editUsers(this.userID).subscribe(userData => {
        this.userDetails = userData;
        console.log(this.userDetails);
      });
    });
  }

  updateUser(form: any){
  
    console.log(form.value);
    let updateUser = {
      id: form.value.id,
      userName: form.value.userName,
      password: form.value.password,
      role: form.value.role
    };
    console.log(form);
    this.usersService.updateUsers(this.userID,updateUser).subscribe(data =>{
      console.log(data);
      // alert("User is updated!");
      swal("Updated", "", "success");
      setTimeout(() => {
        window.location.href = "users/update-user";
      }, 2000);
    });
  }
}
