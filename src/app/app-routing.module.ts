import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "login",
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
  path: "home",
  loadChildren: () => import("./components/home/home.module").then(m => m.HomeModule),
  canActivate: [AuthGuard]
  },
  {
    path: "category",
    loadChildren: () => import("./components/category/category.module").then(m => m.CategoryModule),
    canActivate: [AuthGuard]
  },
  {
    path: "brand",
    loadChildren: () => import("./components/brand/brand.module").then(m => m.BrandModule),
    canActivate: [AuthGuard]
  },
  {
    path:"product",
    loadChildren: () => import("./components/product/product.module").then(m => m.ProductModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
