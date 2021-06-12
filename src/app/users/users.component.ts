import { Component, OnInit } from '@angular/core';
import { Users } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList:any=<Users>{};

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.viewAllUsers().subscribe(data=>{
      this.userList = data;
      console.log(this.userList);
  })
  }

}
