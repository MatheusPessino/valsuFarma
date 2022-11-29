import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductLogComponent } from './children/product-log/product-log.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '',
    component:ProductComponent
  },
  {
    path: 'productLog',
    component: ProductLogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
