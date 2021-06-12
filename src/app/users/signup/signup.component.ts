import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
  }
  
  signup(form: any){
    if(form.value.userName == "" || form.value.password == "" || form.value.role == ""){
      alert("Must fill all fields");
    }
    else{
    console.log(form.value);
    let newUser = {
      id: Math.random,
      userName: form.value.userName,
      password: form.value.password,
      role: "User"
    };
    console.log(newUser);
    this.userService.createUsers(newUser).subscribe(data =>{
      console.log(data);
      alert("Account Created!");
      window.location.href = "users/login";
      
    });
  }
}

}
