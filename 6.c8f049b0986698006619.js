(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{iydT:function(n,t,o){"use strict";o.r(t),o.d(t,"HomeModule",(function(){return m}));var e=o("tyNb"),c=o("fXoL");let i=(()=>{class n{constructor(){this.categories=[{id:2,name:"Home"},{id:3,name:"Beauty"},{id:4,name:"Health"},{id:5,name:"Food"},{id:6,name:"Clothes"},{id:7,name:"Holiday"}]}getCategories(){return this.categories}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=c.zb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var r=o("ofXK");let a=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.xb({type:n,selectors:[["category"]],inputs:{category:"category"},decls:3,vars:1,consts:[[1,"icon"],[1,"title"]],template:function(n,t){1&n&&(c.Eb(0,"div",0),c.Ib(1,"div",1),c.dc(2),c.Hb()),2&n&&(c.ub(2),c.ec(null==t.category?null:t.category.name))},styles:["[_nghost-%COMP%]{width:70px;text-align:center}[_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{height:70px;background-color:#fff}[_nghost-%COMP%]   .category-title[_ngcontent-%COMP%]{line-height:30px}"]}),n})();function s(n,t){1&n&&c.Eb(0,"category",1),2&n&&c.Ub("category",t.$implicit)}let p=(()=>{class n{constructor(n){this.categories=n.getCategories()}}return n.\u0275fac=function(t){return new(t||n)(c.Db(i))},n.\u0275cmp=c.xb({type:n,selectors:[["categories-list"]],decls:1,vars:1,consts:[[3,"category",4,"ngFor","ngForOf"],[3,"category"]],template:function(n,t){1&n&&c.bc(0,s,1,1,"category",0),2&n&&c.Ub("ngForOf",t.categories)},directives:[r.i,a],styles:["[_nghost-%COMP%]{padding:0 120px;display:flex;flex:1;justify-content:space-evenly;align-items:center;height:120px;background-color:#d2d2d2}"]}),n})();var l=o("rx9G"),u=o("KV1D");const d=function(n){return["/coupons",n]};let g=(()=>{class n{constructor(n){this.checkoutService=n}addToCart(){this.checkoutService.addToCart(this.coupon.id)}}return n.\u0275fac=function(t){return new(t||n)(c.Db(u.a))},n.\u0275cmp=c.xb({type:n,selectors:[["coupon-card"]],inputs:{coupon:"coupon"},decls:17,vars:10,consts:[[1,"coupon-photo"],[1,"coupon-info"],[1,"name"],[1,"clickable-title",3,"routerLink"],[1,"like-button","clickable"],[1,"fas","fa-heart"],[1,"description"],[1,"expires-in"],[1,"purchase-info"],[1,"price"],[1,"add-to-cart-button","clickable",3,"click"]],template:function(n,t){1&n&&(c.Eb(0,"div",0),c.Ib(1,"div",1),c.Ib(2,"div",2),c.Ib(3,"a",3),c.dc(4),c.Hb(),c.Hb(),c.Ib(5,"div",4),c.Eb(6,"i",5),c.Hb(),c.Ib(7,"div",6),c.dc(8),c.Hb(),c.Ib(9,"div",7),c.dc(10),c.Hb(),c.Hb(),c.Ib(11,"div",8),c.Ib(12,"div",9),c.dc(13),c.Rb(14,"currency"),c.Hb(),c.Ib(15,"button",10),c.Ob("click",(function(){return t.addToCart()})),c.dc(16," Add to cart "),c.Hb(),c.Hb()),2&n&&(c.ub(3),c.Ub("routerLink",c.Vb(8,d,t.coupon.id)),c.ub(1),c.ec(null==t.coupon?null:t.coupon.name),c.ub(4),c.fc(" ",null==t.coupon?null:t.coupon.description," "),c.ub(2),c.fc(" Expires in ",null==t.coupon?null:t.coupon.daysBeforeExpiration," days "),c.ub(3),c.fc(" ",c.Sb(14,5,null==t.coupon?null:t.coupon.price,"USD")," "))},directives:[e.b],pipes:[r.c],styles:['[_nghost-%COMP%]{margin:0 8px 16px;height:300px;width:260px;background-color:#fff;display:flex;flex-direction:column}[_nghost-%COMP%]:last-child{margin-right:0}.coupon-photo[_ngcontent-%COMP%]{width:100%;height:200px;background-color:#a1a1a1}.coupon-info[_ngcontent-%COMP%]{display:grid;grid-template-areas:"name name name like" "desc desc exp exp";grid-column-gap:10px;padding:10px 10px 5px;border-bottom:1px solid #f2f2f2}.coupon-info[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2n){text-align:end}.purchase-info[_ngcontent-%COMP%]{padding:8px 10px 0;display:grid;grid-template-columns:auto auto;grid-column-gap:10px}.clickable[_ngcontent-%COMP%]{cursor:pointer}.expires-in[_ngcontent-%COMP%]{grid-area:exp;padding-top:7px;font-size:12px;color:#d2d2d2}.description[_ngcontent-%COMP%]{grid-area:desc;padding-top:7px;font-size:14px;color:#b8b8b8}.description[_ngcontent-%COMP%], .name[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.name[_ngcontent-%COMP%]{grid-area:name;font-size:20px}.like-button[_ngcontent-%COMP%]{grid-area:like}.price[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.add-to-cart-button[_ngcontent-%COMP%]{text-align:center;border:1px solid #bbb;color:#999}i[_ngcontent-%COMP%]{color:#b2b2b2}']}),n})();function b(n,t){1&n&&c.Eb(0,"coupon-card",1),2&n&&c.Ub("coupon",t.$implicit)}let f=(()=>{class n{constructor(n){this.dataService=n}ngOnInit(){this.coupons$=this.dataService.getCoupons()}}return n.\u0275fac=function(t){return new(t||n)(c.Db(l.a))},n.\u0275cmp=c.xb({type:n,selectors:[["coupon-list"]],decls:1,vars:1,consts:[[3,"coupon",4,"ngFor","ngForOf"],[3,"coupon"]],template:function(n,t){1&n&&c.bc(0,b,1,1,"coupon-card",0),2&n&&c.Ub("ngForOf",t.coupons$)},directives:[r.i,g],styles:["[_nghost-%COMP%]{margin:30px 30px 0;display:flex;flex-wrap:wrap;justify-content:center}"]}),n})();const h=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.xb({type:n,selectors:[["home"]],decls:2,vars:0,template:function(n,t){1&n&&(c.Eb(0,"categories-list"),c.Eb(1,"coupon-list"))},directives:[p,f],styles:["[_nghost-%COMP%]{background-color:#f2f2f2}"]}),n})()}];let x=(()=>{class n{}return n.\u0275mod=c.Bb({type:n}),n.\u0275inj=c.Ab({factory:function(t){return new(t||n)},imports:[[e.c.forChild(h)],e.c]}),n})(),m=(()=>{class n{}return n.\u0275mod=c.Bb({type:n}),n.\u0275inj=c.Ab({factory:function(t){return new(t||n)},imports:[[x,r.b]]}),n})()}}]);