import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ICoupon } from '../../interface/icoupon';
import { CouponService } from '../../service/coupon.service';

@Component({
  selector: 'coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss'],
})
export class CouponListComponent implements OnInit {
  selectedId: number;
  coupons$: Observable<ICoupon[]>;

  constructor(
    private dataService: CouponService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.coupons$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = Number(params.get('id'));
        return this.dataService.getCoupons();
      })
    );
  }
}
