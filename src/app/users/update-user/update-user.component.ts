import { Component, OnInit } from '@angular/core';
import { Users } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userList:any=<Users>{};

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.viewAllUsers().subscribe(data=>{
      this.userList = data;
      console.log(this.userList);
  })
  }

}
