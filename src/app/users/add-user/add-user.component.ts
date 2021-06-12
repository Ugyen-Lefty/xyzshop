import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService:UsersService) { }
  ngOnInit(): void {
  }

  addNewUser(form: any){
    if(form.value.userName == "" || form.value.password == "" || form.value.role == ""){
      // alert("Must fill all forms");
      swal("Must fill all fields", "", "error");
      setTimeout(() => {
        window.location.href = "users/add-user";
        
      }, 2000);
    }
    else{

    console.log(form.value);
    let newUser = {
      id: Math.random,
      userName: form.value.userName,
      password: form.value.password,
      role: form.value.role
    };
    console.log(newUser);
    this.userService.createUsers(newUser).subscribe(data =>{
      console.log(data);
      // alert("New User Added!");
      swal("New User Added", "", "success");
      setTimeout(() => {
        window.location.href = "users/";
      }, 2000);
    });
    }
  }

}
