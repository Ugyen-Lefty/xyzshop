import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-deleteproduct-page',
  templateUrl: './deleteproduct-page.component.html',
  styleUrls: ['./deleteproduct-page.component.css']
})
export class DeleteproductPageComponent implements OnInit {
  productList:any=<Product>{};

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.viewAllProduct().subscribe(data=>{
      this.productList = data;
      console.log(this.productList);
  })
  }

}
