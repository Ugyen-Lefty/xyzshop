import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-updateproduct-page',
  templateUrl: './updateproduct-page.component.html',
  styleUrls: ['./updateproduct-page.component.css']
})
export class UpdateproductPageComponent implements OnInit {
productList:any=<Product>{};

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.viewAllProduct().subscribe(data=>{
      this.productList = data;
      console.log(this.productList);
  })
  }

}
