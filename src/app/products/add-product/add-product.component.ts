import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import swal from 'sweetalert';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  addNewProduct(form: any){
    if(form.value.productName == "" || form.value.description == "" || form.value.price == "" || form.value.stock == ""){
      // alert("Must fill all forms");
      swal("Must fill all fields", "", "error");
      setTimeout(() => {
        window.location.href = "products/add-product";
        
      }, 2000);
    }
    else{

      console.log(form.value);
      let newProduct = {
        id: Math.random,
        productName: form.value.productName,
        description: form.value.description,
        price: form.value.price,
        stock: form.value.stock,
        is_available: true,
        product_img: 'assets/s6.jpg'
      };
      console.log(newProduct);
      this.productService.createProduct(newProduct).subscribe(data =>{
        console.log(data);
        alert("Product Added!");
          window.location.href = "products/updateproduct-page";
        
      });
    }
    }
    
  }
  