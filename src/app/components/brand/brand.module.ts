import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { BrandComponent } from './brand.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BrandLogComponent } from './children/brand-log/brand-log.component';


@NgModule({
  declarations: [
    BrandComponent,
    BrandLogComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    NavBarModule,
    MaterialModule
  ], exports: [
    BrandComponent,
    BrandLogComponent
  ]
})
export class BrandModule { }
