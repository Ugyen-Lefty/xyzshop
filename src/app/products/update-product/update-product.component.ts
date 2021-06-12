import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
productDetails:any=<Product>{};

  productID = 0;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID = data.id;

      this.productService.viewProduct(this.productID).subscribe(productData => {
        this.productDetails = productData;
        console.log(this.productDetails);
      });
    });
  }

updateProduct(form: any){
  
  console.log(form.value);
  let updateProduct = {
    id: form.value.id,
    productName: form.value.productName,
    description: form.value.description,
    price: form.value.price,
    stock: form.value.stock,
    is_available: true,
    product_img: form.value.product_img
  };
  console.log(form);
  this.productService.updateProduct(this.productID,updateProduct).subscribe(data =>{
    console.log(data);
    alert("Product is updated!");
    window.location.href = "products/updateproduct-page";
  });
}
}
