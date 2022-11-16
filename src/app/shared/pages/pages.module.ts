import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from 'src/app/components/login/login.module';
import { HomeModule } from 'src/app/components/home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  exports: [
    LoginModule,
    HomeModule
  ]
})
export class PagesModule { }
