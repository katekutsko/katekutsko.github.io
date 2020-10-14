import { Component } from "@angular/core";

@Component({
    selector: 'header',
    template: `
    <div class="menu">
        <i class="fas fa-bars fa-2x"></i>
    </div>
    <div class="logo"> Logo </div>
    <div class="spacer"></div>
    <div class="like-button">
        <i class="fas fa-heart"></i>
    </div>
    <div class="cart">
        <i class="fas fa-shopping-cart"></i>
    </div>
    <div class="access-links">
        Login | Sign Up
    <div>`,
    styles: [` :host {
        height: 80px;
        padding: 0 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }`,
    '.logo { margin-left: 16px; font-size: 30px }',
    '.spacer { flex: 1; }',
    'i { color: #b2b2b2; }',
    '.cart, .like-button { margin-right: 16px; }'
    ]
})
export class HeaderComponent {

}