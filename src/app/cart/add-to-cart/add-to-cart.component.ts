import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/products/product';
import { ProductService } from 'src/app/products/product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  productName = "";
  price = "";
  
  productList:any=<Product>{};
  constructor(private activatedRoute: ActivatedRoute,private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(cdata => {
      this.productName = cdata.productName;
      this.price = cdata.price;
      console.log("the price = ",cdata);
      // alert(cdata.productName);
      // alert(cdata);
      
      let newCart = {
        id: Math.random,
        itemName: this.productName,
        price: this.price,
        quantity: 1
      };
      this.cartService.createCart(newCart).subscribe(data =>{
        alert("Added to Cart!");
        window.location.href = "products/";
        
      });
     
    });

  }


}
