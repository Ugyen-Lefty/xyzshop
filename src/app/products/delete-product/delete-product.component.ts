import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
productId = 0;
productList:any=<Product>{};


  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;
   
      this.productService.deleteProduct(this.productId).subscribe(deletedData => {
        alert("The Product Has Been deleted!");
        window.location.href = "products/deleteproduct-page";
        console.log(deletedData);
      })
    });
  }

}
