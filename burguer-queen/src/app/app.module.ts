import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateOrdersComponent, DialogCorrect, DialogIncorrect } from './components/create-orders/create-orders.component';
import { StateOrdersComponent } from './components/state-orders/state-orders.component';
import { ProductsComponent } from './components/create-orders/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BodyComponent } from './components/body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import {MatDialogModule} from '@angular/material/dialog';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ProductOrderComponent } from './components/create-orders/product-order/product-order.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogCreateUser } from './components/users/createUserDialog/dialogCreateUser.component';
import { DialogUpdateUser } from './components/users/createUserDialog/dialogUpdateUser.component';
import { DialogData } from './components/dialogs/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CreateOrdersComponent,
    StateOrdersComponent,
    ProductsComponent,
    UsersComponent,
    BodyComponent,
    DialogData,
    DialogIncorrect,
    DialogCorrect,
    ProductOrderComponent,
    DialogCreateUser,
    DialogUpdateUser
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    MatDialogModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
