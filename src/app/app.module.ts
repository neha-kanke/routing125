import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './shared/component/home/home.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { ProductComponent } from './shared/component/product/product.component';
import { ProdFormComponent } from './shared/component/prod-form/prod-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './shared/component/users/users.component';
import { UserComponent } from './shared/component/user/user.component';
import { UserFormComponent } from './shared/component/user-form/user-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    ProdFormComponent,
    UsersComponent,
    UserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
