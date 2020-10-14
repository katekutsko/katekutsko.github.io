import { Component } from "@angular/core";

@Component({
    selector: 'home',
    template:  `
    <categories-list></categories-list>
    <coupon-list></coupon-list>`,
    styles: [' :host{ background-color: #f2f2f2; }']
})
export class HomeComponent {
}