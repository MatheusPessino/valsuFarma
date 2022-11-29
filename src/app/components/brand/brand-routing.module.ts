import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand.component';
import { BrandLogComponent } from './children/brand-log/brand-log.component';

const routes: Routes = [
  {
    path: '', 
    component: BrandComponent
  },
  {
    path: 'brandLog', 
    component: BrandLogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandRoutingModule { }
