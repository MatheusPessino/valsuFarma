import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { BrandComponent } from './brand.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    BrandComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    NavBarModule,
    MaterialModule
  ], exports: [
    BrandComponent
  ]
})
export class BrandModule { }
