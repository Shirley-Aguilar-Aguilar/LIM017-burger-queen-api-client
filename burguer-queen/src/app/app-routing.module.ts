import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateOrdersComponent } from './components/create-orders/create-orders.component';
import { StateOrdersComponent } from './components/state-orders/state-orders.component';

const routes: Routes = [
  {
    path: '', 
    component: LoginComponent
  },
  {
    path: 'create-orders', 
    component: CreateOrdersComponent
  },
  {
    path: 'state-orders', 
    component: StateOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
