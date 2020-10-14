import { Component } from '@angular/core';
import { ICoupon } from '../coupon/icoupon';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss'],
})
export class CouponListComponent {
  constructor(private dataService: CouponService) {}

  coupons: ICoupon[] = this.dataService.getCoupons();
}
