import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CategoryLogComponent } from './children/category-log/category-log.component';


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryLogComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    NavBarModule,
    MaterialModule
  ], exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
