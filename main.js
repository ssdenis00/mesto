(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function n(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,o(e,t,"get"))}function r(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,o(e,t,"set"),n),n}function o(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var i=new WeakMap,a=new WeakMap,u=new WeakMap,l=new WeakMap,c=new WeakMap,s=new WeakMap,f=new WeakMap,p=new WeakMap,h=new WeakMap,d=new WeakMap,v=new WeakMap,y=new WeakMap,w=new WeakMap,m=new WeakMap,b=new WeakMap,g=new WeakMap,_=new WeakSet,k=new WeakSet,S=new WeakSet,E=new WeakSet,O=function(){function o(e,t,n,O){var L=O.handleCardClick,W=O.handleTrashBtn,C=O.addLike,T=O.removeLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),E.add(this),S.add(this),k.add(this),_.add(this),i.set(this,{writable:!0,value:void 0}),a.set(this,{writable:!0,value:void 0}),u.set(this,{writable:!0,value:void 0}),l.set(this,{writable:!0,value:void 0}),c.set(this,{writable:!0,value:void 0}),s.set(this,{writable:!0,value:void 0}),f.set(this,{writable:!0,value:void 0}),p.set(this,{writable:!0,value:void 0}),h.set(this,{writable:!0,value:void 0}),d.set(this,{writable:!0,value:void 0}),v.set(this,{writable:!0,value:void 0}),y.set(this,{writable:!0,value:void 0}),w.set(this,{writable:!0,value:void 0}),m.set(this,{writable:!0,value:void 0}),b.set(this,{writable:!0,value:void 0}),g.set(this,{writable:!0,value:void 0}),r(this,a,e.link),r(this,u,e.name),r(this,f,e.likes),r(this,h,e._id),r(this,d,e.owner),r(this,m,n),r(this,l,t),r(this,i,L),r(this,p,W),r(this,y,C),r(this,w,T)}var O,q;return O=o,(q=[{key:"generateCard",value:function(){r(this,c,t(this,_,L).call(this)),r(this,s,n(this,c).querySelector(".galary__like"));var e=n(this,c).querySelector(".galary__title");return r(this,b,n(this,c).querySelector(".galary__img")),r(this,v,n(this,c).querySelector(".galary__like-count")),e.textContent=n(this,u),n(this,b).src=n(this,a),n(this,b).alt="фото "+n(this,u),n(this,v).textContent=n(this,f).length,n(this,b).id=n(this,h),n(this,b).owner=n(this,d),t(this,S,C).call(this),t(this,E,T).call(this),t(this,k,W).call(this),n(this,c)}},{key:"getImgId",value:function(){return n(this,c).querySelector(".galary__img").id}},{key:"addLike",value:function(){n(this,s).classList.add("galary__like_active"),n(this,f).length=n(this,f).length+1,n(this,v).textContent=n(this,f).length}},{key:"removeLike",value:function(){n(this,s).classList.remove("galary__like_active"),n(this,f).length=n(this,f).length-1,n(this,v).textContent=n(this,f).length}}])&&e(O.prototype,q),o}();function L(){return document.querySelector(n(this,l)).content.querySelector(".galary__item").cloneNode(!0)}function W(){var e=this,t=n(this,c).querySelector(".galary__link-img");n(this,s).addEventListener("click",(function(){n(e,s).classList.contains("galary__like_active")?n(e,w).call(e):n(e,y).call(e)})),n(this,g).addEventListener("click",n(this,p)),t.addEventListener("click",n(this,i))}function C(){var e=this;n(this,f).forEach((function(t){t._id===n(e,m)&&n(e,s).classList.add("galary__like_active")}))}function T(){r(this,g,n(this,c).querySelector(".galary__delete-item")),n(this,b).owner._id!==n(this,m)&&n(this,g).remove()}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function M(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,I(e,t,"get"))}function P(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,I(e,t,"set"),n),n}function I(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var R=new WeakMap,x=new WeakMap,A=new WeakMap,U=new WeakMap,F=new WeakMap,B=new WeakSet,D=new WeakSet,N=new WeakSet,V=new WeakSet,J=new WeakSet,G=new WeakSet,H=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),G.add(this),J.add(this),V.add(this),N.add(this),D.add(this),B.add(this),R.set(this,{writable:!0,value:void 0}),x.set(this,{writable:!0,value:void 0}),A.set(this,{writable:!0,value:void 0}),U.set(this,{writable:!0,value:void 0}),F.set(this,{writable:!0,value:void 0}),P(this,R,t.inputErrorClass),P(this,x,t.errorClass),P(this,A,n),P(this,U,Array.from(M(this,A).querySelectorAll(t.inputSelector))),P(this,F,M(this,A).querySelector(t.buttonClass))}var t,n;return t=e,(n=[{key:"resetForm",value:function(){var e=this;M(this,F).disabled=!0,M(this,U).forEach((function(t){j(e,B,z).call(e,t)}))}},{key:"enableValidation",value:function(){j(this,G,Y).call(this)}}])&&q(t.prototype,n),e}();function z(e){var t=M(this,A).querySelector("#".concat(e.id,"-error"));e.classList.remove(M(this,R)),t.textContent="",t.classList.remove(M(this,x))}function $(e){var t=M(this,A).querySelector("#".concat(e.id,"-error"));e.classList.add(M(this,R)),t.textContent=e.validationMessage,t.classList.add(M(this,x))}function K(e){e.validity.valid?j(this,B,z).call(this,e):j(this,D,$).call(this,e)}function Q(){return M(this,U).some((function(e){return!e.validity.valid}))}function X(){j(this,V,Q).call(this)?M(this,F).disabled=!0:M(this,F).disabled=!1}function Y(){var e=this;M(this,U).forEach((function(t){t.addEventListener("input",(function(){j(e,N,K).call(e,t),j(e,J,X).call(e)}))})),j(this,J,X).call(this)}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ee(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,ne(e,t,"get"))}function te(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,ne(e,t,"set"),n),n}function ne(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var re=new WeakMap,oe=new WeakMap,ie=new WeakMap,ae=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),re.set(this,{writable:!0,value:void 0}),oe.set(this,{writable:!0,value:void 0}),ie.set(this,{writable:!0,value:void 0}),te(this,re,n),te(this,oe,r),te(this,ie,o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:ee(this,re).textContent,about:ee(this,oe).textContent,id:ee(this,re).id}}},{key:"setUserInfo",value:function(e){ee(this,re).textContent=e.name,ee(this,oe).textContent=e.about,ee(this,re).id=e._id}},{key:"setAvatar",value:function(e){ee(this,ie).src=e}}])&&Z(t.prototype,n),e}();function ue(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function le(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,se(e,t,"get"))}function ce(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,se(e,t,"set"),n),n}function se(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var fe=new WeakMap,pe=new WeakMap,he=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),fe.set(this,{writable:!0,value:void 0}),pe.set(this,{writable:!0,value:void 0}),ce(this,fe,r),ce(this,pe,n)}var t,n;return t=e,(n=[{key:"rendererElement",value:function(e,t){for(var n=e.length-1;n>=0;--n)le(this,fe).call(this,e[n],t)}},{key:"addItem",value:function(e){le(this,pe).prepend(e)}}])&&ue(t.prototype,n),e}();function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ve(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function ye(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,me(e,t,"get"))}function we(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,me(e,t,"set"),n),n}function me(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var be=new WeakMap,ge=new WeakMap,_e=new WeakSet,ke=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_e.add(this),be.set(this,{writable:!0,value:void 0}),ge.set(this,{writable:!0,value:void 0}),we(this,be,t.url),we(this,ge,t.headers)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(ye(this,be),"/users/me"),{method:"GET",headers:ye(this,ge)}).then(ve(this,_e,Se))}},{key:"editUserInfo",value:function(e){return fetch("".concat(ye(this,be),"/users/me"),{method:"PATCH",headers:ye(this,ge),body:JSON.stringify({name:e.name,about:e.about})}).then(ve(this,_e,Se))}},{key:"getInitialCards",value:function(){return fetch("".concat(ye(this,be),"/cards"),{method:"GET",headers:ye(this,ge)}).then(ve(this,_e,Se))}},{key:"addCard",value:function(e){return fetch("".concat(ye(this,be),"/cards"),{method:"POST",headers:ye(this,ge),body:JSON.stringify({name:e.name,link:e.link})}).then(ve(this,_e,Se))}},{key:"changeAvatar",value:function(e){return fetch("".concat(ye(this,be),"/users/me/avatar"),{method:"PATCH",headers:ye(this,ge),body:JSON.stringify({avatar:e.avatar})}).then(ve(this,_e,Se))}},{key:"deleteCard",value:function(e){return fetch("".concat(ye(this,be),"/cards/").concat(e),{method:"DELETE",headers:ye(this,ge)}).then(ve(this,_e,Se))}},{key:"addLike",value:function(e){return fetch("".concat(ye(this,be),"/cards/likes/").concat(e),{method:"PUT",headers:ye(this,ge)}).then(ve(this,_e,Se))}},{key:"removeLike",value:function(e){return fetch("".concat(ye(this,be),"/cards/likes/").concat(e),{method:"DELETE",headers:ye(this,ge)}).then(ve(this,_e,Se))}}])&&de(t.prototype,n),e}();function Se(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function Ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Oe(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,Le(e,t,"get"))}function Le(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var We=new WeakMap,Ce=new WeakMap,Te=new WeakSet,qe=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Te.add(this),We.set(this,{writable:!0,value:void 0}),Ce.set(this,{writable:!0,value:function(e){"Escape"===e.key&&n.close()}}),this._popupElement=t}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_visible-on"),document.addEventListener("keydown",Oe(this,Ce))}},{key:"close",value:function(){this._popupElement.classList.remove("popup_visible-on"),document.removeEventListener("keydown",Oe(this,Ce))}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".popup__cross").addEventListener("click",(function(){e.close()})),this._popupElement.addEventListener("click",(function(t){(function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n})(e,Te,je).call(e,t)}))}},{key:"renderLoading",value:function(e,t){(function(e,t,n){(function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}})(e,Le(e,t,"set"),n)})(this,We,this._popupElement.querySelector(".popup__btn")),Oe(this,We).textContent=e?"Сохранение...":t}}])&&Ee(t.prototype,n),e}();function je(e){e.target===e.currentTarget&&this.close()}function Me(e){return(Me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ie(e,t,n){return(Ie="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Ue(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function Re(e,t){return(Re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function xe(e,t){return!t||"object"!==Me(t)&&"function"!=typeof t?Ae(e):t}function Ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ue(e){return(Ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Fe=new WeakSet,Be=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Re(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Ue(r);if(o){var n=Ue(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return xe(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),t=i.call(this,e),Fe.add(Ae(t)),t}return t=a,(n=[{key:"open",value:function(e){Ie(Ue(a.prototype),"open",this).call(this),function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}(this,Fe,De).call(this,e)}}])&&Pe(t.prototype,n),a}(qe);function De(e){var t=e.querySelector(".galary__img"),n=t.offsetParent.querySelector(".galary__title"),r=this._popupElement.querySelector(".popup__img"),o=this._popupElement.querySelector(".popup__description");r.src=t.src,r.alt="фото "+n.textContent,o.textContent=n.textContent}function Ne(e){return(Ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ve(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Je(e,t,n){return(Je="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=$e(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function Ge(e,t){return(Ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function He(e,t){return!t||"object"!==Ne(t)&&"function"!=typeof t?ze(e):t}function ze(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $e(e){return($e=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ke(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function Qe(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,Ye(e,t,"get"))}function Xe(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,Ye(e,t,"set"),n),n}function Ye(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var Ze=new WeakMap,et=new WeakMap,tt=new WeakMap,nt=new WeakSet,rt=new WeakSet,ot=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ge(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=$e(r);if(o){var n=$e(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return He(this,e)});function a(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),n=i.call(this,e),rt.add(ze(n)),nt.add(ze(n)),Ze.set(ze(n),{writable:!0,value:void 0}),et.set(ze(n),{writable:!0,value:void 0}),tt.set(ze(n),{writable:!0,value:void 0}),Xe(ze(n),Ze,r),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;Je($e(a.prototype),"setEventListeners",this).call(this),Xe(this,et,this._popupElement.querySelector(".popup__form")),Qe(this,et).addEventListener("submit",(function(t){Ke(e,nt,it).call(e,t)}))}},{key:"close",value:function(){Je($e(a.prototype),"close",this).call(this),Qe(this,et).reset()}}])&&Ve(t.prototype,n),a}(qe);function it(e){e.preventDefault(),Qe(this,Ze).call(this,Ke(this,rt,at).call(this))}function at(){Xe(this,et,this._popupElement.querySelector(".popup__form"));var e={};return Xe(this,tt,Qe(this,et).querySelectorAll(".popup__form-text")),Qe(this,tt).forEach((function(t){e[t.name]=t.value})),e}function ut(e){return(ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function lt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ct(e,t,n){return(ct="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ht(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function st(e,t){return(st=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ft(e,t){return!t||"object"!==ut(t)&&"function"!=typeof t?pt(e):t}function pt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ht(e){return(ht=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function dt(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,yt(e,t,"get"))}function vt(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,yt(e,t,"set"),n),n}function yt(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var wt=new WeakMap,mt=new WeakMap,bt=new WeakMap,gt=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&st(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ht(r);if(o){var n=ht(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return ft(this,e)});function a(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),n=i.call(this,e),wt.set(pt(n),{writable:!0,value:void 0}),mt.set(pt(n),{writable:!0,value:void 0}),bt.set(pt(n),{writable:!0,value:void 0}),vt(pt(n),wt,r),n}return t=a,(n=[{key:"open",value:function(e){ct(ht(a.prototype),"open",this).call(this),vt(this,bt,e)}},{key:"setImgId",value:function(){return dt(this,bt).querySelector(".galary__img").id}},{key:"setEventListeners",value:function(){ct(ht(a.prototype),"setEventListeners",this).call(this),vt(this,mt,this._popupElement.querySelector(".popup__form")),dt(this,mt).addEventListener("submit",dt(this,wt))}},{key:"removeCard",value:function(){dt(this,bt).remove(),vt(this,bt,null)}}])&&lt(t.prototype,n),a}(qe),_t=document.querySelector(".popup_type_edit"),kt=document.querySelector(".popup__form_type_edit"),St=document.querySelector(".popup_type_add-card"),Et=document.querySelector(".profile__edit-btn"),Ot=document.querySelector(".profile__name"),Lt=document.querySelector(".profile__description"),Wt=document.querySelector(".profile__add-btn"),Ct=document.querySelector(".galary__grid"),Tt=document.querySelector(".popup__form_type_add-card"),qt=document.querySelector(".popup_type_img"),jt=document.querySelector(".popup__form-text_input_job"),Mt=document.querySelector(".popup__form-text_input_name"),Pt=document.querySelector(".popup_type_delete"),It=document.querySelector(".popup_type_avatar"),Rt=document.querySelector(".profile__avatar-overlay"),xt=document.querySelector(".profile__avatar"),At=document.querySelector(".popup__form_type_avatar"),Ut=(document.querySelector(".popup__form_type_delete"),{inputSelector:".popup__form-text",buttonClass:".popup__btn",inputErrorClass:"popup__form-text_state_error",errorClass:"popup__form-error_visible"});function Ft(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Bt=new ae({nameSelector:Ot,aboutSelector:Lt,avatarSelector:xt}),Dt=new ke({url:"https://mesto.nomoreparties.co/v1/cohort-25",headers:{authorization:"374fcf1a-996b-4e35-88d8-3be82638086e","Content-Type":"application/json"}});Promise.all([Dt.getUserInfo(),Dt.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Ft(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ft(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Bt.setUserInfo(o),Bt.setAvatar(o.avatar),Ht.rendererElement(i,o._id)})).catch((function(e){console.log(e)}));var Nt=new H(Ut,kt),Vt=new H(Ut,Tt),Jt=new H(Ut,At),Gt=new Be(qt);Gt.setEventListeners();var Ht=new he({renderer:function(e,t){Ht.addItem(zt(e,t))}},Ct),zt=function(e,t){var n=new O(e,"#galary__item",t,{handleCardClick:function(e){e.preventDefault(),Gt.open(r)},handleTrashBtn:function(){Qt.open(r)},addLike:function(){Dt.addLike(n.getImgId()).then((function(){n.addLike()})).catch((function(e){console.log(e)}))},removeLike:function(){Dt.removeLike(n.getImgId()).then((function(){n.removeLike()})).catch((function(e){console.log(e)}))}}),r=n.generateCard();return r},$t=new ot(St,{submitForm:function(e){$t.renderLoading(!0),Dt.addCard(e).then((function(e){Ht.addItem(zt(e,Bt.getUserInfo().id)),$t.close(),Vt.resetForm()})).catch((function(e){console.error(e)})).finally((function(){$t.renderLoading(!1,"Создать")}))}}),Kt=new ot(_t,{submitForm:function(e){Kt.renderLoading(!0),Dt.editUserInfo(e).then((function(e){Bt.setUserInfo(e),Kt.close(),Nt.resetForm()})).catch((function(e){console.log(e)})).finally((function(){Kt.renderLoading(!1,"Сохранить")}))}}),Qt=new gt(Pt,{submitForm:function(e){Qt.renderLoading(!0),e.preventDefault(),Dt.deleteCard(Qt.setImgId()).then((function(){Qt.removeCard(),Qt.close()})).catch((function(e){console.log(e)})).finally((function(){Qt.renderLoading(!1,"Да")}))}}),Xt=new ot(It,{submitForm:function(e){Xt.renderLoading(!0),Dt.changeAvatar(e).then((function(e){Bt.setAvatar(e.avatar),Xt.close(),Jt.resetForm()})).catch((function(e){console.error(e)})).finally((function(){Xt.renderLoading(!1,"Сохранить")}))}});Nt.enableValidation(),Vt.enableValidation(),Jt.enableValidation(),$t.setEventListeners(),Kt.setEventListeners(),Qt.setEventListeners(),Xt.setEventListeners(),Wt.addEventListener("click",(function(){$t.open()})),Et.addEventListener("click",(function(){Mt.value=Bt.getUserInfo().name,jt.value=Bt.getUserInfo().about,Kt.open()})),Rt.addEventListener("click",(function(){Xt.open()}))})();