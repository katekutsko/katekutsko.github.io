import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CheckoutService } from 'src/app/service/checkout.service';
import { ICoupon } from '../../interface/icoupon';
import { CouponService } from '../../service/coupon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  coupon$: ICoupon;

  constructor(
    private route: ActivatedRoute,
    private dataService: CouponService,
    private checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {
    const couponId = this.route.snapshot.paramMap.get('id');
    this.coupon$ = this.dataService.getCoupon(+couponId);
  }

  addToCart() {
    this.checkoutService.addToCart(this.coupon$.id)
  }
}
