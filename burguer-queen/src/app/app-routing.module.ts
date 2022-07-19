import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateOrdersComponent } from './components/create-orders/create-orders.component';
import { StateOrdersComponent } from './components/state-orders/state-orders.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/create-orders/products/products.component';
import { BodyComponent } from './components/body/body.component';
import { ProductscrudComponent } from './components/productscrud/productscrud.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,

  },


  {
    path: 'users',
    component: UsersComponent,

  },
  {
    path: 'body',
    component: BodyComponent,
    children: [
    {path: 'users',component: UsersComponent,},
    {path: 'productsCrud',component: ProductscrudComponent, },
    {path: 'products',component: ProductsComponent, },
    {path: 'create-orders', component: CreateOrdersComponent,},
    {path: 'state-orders',component: StateOrdersComponent},
  ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
