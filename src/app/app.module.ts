import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SummeryPipe } from './pipes/summery.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestLoginComponent } from './validation/test-login/test-login.component';
import { CustomFormsModule } from 'ng2-validation';
import { ReactiveFormsComponent } from './validation/reactive-forms/reactive-forms.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SummeryPipe,
    TestLoginComponent,
    ReactiveFormsComponent,
    NavBarComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductsComponent,
    ShoppingCartComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
