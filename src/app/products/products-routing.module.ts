import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewallProductComponent } from './viewall-product/viewall-product.component';
import { UpdateproductPageComponent } from './updateproduct-page/updateproduct-page.component';
import { DeleteproductPageComponent } from './deleteproduct-page/deleteproduct-page.component';
import { FilterByPriceComponent } from './filter-by-price/filter-by-price.component';
import { FilteredproductsComponent } from './filteredproducts/filteredproducts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'updateproduct-page', component: UpdateproductPageComponent },
  { path: 'deleteproduct-page', component: DeleteproductPageComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'filter-by-price/:id', component: FilterByPriceComponent },
  { path: 'filter-by-price', component: FilteredproductsComponent },
  { path: 'products', component: ViewallProductComponent },
  { path: 'search-date', component: ViewProductByDateComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
  { path: 'delete-product/:id', component: DeleteProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
