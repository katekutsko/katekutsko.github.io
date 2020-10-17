import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ICoupon } from '../interface/icoupon';
import { CouponService } from '../service/coupon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  coupon$ : Observable<ICoupon>;

  constructor(private route: ActivatedRoute, private router: Router, private dataService : CouponService) {}

  ngOnInit(): void {
    const couponId = this.route.snapshot.paramMap.get('id');
    this.coupon$ = this.dataService.getCoupon(+couponId);
  }

  gotoDetails(coupon: ICoupon) {
    const couponId = coupon ? coupon.id : null;
    this.router.navigate(['/coupons', couponId ]);
  }
}
