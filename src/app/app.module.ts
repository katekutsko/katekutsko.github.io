import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CouponListComponent } from './coupons/coupon-list/coupon-list.component';
import { CouponCardComponent } from './coupons/coupon/coupon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategoryListComponent,
    CouponListComponent,
    CouponCardComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
