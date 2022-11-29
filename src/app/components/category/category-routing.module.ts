import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryLogComponent } from './children/category-log/category-log.component';

const routes: Routes = [
  {
    path: '', 
    component:CategoryComponent
  },
  {
    path: 'categoryLog',
    component:CategoryLogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
