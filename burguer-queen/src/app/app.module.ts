import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateOrdersComponent } from './components/create-orders/create-orders.component';
import { StateOrdersComponent } from './components/state-orders/state-orders.component';
import { ProductsComponent } from './components/create-orders/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CreateOrdersComponent,
    StateOrdersComponent,
    ProductsComponent,
    UsersComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
