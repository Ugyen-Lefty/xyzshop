import { Component, OnInit } from '@angular/core';
import { Users } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usersList:any=<Users>{};
  userID = 0;
  zero0: boolean = false;

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.viewAllUsers().subscribe(data=>{
      this.usersList = data;
      for(var i of this.usersList){
        if(i.id == 0){
          this.zero0 = i.loggedIn;
        }
      }
      console.log("This is the user list ",this.usersList);
    })
  }

  updateUser(){
  
    let updateUser = {
      loggedIn: true
    };
    this.usersService.updateUsers(this.userID,updateUser).subscribe(data =>{
      console.log(data);
      // alert("User is updated!");
    });
  }
  
  
  login(form: any){
    var correctUserName = form.value.userName;
    var correctPassword = form.value.password;
    console.log(this.usersList);
    var confirmed = false;
    for(var i of this.usersList){
      if(correctUserName == i.userName && correctPassword == i.password){
          confirmed = true;
          // i.loggedIn = true;
          this.updateUser();
      }
    }
    if(confirmed == true)
    {
      if(correctUserName == "admin"){
        window.location.href = "users/";
        // i.loggedIn = true;
        this.updateUser();

      }
      else{
        window.location.href = "products/";
        // i.loggedIn = true;
        this.updateUser();

      }
    }
    else{
      alert("Incorrect Password / Username");
      window.location.href = "users/login";
    }

      console.log(this.usersList);
  }

}
