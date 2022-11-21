import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from 'src/app/components/login/login.module';
import { HomeModule } from 'src/app/components/home/home.module';
import { ProductModule } from 'src/app/components/product/product.module';
import { CategoryModule } from 'src/app/components/category/category.module';
import { BrandModule } from 'src/app/components/brand/brand.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  exports: [
    LoginModule,
    HomeModule,
    ProductModule,
    CategoryModule,
    BrandModule
  ]
})
export class PagesModule { }
