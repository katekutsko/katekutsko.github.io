import { Component, Input } from '@angular/core';
import { ICoupon } from './icoupon';

@Component({
  selector: 'coupon-card',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponCardComponent {
  @Input() coupon: ICoupon;
}
