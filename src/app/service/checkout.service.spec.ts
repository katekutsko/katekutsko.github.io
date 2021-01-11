import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICoupon } from '../interface/icoupon';

import { CheckoutService } from './checkout.service';
import { CouponService } from './coupon.service';

describe('CheckoutService', () => {
  const VALID_COUPON_ID = 1;
  const INVALID_COUPON_ID = 2;
  const COUPON: ICoupon = {
    id: 1,
    name: 'Exclusive',
    description: 'Fusce posuere felis sed lacus.',
    price: 285.19,
    daysBeforeExpiration: 3,
    detailedDescription:
      'Fusce consequat. Suspendisse accumsan tortor quis turpis.',
  };
  let checkoutService: CheckoutService;
  let couponServiceSpy: jasmine.SpyObj<CouponService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CouponService', [
      'getCoupons',
      'getCoupon',
    ]);
    await TestBed.configureTestingModule({
      providers: [CheckoutService, { provide: CouponService, useValue: spy }],
    }).compileComponents();

    checkoutService = TestBed.inject(CheckoutService);
    couponServiceSpy = TestBed.inject(
      CouponService
    ) as jasmine.SpyObj<CouponService>;
  });

  beforeEach(async () => {
    couponServiceSpy.getCoupon.withArgs(VALID_COUPON_ID).and.returnValue(COUPON);
    couponServiceSpy.getCoupon.withArgs(INVALID_COUPON_ID).and.returnValue(null);
  });

  it('should initially have an empty array of selected items', () => {
    expect(checkoutService.selectedCoupons.length).toBe(0);
  });

  it('should add an item by its id if it exists', () => {
    checkoutService.addToCart(VALID_COUPON_ID);

    expect(checkoutService.selectedCoupons).toEqual([COUPON]);
    expect(couponServiceSpy.getCoupon).toHaveBeenCalledWith(VALID_COUPON_ID);
  });

  it('should not add an item if it is already selected', () => {
    checkoutService.selectedCoupons = [COUPON];

    checkoutService.addToCart(VALID_COUPON_ID);

    expect(checkoutService.selectedCoupons).toEqual([COUPON]);
    expect(couponServiceSpy.getCoupon).toHaveBeenCalledWith(VALID_COUPON_ID);
  });

  it('should do nothing if an item was not found', () => {
    checkoutService.addToCart(INVALID_COUPON_ID);

    expect(checkoutService.selectedCoupons.length).toBe(0);
    expect(couponServiceSpy.getCoupon).toHaveBeenCalledWith(INVALID_COUPON_ID);
  });

  it('should return correct count of selected items', () => {
    checkoutService.selectedCoupons = [COUPON];

    expect(checkoutService.getSelectedCouponsAmount()).toBe(1);

    checkoutService.selectedCoupons = [];

    expect(checkoutService.getSelectedCouponsAmount()).toBe(0);
  });

  it('should clear selected coupons on checkout()', () => {
    checkoutService.selectedCoupons = [COUPON];
    
    checkoutService.checkout();

    expect(checkoutService.selectedCoupons.length).toBe(0);
  });
});
