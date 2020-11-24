import { Component } from '@angular/core';
import { CheckoutService } from '../service/checkout.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private checkoutService: CheckoutService,
    private loginService: LoginService
  ) {}

  getSelectedCouponsAmount(): number {
    return this.checkoutService.getSelectedCouponsAmount();
  }

  isLoggedIn() : boolean {
    return !!this.loginService.loggedInUser;
  }

  getLoggedInUserName(): string | null {
    const user = this.loginService.loggedInUser;
    return user ? user.firstName : null;
  }
}
