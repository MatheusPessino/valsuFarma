import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryLogComponent } from './children/category-log/category-log.component';
import { CreateCategoryComponent } from './children/create-category/create-category.component';

const routes: Routes = [
  {
    path: '', 
    component:CategoryComponent
  },
  {
    path: 'categoryLog',
    component:CategoryLogComponent
  },
  {
    path: 'new',
    component: CreateCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
