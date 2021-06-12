import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-delete-from-cart',
  templateUrl: './delete-from-cart.component.html',
  styleUrls: ['./delete-from-cart.component.css']
})
export class DeleteFromCartComponent implements OnInit {
  cartDetails:any=<Cart>{};
  cartID = 0;

  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.cartID = data.id;
   
      this.cartService.deleteCart(this.cartID).subscribe(deletedData => {
        alert("The Item Has Been deleted!");
        window.location.href = "cart";
        console.log(deletedData);
      })
    });
  }

}
