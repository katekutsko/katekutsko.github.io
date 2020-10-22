import { Component, Input } from '@angular/core';
import { CheckoutService } from 'src/app/service/checkout.service';
import { ICoupon } from '../../../interface/icoupon';

@Component({
  selector: 'coupon-card',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponCardComponent {
  @Input() coupon: ICoupon;

  constructor(private checkoutService: CheckoutService) {}

  addToCart() {
    this.checkoutService.addToCart(this.coupon.id);
  }
}
