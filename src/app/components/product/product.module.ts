import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NavBarModule
  ], exports: [
    ProductComponent
  ]
})
export class ProductModule { }
