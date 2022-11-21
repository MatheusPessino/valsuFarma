import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';


@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    NavBarModule
  ], exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
