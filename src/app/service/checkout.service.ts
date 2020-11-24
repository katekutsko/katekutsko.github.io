import { Injectable } from '@angular/core';
import { ICoupon } from '../interface/icoupon';
import { CouponService } from './coupon.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  selectedCoupons: ICoupon[];

  constructor(private couponService: CouponService) {
    this.selectedCoupons = [];
  }

  getSelectedCoupons() {
    return this.selectedCoupons;
  }

  addToCart(couponId: number) {
    const coupon: ICoupon = this.couponService.getCoupon(couponId);

    if (coupon && !this.selectedCoupons.includes(coupon)) {
      this.selectedCoupons.push(coupon);
    }
  }

  getSelectedCouponsAmount() {
    return this.selectedCoupons.length;
  }

  checkout() {
    this.selectedCoupons = [];
  }
}
