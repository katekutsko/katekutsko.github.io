import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICoupon } from 'src/app/interface/icoupon';
import { CouponCardComponent } from '../coupon/coupon.component';
import { SentenceCasePipe } from './sentence-case.pipe';

describe('SentenceCasePipe', () => {
  const pipe = new SentenceCasePipe();

  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });

  it('transforms "abc def" to "Abc def"', () => {
    expect(pipe.transform('abc def')).toBe('Abc def');
  });

  it('does not transform "12abcdef"', () => {
    expect(pipe.transform('12abcdef')).toBe('12abcdef');
  });

  it('should transform "abc def" to "Abc def" in the view', () => {
    TestBed.configureTestingModule({
      declarations: [CouponCardComponent, SentenceCasePipe],
    });
    const fixture: ComponentFixture<CouponCardComponent> = TestBed.createComponent(
      CouponCardComponent
    );
    const component = fixture.componentInstance;
    const hostElement = fixture.nativeElement;

    component.coupon = { name: 'name of the coupon' } as ICoupon;

    fixture.detectChanges();

    const nameDisplay: HTMLElement = hostElement.querySelector('.name a');

    expect(nameDisplay.textContent).toBe('Name of the coupon');
  });
});
