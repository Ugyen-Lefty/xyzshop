import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-filter-by-price',
  templateUrl: './filter-by-price.component.html',
  styleUrls: ['./filter-by-price.component.css']
})
export class FilterByPriceComponent implements OnInit {
  productList:any=<Product>{};
  priceId = 0;
  filteredList:any=<Product>{};

  constructor(private activatedRoute: ActivatedRoute,private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.priceId = data.id;
    })
    this.productService.viewAllProduct().subscribe(data=>{
      this.productList = data;
      this.checkPrice(this.productList);
  })
  }

  noStock(){
    alert("Sorry this item is out of stock!");
  }

  checkPrice(productList: any) {
    if(this.priceId == 1){
      this.filteredList = productList.filter(function (one:any){
        return one.price <= 1000;
      });
      if(this.filteredList.length == 0){
        alert("There is no items that match that criteria!");
        window.location.href = "products/";
      }
      console.log(this.filteredList);
    }
    else if(this.priceId == 2){
      this.filteredList = productList.filter(function (one:any){
        return one.price > 2000 && one.price <= 5000;
      });
      if(this.filteredList.length == 0){
        alert("There is no items that match that criteria!");
        window.location.href = "products/";
      }
      console.log(this.filteredList);
    }
    else if(this.priceId == 3){
      this.filteredList = productList.filter(function (one:any){
        return one.price > 5000 && one.price <= 10000;
      });
      if(this.filteredList.length == 0){
        alert("There is no items that match that criteria!");
        window.location.href = "products/";
      }
      console.log(this.filteredList);
    }
    else if(this.priceId == 4){
      this.filteredList = productList.filter(function (one:any){
        return one.price > 10000;
      });
      if(this.filteredList.length == 0){
        alert("There is no items that match that criteria!");
        window.location.href = "products/";
      }
      console.log(this.filteredList);
    }
    
  }

}
