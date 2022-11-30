import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand.component';
import { BrandLogComponent } from './children/brand-log/brand-log.component';
import { CreateBrandComponent } from './children/create-brand/create-brand.component';

const routes: Routes = [
  {
    path: '', 
    component: BrandComponent
  },
  {
    path: 'brandLog', 
    component: BrandLogComponent
  },
  {
    path: 'new',
    component: CreateBrandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandRoutingModule { }
