import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewall-product',
  templateUrl: './viewall-product.component.html',
  styleUrls: ['./viewall-product.component.css']
})
export class ViewallProductComponent implements OnInit {

  productList:any=<Product>{};

  constructor(private productService: ProductService,private cartService:CartService) {
   }

  ngOnInit(): void {
    this.productService.viewAllProduct().subscribe(data=>{
      this.productList = data;
      console.log(this.productList);
  })
  }

  noStock(){
    alert("Sorry this item is out of stock!");
  }
}
