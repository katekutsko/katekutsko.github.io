import { Component, Input } from '@angular/core';
import { Coupon } from './coupon.model';

@Component({
  selector: 'coupon-card',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponCardComponent {
  @Input() coupon: Coupon;
}
