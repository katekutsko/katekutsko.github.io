import { Injectable } from '@angular/core';
import { Coupon } from './coupon.model';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  private coupons: Coupon[] = [
    new Coupon('Coupon name', 'Long description of the coupon', 3, 235),
    new Coupon('Coupon name', 'Long description of the coupon', 2, 235),
    new Coupon('Coupon name', 'Long description of the coupon', 6, 235),
    new Coupon('Coupon name', 'Long description of the coupon', 1, 235),
    new Coupon('Coupon name', 'Long description of the coupon', 7, 235),
    new Coupon('Coupon name', 'Long description of the coupon', 9, 235),
  ];

  getCoupons(): Coupon[] {
    return this.coupons;
  }
}
