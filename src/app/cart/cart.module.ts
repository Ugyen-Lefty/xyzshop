import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { DeleteFromCartComponent } from './delete-from-cart/delete-from-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    CartComponent,
    AddToCartComponent,
    DeleteFromCartComponent,
    CheckoutComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
