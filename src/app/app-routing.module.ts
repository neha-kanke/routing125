import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { ProductComponent } from './shared/component/product/product.component';
import { ProdFormComponent } from './shared/component/prod-form/prod-form.component';
import { AuthService } from './shared/services/auth.service';
import { AuthgaurdService } from './shared/services/authgaurd.service';
import { UsersComponent } from './shared/component/users/users.component';
import { combineLatest } from 'rxjs';
import { UserComponent } from './shared/component/user/user.component';
import { UserFormComponent } from './shared/component/user-form/user-form.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'products', component: ProductsComponent,
    title: 'products',
    canActivate: [AuthgaurdService],
    children: [
      {
        path: 'add-form', component: ProdFormComponent
      },
      {
        path: ':pro-id', component: ProductComponent
      },
      {
        path: ':pro-id/edit', component: ProdFormComponent
      }
    ]
  },

  {
    path: 'users', component: UsersComponent,
    title:'users',
    canActivate:[AuthgaurdService],
    children:[
      {
        path: 'add-form', component: UserFormComponent
      },
      {
        path: ':userid', component: UserComponent
      }, 
      
      {
        path: ':userid/edit', component: UserFormComponent
      }
    ]
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
