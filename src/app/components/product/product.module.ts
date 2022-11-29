import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ProductLogComponent } from './children/product-log/product-log.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductLogComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NavBarModule,
    MaterialModule
  ], exports: [
    ProductComponent
  ]
})
export class ProductModule { }
