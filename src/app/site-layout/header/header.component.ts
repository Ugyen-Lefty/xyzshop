import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/cart/cart';
import { CartService } from 'src/app/cart/cart.service';
import { Users } from 'src/app/users/user';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartList:any=<Cart>{};
  usersList:any=<Users>{};
  zero0: boolean = false;
  userID = 0;

  constructor(private cartService: CartService,private usersService:UsersService) { }
  
  ngOnInit(): void {
    this.cartService.viewCart().subscribe(data=>{
      this.cartList = data;
      console.log("this is the cartlist ",this.cartList);
    })
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
  logout(){
      let updateUser = {
        loggedIn: false
      };
      this.usersService.updateUsers(this.userID,updateUser).subscribe(data =>{
        console.log(data);
        // alert("User is updated!");
      });
  }

}
