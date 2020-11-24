import { Component, OnInit } from '@angular/core';
import { ICoupon } from '../../../interface/icoupon';
import { CouponService } from '../../../service/coupon.service';

@Component({
  selector: 'coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss'],
})
export class CouponListComponent implements OnInit {
  coupons$: ICoupon[];

  constructor(private dataService: CouponService) {}

  ngOnInit(): void {
    this.coupons$ = this.dataService.getCoupons();
  }
}
