"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5712],{5712:(L,E,v)=>{v.r(E),v.d(E,{ion_nav:()=>V,ion_nav_link:()=>D});var m=v(467),w=v(4261),T=v(3351),l=v(4920),g=v(3604),y=v(9483),k=v(8621);class A{constructor(e,t){this.component=e,this.params=t,this.state=1}init(e){var t=this;return(0,m.A)(function*(){if(t.state=2,!t.element){const n=t.component;t.element=yield(0,k.a)(t.delegate,e,n,["ion-page","ion-page-invisible"],t.params)}})()}_destroy(){(0,l.m)(3!==this.state,"view state must be ATTACHED");const e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3}}const I=(u,e,t)=>!(!u||u.component!==e)&&(0,l.s)(u.params,t),P=(u,e)=>u?u instanceof A?u:new A(u,e):null,V=(()=>{let u=class{constructor(e){(0,w.r)(this,e),this.ionNavWillLoad=(0,w.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=(0,w.d)(this,"ionNavWillChange",3),this.ionNavDidChange=(0,w.d)(this,"ionNavDidChange",3),this.transInstr=[],this.gestureOrAnimationInProgress=!1,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.didLoad=!1,this.delegate=void 0,this.swipeGesture=void 0,this.animated=!0,this.animation=void 0,this.rootParams=void 0,this.root=void 0}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&!1!==this.didLoad&&(this.useRouter||void 0!==this.root&&this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=null!==document.querySelector("ion-router")&&null===this.el.closest("[no-router]"),void 0===this.swipeGesture){const e=(0,y.b)(this);this.swipeGesture=y.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}componentDidLoad(){var e=this;return(0,m.A)(function*(){e.didLoad=!0,e.rootChanged(),e.gesture=(yield v.e(2076).then(v.bind(v,7166))).createSwipeBackGesture(e.el,e.canStart.bind(e),e.onStart.bind(e),e.onMove.bind(e),e.onEnd.bind(e)),e.swipeGestureChanged()})()}connectedCallback(){this.destroyed=!1}disconnectedCallback(){for(const e of this.views)(0,g.l)(e.element,g.d),e._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=0,this.views.length=0,this.destroyed=!0}push(e,t,n,i){return this.insert(-1,e,t,n,i)}insert(e,t,n,i,s){return this.insertPages(e,[{component:t,componentProps:n}],i,s)}insertPages(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)}pop(e,t){return this.removeIndex(-1,1,e,t)}popTo(e,t,n){const i={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"==typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)}popToRoot(e,t){return this.removeIndex(1,-1,e,t)}removeIndex(e,t=1,n,i){return this.queueTrns({removeStart:e,removeCount:t,opts:n},i)}setRoot(e,t,n,i){return this.setPages([{component:e,componentProps:t}],n,i)}setPages(e,t,n){return t??(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)}setRouteId(e,t,n,i){const s=this.getActiveSync();if(I(s,e,t))return Promise.resolve({changed:!1,element:s.element});let a;const o=new Promise(c=>a=c);let r;const h={updateURL:!1,viewIsReady:c=>{let f;const p=new Promise(d=>f=d);return a({changed:!0,element:c,markVisible:(d=(0,m.A)(function*(){f(),yield r}),function(){return d.apply(this,arguments)})}),p;var d}};if("root"===n)r=this.setRoot(e,t,h);else{const c=this.views.find(f=>I(f,e,t));c?r=this.popTo(c,Object.assign(Object.assign({},h),{direction:"back",animationBuilder:i})):"forward"===n?r=this.push(e,t,Object.assign(Object.assign({},h),{animationBuilder:i})):"back"===n&&(r=this.setRoot(e,t,Object.assign(Object.assign({},h),{direction:"back",animated:!0,animationBuilder:i})))}return o}getRouteId(){var e=this;return(0,m.A)(function*(){const t=e.getActiveSync();if(t)return{id:t.element.tagName,params:t.params,element:t.element}})()}getActive(){var e=this;return(0,m.A)(function*(){return e.getActiveSync()})()}getByIndex(e){var t=this;return(0,m.A)(function*(){return t.views[e]})()}canGoBack(e){var t=this;return(0,m.A)(function*(){return t.canGoBackSync(e)})()}getPrevious(e){var t=this;return(0,m.A)(function*(){return t.getPreviousSync(e)})()}getLength(){var e=this;return(0,m.A)(function*(){return Promise.resolve(e.views.length)})()}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(e=this.getActiveSync()){return!(!e||!this.getPreviousSync(e))}getPreviousSync(e=this.getActiveSync()){if(!e)return;const t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}queueTrns(e,t){var n=this;return(0,m.A)(function*(){var i,s;if(n.isTransitioning&&null!==(i=e.opts)&&void 0!==i&&i.skipIfBusy)return!1;const a=new Promise((o,r)=>{e.resolve=o,e.reject=r});if(e.done=t,e.opts&&!1!==e.opts.updateURL&&n.useRouter){const o=document.querySelector("ion-router");if(o){const r=yield o.canTransition();if(!1===r)return!1;if("string"==typeof r)return o.push(r,e.opts.direction||"back"),!1}}return 0===(null===(s=e.insertViews)||void 0===s?void 0:s.length)&&(e.insertViews=void 0),n.transInstr.push(e),n.nextTrns(),a})()}success(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){const n=document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?"back":"forward")}}failed(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}runTransition(e){var t=this;return(0,m.A)(function*(){try{t.ionNavWillChange.emit(),t.isTransitioning=!0,t.prepareTI(e);const n=t.getActiveSync(),i=t.getEnteringView(e,n);if(!n&&!i)throw new Error("no views in the stack to be removed");i&&1===i.state&&(yield i.init(t.el)),t.postViewInit(i,n,e);const s=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&i!==n;let a;s&&e.opts&&n&&("back"===e.opts.direction&&(e.opts.animationBuilder=e.opts.animationBuilder||i?.animationBuilder),n.animationBuilder=e.opts.animationBuilder),a=s?yield t.transition(i,n,e):{hasCompleted:!0,requiresTransition:!1},t.success(a,e),t.ionNavDidChange.emit()}catch(n){t.failed(n,e)}t.isTransitioning=!1,t.nextTrns()})()}prepareTI(e){var t,n,i;const s=this.views.length;if(null!==(t=e.opts)&&void 0!==t||(e.opts={}),null!==(n=(i=e.opts).delegate)&&void 0!==n||(i.delegate=this.delegate),void 0!==e.removeView){(0,l.m)(void 0!==e.removeStart,"removeView needs removeStart"),(0,l.m)(void 0!==e.removeCount,"removeView needs removeCount");const r=this.views.indexOf(e.removeView);if(r<0)throw new Error("removeView was not found");e.removeStart+=r}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=s-1),e.removeCount<0&&(e.removeCount=s-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===s),e.insertViews&&((e.insertStart<0||e.insertStart>s)&&(e.insertStart=s),e.enteringRequiresTransition=e.insertStart===s);const a=e.insertViews;if(!a)return;(0,l.m)(a.length>0,"length can not be zero");const o=(u=>u.map(e=>e instanceof A?e:"component"in e?P(e.component,null===e.componentProps?void 0:e.componentProps):P(e,void 0)).filter(e=>null!==e))(a);if(0===o.length)throw new Error("invalid views to insert");for(const r of o){r.delegate=e.opts.delegate;const h=r.nav;if(h&&h!==this)throw new Error("inserted view was already inserted");if(3===r.state)throw new Error("inserted view was already destroyed")}e.insertViews=o}getEnteringView(e,t){const n=e.insertViews;if(void 0!==n)return n[n.length-1];const i=e.removeStart;if(void 0!==i){const s=this.views,a=i+e.removeCount;for(let o=s.length-1;o>=0;o--){const r=s[o];if((o<i||o>=a)&&r!==t)return r}}}postViewInit(e,t,n){var i,s,a;(0,l.m)(t||e,"Both leavingView and enteringView are null"),(0,l.m)(n.resolve,"resolve must be valid"),(0,l.m)(n.reject,"reject must be valid");const o=n.opts,{insertViews:r,removeStart:h,removeCount:c}=n;let f;if(void 0!==h&&void 0!==c){(0,l.m)(h>=0,"removeStart can not be negative"),(0,l.m)(c>=0,"removeCount can not be negative"),f=[];for(let d=h;d<h+c;d++){const b=this.views[d];void 0!==b&&b!==e&&b!==t&&f.push(b)}null!==(i=o.direction)&&void 0!==i||(o.direction="back")}const p=this.views.length+(null!==(s=r?.length)&&void 0!==s?s:0)-(c??0);if((0,l.m)(p>=0,"final balance can not be negative"),0===p)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(r){let d=n.insertStart;for(const b of r)this.insertViewAt(b,d),d++;n.enteringRequiresTransition&&(null!==(a=o.direction)&&void 0!==a||(o.direction="forward"))}if(f&&f.length>0){for(const d of f)(0,g.l)(d.element,g.b),(0,g.l)(d.element,g.c),(0,g.l)(d.element,g.d);for(const d of f)this.destroyView(d)}}transition(e,t,n){var i=this;return(0,m.A)(function*(){const s=n.opts,a=s.progressAnimation?p=>{void 0===p||i.gestureOrAnimationInProgress?i.sbAni=p:(i.gestureOrAnimationInProgress=!0,p.onFinish(()=>{i.gestureOrAnimationInProgress=!1},{oneTimeCallback:!0}),p.progressEnd(0,0,0))}:void 0,o=(0,y.b)(i),r=e.element,h=t&&t.element,c=Object.assign(Object.assign({mode:o,showGoBack:i.canGoBackSync(e),baseEl:i.el,progressCallback:a,animated:i.animated&&y.c.getBoolean("animated",!0),enteringEl:r,leavingEl:h},s),{animationBuilder:s.animationBuilder||i.animation||y.c.get("navAnimation")}),{hasCompleted:f}=yield(0,g.t)(c);return i.transitionFinish(f,e,t,s)})()}transitionFinish(e,t,n,i){const s=e?t:n;return s&&this.unmountInactiveViews(s),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}}insertViewAt(e,t){const n=this.views,i=n.indexOf(e);i>-1?((0,l.m)(e.nav===this,"view is not part of the nav"),n.splice(i,1),n.splice(t,0,e)):((0,l.m)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))}removeView(e){(0,l.m)(2===e.state||3===e.state,"view state should be loaded or destroyed");const t=this.views,n=t.indexOf(e);(0,l.m)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)}destroyView(e){e._destroy(),this.removeView(e)}unmountInactiveViews(e){if(this.destroyed)return;const t=this.views,n=t.indexOf(e);for(let i=t.length-1;i>=0;i--){const s=t[i],a=s.element;a&&(i>n?((0,g.l)(a,g.d),this.destroyView(s)):i<n&&(0,g.s)(a,!0))}}canStart(){return!this.gestureOrAnimationInProgress&&!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.canGoBackSync()}onStart(){this.gestureOrAnimationInProgress=!0,this.pop({direction:"back",progressAnimation:!0})}onMove(e){this.sbAni&&this.sbAni.progressStep(e)}onEnd(e,t,n){if(this.sbAni){this.sbAni.onFinish(()=>{this.gestureOrAnimationInProgress=!1},{oneTimeCallback:!0});let i=e?-.001:.001;e?i+=(0,T.g)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),i+=(0,T.g)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,i,n)}else this.gestureOrAnimationInProgress=!1}render(){return(0,w.h)("slot",{key:"e9d99a8a0b84f02f9964d8143cd5e647e43334f9"})}get el(){return(0,w.i)(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};return u.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}",u})(),D=class{constructor(u){(0,w.r)(this,u),this.onClick=()=>((u,e,t,n,i)=>{const s=this.el.closest("ion-nav");if(s)if("forward"===e){if(void 0!==t)return s.push(t,n,{skipIfBusy:!0,animationBuilder:i})}else if("root"===e){if(void 0!==t)return s.setRoot(t,n,{skipIfBusy:!0,animationBuilder:i})}else if("back"===e)return s.pop({skipIfBusy:!0,animationBuilder:i});return Promise.resolve(!1)})(0,this.routerDirection,this.component,this.componentProps,this.routerAnimation),this.component=void 0,this.componentProps=void 0,this.routerDirection="forward",this.routerAnimation=void 0}render(){return(0,w.h)(w.f,{key:"42c23dcdec5fdb25defebaf6e8a9fa75754ff8eb",onClick:this.onClick})}get el(){return(0,w.i)(this)}}}}]);