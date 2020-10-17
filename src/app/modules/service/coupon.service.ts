import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICoupon } from '../interface/icoupon';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  coupons: ICoupon[] = [
    {
      id: 1,
      name: 'Coupon name',
      description: 'Long description of the coupon',
      daysBeforeExpiration: 3,
      price: 235,
    },
    {
      id: 2,
      name: 'Coupon name',
      description: 'Long description of the coupon',
      daysBeforeExpiration: 2,
      price: 235,
    },
    {
      id: 3,
      name: 'Coupon name',
      description: 'Long description of the coupon',
      daysBeforeExpiration: 6,
      price: 235,
    },
    {
      id: 4,
      name: 'Coupon name',
      description: 'Long description of the coupon',
      daysBeforeExpiration: 1,
      price: 235,
    },
    {
      id: 5,
      name: 'Coupon name',
      description: 'Long description of the coupon',
      daysBeforeExpiration: 7,
      price: 235,
    },
    {
      id: 6,
      name: 'Coupon name',
      description: 'Long description of the coupon',
      daysBeforeExpiration: 9,
      price: 235,
    },
    {
      id: 7,
      name: 'Coupon name',
      description: 'Long description of the coupon',
      daysBeforeExpiration: 3,
      price: 235,
    },
    {
      id: 8,
      name: 'Coupon name',
      description: 'Long description of the coupon',
      daysBeforeExpiration: 3,
      price: 235,
    },
  ];

  getCoupons(): Observable<ICoupon[]> {
    return of(this.coupons);
  }

  getCoupon(couponId: number) {
    return this.getCoupons().pipe(
      map((coupons: ICoupon[]) =>
        coupons.find((coupon) => coupon.id === couponId)
      )
    );
  }
}
