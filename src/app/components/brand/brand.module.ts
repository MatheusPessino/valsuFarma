import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { BrandComponent } from './brand.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';


@NgModule({
  declarations: [
    BrandComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    NavBarModule
  ], exports: [
    BrandComponent
  ]
})
export class BrandModule { }
