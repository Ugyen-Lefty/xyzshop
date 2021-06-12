import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CartComponent } from './cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DeleteFromCartComponent } from './delete-from-cart/delete-from-cart.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', component: CartComponent },
  { path: 'add-to-cart/:productName/:price', component: AddToCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'delete-from-cart/:id', component: DeleteFromCartComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
