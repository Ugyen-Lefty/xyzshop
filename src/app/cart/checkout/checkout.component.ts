import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartList:any=<Cart>{};

  public total=0;    
  public value: any;
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.cartService.viewCart().subscribe(data=>{
    //   this.cartList = data;
    //   console.log(this.value);  
    //   for(let j=0;j<data.length;j++){   
    //   alert("hitting");    
        
    //       this.total+= this.value[j].price;
    //       console.log(this.total)  
    // }
    //   console.log(this.cartList);
  // })
    this.getCart();
  }

  getCart(){
    this.cartService.viewCart().subscribe((rsult:any)=>{  
      this.cartList=rsult;  
      this.sum(this.cartList);  
      console.log(rsult);  
    })  
  }

  sum(data: any){    
    for(let j=0;j<data.length;j++){
        console.log("This is the data",data);
        this.total += data[j].price;  
    } 
  }  

}
