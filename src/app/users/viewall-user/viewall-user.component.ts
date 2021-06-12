import { Component, OnInit } from '@angular/core';
import { Users } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-viewall-user',
  templateUrl: './viewall-user.component.html',
  styleUrls: ['./viewall-user.component.css']
})
export class ViewallUserComponent implements OnInit {
  userList:any=<Users>{};

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.viewAllUsers().subscribe(data=>{
      this.userList = data;
      console.log(this.userList);
  })
  }

}
