import { Component } from '@angular/core';
import { Coupon } from '../coupon/coupon.model';
import { CouponService } from '../coupon/coupon.service';

@Component({
  selector: 'coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss'],
})
export class CouponListComponent {
  constructor(private dataService: CouponService) {}

  coupons: Coupon[] = this.dataService.getCoupons();
}
