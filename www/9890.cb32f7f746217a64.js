"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9890],{9890:(C,g,a)=>{a.r(g),a.d(g,{CartPage:()=>m});var s=a(177),c=a(4341),e=a(4742),n=a(3953),d=a(758);function u(i,_){if(1&i){const t=n.RV6();n.j41(0,"ion-item")(1,"ion-checkbox",11),n.mxI("ngModelChange",function(r){const l=n.eBV(t).$implicit;return n.DH7(l.value.checked,r)||(l.value.checked=r),n.Njj(r)}),n.k0s(),n.j41(2,"ion-grid")(3,"ion-row")(4,"ion-col",12)(5,"span"),n.EFF(6),n.k0s()(),n.j41(7,"ion-col",13)(8,"span"),n.EFF(9),n.k0s()()()()()}if(2&i){const t=_.$implicit;n.R7$(),n.R50("ngModel",t.value.checked),n.R7$(4),n.AVh("checked",t.value.checked),n.R7$(),n.JRh(t.key),n.R7$(3),n.JRh(t.value.count)}}function h(i,_){1&i&&(n.j41(0,"div",14)(1,"p"),n.EFF(2,"El carrito est\xe1 vac\xedo"),n.k0s()())}let m=(()=>{class i{constructor(t){this.ingredientsService=t,this.ingredients={}}ngOnInit(){const t=this.ingredientsService.getIngredients();for(const o in t)t.hasOwnProperty(o)&&(this.ingredients[o]={count:t[o],checked:!1})}clearCart(){this.ingredients={}}isCartEmpty(){return 0===Object.keys(this.ingredients).length}static#n=this.\u0275fac=function(o){return new(o||i)(n.rXU(d._))};static#e=this.\u0275cmp=n.VBU({type:i,selectors:[["app-cart"]],standalone:!0,features:[n.aNF],decls:19,vars:6,consts:[[3,"translucent"],["slot","start"],["defaultHref","/"],["slot","end"],[3,"click"],["name","trash-outline"],[3,"fullscreen"],["collapse","condense"],["size","large"],[4,"ngFor","ngForOf"],["class","empty-cart-message",4,"ngIf"],["slot","start",3,"ngModelChange","ngModel"],["size","8"],["size","4",1,"ion-text-right"],[1,"empty-cart-message"]],template:function(o,r){1&o&&(n.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n.nrm(3,"ion-back-button",2),n.k0s(),n.j41(4,"ion-title"),n.EFF(5,"Cart"),n.k0s(),n.j41(6,"ion-buttons",3)(7,"ion-button",4),n.bIt("click",function(){return r.clearCart()}),n.nrm(8,"ion-icon",5),n.EFF(9," Clear Cart "),n.k0s()()()(),n.j41(10,"ion-content",6)(11,"ion-header",7)(12,"ion-toolbar")(13,"ion-title",8),n.EFF(14,"Shopping bag"),n.k0s()()(),n.j41(15,"ion-list"),n.DNE(16,u,10,5,"ion-item",9),n.nI1(17,"keyvalue"),n.k0s(),n.DNE(18,h,3,0,"div",10),n.k0s()),2&o&&(n.Y8G("translucent",!0),n.R7$(10),n.Y8G("fullscreen",!0),n.R7$(6),n.Y8G("ngForOf",n.bMT(17,4,r.ingredients)),n.R7$(2),n.Y8G("ngIf",r.isCartEmpty()))},dependencies:[e.bv,e.Jm,e.QW,e.eY,e.hU,e.W9,e.lO,e.eU,e.iq,e.uz,e.nf,e.ln,e.BC,e.ai,e.hB,e.el,s.MD,s.Sq,s.bT,s.lG,c.YN,c.BC,c.vS],styles:["ion-card[_ngcontent-%COMP%]{margin:20px 0}ion-card-title[_ngcontent-%COMP%]{font-size:1.5em;color:#333}ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2em;line-height:1.6;color:#666}h2[_ngcontent-%COMP%]{font-size:1.5em;margin-top:20px;margin-bottom:10px;color:#444}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-size:1.1em;line-height:1.4;color:#555}img[_ngcontent-%COMP%]{display:block;max-width:80%;height:auto;margin:0 auto 20px;border-radius:8px}.checked[_ngcontent-%COMP%]{text-decoration:line-through}.empty-cart-message[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;text-align:center;font-size:1.2em;color:#888}"]})}return i})()}}]);