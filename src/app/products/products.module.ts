import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewallProductComponent } from './viewall-product/viewall-product.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { FormsModule } from '@angular/forms';
import { UpdateproductPageComponent } from './updateproduct-page/updateproduct-page.component';
import { DeleteproductPageComponent } from './deleteproduct-page/deleteproduct-page.component';
import { FilterByPriceComponent } from './filter-by-price/filter-by-price.component';
import { FilteredproductsComponent } from './filteredproducts/filteredproducts.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    ViewProductComponent,
    UpdateProductComponent,
    UpdateproductPageComponent,
    DeleteProductComponent,
    ViewProductByDateComponent,
    ViewallProductComponent,
    UpdateproductPageComponent,
    DeleteproductPageComponent,
    FilterByPriceComponent,
    FilteredproductsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
