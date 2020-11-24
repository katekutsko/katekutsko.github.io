import { Component, OnInit } from '@angular/core';
import { ICoupon } from 'src/app/interface/icoupon';
import { CheckoutService } from 'src/app/service/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  selectedCoupons: ICoupon[];
  total: number;

  constructor(private service: CheckoutService) {}

  ngOnInit(): void {
    this.selectedCoupons = this.service.getSelectedCoupons();
    this.total = this.selectedCoupons.reduce(
      (acc, coupon) => acc + coupon.price,
      0
    );
  }

  checkout() {
    this.service.checkout();
    this.selectedCoupons = [];
  }
}
