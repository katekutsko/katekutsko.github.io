import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CouponListComponent } from './coupons/coupon-list/coupon-list.component';
import { CouponCardComponent } from './coupons/coupon/coupon.component';
import { CategoryComponent } from './categories/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategoryComponent,
    CategoryListComponent,
    CouponListComponent,
    CouponCardComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
