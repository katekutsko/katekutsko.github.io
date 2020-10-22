import { Component } from '@angular/core';
import { CheckoutService } from '../service/checkout.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private checkoutService: CheckoutService) {}

  getSelectedCouponsAmount(): number {
    return this.checkoutService.getSelectedCouponsAmount();
  }
}
