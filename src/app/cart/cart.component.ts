import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';
import { CartService } from './cart.service';
import 'fa-icons';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList:any=<Cart>{};

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.viewCart().subscribe(data=>{
      this.cartList = data;
      console.log(this.cartList);
  })
  }

}
