import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { CouponCardComponent } from './coupon/coupon.component';
import { CategoryComponent } from './category/category.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    CategoryListComponent,
    CouponListComponent,
    CouponCardComponent,
  ],
  imports: [HomeRoutingModule, CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
