import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-delete-user-page',
  templateUrl: './delete-user-page.component.html',
  styleUrls: ['./delete-user-page.component.css']
})
export class DeleteUserPageComponent implements OnInit {
  userDetails:any=<Users>{};

  userID = 0;
  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.viewAllUsers().subscribe(data=>{
      this.userDetails = data;
      console.log(this.userDetails);
  })
  }

}
