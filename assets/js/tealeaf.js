/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map

/*!
 * Copyright (c) 2022 Acoustic, L.P. All rights reserved.
 *
 * NOTICE: This file contains material that is confidential and proprietary to
 * Acoustic, L.P. and/or other developers. No license is granted under any intellectual or
 * industrial property rights of Acoustic, L.P. except as may be provided in an agreement with
 * Acoustic, L.P. Any unauthorized copying or distribution of content from this file is
 * prohibited.
 *
 * @version 6.2.0.2010
 * @flags w3c,NDEBUG
 */
if(window.TLT){throw"Attempting to recreate TLT. Library may be included more than once on the page."}window.TLT=(function(){var d,n,a,m,H,B,r,c,k,D,z,v=false,P;function q(R){if(window.TLT&&R.persisted){TLT.terminationReason="";TLT.init()}}function f(Y,R,S,Z){var W=null,aa=null,U=TLT.getModule("replay"),X=TLT.getModule("TLCookie"),ab=TLT.getModule("performance"),T=null,V=P.getOriginAndPath();if(!R||typeof R!=="string"){return}if(!S||typeof S!=="string"){S=""}aa={type:2,screenview:{type:Y,name:R,originalUrl:V.path,url:TLT.normalizeUrl("",V.path,2),host:V.origin,referrer:S,title:document.title,queryParams:V.queryParams}};if(Y==="LOAD"){T={type:"screenview_load",name:R}}else{if(Y==="UNLOAD"){T={type:"screenview_unload",name:R}}}if(T&&U){W=U.onevent(T)}if(W){aa.dcid=W}if(Y==="LOAD"||Y==="UNLOAD"){B.post("",aa)}if(T&&X){X.onevent(T)}if(T&&ab){ab.onevent(T)}if(T&&c){c.onevent(T)}}var i=(new Date()).getTime(),y,G,I={},u={},o={},l=false,Q=null,w=(function(){var R,T=[];function S(Y){var V=k.framesBlacklist,X,W;R=R||[];Y=Y||null;if(typeof V!=="undefined"&&V.length>0){for(W=0;W<V.length;W+=1){X=a.queryAll(V[W],Y);if(X&&X.length>0){R=R.concat(X)}}T=T.concat(a.queryAll("iframe",Y))}}function U(V){if(P.indexOf(T,V)<0){S(V.ownerDocument)}return P.indexOf(R,V)>-1}U.clearCache=function(){R=null};return U}()),K=null,g={config:["getConfig","updateConfig","getCoreConfig","updateCoreConfig","getModuleConfig","updateModuleConfig","getServiceConfig","updateServiceConfig"],queue:["post","setAutoFlush","flushAll"],browserBase:["getXPathFromNode","processDOMEvent"]},E=(function(){var R={};return{normalizeModuleEvents:function(W,U,Y,T){var S=R[W],X=false,V=false;Y=Y||t._getLocalTop();if(S){return}R[W]={loadFired:false,pageHideFired:false};P.forEach(U,function(Z){switch(Z.name){case"load":X=true;U.push(P.mixin(P.mixin({},Z),{name:"pageshow"}));break;case"unload":V=true;U.push(P.mixin(P.mixin({},Z),{name:"pagehide"}));U.push(P.mixin(P.mixin({},Z),{name:"beforeunload"}));break;case"change":if(P.isLegacyIE&&t.getFlavor()==="w3c"){U.push(P.mixin(P.mixin({},Z),{name:"propertychange"}))}break}});if(!X&&!V){delete R[W];return}R[W].silentLoad=!X;R[W].silentUnload=!V;if(!X){U.push({name:"load",target:Y})}if(!V){U.push({name:"unload",target:Y})}},canPublish:function(S,U){var T;if(R.hasOwnProperty(S)===false){return true}T=R[S];switch(U.type){case"load":T.pageHideFired=false;T.loadFired=true;return !T.silentLoad;case"pageshow":T.pageHideFired=false;U.type="load";return !T.loadFired&&!T.silentLoad;case"pagehide":U.type="unload";T.loadFired=false;T.pageHideFired=true;return !T.silentUnload;case"unload":case"beforeunload":U.type="unload";T.loadFired=false;return !T.pageHideFired&&!T.silentUnload}return true},isUnload:function(S){return typeof S==="object"?(S.type==="unload"||S.type==="beforeunload"||S.type==="pagehide"):false}}}()),O={},s={},b={},F=[],L=function(){},j=null,A=true,p=function(){},x=false,M=(function(){var R=window.location,T=R.pathname,S=R.hash,U="";return function(){var X=R.pathname,V=R.hash,W=U;if(X!==T){W=TLT.normalizeUrl("",X+V,2)}else{if(V!==S){W=TLT.normalizeUrl("",V,2)}}if(W!==U){if(U){f("UNLOAD",U)}f("LOAD",W);U=W;T=X;S=V}}}()),C=function(Y,W){var V,R,T,X,S,U=null;if(!Y||!W){return U}for(V=0,R=Y.length;V<R;V+=1){T=Y[V];switch(typeof T){case"object":X=new RegExp(T.regex,T.flags);S=X.exec(W);if(S){U=S[0]}break;case"string":if(W.indexOf(T)!==-1){U=T}break;default:break}}return U},N=function(T,aa){var U,S,V,Z=false,R=k.blockedElements,X,Y,W;if(!R||!R.length){N=function(){return false};return Z}if(!T||!T.nodeType){return Z}aa=aa||P.getDocument(T);for(U=0,V=R.length;U<V&&!Z;U+=1){Y=a.queryAll(R[U],aa);for(S=0,W=Y.length;S<W&&!Z;S+=1){X=Y[S];Z=X.contains?X.contains(T):X===T}}return Z},J=function(S){var R=false,T=["intent:","mailto:","sms:","tel:"];if(S&&P.getTagName(S)==="a"&&T.indexOf(S.protocol)!==-1){R=true}return R},e=function(){var R=null,T="tltTabId";try{R=sessionStorage.getItem(T);if(!R){R=P.getRandomString(4);sessionStorage.setItem(T,R)}}catch(S){}return R},t={getTLTSessionCookieInfo:function(){return I},_loadGlobalsForUnitTesting:function(R){P=R.utils;d=R.getService("ajax");n=R.getService("browserBase");a=R.getService("browser");m=R.getService("config");H=R.getService("domCapture");B=R.getService("queue");r=R.getService("serializer");c=R.getModule("dataLayer");k=m?m.getCoreConfig():null},getStartTime:function(){return i},getPageId:function(){return y||"#"},getTabId:function(){return G},isMousemovementDetected:function(){return v},setSessionCookieInfo:function(R,T,S){I.tltCookieName=T;I.tltCookieValue=S},getLibraryVersion:function(){return"6.2.0.2010"},getCurrentWebEvent:function(){return O},normalizeUrl:function(U,T,V){var S,R;S=this.getCoreConfig();if(S.normalization&&S.normalization.urlFunction){R=S.normalization.urlFunction;if(typeof R==="string"){R=P.access(R)}try{T=R(T,V)}catch(W){}}return T},getCurrentOffset:function(){return this.getService("message").getCurrentOffset()},init:function(S,T){var R;P=this.utils;if(P.isLegacyIE){return}j=T;if(!A){throw"init must only be called once!"}if(!S&&!this.config){throw"missing configuration."}S=S||this.config;this.config=S;A=false;y="P."+P.getRandomString(28);G=e();R=function(U){U=U||window.event||{};if(U.type==="load"||document.readyState!=="loading"){if(document.removeEventListener){document.removeEventListener("DOMContentLoaded",R,false);window.removeEventListener("load",R,false)}else{document.detachEvent("onreadystatechange",R);window.detachEvent("onload",R)}L(S,T)}};if(document.readyState==="complete"||(document.readyState==="interactive"&&!P.isIE)){setTimeout(R)}else{if(document.addEventListener){document.addEventListener("DOMContentLoaded",R,false);window.addEventListener("load",R,false)}else{document.attachEvent("onreadystatechange",R);window.attachEvent("onload",R)}}},isInitialized:function(){return l},getState:function(){return Q},destroy:function(T,R){var S="",U="",W=null,X=null,V=null,aa=false;if(A){return false}this.stopAll();if(!T){for(S in s){if(s.hasOwnProperty(S)){U=S.split("|")[0];W=s[S].target;aa=s[S].delegateTarget||undefined;a.unsubscribe(U,W,this._publishEvent,aa)}}if(z){a.unsubscribe("mousemove",document,z);z=null}}for(X in o){if(o.hasOwnProperty(X)){V=o[X].instance;if(V&&typeof V.destroy==="function"){V.destroy()}o[X].instance=null}}w.clearCache();s={};O={};F=[];l=false;A=true;Q="destroyed";TLT.terminationReason=R||Q;try{sessionStorage.setItem("tl.TR",TLT.terminationReason);sessionStorage.setItem("tl.PU",this.normalizeUrl("",location.href))}catch(Z){}if(typeof j==="function"){try{j("destroyed")}catch(Y){}}if(!D){window.addEventListener("pageshow",q);D=true}},_updateModules:function(T){var V=null,S=null,R=true;if(k&&k.modules){try{for(S in k.modules){if(k.modules.hasOwnProperty(S)){V=k.modules[S];if(u.hasOwnProperty(S)){if(V.enabled===false){this.stop(S);continue}this.start(S);if(V.events){this._registerModuleEvents(S,V.events,T)}}}}this._registerModuleEvents.clearCache()}catch(U){t.destroy(false,"_updateModules: "+U.message);R=false}}else{R=false}return R},rebind:function(R){t._updateModules(R)},getSessionData:function(){if(!t.isInitialized()){return}var V=null,R=null,T,U,S;if(!k||!k.sessionDataEnabled){return null}R=k.sessionData||{};T=R.sessionQueryName;if(T){U=P.getQueryStringValue(T,R.sessionQueryDelim)}else{T=R.sessionCookieName;if(T){U=P.getCookieValue(T)}else{S=TLT.getTLTSessionCookieInfo();T=S.tltCookieName;U=S.tltCookieValue}}if(T&&U){V=V||{};V.tltSCN=T;V.tltSCV=U;V.tltSCVNeedsHashing=!!R.sessionValueNeedsHashing}return V},logGeolocation:function(R){var S;if(!t.isInitialized()){return}if(!R||!R.coords){return}S={type:13,geolocation:{lat:P.getValue(R,"coords.latitude",0),"long":P.getValue(R,"coords.longitude",0),accuracy:Math.ceil(P.getValue(R,"coords.accuracy",0))}};B.post("",S)},logCustomEvent:function(T,R){if(!t.isInitialized()){return}var S=null;if(!T||typeof T!=="string"){T="CUSTOM"}R=R||{};S={type:5,customEvent:{name:T,data:R}};B.post("",S)},logExceptionEvent:function(U,S,R){if(!t.isInitialized()){return}var T=null;if(!U||typeof U!=="string"){return}if(S){S=t.normalizeUrl("",S,6)}S=S||"";R=R||-1;T={type:6,exception:{description:U,url:S,line:R}};B.post("",T)},logFormCompletion:function(R,T){if(!t.isInitialized()){return}var S={type:15,formCompletion:{submitted:!!R,valid:(typeof T==="boolean"?T:null)}};B.post("",S)},logDataLayer:function(R){var S;if(!t.isInitialized()){return}if(c){if(!R||typeof R==="object"){S={type:"logDataLayer",data:R};c.onevent(S)}}else{return}},logScreenviewLoad:function(T,S,R){if(!t.isInitialized()){return}f("LOAD",T,S,R)},logScreenviewUnload:function(R){if(!t.isInitialized()){return}f("UNLOAD",R)},logDOMCapture:function(R,U){var V=null,T,S,W;if(!this.isInitialized()){return V}if(P.isLegacyIE){return V}if(H){R=R||window.document;S=this.getServiceConfig("domCapture");U=P.mixin({},S.options,U);T=H.captureDOM(R,U);if(T){V=U.dcid||("dcid-"+P.getSerialNumber()+"."+(new Date()).getTime());T.dcid=V;T.eventOn=!!U.eventOn;W={type:12,domCapture:T};if(U.timeoutExpired){W.domCapture.timeout=true}B.post("",W);if(U.qffd!==false&&!x&&W.domCapture.fullDOM){B.flush();x=true}}}return V},performDOMCapture:function(T,R,S){return this.logDOMCapture(R,S)},performFormCompletion:function(S,R,T){return this.logFormCompletion(R,T)},_bridgeCallback:function(S){var R=b[S];if(R&&R.enabled){return R}return null},logScreenCapture:function(){if(!t.isInitialized()){return}var R=t._bridgeCallback("screenCapture");if(R!==null){R.cbFunction()}},enableTealeafFramework:function(){if(!t.isInitialized()){return}var R=t._bridgeCallback("enableTealeafFramework");if(R!==null){R.cbFunction()}},disableTealeafFramework:function(){if(!t.isInitialized()){return}var R=t._bridgeCallback("disableTealeafFramework");if(R!==null){R.cbFunction()}},startNewTLFSession:function(){if(!t.isInitialized()){return}var R=t._bridgeCallback("startNewTLFSession");if(R!==null){R.cbFunction()}},currentSessionId:function(){if(!t.isInitialized()){return}var S,R=t._bridgeCallback("currentSessionId");if(R!==null){S=R.cbFunction()}return S},defaultValueForConfigurableItem:function(R){if(!t.isInitialized()){return}var T,S=t._bridgeCallback("defaultValueForConfigurableItem");if(S!==null){T=S.cbFunction(R)}return T},valueForConfigurableItem:function(R){if(!t.isInitialized()){return}var T,S=t._bridgeCallback("valueForConfigurableItem");if(S!==null){T=S.cbFunction(R)}return T},setConfigurableItem:function(S,U){if(!t.isInitialized()){return}var R=false,T=t._bridgeCallback("setConfigurableItem");if(T!==null){R=T.cbFunction(S,U)}return R},addAdditionalHttpHeader:function(S,U){if(!t.isInitialized()){return}var R=false,T=t._bridgeCallback("addAdditionalHttpHeader");if(T!==null){R=T.cbFunction(S,U)}return R},logCustomEventBridge:function(T,U,S){if(!t.isInitialized()){return}var R=false,V=t._bridgeCallback("logCustomEventBridge");if(V!==null){R=V.cbFunction(T,U,S)}return R},registerBridgeCallbacks:function(Z){var W,U,X,T=null,V,ab,S,R,aa=TLT.utils;if(!Z){return false}if(Z.length===0){b={};return false}try{for(W=0,X=Z.length;W<X;W+=1){T=Z[W];if(typeof T==="object"&&T.cbType&&T.cbFunction){V={enabled:T.enabled,cbFunction:T.cbFunction,cbOrder:T.order||0};if(aa.isUndefOrNull(b[T.cbType])){if(V.enabled){b[T.cbType]=V}}else{if(!aa.isArray(b[T.cbType])){b[T.cbType]=[b[T.cbType]]}ab=b[T.cbType];for(U=0,R=false,S=ab.length;U<S;U+=1){if(ab[U].cbOrder===V.cbOrder&&ab[U].cbFunction===V.cbFunction){R=true;if(!V.enabled){ab.splice(U,1);if(!ab.length){delete b[T.cbType]}}}else{if(ab[U].cbOrder>V.cbOrder){break}}}if(!R){if(V.enabled){ab.splice(U,0,V)}}}}}}catch(Y){return false}return true},registerMutationCallback:function(R,T){var S;if(!R||typeof R!=="function"){return false}if(T){S=F.indexOf(R);if(S===-1){F.push(R)}}else{S=F.indexOf(R);if(S!==-1){F.splice(S,1)}}return true},invokeMutationCallbacks:function(T){var U,R,Y,X,W,V=[],S=[];if(F.length===0){return}if(Map){W=new Map()}else{W=new P.WeakMap()}for(U=0;U<T.length;U++){X=T[U].target;if(X){Y=P.getDocument(X);if(W.get(Y)===undefined){if(Y.host){S.push(Y)}else{V.push(Y)}W.set(Y,true)}}}W.clear();for(U=0;U<F.length;U++){R=F[U];R(T,V,S)}},redirectQueue:function(U){var X,W,T,S,R,Y,V;if(!U||!U.length){return U}S=b.messageRedirect;if(!S){return U}if(!P.isArray(S)){R=[S]}else{R=S}for(W=0,Y=R.length;W<Y;W+=1){S=R[W];if(S&&S.enabled){for(X=0,T=U.length;X<T;X+=1){V=S.cbFunction(r.serialize(U[X]),U[X]);if(V&&typeof V==="object"){U[X]=V}else{U.splice(X,1);X-=1;T=U.length}}}}return U},_hasSameOrigin:function(S){var R=false;try{R=S.document.location.host===document.location.host&&S.document.location.protocol===document.location.protocol;if(!R){R=S.document.domain===document.domain}return R}catch(T){}return false},provideRequestHeaders:function(){var S=null,R=b.addRequestHeaders;if(R&&R.enabled){S=R.cbFunction()}return S},_registerModuleEvents:(function(){var T,V=0,U=function(Z,Y,X){if(Z==="window"){return Y}if(Z==="document"){return X}return Z};function W(X,ad,af){var ae=P.getDocument(af),Z=t._getLocalTop(),Y=P.isIFrameDescendant(af),ac,ab,aa;af=af||ae;E.normalizeModuleEvents(X,ad,Z,ae);if(Y){ac=n.ElementData.prototype.examineID(af).id;if(typeof ac==="string"){ac=ac.slice(0,ac.length-1);for(ab in s){if(s.hasOwnProperty(ab)){for(aa=0;aa<s[ab].length;aa+=1){if(X===s[ab][aa]){if(ab.indexOf(ac)!==-1){delete s[ab];break}}}}}}}P.forEach(ad,function(ag){var ai=U(ag.target,Z,ae)||ae,ah="";if(ag.recurseFrames!==true&&Y){return}if(typeof ai==="string"){P.forEach(a.queryAll(ai,af),function(aj){var ak=T.get(aj);if(!ak){ak=n.ElementData.prototype.examineID(aj);T.set(aj,ak)}ah=ag.name+"|"+ak.id+ak.idType;if(P.indexOf(s[ah],X)!==-1){return}s[ah]=s[ah]||[];s[ah].push(X);s[ah].target=aj;a.subscribe(ag.name,aj,t._publishEvent)})}else{ah=t._buildToken4bubbleTarget(ag.name,ai,typeof ag.target==="undefined");if(!s.hasOwnProperty(ah)){s[ah]=[X];a.subscribe(ag.name,ai,t._publishEvent)}else{if(P.indexOf(s[ah],X)===-1){s[ah].push(X)}}}if(ah!==""){if(typeof ai!=="string"){s[ah].target=ai}}})}function S(X){var Y=P.getIFrameWindow(X);return(Y!==null)&&t._hasSameOrigin(Y)&&(Y.document!==null)&&Y.document.readyState==="complete"&&Y.document.body.innerHTML!==""}function R(aa,Y,ae){ae=ae||t._getLocalTop().document;T=T||new P.WeakMap();W(aa,Y,ae);if(aa!=="performance"){var ad=null,Z=null,X=a.queryAll("iframe, frame",ae),ac,ab;for(ac=0,ab=X.length;ac<ab;ac+=1){ad=X[ac];if(w(ad)){continue}if(S(ad)){Z=P.getIFrameWindow(ad);t._registerModuleEvents(aa,Y,Z.document);H.observeWindow(Z);continue}V+=1;(function(ah,ag,ai){var af=null,aj={moduleName:ah,moduleEvents:ag,hIFrame:ai,_registerModuleEventsDelayed:function(){var ak=null;if(!w(ai)){ak=P.getIFrameWindow(ai);if(t._hasSameOrigin(ak)){t._registerModuleEvents(ah,ag,ak.document);H.observeWindow(ak)}}V-=1;if(!V){t._publishEvent({type:"loadWithFrames",custom:true})}}};P.addEventListener(ai,"load",function(){aj._registerModuleEventsDelayed()});if(P.isLegacyIE&&S(ai)){af=P.getIFrameWindow(ai);P.addEventListener(af.document,"readystatechange",function(){aj._registerModuleEventsDelayed()})}}(aa,Y,ad))}}}R.clearCache=function(){if(T){T.clear();T=null}};return R}()),_buildToken4currentTarget:function(S){var T=S.nativeEvent?S.nativeEvent.currentTarget:null,R=T?n.ElementData.prototype.examineID(T):{id:S.target?S.target.id:null,idType:S.target?S.target.idType:-1};return S.type+"|"+R.id+R.idType},_buildToken4delegateTarget:function(R,T,S){return R+"|"+T+"|"+S},_buildToken4bubbleTarget:function(S,X,W,aa){var V=t._getLocalTop(),R,ab=function(ac){var ad=null;if(t._hasSameOrigin(R.parent)){P.forEach(a.queryAll("iframe, frame",R.parent.document),function(ae){var af=null;if(!w(ae)){af=P.getIFrameWindow(ae);if(t._hasSameOrigin(af)&&af.document===ac){ad=ae}}})}return ad},Y=P.getDocument(X),Z=null,U,T=S;if(Y){R=Y.defaultView||Y.parentWindow}if(X===window||X===window.window){T+="|null-2|window"}else{if(W&&R&&t._hasSameOrigin(R.parent)&&typeof Y!=="undefined"&&V.document!==Y){Z=ab(Y);if(Z){U=n.ElementData.prototype.examineID(Z);T+="|"+U.xPath+"-2"}}else{T+="|null-2|document"}}return T},_reinitConfig:function(){t._updateModules()},_publishEvent:function(R){var S=null,U=null,X=(R.delegateTarget&&R.data)?R.data:t._buildToken4currentTarget(R),V=null,Y,Z,ab,T=null,ac=false,ad=false,af=R.delegateTarget||null,ae,W;O=R;if(R.type.match(/^(click|change|blur|mouse|touch)/)){p();B.resetFlushTimer()}ae=P.getValue(k,"screenviewAutoDetect",true);if(ae){M()}if((R.type==="load"||R.type==="pageshow")&&!R.nativeEvent.customLoad){O={};return}if(R.type==="click"){K=R.target.element}if(R.type==="beforeunload"){ac=false;W=(P.getTagName(K)==="a")?K:document.activeElement;if(W){if(J(W)){ac=true}else{P.forEach(k.ieExcludedLinks,function(ag){var ai,ah,aj=a.queryAll(ag);for(ai=0,ah=aj?aj.length:0;ai<ah;ai+=1){if(aj[ai]&&aj[ai]===K){ac=true;break}}})}}if(ac){O={};return}}if(E.isUnload(R)){Q="unloading"}if(R.type==="change"&&P.isLegacyIE&&t.getFlavor()==="w3c"&&(R.target.element.type==="checkbox"||R.target.element.type==="radio")){O={};return}if(R.type==="propertychange"){if(R.nativeEvent.propertyName==="checked"&&(R.target.element.type==="checkbox"||(R.target.element.type==="radio"&&R.target.element.checked))){R.type="change";R.target.type="INPUT"}else{O={};return}}if(R.target&&N(R.target.element)){O={};return}if(!s.hasOwnProperty(X)){if(R.hasOwnProperty("nativeEvent")){ab=R.nativeEvent.currentTarget||R.nativeEvent.target}X=t._buildToken4bubbleTarget(R.type,ab,true,af)}if(s.hasOwnProperty(X)){V=s[X];for(Y=0,Z=V.length;Y<Z;Y+=1){S=V[Y];U=t.getModule(S);T=P.mixin({},R);if(U&&t.isStarted(S)&&typeof U.onevent==="function"){ad=E.canPublish(S,T);if(ad){try{U.onevent(T)}catch(aa){}}}}}if(T&&T.type==="unload"&&ad){t.destroy(false,T.type)}O={}},_getLocalTop:function(){return window.window},addModule:function(R,S){u[R]={creator:S,instance:null,context:null,messages:[]};if(this.isInitialized()){this.start(R)}},getModule:function(R){if(u[R]&&u[R].instance){return u[R].instance}return null},removeModule:function(R){this.stop(R);delete u[R]},isStarted:function(R){return u.hasOwnProperty(R)&&u[R].instance!==null},start:function(S){var T=u[S],R=null;if(T&&T.instance===null){T.context=new TLT.ModuleContext(S,this);R=T.instance=T.creator(T.context);if(typeof R.init==="function"){R.init()}}},startAll:function(){var R=null;for(R in u){if(u.hasOwnProperty(R)){this.start(R)}}},stop:function(S){var T=u[S],R=null;if(T&&T.instance!==null){R=T.instance;if(typeof R.destroy==="function"){R.destroy()}T.instance=T.context=null}},stopAll:function(){var R=null;for(R in u){if(u.hasOwnProperty(R)){this.stop(R)}}},addService:function(S,R){o[S]={creator:R,instance:null}},getService:function(R){if(o.hasOwnProperty(R)){if(!o[R].instance){try{o[R].instance=o[R].creator(this);if(typeof o[R].instance.init==="function"){o[R].instance.init()}}catch(S){P.clog("UIC terminated due to error when instanciating the "+R+" service.");throw S}if(typeof o[R].instance.getServiceName!=="function"){o[R].instance.getServiceName=function(){return R}}}return o[R].instance}return null},removeService:function(R){delete o[R]},broadcast:function(S){var T,R;if(S&&typeof S==="object"){for(T in u){if(u.hasOwnProperty(T)){R=u[T];if(P.indexOf(R.messages,S.type)>-1){if(typeof R.instance.onmessage==="function"){R.instance.onmessage(S)}}}}}},listen:function(R,T){var S=null;if(this.isStarted(R)){S=u[R];if(P.indexOf(S.messages,T)===-1){S.messages.push(T)}}},fail:function(T,S,R){T="UIC FAILED. "+T;try{t.destroy(!!R,T)}catch(U){P.clog(T)}throw new t.UICError(T,S)},UICError:(function(){function R(S,T){this.message=S;this.code=T}R.prototype=new Error();R.prototype.name="UICError";R.prototype.constructor=R;return R}()),getFlavor:function(){return"w3c"},isCrossOrigin:function(T,S){var U=false,V,R;S=S||window.location.origin;if(!T||!S){return U}R=T.match(/^\/\//);if(T.match(/^\//)&&!R){U=false}else{if(R||T.indexOf("://")!==-1){if(R){V=S.indexOf("://");if(V!==-1){S=S.substring(V+1)}}if(T.length<S.length){U=true}else{U=(S!==T.substring(0,S.length))||(T.length>S.length&&T.charAt(S.length)!=="/")}}else{U=false}}return U}};p=function(){var T=null,S=P.getValue(k,"inactivityTimeout",600000);if(!S){p=function(){};return}function R(){t.destroy(false,"inactivity")}p=function(){if(T){clearTimeout(T);T=null}T=setTimeout(R,S)};p()};function h(V){var R,S,U,T;if(!localStorage||!V){return}U=localStorage.getItem(V);if(U){S=U.split("|");R=parseInt(S[0],10);if(Date.now()>R){localStorage.removeItem(V)}else{T=S[1]}}return T}L=function(S,ag){var T,ad,Y,U,ah,R,W,af=null,X,V,Z,ae,aa;if(l){return}if(TLT&&TLT.replay){return}m=t.getService("config");m.updateConfig(S);k=m.getCoreConfig();V=C(k.blockedUserAgents,navigator.userAgent);if(V){TLT.terminationReason="blockedUA: "+V;return}d=t.getService("ajax");P.browserBaseService=n=t.getService("browserBase");P.browserService=a=t.getService("browser");H=t.getService("domCapture");B=t.getService("queue");r=t.getService("serializer");T=m.getModuleConfig("TLCookie")||{};U=T.sessionizationCookieName||"TLTSID";ah=P.getCookieValue("TLTSID");if(ah==="DND"){if(Q!=="destroyed"){t.destroy(false,"killswitch")}return}ah=P.getCookieValue(U)||h(U);if(!ah){U=T.wcxCookieName||"WCXSID";ah=P.getCookieValue(U)}if(!t._updateModules()){if(Q!=="destroyed"){t.destroy(false,"modules init")}return}c=t.getModule("dataLayer");if(m.subscribe){m.subscribe("configupdated",t._reinitConfig)}l=true;Q="loaded";try{if(typeof TLFExtensionNotify==="function"){TLFExtensionNotify("Initialized")}}catch(ac){}ad=t.getServiceConfig("queue");Y=ad.queues||[];if(P.isLegacyIE||P.isIE9){af=P.getOriginAndPath().origin}for(X=0;X<Y.length;X+=1){if(af&&t.isCrossOrigin(Y[X].endpoint,af)){t.setAutoFlush(false);t.destroy(false,"CORS not supported");return}if(!ah&&T.tlAppKey){R=Y[X].endpoint;W=Y[X].killswitchURL||(R.match("collectorPost")?R.replace("collectorPost","switch/"+T.tlAppKey):null);if(W){d.sendRequest({type:"GET",url:W,async:true,timeout:5000,oncomplete:function(ai){if(ai.responseText==="0"||ai.data===0){t.setAutoFlush(false);P.setCookie("TLTSID","DND");t.destroy(false,"killswitch")}}})}}if(Y[X].checkEndpoint&&!ad.asyncReqOnUnload){ad.asyncReqOnUnload=true;d.sendRequest({oncomplete:function(ai){if(ai.success){ad.asyncReqOnUnload=false}},timeout:Y[X].endpointCheckTimeout||3000,url:Y[X].endpoint,headers:{"X-PageId":y,"X-Tealeaf-SaaS-AppKey":T.tlAppKey,"X-Tealeaf-EndpointCheck":true},async:true,error:function(ai){if(ai.success){return}ad.endpointCheckFailed=true}})}}aa=function(ak){var aj,ai;aj={type:"load",target:window.window,srcElement:window.window,currentTarget:window.window,bubbles:true,cancelBubble:false,cancelable:true,timeStamp:+new Date(),customLoad:true};ai=new n.WebEvent(aj);t._publishEvent(ai);if(ak){a.unsubscribe(Z,ae,aa)}};if(k.screenviewLoadEvent){Z=k.screenviewLoadEvent.name;ae=k.screenviewLoadEvent.target||window;a.subscribe(Z,ae,aa)}else{aa()}if(t.isInitialized()){Q="initialized";p();z=function(ai){if(ai.type==="mousemove"){v=true}a.unsubscribe("mousemove",document,z);z=null};a.subscribe("mousemove",document,z,{once:true})}if(typeof j==="function"){try{j(Q)}catch(ab){P.clog("Error in callback.",ab)}}};(function(){var S=null,T,R;for(S in g){if(g.hasOwnProperty(S)){for(T=0,R=g[S].length;T<R;T+=1){(function(V,U){t[U]=function(){var W=this.getService(V);if(W){return W[U].apply(W,arguments)}}}(S,g[S][T]))}}}}());return t}());(function(){var a=window.navigator.userAgent.toLowerCase(),k=(a.indexOf("msie")!==-1||a.indexOf("trident")!==-1),b=(function(){var l=!!window.performance;return(k&&(!l||document.documentMode<9))}()),e=(function(){return(k&&document.documentMode===9)}()),f=(a.indexOf("android")!==-1),h=/(ipad|iphone|ipod)/.test(a),c=(a.indexOf("opera mini")!==-1),g=(a.indexOf("chrome")===-1)&&(a.indexOf("safari")!==-1),j=1,d={"a:":"link","button:button":"button","button:submit":"button","input:button":"button","input:checkbox":"checkBox","input:color":"colorPicker","input:date":"datePicker","input:datetime":"datetimePicker","input:datetime-local":"datetime-local","input:email":"emailInput","input:file":"fileInput","input:image":"button","input:month":"month","input:number":"numberPicker","input:password":"textBox","input:radio":"radioButton","input:range":"slider","input:reset":"button","input:search":"searchBox","input:submit":"button","input:tel":"tel","input:text":"textBox","input:time":"timePicker","input:url":"urlBox","input:week":"week","select:":"selectList","select:select-one":"selectList","textarea:":"textBox","textarea:textarea":"textBox"},i={isIE:k,isLegacyIE:b,isIE9:e,isAndroid:f,isLandscapeZeroDegrees:false,isiOS:h,isOperaMini:c,isSafari:g,isUndefOrNull:function(l){return typeof l==="undefined"||l===null},isArray:function(l){return !!(l&&Object.prototype.toString.call(l)==="[object Array]")},getSerialNumber:function(){var l;l=j;j+=1;return l},getRandomString:function(q,p){var o,n,l="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",m="";if(!q){return m}if(typeof p!=="string"){p=l}for(o=0,n=p.length;o<q;o+=1){m+=p.charAt(Math.floor(Math.random()*n))}return m},getValue:function(q,p,m){var o,l,n;m=typeof m==="undefined"?null:m;if(!q||typeof q!=="object"||typeof p!=="string"){return m}n=p.split(".");for(o=0,l=n.length;o<l;o+=1){if(this.isUndefOrNull(q)||typeof q[n[o]]==="undefined"){return m}q=q[n[o]]}return q},indexOf:function(o,n){var m,l;if(o&&o.indexOf){return o.indexOf(n)}if(o&&o instanceof Array){for(m=0,l=o.length;m<l;m+=1){if(o[m]===n){return m}}}return -1},forEach:function(p,o,n){var m,l;if(!p||!p.length||!o||!o.call){return}for(m=0,l=p.length;m<l;m+=1){o.call(n,p[m],m,p)}},some:function(p,o){var m,l,n=false;for(m=0,l=p.length;m<l;m+=1){n=o(p[m],m,p);if(n){return n}}return n},convertToArray:function(n){var o=0,m=n.length,l=[];while(o<m){l.push(n[o]);o+=1}return l},mixin:function(p){var o,n,m,l;for(m=1,l=arguments.length;m<l;m+=1){n=arguments[m];for(o in n){if(Object.prototype.hasOwnProperty.call(n,o)){p[o]=n[o]}}}return p},extend:function(l,m,n){var o="";for(o in n){if(Object.prototype.hasOwnProperty.call(n,o)){if(l&&Object.prototype.toString.call(n[o])==="[object Object]"){if(typeof m[o]==="undefined"){m[o]={}}this.extend(l,m[o],n[o])}else{m[o]=n[o]}}}return m},clone:function(m){var n,l;if(null===m||"object"!==typeof m){return m}if(m instanceof Object){n=(Object.prototype.toString.call(m)==="[object Array]")?[]:{};for(l in m){if(Object.prototype.hasOwnProperty.call(m,l)){n[l]=this.clone(m[l])}}return n}},parseVersion:function(n){var o,l,m=[];if(!n||!n.length){return m}m=n.split(".");for(o=0,l=m.length;o<l;o+=1){m[o]=/^[0-9]+$/.test(m[o])?parseInt(m[o],10):m[o]}return m},isEqual:function(n,m){var o,p,r,q,l;if(n===m){return true}if(typeof n!==typeof m){return false}if(n instanceof Object&&m instanceof Object){if(Object.prototype.toString.call(n)==="[object Array]"&&Object.prototype.toString.call(m)==="[object Array]"){if(n.length!==m.length){return false}for(o=0,l=n.length;o<l;o+=1){if(!this.isEqual(n[o],m[o])){return false}}return true}if(Object.prototype.toString.call(n)==="[object Object]"&&Object.prototype.toString.call(m)==="[object Object]"){for(o=0;o<2;o+=1){for(r in n){if(n.hasOwnProperty(r)){if(!m.hasOwnProperty(r)){return false}p=this.isEqual(n[r],m[r]);if(!p){return false}}}q=n;n=m;m=q}return true}}return false},calculateRelativeXY:function(n){if(i.isUndefOrNull(n)||i.isUndefOrNull(n.x)||i.isUndefOrNull(n.y)||i.isUndefOrNull(n.width)||i.isUndefOrNull(n.height)){return"0.5,0.5"}var m=Math.abs(n.x/n.width).toFixed(4),l=Math.abs(n.y/n.height).toFixed(4);m=m>1||m<0?0.5:m;l=l>1||l<0?0.5:l;return m+","+l},createObject:(function(){var l=null,m=null;if(typeof Object.create==="function"){l=Object.create}else{m=function(){};l=function(n){if(typeof n!=="object"&&typeof n!=="function"){throw new TypeError("Object prototype need to be an object!")}m.prototype=n;return new m()}}return l}()),access:function(q,o){var p=o||window,m,n,l;if(typeof q!=="string"||typeof p!=="object"){return}m=q.split(".");for(n=0,l=m.length;n<l;n+=1){if(n===0&&m[n]==="window"){continue}if(!Object.prototype.hasOwnProperty.call(p,m[n])){return}p=p[m[n]];if(n<(l-1)&&!(p instanceof Object)){return}}return p},isNumeric:function(l){var m=false;if(i.isUndefOrNull(l)||!(/\S/.test(l))){return m}m=!isNaN(l*2);return m},isUpperCase:function(l){return l===l.toUpperCase()&&l!==l.toLowerCase()},isLowerCase:function(l){return l===l.toLowerCase()&&l!==l.toUpperCase()},extractResponseHeaders:function(n){var p={},m,l,o=null;if(!n||!n.length){n=[]}else{n=n.split("\n")}for(m=0,l=n.length;m<l;m+=1){o=n[m].split(": ");if(o.length===2){p[o[0]]=o[1]}}return p},getTargetState:function(s){var q={a:["innerText","href"],input:{range:["maxValue:max","value"],checkbox:["value","checked"],radio:["value","checked"],image:["src"]},select:["value"],button:["value","innerText"],textarea:["value"]},o=this.getTagName(s),n=q[o]||null,p=null,r=null,m=null,l="";if(n!==null){if(Object.prototype.toString.call(n)==="[object Object]"){n=n[s.type]||["value"]}r={};for(l in n){if(n.hasOwnProperty(l)){if(n[l].indexOf(":")!==-1){m=n[l].split(":");r[m[0]]=s[m[1]]}else{if(n[l]==="innerText"){r[n[l]]=this.trim(s.innerText||s.textContent)}else{r[n[l]]=s[n[l]]}}}}}if(o==="select"&&s.options&&!isNaN(s.selectedIndex)){r=r||{};r.index=s.selectedIndex;if(r.index>=0&&r.index<s.options.length){p=s.options[s.selectedIndex];r.value=p.getAttribute("value")||p.getAttribute("label")||p.text||p.innerText;r.text=p.text||p.innerText}}if(r&&s.disabled){r.disabled=true}return r},getDocument:function(l){var m=l;if(l&&l.nodeType!==9){if(l.getRootNode){m=l.getRootNode()}else{m=l.ownerDocument||l.document}}return m},getWindow:function(m){try{if(m.self!==m){var l=i.getDocument(m);return(!i.isUndefOrNull(l.defaultView))?(l.defaultView):(l.parentWindow)}}catch(n){m=null}return m},getOriginAndPath:function(t){var o={},v,w,r,u,s,l=[],m={},p,n;t=t||window.location;if(t.origin){o.origin=t.origin}else{o.origin=(t.protocol||"")+"//"+(t.host||"")}o.path=(t.pathname||"").split(";",1)[0];if(o.origin.indexOf("file://")>-1||(i.isiOS&&window.Ionic)){v=o.path.match(/(.*)(\/.*app.*)/);if(v!==null){o.path=v[2];o.origin="file://"}}w=t.search||"";try{r=new URLSearchParams(w);r.forEach(function(x,y){m[y]=x})}catch(q){if(w.length>1&&w.charAt(0)==="?"){l=decodeURIComponent(w).substring(1).split("&")}for(p=0;p<l.length;p+=1){n=l[p].indexOf("=");if(n>-1){u=l[p].substring(0,n);s=l[p].substring(n+1);m[u]=s}}}o.queryParams=m;return o},getIFrameWindow:function(n){var l=null;if(!n){return l}try{l=n.contentWindow||(n.contentDocument?n.contentDocument.parentWindow:null)}catch(m){}return l},getTagName:function(m){var l="";if(i.isUndefOrNull(m)){return l}if(m===document||m.nodeType===9){l="document"}else{if(m===window||m===window.window){l="window"}else{if(typeof m==="string"){l=m.toLowerCase()}else{l=(m.tagName||m.nodeName||"").toLowerCase()}}}return l},getTlType:function(n){var l,m,o="";if(i.isUndefOrNull(n)||!n.type){return o}l=n.type.toLowerCase();m=l+":";if(n.subType){m+=n.subType.toLowerCase()}o=d[m]||l;return o},isIFrameDescendant:function(m){var l=i.getWindow(m);return(l?(l!=TLT._getLocalTop()):false)},getOrientationMode:function(l){var m="INVALID";if(typeof l!=="number"){return m}switch(l){case 0:case 180:case 360:m="PORTRAIT";break;case 90:case -90:case 270:m="LANDSCAPE";break;default:m="UNKNOWN";break}return m},getOrientationAngle:function(){if(typeof window.orientation==="number"){return window.orientation}var l=(screen.orientation||{}).angle;if(typeof l!=="number"){switch(screen.mozOrientation||screen.msOrientation){case"landscape-primary":case"landscape-secondary":l=90;break;default:l=0;break}}return l},clog:(function(l){return function(){}}(window)),trim:function(l){if(!l||!l.toString){return l}if(l.trim){return l.trim()}return l.toString().replace(/^\s+|\s+$/g,"")},ltrim:function(l){if(!l||!l.toString){return l}if(l.trimStart){return l.trimStart()}return l.toString().replace(/^\s+/,"")},rtrim:function(l){if(!l||!l.toString){return l}if(l.trimEnd){return l.trimEnd()}return l.toString().replace(/\s+$/,"")},setCookie:function(w,m,u,z,q,l,t){var r,s,p,o,n="",y,v,x;if(t==="None"){l=true}else{if(t!=="Lax"){t="Strict"}}x=";SameSite="+t;v=l?";Secure":"";if(!w){return}w=encodeURIComponent(w);m=encodeURIComponent(m);p=(q||location.hostname).split(".");y=";Path="+(z||"/");if(typeof u==="number"){if(this.isIE){o=new Date();o.setTime(o.getTime()+(u*1000));n=";Expires="+o.toUTCString()}else{n=";Max-Age="+u}}for(s=p.length,r=(s===1?1:2);r<=s;r+=1){document.cookie=w+"="+m+";Domain="+p.slice(-r).join(".")+y+n+v+x;if(this.getCookieValue(w)===m){break}if(s===1){document.cookie=w+"="+m+y+n+v+x}}},getCookieValue:function(r,t){var o,p,n,s,m=null,l;try{t=t||document.cookie;if(!r||!r.toString){return null}r+="=";l=r.length;s=t.split(";");for(o=0,p=s.length;o<p;o+=1){n=s[o];n=i.ltrim(n);if(n.indexOf(r)===0){m=n.substring(l,n.length);break}}}catch(q){m=null}return m},getQueryStringValue:function(p,s,l){var o,n,t,m=null,q;try{l=l||window.location.search;t=l.length;if(!p||!p.toString||!t){return null}s=s||"&";l=s+l.substring(1);p=s+p+"=";o=l.indexOf(p);if(o!==-1){q=o+p.length;n=l.indexOf(s,q);if(n===-1){n=t}m=decodeURIComponent(l.substring(q,n))}}catch(r){}return m},addEventListener:(function(){if(window.addEventListener){return function(m,l,n){m.addEventListener(l,n,false)}}return function(m,l,n){m.attachEvent("on"+l,n)}}()),matchTarget:function(v,r){var p,n,o,u=-1,t,l,m,q,s,w=document;if(!v||!r){return u}if(!this.browserService||!this.browserBaseService){this.browserService=TLT.getService("browser");this.browserBaseService=TLT.getService("browserBase")}if(r.idType===-2){o=this.browserBaseService.getNodeFromID(r.id,r.idType);w=this.getDocument(o)}for(p=0,q=v.length;p<q&&u===-1;p+=1){s=v[p];if(typeof s==="string"){t=this.browserService.queryAll(s,w);for(n=0,l=t?t.length:0;n<l;n+=1){if(t[n]){m=this.browserBaseService.ElementData.prototype.examineID(t[n]);if(m.idType===r.idType&&m.id===r.id){u=p;break}}}}else{if(s&&s.id&&s.idType&&r.idType&&r.idType.toString()===s.idType.toString()){switch(typeof s.id){case"string":if(s.id===r.id){u=p}break;case"object":if(!s.cRegex){s.cRegex=new RegExp(s.id.regex,s.id.flags)}s.cRegex.lastIndex=0;if(s.cRegex.test(r.id)){u=p}break}}}}return u},WeakMap:(function(){function l(p,o){var n,m;p=p||[];for(n=0,m=p.length;n<m;n+=1){if(p[n][0]===o){return n}}return -1}return function(){var m=[];this.set=function(o,p){var n=l(m,o);m[n>-1?n:m.length]=[o,p]};this.get=function(o){var n=m[l(m,o)];return(n?n[1]:undefined)};this.clear=function(){m=[]};this.has=function(n){return(l(m,n)>=0)};this.remove=function(o){var n=l(m,o);if(n>=0){m.splice(n,1)}};this["delete"]=this.remove}}())};if(typeof TLT==="undefined"||!TLT){window.TLT={}}TLT.utils=i}());(function(){TLT.EventTarget=function(){this._handlers={}};TLT.EventTarget.prototype={constructor:TLT.EventTarget,publish:function(c,f){var d=0,a=0,b=this._handlers[c],e={type:c,data:f};if(typeof b!=="undefined"){for(a=b.length;d<a;d+=1){b[d](e)}}},subscribe:function(a,b){if(!this._handlers.hasOwnProperty(a)){this._handlers[a]=[]}this._handlers[a].push(b)},unsubscribe:function(c,e){var d=0,a=0,b=this._handlers[c];if(b){for(a=b.length;d<a;d+=1){if(b[d]===e){b.splice(d,1);return}}}}}}());TLT.ModuleContext=(function(){var a=["broadcast","getConfig:getModuleConfig","listen","post","getXPathFromNode","performDOMCapture","performFormCompletion","isInitialized","getStartTime","normalizeUrl","getCurrentOffset","getTabId","setSessionCookieInfo"];return function(f,d){var h={},g,b,j=null,e=null,c=null;for(g=0,b=a.length;g<b;g+=1){j=a[g].split(":");if(j.length>1){c=j[0];e=j[1]}else{c=j[0];e=j[0]}h[c]=(function(i){return function(){var k=d.utils.convertToArray(arguments);k.unshift(f);return d[i].apply(d,k)}}(e))}h.utils=d.utils;return h}}());TLT.addService("config",function(a){function d(f,e){a.utils.extend(true,f,e);c.publish("configupdated",c.getConfig())}var b={core:{},modules:{},services:{}},c=a.utils.extend(false,a.utils.createObject(new TLT.EventTarget()),{getConfig:function(){return b},updateConfig:function(e){d(b,e)},getCoreConfig:function(){return b.core},updateCoreConfig:function(e){d(b.core,e)},getServiceConfig:function(e){return b.services[e]||{}},updateServiceConfig:function(f,e){if(typeof b.services[f]==="undefined"){b.services[f]={}}d(b.services[f],e)},getModuleConfig:function(e){return b.modules[e]||{}},updateModuleConfig:function(f,e){if(typeof b.modules[f]==="undefined"){b.modules[f]={}}d(b.modules[f],e)},destroy:function(){b={core:{},modules:{},services:{}}}});return c});TLT.addService("queue",function(r){var M=r.utils,k=null,i={},G=600000,p=r.getService("ajax"),c=r.getService("browser"),e=r.getService("encoder"),v=r.getService("serializer"),E=r.getService("config"),s=r.getService("message"),A=null,m={},J=true,h=true,z={5:{limit:300,count:0},6:{limit:400,count:0}},d=[],C=false,q=true,I=true,u=(function(){var S={};function V(W){return typeof S[W]!=="undefined"}function O(W,X){if(!V(W)){S[W]={lastOffset:0,data:[],queueId:W,url:X.url,eventThreshold:X.eventThreshold,sizeThreshold:X.sizeThreshold||0,timerInterval:X.timerInterval,size:-1,serializer:X.serializer,encoder:X.encoder,crossDomainEnabled:!!X.crossDomainEnabled,crossDomainIFrame:X.crossDomainIFrame}}return S[W]}function Q(W){if(V(W)){delete S[W]}}function T(W){if(V(W)){return S[W]}return null}function R(X){var W=T(X);if(W!==null){W.data=[]}}function U(W){var X=null;if(V(W)){X=T(W).data;R(W)}return X}function P(Y,aa){var W=null,Z=null,ac=window.tlBridge,X=window.iOSJSONShuttle;try{Z=v.serialize(aa)}catch(ab){Z="Serialization failed: "+(ab.name?ab.name+" - ":"")+ab.message;aa={error:Z}}if((typeof ac!=="undefined")&&(typeof ac.addMessage==="function")){ac.addMessage(Z)}else{if((typeof X!=="undefined")&&(typeof X==="function")){X(Z)}else{if(V(Y)){W=T(Y);W.data.push(aa);W.data=r.redirectQueue(W.data);if(W.sizeThreshold){Z=v.serialize(W.data);W.size=Z.length}return W.data.length}}}return 0}return{exists:V,add:O,remove:Q,reset:function(){S={}},get:T,clear:R,flush:U,push:P}}());function n(O){if(q){I=true}if(O&&O.id){M.extend(true,d[O.id-1],{rspEnd:s.getCurrentOffset(),success:O.success,statusCode:O.statusCode,statusText:O.statusText})}}function x(){var O=M.getOriginAndPath(window.location);return r.normalizeUrl("",O.path)}function B(Q,U,R,T){var O=u.get(Q),S={name:U,value:R},P=null;if(typeof U!=="string"||typeof R!=="string"){return}if(!O.headers){O.headers={once:[],always:[]}}P=!!T?O.headers.always:O.headers.once;P.push(S)}function g(Q,T){var S,P,O=u.get(Q),U=O.headers,R=null;T=T||{};function V(W,Z){var Y,X,aa=null;for(Y=0,X=W.length;Y<X;Y+=1){aa=W[Y];Z[aa.name]=aa.value}}if(U){R=[U.always,U.once];for(S=0,P=R.length;S<P;S+=1){V(R[S],T)}}return T}function o(P){var O=null,Q=null;if(!u.exists(P)){throw new Error("Queue: "+P+" does not exist!")}O=u.get(P);Q=O?O.headers:null;if(Q){Q.once=[]}}function l(){var P=0,O,R,Q=r.provideRequestHeaders();if(Q&&Q.length){for(P=0,O=Q.length;P<O;P+=1){R=Q[P];B("DEFAULT",R.name,R.value,R.recurring)}}return P}function L(S){var R,O,Q=[],P="";if(!S||!S.length){return P}for(R=0,O=S.length;R<O;R+=1){Q[S[R].type]=true}for(R=0,O=Q.length;R<O;R+=1){if(Q[R]){if(P){P+=","}P+=R}}return P}function j(af,U){var Y=u.get(af),ah=Y.url?u.flush(af):null,R=ah?ah.length:0,T={"Content-Type":"application/json","X-PageId":r.getPageId(),"X-Tealeaf":"device (UIC) Lib/6.2.0.2010","X-TealeafType":"GUI","X-TeaLeaf-Page-Url":x(),"X-Tealeaf-SyncXHR":(!!U).toString()},S=null,O=s.getCurrentOffset(),ad=Y.serializer||"json",P=Y.encoder,ab,V,X,W=k.tltWorker,ag=r.getState()==="unloading",aa=M.getOriginAndPath().origin,Q=r.isCrossOrigin(Y.url,aa),Z,ae=null;if(!R||!Y){return}X=O-ah[R-1].offset;if(G&&X>(G+60000)){return}I=false;Y.lastOffset=ah[R-1].offset;T["X-Tealeaf-MessageTypes"]=L(ah);ah=s.wrapMessages(ah);S=ah.serialNumber;d[S-1]={serialNumber:S,reqStart:O};ah.log={requests:d};if(k.endpointCheckFailed){ah.log.endpointCheckFailed=true}l();g(af,T);if(W&&!(U||ag)){W.onmessage=function(aj){var ai;ai=aj.data;n(ai)};Z={id:S,url:Y.url,headers:T,data:ah,isUnloading:ag,isCrossOrigin:Q};W.postMessage(Z)}else{if(ad){ah=v.serialize(ah,ad)}if(P){V=e.encode(ah,P);if(V){if(V.data&&!V.error){if(!(V.data instanceof window.ArrayBuffer)){V.error="Encoder did not apply "+P+" encoding."}else{if(V.data.byteLength<ah.length){ah=V.data;T["Content-Encoding"]=V.encoding}else{V.error=P+" encoder did not reduce payload ("+V.data.byteLength+") compared to original data ("+ah.length+")"}}}if(V.error){r.logExceptionEvent("EncoderError: "+V.error,"UIC",-1)}}}if(Y.crossDomainEnabled){ae=M.getIFrameWindow(Y.crossDomainIFrame);if(!ae){return}ab={request:{id:S,url:Y.url,async:!U,headers:T,data:ah}};if(typeof window.postMessage==="function"){ae.postMessage(ab,Y.crossDomainIFrame.src)}else{try{ae.sendMessage(ab)}catch(ac){return}}I=true}else{p.sendRequest({id:S,oncomplete:n,url:Y.url,async:!U,isUnloading:ag,isCrossOrigin:Q,headers:T,data:ah})}}o(af)}function K(R){var O=null,Q=k.queues,P;for(P=0;P<Q.length;P+=1){O=Q[P];j(O.qid,R)}return true}function N(R,T){var Q,P,U=s.createMessage(T),O=u.get(R),S,V;P=O.data.length;if(P){V=U.offset-O.data[P-1].offset;if(G&&V>G){r.setAutoFlush(false);r.destroy(false,"inactivity(2)");return}}P=u.push(R,U);S=O.size;if(q&&!I){return}if((P>=O.eventThreshold||S>=O.sizeThreshold)&&J&&r.getState()!=="unloading"){Q=r.getCurrentWebEvent();if(Q.type==="click"&&!k.ddfoc){if(h){h=false;window.setTimeout(function(){if(u.exists(R)){j(R);h=true}},500)}}else{j(R)}}}function a(Q){var O,P=false;if(!Q||!Q.type){return true}O=z[Q.type];if(O){O.count+=1;if(O.count>O.limit){P=true;if(O.count===O.limit+1){N("DEFAULT",{type:16,dataLimit:{messageType:Q.type,maxCount:O.limit}})}}}return P}function H(Q){var S,P,O=null,T=k.queues,R="",V,U;for(S=0,V=T.length;S<V;S+=1){O=T[S];if(O&&O.modules){for(P=0,U=O.modules.length;P<U;P+=1){R=O.modules[P];if(R===Q){return O.qid}}}}return A.qid}function y(Q,O){m[Q]=window.setTimeout(function P(){if(J&&(!q||(q&&I))){j(Q)}m[Q]=window.setTimeout(P,O)},O)}function f(P){var O=false;if(P&&m[P]){window.clearTimeout(m[P]);delete m[P];O=true}return O}function w(){var O=0;for(O in m){if(m.hasOwnProperty(O)){f(O)}}m={}}function b(P){var O;if(!P){return}if(f(P)){O=u.get(P);if(O.timerInterval){y(P,O.timerInterval)}}}function F(O){}function t(O){k=O;i=r.getCoreConfig();G=M.getValue(i,"inactivityTimeout",600000);q=M.getValue(k,"serializePost",true);M.forEach(k.queues,function(P,Q){var R=null;if(P.qid==="DEFAULT"){A=P}if(P.crossDomainEnabled){R=c.query(P.crossDomainFrameSelector);if(!R){r.fail("Cross domain iframe not found")}}u.add(P.qid,{url:P.endpoint,eventThreshold:P.maxEvents,sizeThreshold:P.maxSize||0,serializer:P.serializer,encoder:P.encoder,timerInterval:P.timerInterval||0,crossDomainEnabled:P.crossDomainEnabled||false,crossDomainIFrame:R});if(typeof P.timerInterval!=="undefined"&&P.timerInterval>0){y(P.qid,P.timerInterval)}});E.subscribe("configupdated",F);C=true}function D(){if(J){K(!k.asyncReqOnUnload)}E.unsubscribe("configupdated",F);w();u.reset();k=null;A=null;C=false}return{init:function(){if(!C){t(E.getServiceConfig("queue")||{})}else{}},destroy:function(){D()},_getQueue:function(O){return u.get(O).data},setAutoFlush:function(O){if(O===true){J=true}else{J=false}},flush:function(O){O=O||A.qid;if(!u.exists(O)){throw new Error("Queue: "+O+" does not exist!")}j(O)},flushAll:function(O){return K(!!O)},post:function(P,Q,O){if(!r.isInitialized()){return}O=O||H(P);if(!u.exists(O)){return}if(!a(Q)){N(O,Q)}},resetFlushTimer:function(O){O=O||A.qid;if(!u.exists(O)){return}b(O)}}});TLT.addService("browserBase",function(u){var j,Q=u.utils,l={optgroup:true,option:true,nobr:true},s={},h,p=null,F,B,i,f,A,t,K=false,c=5,z=60;function v(){h=u.getService("config");p=u.getService("serializer");F=h?h.getServiceConfig("browser"):{};B=F.blacklist||[];i=F.customid||[];f=Q.getValue(F,"normalizeTargetToParentLink",true);A=Q.getValue(F,"logAttributes",[])}function d(){v();if(h){h.subscribe("configupdated",v)}K=true}function L(){if(h){h.unsubscribe("configupdated",v)}K=false}function a(X){var V,R,U,T,W,S={};if(!X||!X.hasAttribute){return S}for(V=0,R=A.length,W=0;V<R&&W<c;V+=1){U=A[V];if(X.hasAttribute(U)){T=X.getAttribute(U)||"";S[U]=T.slice(0,z);W+=1}}return S}function y(T,V){var S,R,U;if(!T){return null}if(typeof V!=="undefined"){U=V}else{U=T.id}if(!U||typeof U!=="string"){return null}for(S=0,R=B.length;S<R;S+=1){if(typeof B[S]==="string"){if(U===B[S]){return null}}else{if(typeof B[S]==="object"){if(!B[S].cRegex){B[S].cRegex=new RegExp(B[S].regex,B[S].flags)}B[S].cRegex.lastIndex=0;if(B[S].cRegex.test(U)){return null}}}}return U}function r(T,U){var R={type:null,subType:null},S;if(!T){return R}S=T.type;switch(S){case"focusin":S="focus";break;case"focusout":S="blur";break;default:break}R.type=S;return R}function D(S){var R={type:null,subType:null};if(!S){return R}R.type=Q.getTagName(S);R.subType=S.type||null;return R}function e(R,T,S){var X={HTML_ID:"-1",XPATH_ID:"-2",ATTRIBUTE_ID:"-3"},W,U=null,V;if(!R||!T){return U}W=S||window.document;T=T.toString();if(T===X.HTML_ID){if(W.getElementById){U=W.getElementById(R)}else{if(W.querySelector){U=W.querySelector("#"+R)}}}else{if(T===X.ATTRIBUTE_ID){V=R.split("=");if(W.querySelector){U=W.querySelector("["+V[0]+'="'+V[1]+'"]')}}else{if(T===X.XPATH_ID){U=s.xpath(R,W)}}}return U}t=(function(){var R={nobr:true};return function(Z,W,ae,T){var aa,ah=document.documentElement,V,ag=null,Y=null,ad=null,af=[],S,ac=true,X=u._getLocalTop(),U="",ab=false,ai;if(!Z||!Z.nodeType){return af}if(Z.nodeType===11){Z=Z.host;if(Z){ab=true}else{return af}}while(ac){ac=false;U=Q.getTagName(Z);if(U==="window"){continue}if(U&&!ab){if(R[U]){Z=Z.parentNode;ac=true;continue}}for(V=y(Z,T);Z&&(Z.nodeType===1||Z.nodeType===9)&&Z!==document&&(W||!V);V=y(Z)){ad=Z.parentNode;if(!ad){Y=Q.getWindow(Z);if(!Y||ae){S=[U,0];af[af.length]=S;return af.reverse()}if(Y===X){return af.reverse()}Z=Y.frameElement;U=Q.getTagName(Z);ad=Z.parentNode;continue}ag=ad.firstChild;if(!ag){af.push(["XPath Error(1)"]);Z=null;break}for(aa=0;ag;ag=ag.nextSibling){if(ag.nodeType===1&&Q.getTagName(ag)===U){if(ag===Z){S=[U,aa];if(ab){S.push("h");ab=false}af[af.length]=S;break}aa+=1}}if(ad.nodeType===11){Z=ad.host;ab=true}else{Z=ad}U=Q.getTagName(Z)}if(V&&!W){S=[V];if(ab){S.push("h");ab=false}af[af.length]=S;if(Q.isIFrameDescendant(Z)){ac=true;Z=Q.getWindow(Z).frameElement}else{if(!ae&&!ah.contains(Z)){if(Z.getRootNode){ai=Z.getRootNode();if(ai){Z=ai.host;ab=true;ac=true}}}}}T=undefined}return af.reverse()}}());function H(R){var S="null";if(!R||!R.length){return S}S=p.serialize(R,"json");return S}function x(U,S,W,T){var V,R;R=t(U,!!S,!!T);if(W){V=R}else{V=H(R)}return V}function P(S){var T={left:-1,top:-1},R;S=S||document;R=S.documentElement||S.body.parentNode||S.body;T.left=Math.round((typeof window.pageXOffset==="number")?window.pageXOffset:R.scrollLeft);T.top=Math.round((typeof window.pageYOffset==="number")?window.pageYOffset:R.scrollTop);return T}function O(R){return R&&typeof R.originalEvent!=="undefined"&&typeof R.isDefaultPrevented!=="undefined"&&!R.isSimulated}function m(R){if(!R){return null}if(R.type&&R.type.indexOf("touch")===0){if(O(R)){R=R.originalEvent}if(R.type==="touchstart"){R=R.touches[R.touches.length-1]}else{if(R.type==="touchend"){R=R.changedTouches[0]}}}return R}function w(S){var X=S||window.event,V,Y=document.documentElement,W=document.body,Z=false,R=null,T,U;if(O(X)){X=X.originalEvent}if(typeof S==="undefined"||typeof X.target==="undefined"){X.target=X.srcElement||window.window;X.timeStamp=Number(new Date());if(X.pageX===null||typeof X.pageX==="undefined"){X.pageX=X.clientX+((Y&&Y.scrollLeft)||(W&&W.scrollLeft)||0)-((Y&&Y.clientLeft)||(W&&W.clientLeft)||0);X.pageY=X.clientY+((Y&&Y.scrollTop)||(W&&W.scrollTop)||0)-((Y&&Y.clientTop)||(W&&W.clientTop)||0)}X.preventDefault=function(){this.returnValue=false};X.stopPropagation=function(){this.cancelBubble=true}}if(X.type==="click"){V=X.composedPath?X.composedPath():[];for(U=0;U<V.length;U+=1){T=Q.getTagName(V[U]);if(T==="button"){Z=true;R=V[U];break}}if(Z){return{originalEvent:X,target:R,srcElement:R,type:X.type,pageX:X.pageX,pageY:X.pageY}}}return X}function C(T){var S,R,U,V=null;if(!T||!T.type){return null}if(T.type.indexOf("touch")===0){V=m(T).target}else{if(typeof T.composedPath==="function"){U=T.composedPath();if(U&&U.length){V=U[0];if(f){for(S=0,R=U.length;S<R;S+=1){if(Q.getTagName(U[S])==="a"){V=U[S];break}}}}else{V=T.target||window.window}}else{if(T.srcElement){V=T.srcElement}else{V=T.target}}}while(V&&l[Q.getTagName(V)]){if(V.parentElement){V=V.parentElement}else{break}}if(V.nodeType===9&&V.documentElement){V=V.documentElement}return V}function N(S){var V=0,U=0,T=document.documentElement,R=document.body;S=m(S);if(S){if(S.pageX||S.pageY){V=S.pageX;U=S.pageY}else{if(S.clientX||S.clientY){V=S.clientX+(T?T.scrollLeft:(R?R.scrollLeft:0))-(T?T.clientLeft:(R?R.clientLeft:0));U=S.clientY+(T?T.scrollTop:(R?R.scrollTop:0))-(T?T.clientTop:(R?R.clientTop:0))}}}return{x:V,y:U}}s.xpath=function(Z,ab){var X=null,S,Y=null,ac=false,R,V,U,T,W,aa;if(!Z){return null}X=p.parse(Z);ab=ab||document;S=ab;if(!X){return null}for(V=0,W=X.length;V<W&&S;V+=1){Y=X[V];ac=Y.length>1&&Y[Y.length-1]==="h";if(Y.length===1||(Y.length===2&&ac)){if(ab.getElementById){S=ab.getElementById(Y[0])}else{if(ab.querySelector){S=ab.querySelector("#"+Y[0])}else{S=null}}}else{for(U=0,T=-1,aa=S.childNodes.length;U<aa;U+=1){if(S.childNodes[U].nodeType===1&&Q.getTagName(S.childNodes[U])===Y[0].toLowerCase()){T+=1;if(T===Y[1]){S=S.childNodes[U];break}}}if(T!==Y[1]){return null}}if(!S){return null}if(ac){if(V<W-1){if(!S.shadowRoot){return null}S=S.shadowRoot;ab=S}}R=Q.getTagName(S);if((R==="frame"||R==="iframe")&&V<W-1){S=Q.getIFrameWindow(S).document;ab=S}}return(S===ab||!S)?null:S};function o(R,S){this.x=Math.round(R||0);this.y=Math.round(S||0)}function b(S,R){this.width=Math.round(S||0);this.height=Math.round(R||0)}function g(S,T){var W,V,R,U;T=C(S);W=this.examineID(T);R=D(T);U=this.examinePosition(S,T);V=T&&T.getAttribute?T.getAttribute("aria-label"):null;if(V){this.accessibility={id:V}}this.attributes=a(T);if(T&&T.innerText){this.attributes.innerText=Q.trim(T.innerText).slice(0,z)}this.element=T;this.id=W.id;this.idType=W.idType;this.type=R.type;this.subType=R.subType;this.state=this.examineState(T);this.position=new o(U.x,U.y);this.position.relXY=U.relXY;this.size=new b(U.width,U.height);this.xPath=W.xPath;this.name=W.name}g.HTML_ID=-1;g.XPATH_ID=-2;g.ATTRIBUTE_ID=-3;g.prototype.examineID=function(Y,T){var W={id:"",idType:0,xPath:"",name:""},S=i.length,V,R,U=document.documentElement;if(!Y){return W}W.xPath=x(Y,false,false,T);W.name=Y.name;try{R=typeof U.contains==="function"?U.contains(Y):true;if((T||R)&&(!Q.getWindow(Y)||!Q.isIFrameDescendant(Y))){if(y(Y)){W.id=Y.id;W.idType=g.HTML_ID}else{if(i.length&&Y.attributes){while(S){S-=1;V=Y.attributes[i[S]];if(typeof V!=="undefined"){W.id=i[S]+"="+(V.value||V);W.idType=g.ATTRIBUTE_ID}}}}}}catch(X){}if(!W.id){W.id=W.xPath;if(W.id!=="null"){W.idType=g.XPATH_ID}}return W};g.prototype.examineState=function(R){return Q.getTargetState(R)};function J(){var S=1,T,V,R;if(document.body.getBoundingClientRect){try{T=document.body.getBoundingClientRect()}catch(U){return S}V=T.right-T.left;R=document.body.offsetWidth;S=Math.round((V/R)*100)/100}return S}function q(S){var U,R,T,W;if(!S||!S.getBoundingClientRect){return{x:0,y:0,width:0,height:0}}try{U=S.getBoundingClientRect();W=P(document)}catch(V){return{x:0,y:0,width:0,height:0}}R={x:U.left+W.left,y:U.top+W.top,width:U.right-U.left,height:U.bottom-U.top};if(Q.isIE){R.x-=document.documentElement.clientLeft;R.y-=document.documentElement.clientTop;T=J();if(T!==1){R.x=Math.round(R.x/T);R.y=Math.round(R.y/T);R.width=Math.round(R.width/T);R.height=Math.round(R.height/T)}}return R}g.prototype.examinePosition=function(S,T){var U=N(S),R=q(T);R.x=(U.x||U.y)?Math.round(Math.abs(U.x-R.x)):R.width/2;R.y=(U.x||U.y)?Math.round(Math.abs(U.y-R.y)):R.height/2;R.relXY=Q.calculateRelativeXY(R);return R};function M(){var R=Q.getOrientationAngle();if(Q.isLandscapeZeroDegrees){if(Math.abs(R)===180||Math.abs(R)===0){R=90}else{if(Math.abs(R)===90||Math.abs(R)===270){R=0}}}return R}function G(X){var U,R,W,V,T,S;if(X){return X}W=u.getCoreConfig()||{};T=W.modules;X={};for(S in T){if(T.hasOwnProperty(S)&&T[S].events){for(U=0,R=T[S].events.length;U<R;U+=1){V=T[S].events[U];if(V.state){X[V.name]=V.state}}}}return X}function k(R){var S;j=G(j);if(j[R.type]){S=Q.getValue(R,j[R.type],null)}return S}function n(S){var U,R,T;this.data=S.data||null;this.delegateTarget=S.delegateTarget||null;if(S.gesture||(S.originalEvent&&S.originalEvent.gesture)){this.gesture=S.gesture||S.originalEvent.gesture;this.gesture.idType=(new g(this.gesture,this.gesture.target)).idType}S=w(S);U=N(S);this.custom=false;this.nativeEvent=this.custom===true?null:S;this.position=new o(U.x,U.y);this.target=new g(S,S.target);this.orientation=M();T=k(S);if(T){this.target.state=T}this.timestamp=(new Date()).getTime();R=r(S,this.target);this.type=R.type;this.subType=R.subType}function I(R){if(u.isInitialized()){u._publishEvent(new n(R))}else{}}function E(W,V,X){var S=[],R,U,T=[];if(!(this instanceof E)){return null}if(typeof W!=="object"||!W||!W.nodeType){this.fullXpath="";this.xpath="";this.fullXpathList=[];this.xpathList=[];return}if(W.nodeType===3){W=W.parentElement}T=t(W,false,V,X);R=T[0];if(T.length&&(R.length===1||(R.length===2&&R[1]==="h"))){S=t(W,true,V)}else{S=Q.clone(T)}this.xpath=H(T);this.xpathList=T;this.fullXpath=H(S);this.fullXpathList=S;U=S[S.length-1];this.isShadowHost=U?U[U.length-1]==="h":false;this.applyPrefix=function(aa){var Y,Z;if(!(aa instanceof E)||!aa.fullXpathList.length){return}Z=aa.fullXpathList[aa.fullXpathList.length-1];Y=this.fullXpathList.shift();if(Q.isEqual(Y[0],Z[0])){this.fullXpathList=aa.fullXpathList.concat(this.fullXpathList)}else{this.fullXpathList.unshift(Y);return}this.fullXpath=H(this.fullXpathList);Y=this.xpathList.shift();if(Y.length===1){this.xpathList.unshift(Y);return}this.xpathList=aa.xpathList.concat(this.xpathList);this.xpath=H(this.xpathList)};this.compare=function(Y){if(!(Y instanceof E)){return 0}return(this.fullXpathList.length-Y.fullXpathList.length)};this.isSame=function(Y){var Z=false;if(!(Y instanceof E)){return Z}if(this.compare(Y)===0){Z=(this.fullXpath===Y.fullXpath)}return Z};this.containedIn=function(aa,Z){var ac,ab,Y,ad;if(!(aa instanceof E)){return false}if(aa.fullXpathList.length>this.fullXpathList.length){return false}for(ac=0,Y=aa.fullXpathList.length;ac<Y;ac+=1){if(!Q.isEqual(aa.fullXpathList[ac],this.fullXpathList[ac])){return false}}if(!Z){for(ab=ac,Y=this.fullXpathList.length;ab<Y;ab+=1){ad=this.fullXpathList[ab];if(ad[ad.length-1]==="h"){return false}}}return true}}E.prototype=(function(){return{}}());return{init:function(){if(!K){d()}else{}},destroy:function(){L()},WebEvent:n,ElementData:g,Xpath:E,processDOMEvent:I,getNormalizedOrientation:M,getXPathFromNode:function(S,U,R,V,T){return x(U,R,V,T)},getNodeFromID:e,queryDom:s}});TLT.addService("browser",function(f){var o=f.utils,j=f.getService("config"),h=f.getService("browserBase"),i=null,e=null,m=j?j.getServiceConfig("browser"):{},d=o.getValue(m,"useCapture",true),c=o.getValue(m,"usePassive",true),n=false,g={NO_QUERY_SELECTOR:"NOQUERYSELECTOR"},q=function(r){return function(t){var s=new h.WebEvent(t);if(t.type==="resize"||t.type==="hashchange"){setTimeout(function(){r(s)},5)}else{r(s)}}},b={list2Array:function(t){var s=t.length,r=[],u;if(typeof t.length==="undefined"){return[t]}for(u=0;u<s;u+=1){r[u]=t[u]}return r},find:function(t,s,r){r=r||"css";return this.list2Array(this[r](t,s))},css:function(s,r){r=r||document;return r.querySelectorAll(s)}},p=(function(){var r=new o.WeakMap();return{add:function(s){var t=r.get(s)||[q(s),0];t[1]+=1;r.set(s,t);return t[0]},find:function(s){var t=r.get(s);return t?t[0]:null},remove:function(s){var t=r.get(s);if(t){t[1]-=1;if(t[1]<=0){r.remove(s)}}}}}());function l(){if(!document.querySelectorAll){f.fail("querySelectorAll does not exist!",g.NO_QUERY_SELECTOR)}}function a(s){var r={capture:d,passive:c};if(o.isIE){return d}return o.mixin(r,s)}function k(){b.xpath=h.queryDom.xpath;l();if(typeof document.addEventListener==="function"){i=function(u,r,t,s){s=a(s);u.addEventListener(r,t,s)};e=function(u,r,t,s){s=a(s);u.removeEventListener(r,t,s)}}else{if(typeof document.attachEvent!=="undefined"){i=function(t,r,s){t.attachEvent("on"+r,s)};e=function(t,r,s){t.detachEvent("on"+r,s)}}else{throw new Error("Unsupported browser")}}n=true}return{init:function(){if(!n){k()}else{}},destroy:function(){n=false},getServiceName:function(){return"W3C"},query:function(u,s,r){try{return b.find(u,s,r)[0]||null}catch(t){return[]}},queryAll:function(u,s,r){try{return b.find(u,s,r)}catch(t){return[]}},subscribe:function(r,v,t,s){var u=p.add(t);i(v,r,u,s)},unsubscribe:function(r,w,t,s){var u=p.find(t);if(u){try{e(w,r,u,s)}catch(v){}p.remove(t)}}}});TLT.addService("ajax",function(e){var k=e.utils,i,m=false,b=false,j=false;function g(p){var o="",n=[];for(o in p){if(p.hasOwnProperty(o)){n.push([o,p[o]])}}return n}function h(p){var o="",n="?";for(o in p){if(p.hasOwnProperty(o)){n+=encodeURIComponent(o)+"="+encodeURIComponent(p[o])+"&"}}return n.slice(0,-1)}function l(n){var p,q=false,o=h(n.headers);if(typeof n.data==="string"){p=n.data}else{p=n.data?new Uint8Array(n.data):""}q=navigator.sendBeacon(n.url+o,p);return q}function f(o){var r=o.headers||{},q=o.id||0,p={method:o.type,headers:r,body:o.data,mode:o.isCrossOrigin?"cors":"same-origin",credentials:o.isCrossOrigin?"omit":"same-origin",keepalive:!o.isCrossOrigin&&o.isUnloading,cache:"no-store"},n=o.oncomplete||function(){};r["X-Requested-With"]="fetch";window.fetch(o.url,p).then(function(t){var s={success:t.ok,statusCode:t.status,statusText:t.statusText,id:q};if(s.success){t.text().then(function(u){try{s.data=JSON.parse(u)}catch(v){s.data=u}n(s)})["catch"](function(u){s.statusCode=1;s.statusText=u.message;n(s)})}else{n(s)}})["catch"](function(t){var s={success:false,statusCode:2,statusText:t.message,id:q};n(s)})}function a(o){if(typeof o!=="function"){return}return function n(q){var s,p,r=false;if(!q){return}s=q.target;if(!s){return o(q)}p=s.status;if(p>=200&&p<300){r=true}o({headers:k.extractResponseHeaders(s.getAllResponseHeaders()),responseText:s.responseText,statusCode:p,statusText:s.statusText,id:s.id,success:r})}}function d(v){var u=i(),o=[["X-Requested-With","XMLHttpRequest"]],t=0,p=typeof v.async!=="boolean"?true:v.async,r="",s=null,q,n;if(v.headers){o=o.concat(g(v.headers))}if(v.contentType){o.push(["Content-Type",v.contentType])}u.open(v.type.toUpperCase(),v.url,p);for(q=0,n=o.length;q<n;q+=1){r=o[q];if(r[0]&&r[1]){u.setRequestHeader(r[0],r[1])}}if(v.error){v.error=a(v.error);u.addEventListener("error",v.error)}u.onreadystatechange=s=function(){if(u.readyState===4){u.onreadystatechange=s=function(){};if(v.timeout){window.clearTimeout(t)}v.oncomplete({id:v.id,headers:k.extractResponseHeaders(u.getAllResponseHeaders()),responseText:(u.responseText||null),statusCode:u.status,statusText:u.statusText,success:(u.status>=200&&u.status<300)});u=null}};u.send(v.data||null);s();if(v.timeout){t=window.setTimeout(function(){if(!u){return}u.onreadystatechange=function(){};if(u.readyState!==4){u.abort();if(typeof v.error==="function"){v.error({id:v.id,statusCode:u.status,statusText:"timeout",success:false})}}v.oncomplete({id:v.id,headers:k.extractResponseHeaders(u.getAllResponseHeaders()),responseText:(u.responseText||null),statusCode:u.status,statusText:"timeout",success:false});u=null},v.timeout)}}function c(){var n=e.getServiceConfig("queue");if(typeof window.XMLHttpRequest!=="undefined"){i=function(){return new XMLHttpRequest()}}else{i=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}if(n){m=k.getValue(n,"useBeacon",true)&&(typeof navigator.sendBeacon==="function");b=k.getValue(n,"useFetch",true)&&(typeof window.fetch==="function")}j=true}return{init:function(){if(!j){c()}},destroy:function(){j=false},sendRequest:function(n){var p=true,o;n.type=n.type||"POST";if((n.isUnloading||!n.async)&&m){p=false;o=l(n);if(!o){p=true}}if(p){if(n.async&&b&&!n.timeout){f(n)}else{d(n)}}}}});TLT.addService("domCapture",function(E){var j=E.getService("config"),k=E.getService("browserBase"),d=E.getService("browser"),A,i,g={maxMutations:100,maxLength:1000000,captureShadowDOM:false,captureFrames:false,removeScripts:true,removeComments:true,captureStyle:true},ae={childList:true,attributes:true,attributeOldValue:true,characterData:true,subtree:true},a=(typeof window.MutationObserver!=="undefined"),C,M=ae,T=[],O=[],t,B=[],af=[],z=[],D=0,K=100,c=false,u=false,U=false,w=function(){},y=function(){},G=function(){},P=E._publishEvent,q=false,ak=E.utils;function f(am,ar){var aq,ao,au,aw,an,al,av,at,ap;if(!am||!ar||!ar.querySelectorAll){return}av=am.querySelectorAll("style");at=ar.querySelectorAll("style");for(aq=0,ap=av.length;aq<ap;aq+=1){al=av[aq];if(al.sheet){au=al.sheet.cssRules;for(ao=0,aw=au.length,an=[];ao<aw;ao+=1){an.push(au[ao].cssText)}if(an.length){at[aq].innerHTML=an.join("\n")}}}}function L(){af=[];z=[];D=0;c=false}function aa(ao){var an,am,al;if(!ao||!ao.length){return}ao=ao.sort(function(aq,ap){return aq.compare(ap)});for(an=0;an<ao.length;an+=1){al=ao[an];for(am=an+1;am<ao.length;am+=0){if(ao[am].containedIn(al)){ao.splice(am,1)}else{am+=1}}}}function v(an){var am,al;if(an){for(am=0,al=an.length;am<al;am+=1){delete an[am].oldValue}}return an}function W(ap,an){var am,al,ao=-1;if(!ap||!an){return ao}for(am=0,al=ap.length;am<al;am+=1){if(ap[am].name===an){ao=am;break}}return ao}function F(ao,aq){var an,am,al,ap;for(an=0,am=ao.length,ap=false;an<am;an+=1){al=ao[an];if(al.name===aq.name){if(al.oldValue===aq.value){ao.splice(an,1)}else{al.value=aq.value}ap=true;break}}if(!ap){ao.push(aq)}return ao}function S(ar,al){var aq,ao,an,at,av,au,ap,am=0;ar.removedNodes=al.removedNodes.length;ar.addedNodes=ak.convertToArray(al.addedNodes);for(aq=0,at=af.length;aq<at;aq+=1){au=af[aq];if(ar.isSame(au)){if(ar.removedNodes){for(ao=0;ao<al.removedNodes.length;ao+=1){an=au.addedNodes.indexOf(al.removedNodes[ao]);if(an!==-1){au.addedNodes.splice(an,1);ar.removedNodes-=1}}}au.removedNodes+=ar.removedNodes;au.addedNodes.concat(ar.addedNodes);if(!au.removedNodes&&!au.addedNodes.length){ap=false;for(ao=0;ao<af.length;ao+=1){if(au!==af[ao]&&af[ao].containedIn(au)){ap=true;break}}if(!ap){af.splice(aq,1);am=-1}}av=true;break}}if(!av){af.push(ar);am=1}return am}function ab(am,aq){var ao,an,al,ar=false,ap,at;for(ao=0,al=af.length;!ar&&ao<al;ao+=1){at=af[ao];if(am.containedIn(at)){ap=at.addedNodes;for(an=0;an<ap.length;an+=1){if(ap[an].contains&&ap[an].contains(aq)){ar=true;break}}}}return ar}function J(ap,al){var an,aq,at,ao,au,ar=null,am=0;at=al.attributeName;if(at==="checked"||at==="selected"){ar=k.ElementData.prototype.examineID(al.target);if(A.isPrivacyMatched(ar)){return am}ar=null}if(at==="value"){ar=k.ElementData.prototype.examineID(al.target);ar.currState=ak.getTargetState(al.target)||{};if(ar.currState.value){A.applyPrivacyToTarget(ar)}else{ar=null}}ap.attributes=[{name:at,oldValue:al.oldValue,value:ar?ar.currState.value:al.target.getAttribute(at)}];ao=ap.attributes[0];if(ao.oldValue===ao.value){return am}for(an=0,aq=z.length,au=false;an<aq;an+=1){ar=z[an];if(ap.isSame(ar)){ar.attributes=F(ar.attributes,ao);if(!ar.attributes.length){z.splice(an,1);am=-1}else{if(ab(ap,al.target)){z.splice(an,1);am=-1}}au=true;break}}if(!au&&!ab(ap,al.target)){z.push(ap);am=1}return am}function p(ao){var aq,al,ap,am,an;if(!ao||!ao.length){return}if(c){D+=ao.length;return}for(aq=0,al=ao.length;aq<al&&D<K;aq+=1){am=ao[aq];an=new k.Xpath(am.target);if(an){ap=an.fullXpathList;if(ap.length&&ap[0][0]==="html"){switch(am.type){case"characterData":case"childList":D+=S(an,am);break;case"attributes":D+=J(an,am);break;default:ak.clog("Unknown mutation type: "+am.type);break}}}}if(D>=K){c=true;D+=al-aq}}function x(){var al;al=new window.MutationObserver(function(am){if(am){p(am);ak.clog("Processed ["+am.length+"] mutation records.");E.invokeMutationCallbacks(am)}});return al}function n(al){var am=t.call(this,al);if(C&&am){C.observe(am,M)}return am}function N(){if(!C){return null}C.observe(window.document,M);if(!t&&ak.getValue(i,"options.captureShadowDOM",false)){t=Element.prototype.attachShadow;Element.prototype.attachShadow=n}q=true;return C}function l(an){var ap,al,ao,at,ar,am,aq=j.getCoreConfig();j.subscribe("configupdated",G);A=E.getService("message");i=an;i.options=ak.mixin({},g,i.options);a=a&&ak.getValue(i,"diffEnabled",true);K=ak.getValue(i.options,"maxMutations",100);if(a){M=ak.getValue(i,"diffObserverConfig",ae);C=x();T.push(window)}am=i.options.captureShadowDOM&&Element.prototype.attachShadow;if(am&&window.ShadyDOM&&window.ShadyDOM.inUse){i.options.captureShadowDOM=false;am=false}if(am){for(ao in aq.modules){if(aq.modules.hasOwnProperty(ao)){ar=aq.modules[ao].events||[];for(ap=0,al=ar.length;ap<al;ap+=1){if(ar[ap].attachToShadows){at=ar[ap].name;if(ak.indexOf(B,at)===-1){B.push(at)}}}}}}N();U=true}function Y(){j.unsubscribe("configupdated",G);if(C){C.disconnect();C=null}if(t&&Element.prototype.attachShadow===n){Element.prototype.attachShadow=t;t=null}U=false}function r(){var al;al="tlt-"+ak.getSerialNumber();return al}function Z(an,am,al){var ap,ar,aq,ao,au,at=[];if(!an||!am){return at}if(al&&al.length===2){ar=al[0];aq=al[1]}ao=an.querySelectorAll(am);if(ao&&ao.length){for(ap=ao.length-1;ap>=0;ap-=1){au=ao[ap];if(!ar){at.push(au)}else{if(au[ar]===aq){at.push(au)}}}}return at}function h(ap,an,ao){var am,al,aq;aq=Z(ap,an,ao);for(am=aq.length-1;am>=0;am-=1){al=aq[am];al.parentNode.removeChild(al)}return ap}function aj(ao,am){var an,al,aq=Z(ao,"img"),ap=new RegExp("^data:image/(.*?);base64");for(an=0;an<aq.length;an++){al=aq[an];if(ap.test(al.src)&&(al.src.length>am)){al.src="";al.setAttribute("removedByUIC",true)}}return ao}function R(an,al){var am,ao;for(am=0;an.hasChildNodes()&&am<an.childNodes.length;am+=1){ao=an.childNodes[am];if(ao.nodeType===al){an.removeChild(ao);am-=1}else{if(ao.hasChildNodes()){R(ao,al)}}}return an}function ad(an){var ao,am,al=null;if(!an){return al}switch(an.nodeType){case 1:ao=an.ownerDocument;if(ao&&ao.documentElement===an){am=ao.doctype}break;case 9:am=an.doctype;break;default:break}if(am){al="<!DOCTYPE "+am.name+(am.publicId?' PUBLIC "'+am.publicId+'"':"")+(!am.publicId&&am.systemId?" SYSTEM":"")+(am.systemId?' "'+am.systemId+'"':"")+">"}return al}function ac(ar,at){var aq,an,ap,ao,am,al;if(!at){return}ao=ar.querySelectorAll("input");am=at.querySelectorAll("input");if(am){for(aq=0,al=am.length;aq<al;aq+=1){an=ao[aq];ap=am[aq];switch(ap.type){case"checkbox":case"radio":if(an.checked){ap.setAttribute("checked","checked")}else{ap.removeAttribute("checked")}break;default:ap.setAttribute("value",an.value);if(!ap.getAttribute("type")){ap.setAttribute("type","text")}break}}}}function m(ar,at){var ao,al,aq,am,an,ap;if(!ar||!at){return}am=ar.querySelectorAll("textarea");ap=at.querySelectorAll("textarea");if(am&&ap){for(ao=0,al=am.length;ao<al;ao+=1){aq=am[ao];an=ap[ao];an.setAttribute("value",aq.value);an.value=an.textContent=aq.value}}}function V(al,aq){var am,at,ar,au,ao,an,ap;if(!al||!aq){return}at=al.querySelectorAll("select");au=aq.querySelectorAll("select");if(at){for(ao=0,ap=at.length;ao<ap;ao+=1){am=at[ao];ar=au[ao];for(an=0;an<am.options.length;an+=1){if(an===am.selectedIndex||am.options[an].selected){ar.options[an].setAttribute("selected","selected")}else{ar.options[an].removeAttribute("selected")}}}}}function H(am,an){var al,ao=null;if(am){al=am.nodeType||-1;switch(al){case 11:ao=am.innerHTML;break;case 9:ao=am.documentElement?am.documentElement.outerHTML:"";break;case 1:ao=an?am.innerHTML:am.outerHTML;break;default:ao=null;break}}return ao}function ai(an){var al,am=false;if(an&&typeof an==="object"){al=an.nodeType||-1;switch(al){case 9:case 1:am=true;break;default:am=false;break}}return am}function b(at,aC,am){var aw,av,ax,aD,au=["iframe","frame"],aB,an,aq,aA,ao,az,ap={frames:[]},aE,ar,al;for(av=0;av<au.length;av+=1){aD=au[av];aE=at.querySelectorAll(aD);ar=aC.querySelectorAll(aD);if(aE){for(aw=0,ax=aE.length;aw<ax;aw+=1){try{aB=aE[aw];an=ak.getIFrameWindow(aB);if(an&&an.document&&an.location.href!=="about:blank"){aq=an.document;aA=y(aq,aq,"",am);ao=r();ar[aw].setAttribute("tltid",ao);aA.tltid=ao;ar[aw].removeAttribute("srcdoc");al=ak.getOriginAndPath(aq.location);aA.host=al.origin;aA.url=E.normalizeUrl("",al.path,12);aA.charset=aq.characterSet||aq.charset;az=ar[aw].getAttribute("src");if(!az){az=an.location.href;ar[aw].setAttribute("src",az)}if(!aA.root){aA.root="<html></html>"}ap.frames=ap.frames.concat(aA.frames);delete aA.frames;ap.frames.push(aA)}}catch(ay){}}}}return ap}function ag(am){var an,al,ao;am.TLTListeners=am.TLTListeners||{};for(an=0,al=B.length;an<al;an+=1){ao=B[an];if(!am.TLTListeners[ao]){d.subscribe(ao,am,P);am.TLTListeners[ao]=true}}}function e(am,aw,ax,ap){var aq,au,an,ar,al,ao,at={shadows:[]};if(!am||(!ap&&!am.children)){return at}if(ap){al=[am]}else{al=am.children}for(aq=0,au=al.length;aq<au;aq+=1){ar=al[aq];if(ar.shadowRoot){ao=new k.Xpath(ar);an=y(ar.ownerDocument,ar.shadowRoot,"",ax);at.shadows.push({root:an.root,originalSize:an.originalSize,xpath:ao.xpath});at.shadows=at.shadows.concat(an.shadows);ag(ar.shadowRoot);if(a){try{C.observe(ar.shadowRoot,M);ar.shadowRoot.TLTListeners.mutation=true;if(ak.indexOf(O,ar)===-1){O.push(ar)}}catch(av){ak.clog("Failed to observe shadow root.",av,ar)}}}an=e(ar,null,ax);at.shadows=at.shadows.concat(an.shadows)}return at}function ah(ap){var ao,an,aq,av,ar,al,at,am,au=0;if(!ap){return au}if(ap.root){au+=ap.root.length;if(ap.frames){at=ap.frames;for(ao=0,aq=at.length;ao<aq;ao+=1){if(at[ao].root){au+=at[ao].root.length}}}}else{if(ap.diffs){for(ao=0,aq=ap.diffs.length;ao<aq;ao+=1){al=ap.diffs[ao];au+=al.xpath.length;if(al.root){au+=al.root.length}else{if(al.attributes){for(an=0,av=al.attributes.length;an<av;an+=1){ar=al.attributes[an];au+=ar.name.length;if(ar.value){au+=ar.value.length}}}}}}}if(ap.shadows){am=ap.shadows;for(ao=0,aq=am.length;ao<aq;ao+=1){if(am[ao].root){au+=am[ao].root.length}}}return au}function X(){var ao,an,al,am;for(ao=0,al=af.length;ao<al&&z.length;ao+=1){am=af[ao];for(an=0;an<z.length;an+=1){if(z[an].containedIn(am)){z.splice(an,1);an-=1}}}}function o(ao){var an,al,am,ap,aq=[];if(!ao||!ao.children){return aq}ap=ao.children;for(an=0,al=ap.length;an<al;an+=1){am=ap[an];if(am.shadowRoot){if(!am.shadowRoot.TLTListeners){aq.push([am,am.shadowRoot])}aq=aq.concat(o(am.shadowRoot))}aq=aq.concat(o(am))}return aq}function I(ar,an){var ao,al,ap,aq,am;if(!ar||!an){return}if(!an.captureShadowDOM){return}am=o(ar);for(ao=0,al=am.length,ap=[];ao<al;ao+=1){aq=e(am[ao][0],null,an,true);ap=ap.concat(aq.shadows)}return ap}function s(aq,an){var ar,am,ap,ao,al;ar=y(aq,aq,null,an);if(!ar){ar={}}ar.charset=aq.characterSet||aq.charset;am=ak.getOriginAndPath(aq.location);ar.host=am.origin;ar.url=E.normalizeUrl("",am.path,12);return ar}function Q(aA){var aq,at,ay={fullDOM:false,diffs:[],attributeDiffs:{}},ax,az,aw,ar,an,au,am,ap,av=new RegExp("^data:image/(.*?);base64");aa(af);X();ar=aA.captureShadowDOM;aA.captureShadowDOM=false;for(aq=0,at=af.length;aq<at;aq+=1){am=af[aq];au=k.getNodeFromID(am.xpath,-2);if(!au){continue}if(am.isShadowHost){au=au.shadowRoot;if(!au.TLTListeners){continue}}if(au===window.document.body||au===window.document.documentElement){aA.captureShadowDOM=ar;return s(window.document,aA)}ax=y(window.document,au,am,aA);delete ax.originalSize;if(ax.shadows&&ax.shadows.length===0){delete ax.shadows}if(ax.frames&&ax.frames.length===0){delete ax.frames}ax.xpath=am.xpath;ay.diffs.push(ax)}function ao(aC,aB){if(!aC||!aC.name){return}ay.attributeDiffs[ax.xpath][aC.name]={value:aC.value}}function al(aE){var aC,aB,aD;for(aC=0,aD=aE.length;aC<aD;aC+=1){aB=aE[aC];if(aB.name==="src"&&av.test(aB.value)&&aB.value.length>aA.discardBase64){aB.value="";aE.push({name:"removedByUIC",value:true});break}}return aE}for(aq=0,at=z.length;aq<at;aq+=1){am=z[aq];az=W(am.attributes,"id");if(az>-1){au=k.getNodeFromID(am.xpath,-2);if(!au){au=k.getNodeFromID(am.fullXpath,-2)}aw=new k.Xpath(au,false,am.attributes[az].oldValue);am.xpath=aw.xpath}ap=v(am.attributes);if(aA.hasOwnProperty("discardBase64")){au=k.getNodeFromID(am.xpath,-2);if(!au){au=k.getNodeFromID(am.fullXpath,-2)}if(au&&au.tagName.toLowerCase()==="img"&&ap){ap=al(ap)}}ax={xpath:am.xpath,attributes:ap};ay.diffs.push(ax);ay.attributeDiffs[ax.xpath]={};ak.forEach(ax.attributes,ao)}aA.captureShadowDOM=ar;an=I(window.document,aA);if(an&&an.length){ay.shadows=an}return ay}w=function(al){var am=null;if(ai(al)){am=al.cloneNode(true);if(!am&&al.documentElement){am=al.documentElement.cloneNode(true)}}return am};y=function(av,at,aq,ax){var ao=true,am,aw,an,au,ap={},ar,al;if(!av||!at){return ap}aw=H(at);if(aw){ap.originalSize=aw.length}am=w(at,av);if(!am&&at.host){ao=false;al=document.createElement("div");al.id="srph-"+Date.now();al.innerHTML=H(at);am=al}else{if(!am){return ap}}if(am){if(!!ax.removeScripts){h(am,"script");h(am,"noscript")}if(!ax.keepImports){h(am,"link",["rel","import"])}if(!!ax.removeComments){R(am,8)}if(!ax.captureStyle){h(am,"style")}else{if(ax.useACS){f(at,am)}}if(ax.hasOwnProperty("discardBase64")){aj(am,ax.discardBase64)}V(at,am);ac(at,am);m(at,am);am=A.applyPrivacyToNode(am,aq,av);if(!!ax.captureFrames){an=b(at,am,ax)}}if(!!ax.captureShadowDOM){au=e(at,ao?am:null,ax)}if(an){ap=ak.mixin(ap,an)}if(au){ap=ak.mixin(ap,au)}ar=(ad(at)||"")+H(am||at,!ao);ap.root=A.applyPrivacyPatterns(ar);return ap};G=function(){j=E.getService("config");l(j.getServiceConfig("domCapture")||{})};return{init:function(){j=E.getService("config");if(!U){l(j.getServiceConfig("domCapture")||{})}else{}},destroy:function(){Y()},observeWindow:function(al){if(!al){return}if(!ak.getValue(i,"options.captureFrames",false)&&!(al===window)){return}if(ak.indexOf(T,al)===-1){T.push(al);if(C&&q){C.observe(al.document,M)}}},captureDOM:function(am,an){var ao,al,ar=null,ap,at=0;if(!U||(ak.isIE&&document.documentMode<10)){return ar}an=ak.mixin({},i.options,an);am=am||window.document;if(!u||!a||c||an.forceFullDOM){if(C){C.disconnect()}ar=s(am,an);ar.fullDOM=true;ar.forced=!!(c||an.forceFullDOM);u=true;if(C){for(ao=0,al=T.length;ao<al;ao+=1){ap=T[ao];try{C.observe(ap.document,M)}catch(aq){T.splice(ao,1);al=T.length;ao-=1}}}}else{ar=Q(an);ar.fullDOM=ar.diffs?false:true}if(a){ar.mutationCount=D}L();if(an.maxLength){at=ah(ar);if(at>an.maxLength){ar={errorCode:101,error:"Captured length ("+at+") exceeded limit ("+an.maxLength+")."}}}return ar}}});TLT.addService("encoder",function(a){var f={},g=null,b=null,d=false;function e(j){var i=null;if(!j){return i}i=f[j];if(i&&typeof i.encode==="string"){i.encode=a.utils.access(i.encode)}return i}function h(i){f=i;g.subscribe("configupdated",b);d=true}function c(){g.unsubscribe("configupdated",b);d=false}b=function(){g=a.getService("config");h(g.getServiceConfig("encoder")||{})};return{init:function(){g=a.getService("config");if(!d){h(g.getServiceConfig("encoder")||{})}else{}},destroy:function(){c()},encode:function(m,l){var k,i,j={data:null,encoding:null,error:null};if((typeof m!=="string"&&!m)||!l){j.error="Invalid "+(!m?"data":"type")+" parameter.";return j}k=e(l);if(!k){j.error="Specified encoder ("+l+") not found.";return j}if(typeof k.encode!=="function"){j.error="Configured encoder ("+l+") 'encode' method is not a function.";return j}try{i=k.encode(m)}catch(n){j.error="Exception "+(n.name?n.name+" - ":"")+(n.message||n);return j}if(!i||a.utils.getValue(i,"buffer",null)===null){j.error="Encoder ("+l+") returned an invalid result.";return j}j.data=i.buffer;j.encoding=k.defaultEncoding;return j}}});TLT.addService("message",function(y){var W=y.utils,Q=y.getTabId(),c=[],M=0,n=0,h=window.performance&&performance.timeOrigin?Math.round(performance.timeOrigin):y.getStartTime(),G=(new Date()).getTimezoneOffset(),m=y.getService("browserBase"),b=y.getService("browser"),l=y.getService("config"),i=l.getCoreConfig(),D=l.getServiceConfig("message")||{},r=y.normalizeUrl("",window.location.href),S=window.location.hostname,f,x,X=D.hasOwnProperty("privacy")?D.privacy:[],d,J={},T={lower:"x",upper:"X",numeric:"9",symbol:"@"},j=parseFloat((window.devicePixelRatio||1).toFixed(2)),k=window.screen||{},a=k.width||0,B=k.height||0,U=m.getNormalizedOrientation(),o=!W.isiOS?a:Math.abs(U)===90?B:a,H=!W.isiOS?B:Math.abs(U)===90?a:B,P=(window.screen?window.screen.height-window.screen.availHeight:0),O=window.innerWidth||document.documentElement.clientWidth,s=window.innerHeight||document.documentElement.clientHeight,L=false,A={},q=false;function V(){var Y=window.performance&&performance.now?Math.round(performance.now()):(new Date()).getTime()-h;return Y}function g(Z){var Y="";delete Z.timestamp;this.type=Z.type;this.offset=V();if(Z.type===2&&Z.screenview.type==="LOAD"){c.push(V());this.screenviewOffset=0}else{if(c.length){this.screenviewOffset=V()-c[c.length-1];if(Z.type===2&&Z.screenview.type==="UNLOAD"){c.pop()}}else{this.screenviewOffset=0}}if(!this.type){return}this.count=(n+=1);this.fromWeb=true;for(Y in Z){if(Z.hasOwnProperty(Y)){this[Y]=Z[Y]}}}J.PVC_MASK_EMPTY=function(Y){return""};J.PVC_MASK_BASIC=function(Z){var Y="XXXXX";if(typeof Z!=="string"){return""}return(Z.length?Y:"")};J.PVC_MASK_TYPE=function(ac){var Z,ab,Y,aa="";if(typeof ac!=="string"){return aa}Z=ac.split("");for(ab=0,Y=Z.length;ab<Y;ab+=1){if(W.isNumeric(Z[ab])){aa+=T.numeric}else{if(W.isUpperCase(Z[ab])){aa+=T.upper}else{if(W.isLowerCase(Z[ab])){aa+=T.lower}else{aa+=T.symbol}}}}return aa};J.PVC_MASK_EMPTY.maskType=1;J.PVC_MASK_BASIC.maskType=2;J.PVC_MASK_TYPE.maskType=3;J.PVC_MASK_CUSTOM={maskType:4};function e(Y,ab,Z){var aa=J.PVC_MASK_BASIC;if(typeof ab!=="string"){return ab}if(!Y){aa=J.PVC_MASK_BASIC}else{if(Y.maskType===J.PVC_MASK_EMPTY.maskType){aa=J.PVC_MASK_EMPTY}else{if(Y.maskType===J.PVC_MASK_BASIC.maskType){aa=J.PVC_MASK_BASIC}else{if(Y.maskType===J.PVC_MASK_TYPE.maskType){aa=J.PVC_MASK_TYPE}else{if(Y.maskType===J.PVC_MASK_CUSTOM.maskType){if(typeof Y.maskFunction==="string"){aa=W.access(Y.maskFunction)}else{aa=Y.maskFunction}if(typeof aa!=="function"){aa=J.PVC_MASK_BASIC}}}}}}return aa(ab,Z)}function F(Y,Z){var aa;if(!Y||!Z){return}for(aa in Z){if(Z.hasOwnProperty(aa)){if(aa==="value"){Z[aa]=e(Y,Z[aa])}else{delete Z[aa]}}}}function R(Y,Z){return(W.matchTarget(Y,Z)!==-1)}function K(ad){var Z,Y,aa,ac,ab;if(!ad){return""}for(Z=0,Y=d.length;Z<Y;Z+=1){ab=d[Z];ab.cRegex.lastIndex=0;ad=ad.replace(ab.cRegex,ab.replacement)}return ad}function I(af){var ac,Y,ab,Z,ae=false,ad,aa;if(!af||(!af.currState&&!af.prevState)||!af.id){return af}ad=af.prevState;aa=af.currState;for(ac=0,Y=X.length;ac<Y;ac+=1){Z=X[ac];ab=W.getValue(Z,"exclude",false);if(R(Z.targets,af)!==ab){if(ad&&ad.hasOwnProperty("value")){F(Z,ad)}if(aa&&aa.hasOwnProperty("value")){F(Z,aa)}ae=true;break}}if(!ae){if(ad&&ad.value){ad.value=K(ad.value)}if(aa&&aa.value){aa.value=K(aa.value)}}return af}function t(Y){if(!Y||!Y.target){return Y}I(Y.target);return Y}function p(ab,Z){var aa,Y,ad,ac;if(!Z||!ab){return}if(ab.value){ad=e(Z,ab.value,ab);ab.setAttribute("value",ad);ab.value=ad}else{if(Z.maskType===J.PVC_MASK_CUSTOM.maskType){e(Z,"",ab)}}if(ab.checked){ab.removeAttribute("checked")}if(W.getTagName(ab)==="select"){ab.selectedIndex=-1;for(aa=0,Y=ab.options.length;aa<Y;aa+=1){ac=ab.options[aa];ac.removeAttribute("selected");ac.selected=false}}else{if(W.getTagName(ab)==="textarea"){ab.textContent=ab.value}}}function w(aj,ag,ak,ap,ad,af){var al,ai,ah,am,aa,ab,ae=[],an,Y,ac,ao,Z;if(!aj.length&&!ad.length&&!af){return[]}Z=b.queryAll("input, select, textarea",ag);if(!Z||!Z.length){return[]}for(al=0,am=ad.length;al<am;al+=1){ai=Z.indexOf(ad[al]);if(ai!==-1){Z.splice(ai,1)}}if(aj.length){for(al=0,am=Z.length,ae=[];al<am;al+=1){if(Z[al].value){ab=m.ElementData.prototype.examineID(Z[al],true);if(ab.idType===-2){an=new m.Xpath(Z[al],true);an.applyPrefix(ak);ab.id=an.xpath}ae.push({id:ab.id,idType:ab.idType,element:Z[al]})}}}for(al=0,am=aj.length;al<am;al+=1){ac=X[aj[al].ruleIndex];Y=W.getValue(ac,"exclude",false);ao=ac.targets[aj[al].targetIndex];if(typeof ao.id==="string"&&ao.idType===-2){for(ai=0;ai<ae.length;ai+=1){if(ae[ai].idType===ao.idType&&ae[ai].id===ao.id){if(!Y){aa=ae[ai].element;p(aa,ac)}else{ah=Z.indexOf(aa);Z.splice(ah,1)}}}}else{for(ai=0;ai<ae.length;ai+=1){ao.cRegex.lastIndex=0;if(ae[ai].idType===ao.idType&&ao.cRegex.test(ae[ai].id)){aa=ae[ai].element;if(!Y){p(aa,ac)}else{ah=Z.indexOf(aa);Z.splice(ah,1)}}}}}if(af){for(al=0,am=Z.length;al<am;al+=1){p(Z[al],af)}}}function u(ae,aj,ap){var ak,ag,af,aa,Y,ab=[],ad,al,ah,Z,am,ai=[],ao,an,ac;if(!ae||!ap){return null}for(ak=0,al=X.length;ak<al;ak+=1){ah=X[ak];Y=W.getValue(ah,"exclude",false);if(Y){ad=ah}an=ah.targets;for(ag=0,ac=an.length;ag<ac;ag+=1){ao=an[ag];if(typeof ao==="string"){Z=b.queryAll(ao,ae);if(!Y){for(af=0,am=Z.length;af<am;af+=1){aa=Z[af];p(aa,ah)}}else{ab=ab.concat(Z)}}else{if(typeof ao.id==="string"){switch(ao.idType){case -1:case -3:aa=m.getNodeFromID(ao.id,ao.idType,ae);if(!Y){p(aa,ah)}else{ab.push(aa)}break;case -2:ai.push({ruleIndex:ak,targetIndex:ag,exclude:Y});break;default:break}}else{ai.push({ruleIndex:ak,targetIndex:ag,exclude:Y})}}}}w(ai,ae,aj,ap,ab,ad);return ae}function v(ac){var aa,Y,Z,ab=false;if(!ac){return ab}for(aa=0,Y=X.length;aa<Y;aa+=1){Z=X[aa];if(R(Z.targets,ac)){ab=true;break}}return ab}function z(){var ab,aa,Y,ae,af,ad,Z,ac;l=y.getService("config");D=l.getServiceConfig("message")||{};i=l.getCoreConfig();X=D.privacy||[];d=D.privacyPatterns||[];q=W.getValue(D,"shadowDOMCacheEnabled",true);for(ab=0,af=X.length;ab<af;ab+=1){ae=X[ab];Z=ae.targets;for(aa=0,ac=Z.length;aa<ac;aa+=1){ad=Z[aa];if(typeof ad==="object"){if(typeof ad.idType==="string"){ad.idType=+ad.idType}if(typeof ad.id==="object"){ad.cRegex=new RegExp(ad.id.regex,ad.id.flags)}}}}for(Y=d.length,ab=Y-1;ab>=0;ab-=1){ae=d[ab];if(typeof ae.pattern==="object"){ae.cRegex=new RegExp(ae.pattern.regex,ae.pattern.flags)}else{d.splice(ab,1)}}}function C(){if(l.subscribe){l.subscribe("configupdated",z)}z();L=true}function N(){l.unsubscribe("configupdated",z);L=false}function E(ag){var ad=ag.dcid,aa=ag.shadows||[],ac=ag.fullDOM,ah=1,ab,ae,af,Z,Y;if(aa.length===0||!ac){return}for(af in A){if(A.hasOwnProperty(af)){A[af].age+=1}}for(ab=0,ae=aa.length;ab<ae;ab+=1){Z=aa[ab];Y=A[Z.xpath];if(Y&&Y.root===Z.root){Y.hitCount+=1;Y.age-=1;Z.cacheDCID=Y.dcid;delete Z.root}else{A[Z.xpath]={root:Z.root,dcid:ad,hitCount:0,age:0}}}for(af in A){if(A.hasOwnProperty(af)){Y=A[af];if(Y.age>Y.hitCount+ah){delete A[af]}}}}return{init:function(){if(!L){C();try{f=sessionStorage.getItem("tl.TR");x=sessionStorage.getItem("tl.PU");sessionStorage.removeItem("tl.TR");sessionStorage.removeItem("tl.PU")}catch(Y){f=null}}else{}},destroy:function(){N()},applyPrivacyToNode:u,applyPrivacyToMessage:t,applyPrivacyToTarget:I,applyPrivacyPatterns:K,isPrivacyMatched:v,createMessage:function(Y){if(typeof Y.type==="undefined"){throw new TypeError("Invalid queueEvent given!")}if(Y.type===12&&q){E(Y.domCapture)}return t(new g(Y))},wrapMessages:function(Z){var Y={messageVersion:"13.0.0.0",serialNumber:(M+=1),sessions:[{id:y.getPageId(),tabId:Q,startTime:h,timezoneOffset:G,messages:Z,clientEnvironment:{webEnvironment:{libVersion:"6.2.0.2010",buildNote:i.buildNote||"",domain:S,page:r,referrer:document.referrer,mouseMovement:y.isMousemovementDetected(),screen:{devicePixelRatio:j,deviceWidth:o,deviceHeight:H,deviceToolbarHeight:P,width:O,height:s,orientation:U}}}}]},aa=Y.sessions[0].clientEnvironment.webEnvironment;aa.screen.orientationMode=W.getOrientationMode(aa.screen.orientation);if(f){aa.priorPage={page:x,terminationReason:f}}return Y},getCurrentOffset:V}});TLT.addService("serializer",function(b){var d=b.getService("config"),j={},c={},k={json:(function(){if(typeof window.JSON!=="undefined"){return{serialize:window.JSON.stringify,parse:window.JSON.parse}}return{}}())},f=null,i=false;function e(q,o,m){var n,l,p;q=q||[];for(n=0,l=q.length;n<l;n+=1){p=q[n];if(typeof p==="string"){p=b.utils.access(p)}if(typeof p==="function"){o[m]=p;break}}}function h(){var l;if(typeof j.json!=="function"||typeof c.json!=="function"){l=true}else{if(typeof c.json('{"foo": "bar"}')==="undefined"){l=true}else{l=c.json('{"foo": "bar"}').foo!=="bar"}if(typeof c.json("[1, 2]")==="undefined"){l=true}else{l=l||c.json("[1, 2]")[0]!==1;l=l||c.json("[1,2]")[1]!==2}l=l||j.json({foo:"bar"})!=='{"foo":"bar"}';l=l||j.json([1,2])!=="[1,2]"}return l}function a(l){var m;for(m in l){if(l.hasOwnProperty(m)){e(l[m].stringifiers,j,m);e(l[m].parsers,c,m)}}j.json=j.json||k.json.serialize;c.json=c.json||k.json.parse;if(typeof j.json!=="function"||typeof c.json!=="function"){b.fail("JSON parser and/or serializer not provided in the UIC config. Can't continue.")}if(h()){b.fail("JSON stringification and parsing are not working as expected")}if(d){d.subscribe("configupdated",f)}i=true}function g(){j={};c={};if(d){d.unsubscribe("configupdated",f)}i=false}f=function(){d=b.getService("config");a(d.getServiceConfig("serializer"))};return{init:function(){var l;if(!i){l=d?d.getServiceConfig("serializer"):{};a(l)}else{}},destroy:function(){g()},parse:function(m,l){l=l||"json";return c[l](m)},serialize:function(n,m){var l;m=m||"json";l=j[m](n);return l}}});TLT.addModule("TLCookie",function(d){var l={},i=[],k=0,f=true,p=false,h="WCXSID",o="TLTSID",b="CoreID6",s,q,c=null,r,t=d.utils;function a(){var y="123456789",x=t.getRandomString(1,y)+t.getRandomString(31,y+"0");return x}function m(){var z=a(),y=!!l.secureTLTSID,x=l.samesite;t.setCookie(o,z,undefined,undefined,undefined,y,x);return t.getCookieValue(o)}function n(){if(c||!window.cmRetrieveUserID){return}try{window.cmRetrieveUserID(function(y){c=y})}catch(x){c=null}}function g(B){var x,y,A,z;if(!localStorage||!B){return}A=localStorage.getItem(B);if(A){y=A.split("|");x=parseInt(y[0],10);if(Date.now()>x){localStorage.removeItem(B)}else{z=y[1]}}return z}function w(z,y){var x;if(!localStorage||!z){return}y=y||a();x=Date.now()+k;localStorage.setItem(z,x+"|"+y);return g(z)}function j(){return i}function e(x){i=[];f=t.getValue(x,"sessionIDUsesCookie",true);p=t.getValue(x,"sessionIDUsesStorage",false);if(x.tlAppKey){r=x.tlAppKey;i.push({name:"X-Tealeaf-SaaS-AppKey",value:r})}if(x.visitorCookieName){b=x.visitorCookieName}if(x.wcxCookieName){h=x.wcxCookieName}s=t.getCookieValue(h);if(s){i.push({name:"X-WCXSID",value:s})}if(x.sessionizationCookieName){o=x.sessionizationCookieName}if(p){k=t.getValue(x,"sessionIDStorageTTL",600000);try{q=g(o)}catch(z){p=false}}if(!q&&f){q=t.getCookieValue(o)}if(!q){if(s){o=h;q=s}else{if(p){try{q=w(o)}catch(y){p=false}}if(!q&&f){q=m()}}}d.setSessionCookieInfo(o,q);if(!q){q="Check7UIC7Cookie7Configuration77"}i.push({name:"X-Tealeaf-SaaS-TLTSID",value:q});if(i.length){TLT.registerBridgeCallbacks([{enabled:true,cbType:"addRequestHeaders",cbFunction:j}])}}function u(C){var z,y,x=false,B,A=l.appCookieWhitelist;if(!A||!A.length){return x}for(z=0,y=A.length;z<y&&!x;z+=1){B=A[z];if(B.regex){if(!B.cRegex){B.cRegex=new RegExp(B.regex,B.flags)}B.cRegex.lastIndex=0;x=B.cRegex.test(C)}else{x=(B===C)}}return x}function v(){var B,A,C,D={},y,H=document.cookie,z=[],G="",x="";if(!H){return}z=H.split("; ");for(B=0,C=z.length;B<C;B+=1){y=z[B];A=y.indexOf("=");if(A>=0){try{G=decodeURIComponent(y.substr(0,A))}catch(F){G=y.substr(0,A)}}x=y.substr(A+1);if(u(G)){try{D[G]=decodeURIComponent(x)}catch(E){D[G]=x}}}if(c&&!D[b]){D[b]=c}d.post({type:14,cookies:D})}return{init:function(){l=d.getConfig()||{};e(l);n()},destroy:function(){if(p){w(o,q)}window.setTimeout(function(){TLT.registerBridgeCallbacks([{enabled:false,cbType:"addRequestHeaders",cbFunction:j}])})},onevent:function(x){switch(x.type){case"screenview_load":if(t.getValue(l,"appCookieWhitelist.length",0)){n();v()}break;default:break}}}});TLT.addModule("dataLayer",function(b){var c=false,m,l=b.utils,f,k,n,e;function a(){var o=null;if(!m.dataObject){return o}switch(typeof m.dataObject){case"object":o=m.dataObject;break;case"function":try{o=m.dataObject()}catch(p){}break;default:break}return o}function d(s,t){var p,o,r,q=-1;if(!s||!t){return q}for(p=0,o=t.length;p<o&&q===-1;p+=1){r=t[p];switch(typeof r){case"string":if(s===r){q=p}break;case"object":if(!r.cRegex){r.cRegex=new RegExp(r.regex,r.flags)}r.cRegex.lastIndex=0;if(r.cRegex.test(s)){q=p}break;default:break}}return q}function j(o,p){p=p||k;return(d(o,p)>=0)}function g(o,p){p=p||n;return(d(o,p)>=0)}function i(q,p){var t,s,o,r={};if(!q){return null}if(!p){p=1}else{p+=1;if(p>5){return"Serialization error: Exceeds nesting limit (5)."}}for(t in q){if(Object.prototype.hasOwnProperty.call(q,t)){if(!j(t)){s=q[t];switch(typeof s){case"object":if(s instanceof Node){if(s.nodeName){r[t]=s.nodeName.toLowerCase();if(s.id){r[t]+="#"+s.id}}else{r[t]="DOMNode: unknown"}}else{if(s instanceof Window){r[t]="DOMWindow: "+s.location.href}else{try{o=JSON.stringify(s);r[t]=i(s,p)}catch(u){r[t]="Serialization error: "+u.message}}}break;case"function":break;case"undefined":break;default:r[t]=s;break}}else{}}}return r}function h(p){var o={type:19,dataLayer:{}};if(!c){return}p=p||a();if(!p){return}o.dataLayer=i(p);b.post(o);if(e){clearTimeout(e);e=null}}return{init:function(){m=b.getConfig();k=m.propertyBlocklist||[];n=m.screenviewBlocklist||[];f=l.getValue(m,"logDelay",500);if(typeof m.dataObject==="string"){m.dataObject=l.access(m.dataObject)}e=null;c=true},destroy:function(){m=null;if(e){clearTimeout(e);e=null}c=false},onevent:function(o){if(typeof o!=="object"||!o.type){return}switch(o.type){case"load":e=null;break;case"screenview_load":if(!g(o.name)&&!e){e=setTimeout(h,f)}break;case"logDataLayer":if(!o.data||typeof o.data==="object"){h(o.data)}break;case"unload":if(e){h()}break;default:break}},onmessage:function(o){}}});if(TLT&&typeof TLT.addModule==="function"){TLT.addModule("overstat",function(e){var y=e.utils,p={},A={updateInterval:250,hoverThreshold:1000,hoverThresholdMax:2*60*1000,gridCellMaxX:10,gridCellMaxY:10,gridCellMinWidth:20,gridCellMinHeight:20},d=50;function x(F){var G=e.getConfig()||{},H=G[F];return typeof H==="number"?H:A[F]}function E(L,F){var K=y.getValue(L,"webEvent.target",{}),G=y.getValue(K,"element.tagName")||"",H=G.toLowerCase()==="input"?y.getValue(K,"element.type"):"",J=y.getTlType(K),I={type:9,event:{hoverDuration:L.hoverDuration,hoverToClick:y.getValue(F,"hoverToClick")},target:{id:K.id||"",idType:K.idType||"",name:K.name||"",tlType:J,type:G,subType:H,position:{width:y.getValue(K,"element.offsetWidth",0),height:y.getValue(K,"element.offsetHeight",0),relXY:L.relXY}}};if(!I.target.id){return}if(K.accessibility){I.target.accessibility=K.accessibility}if(K.attributes){I.target.attributes=K.attributes}e.post(I)}function i(F){if(F&&!F.nodeType&&F.element){F=F.element}return F}function s(F){F=i(F);return !F||F===document.body||F===document.html||F===document}function j(F){F=i(F);if(!F){return null}return F.parentNode}function n(F){F=i(F);if(!F){return null}return F.offsetParent||F.parentElement||j(F)}function v(G,H){var F=0;if(!H||H===G){return false}H=j(H);while(!s(H)&&F++<d){if(H===G){return true}H=j(H)}if(F>=d){y.clog("Overstat isChildOf() hit iterations limit")}return false}function C(F){if(F.nativeEvent){F=F.nativeEvent}return F}function h(F){F=i(F);if(!F){return -1}return F.nodeType||-1}function B(F){F=i(F);if(!F){return""}return F.tagName?F.tagName.toUpperCase():""}function m(G){var F=B(G);return h(G)!==1||F==="TR"||F==="TBODY"||F==="THEAD"}function g(F){if(!F){return""}if(F.xPath){return F.xPath}F=i(F);return e.getXPathFromNode(F)}function z(G,F){var H=p[G];if(H&&H[F]){return H[F]()}}function u(G,I,H,F){this.xPath=G!==null?g(G):"";this.domNode=G;this.hoverDuration=0;this.hoverUpdateTime=0;this.gridX=Math.max(I,0);this.gridY=Math.max(H,0);this.parentKey="";this.updateTimer=-1;this.disposed=false;this.childKeys={};this.webEvent=F;this.getKey=function(){return this.xPath+":"+this.gridX+","+this.gridY};this.update=function(){var K=new Date().getTime(),J=this.getKey();if(this.hoverUpdateTime!==0){this.hoverDuration+=K-this.hoverUpdateTime}this.hoverUpdateTime=K;clearTimeout(this.updateTimer);this.updateTimer=setTimeout(function(){z(J,"update")},x("updateInterval"))};this.dispose=function(J){clearTimeout(this.updateTimer);delete p[this.getKey()];this.disposed=true;if(J){var K=this.clone();p[K.getKey()]=K;K.update()}};this.process=function(M){clearTimeout(this.updateTimer);if(this.disposed){return false}var K=false,L=this,J=0;if(this.hoverDuration>=x("hoverThreshold")){this.hoverDuration=Math.min(this.hoverDuration,x("hoverThresholdMax"));K=true;E(this,{hoverToClick:!!M});while(typeof L!=="undefined"&&J++<d){L.dispose(M);L=p[L.parentKey]}if(J>=d){y.clog("Overstat process() hit iterations limit")}}else{this.dispose(M)}return K};this.clone=function(){var J=new u(this.domNode,this.gridX,this.gridY);J.parentKey=this.parentKey;return J}}function D(H,F,I,G){return new u(H,F,I,G)}function r(H){if(H&&H.position){return{x:H.position.x,y:H.position.y}}H=i(H);var F=H&&H.getBoundingClientRect?H.getBoundingClientRect():null,L=F?F.left:(H?H.offsetLeft:0),K=F?F.top:(H?H.offsetHeight:0),N=L,M=K,I=0,G=0,J=n(H),O=0;while(J&&O++<d){if(s(J)){break}I=J.offsetLeft-(J.scrollLeft||0);G=J.offsetTop-(J.scrollTop||0);if(I!==N||G!==M){L+=I;K+=G;N=I;M=G}J=n(J)}if(O>=d){y.clog("Overstat calculateNodeOffset() hit iterations limit")}if(isNaN(L)){L=0}if(isNaN(K)){K=0}return{x:L,y:K}}function a(J,H,G){J=i(J);var I=r(J),F=H-I.x,K=G-I.y;if(!isFinite(F)){F=0}if(!isFinite(K)){K=0}return{x:F,y:K}}function w(F,G){F=Math.floor(Math.min(Math.max(F,0),1)*10000)/10000;G=Math.floor(Math.min(Math.max(G,0),1)*10000)/10000;return F+","+G}function f(J,M,L){J=i(J);var H=J.getBoundingClientRect?J.getBoundingClientRect():null,R=H?H.width:J.offsetWidth,I=H?H.height:J.offsetHeight,K=R&&R>0?Math.max(R/x("gridCellMaxX"),x("gridCellMinWidth")):x("gridCellMinWidth"),O=I&&I>0?Math.max(I/x("gridCellMaxY"),x("gridCellMinHeight")):x("gridCellMinHeight"),G=Math.min(Math.floor(M/K),x("gridCellMaxX")),F=Math.min(Math.floor(L/O),x("gridCellMaxY")),Q=R>0?M/R:0,N=I>0?L/I:0,P="";if(!isFinite(G)){G=0}if(!isFinite(F)){F=0}P=w(Q,N);return{x:G,y:F,relXY:P}}function c(J){var K=J,L=J.getKey(),G={},H=null,I=false,F=0;G[L]=true;while(typeof K!=="undefined"&&F++<d){G[K.parentKey]=true;if(K.parentKey===""||K.parentKey===K.getKey()){break}if(F>=d){y.clog("Overstat cleanupHoverEvents() hit iterations limit")}K=p[K.parentKey]}for(H in p){if(p.hasOwnProperty(H)&&!G[H]){K=p[H];if(K){if(!I){I=K.process()}else{K.dispose()}}}}}function t(G,I){var J=null,F=null,H=false;for(F in p){if(p.hasOwnProperty(F)){J=p[F];if(J&&J.domNode===G&&J.getKey()!==I){if(!H){H=J.process()}else{J.dispose()}}}}}function b(J,H,I){if(!H){H=J.target}if(s(H)){return null}if(y.isiOS||y.isAndroid){return null}var F,O,K,N,L,M,G;if(!m(H)){F=a(H,J.position.x,J.position.y);O=f(H,F.x,F.y);K=new u(H,O.x,O.y,J);K.relXY=O.relXY;N=K.getKey();if(p[N]){K=p[N]}else{p[N]=K}K.update();if(!I){G=n(H);if(G){M=b(J,G,true);if(M!==null){L=M.getKey();N=K.getKey();if(N!==L){K.parentKey=L}}}c(K)}}else{K=b(J,n(H),I)}return K}function q(F){F=C(F);if(v(F.target,F.relatedTarget)){return}t(F.target)}function l(H){var I=null,F=null,G=false;for(F in p){if(p.hasOwnProperty(F)){I=p[F];if(I){if(!G){G=I.process(true)}else{I.dispose()}}}}}function o(F){e.performFormCompletion(true)}function k(G){var F=y.getValue(G,"target.id");if(!F){return}switch(G.type){case"mousemove":b(G);break;case"mouseout":q(G);break;case"click":l(G);break;case"submit":o(G);break;default:break}}return{init:function(){},destroy:function(){var F;for(F in p){if(p.hasOwnProperty(F)){p[F].dispose();delete p[F]}}},onevent:function(F){if(typeof F!=="object"||!F.type){return}k(F)},onmessage:function(F){},createHoverEvent:D,cleanupHoverEvents:c,eventMap:p}})}else{}if(TLT&&typeof TLT.addModule==="function"){TLT.addModule("performance",function(b){var i={loadReceived:false,unloadReceived:false,perfEventSent:false},d=null,g=0,q,n=b.utils,j=window.location.protocol==="https:",f=[],o,e=0,h,m={enabled:false,resourceTypes:[],blacklist:[]};function s(u){var w=0,t={},x="",v=0;if(!u||typeof u!=="object"||!u.navigationStart){return{}}w=u.navigationStart;for(x in u){if(Object.prototype.hasOwnProperty.call(u,x)||typeof u[x]==="number"){v=u[x];if(typeof v==="number"&&v&&x!=="navigationStart"){t[x]=v-w}else{t[x]=v}}}return t}function c(v){var w=0,u,t;if(v){u=(v.responseEnd>0&&v.responseEnd<v.domLoading)?v.responseEnd:v.domLoading;t=v.loadEventStart;if(n.isNumeric(u)&&n.isNumeric(t)&&t>u){w=t-u}}return w}function a(u){var t=b.getStartTime();if(u.timestamp>t&&!g){g=u.timestamp-t}}function k(C,w){var z,B,x,v={type:7,performance:{}},A,y,E,D,t,u;if(!C||i.perfEventSent){return}E=C.performance||{};u=E.timing;y=E.navigation;if(u){if(!u.loadEventStart&&!w){return}v.performance.timing=s(u);v.performance.timing.renderTime=c(u)}else{if(q.calculateRenderTime){v.performance.timing={renderTime:g,calculated:true}}else{return}}A=v.performance.timing;if(q.renderTimeThreshold&&A.renderTime>q.renderTimeThreshold){A.invalidRenderTime=A.renderTime;delete A.renderTime}if(E.getEntriesByType){D=E.getEntriesByType("paint");for(z=0,B=D.length;z<B;z+=1){t=D[z];if(t.startTime>0){A[t.name]=Math.round(t.startTime)}}}if(!A["first-paint"]&&A.msFirstPaint){A["first-paint"]=A.msFirstPaint;delete A.msFirstPaint}if(y){switch(y.type){case 0:x="NAVIGATE";break;case 1:x="RELOAD";break;case 2:x="BACKFORWARD";break;default:x="UNKNOWN";break}v.performance.navigation={type:x,redirectCount:y.redirectCount}}b.post(v);i.perfEventSent=true;if(d){clearInterval(d);d=null}}function p(v){var u={type:20,violations:{}},t=u.violations;if(!v||!v.length){return}t.total=v.length;v.splice(10);t.urls=v;b.post(u)}function l(z){var w,v,x,u=h.blacklist,t,y,A;if(!z||!z.name){return}v=z.name;x=z.initiatorType;if(j&&v.indexOf("http:")===0){f.push(v)}if(h.hasOwnProperty("maxAlerts")&&e>=h.maxAlerts){return}if(h.hasOwnProperty("threshold")&&z.duration<h.threshold){return}if((z.transferSize&&z.transferSize<z.encodedBodySize)||z.responseStart===z.responseEnd){return}if(h.resourceTypes.length>0&&h.resourceTypes.indexOf(x)===-1){return}y=false;for(w=0;w<u.length;w+=1){t=u[w];switch(typeof t){case"object":if(!t.cRegex){t.cRegex=new RegExp(t.regex,t.flags)}t.cRegex.lastIndex=0;if(t.cRegex.test(v)){y=true}break;case"string":if(v.indexOf(t)!==-1){y=true}break;default:break}}if(!y){e+=1;A={urlNormalized:b.normalizeUrl(v,17),url:v,initiator:x,duration:Math.round(z.duration),responseEnd:Math.round(z.responseEnd)};if(typeof z.transferSize!=="undefined"){A.transferSize=z.transferSize;if(z.duration){A.bps=Math.round(z.transferSize/z.duration*1000)}}b.post({type:17,resourceData:A})}}function r(){var t;if(!h.enabled||(typeof window.PerformanceObserver!=="function")){return}o=new window.PerformanceObserver(function(u,v){n.forEach(u.getEntries(),l)});t=window.performance.getEntriesByType("resource");setTimeout(function(){n.forEach(t,l)});o.observe({entryTypes:["resource"]})}return{init:function(){q=b.getConfig();h=n.mixin({},m,q.performanceAlert)},destroy:function(){if(d){clearInterval(d);d=null;k(window,true)}if(o){o.disconnect()}if(j){p(f);f=[]}q=null},onevent:function(t){if(typeof t!=="object"||!t.type){return}switch(t.type){case"load":i.loadReceived=true;a(t);if(!i.perfEventSent&&!d){d=setInterval(function(){if(b.isInitialized()){k(window)}},n.getValue(q,"delay",2000))}r();break;case"screenview_load":if(!i.perfEventSent){k(window)}break;case"unload":i.unloadReceived=true;if(!i.perfEventSent){k(window)}break;default:break}},onmessage:function(t){}}})}else{}TLT.addModule("replay",function(aj){var ab=aj.utils,O=0,ao={scale:0,timestamp:0},aE={},az=null,D=[],U=0,Y=true,X=null,an=null,v=0,ac="",au="",o=null,W=(new Date()).getTime(),t=0,aw=null,r="root",ae,I=null,ai=null,ap=null,Z=null,P=null,f={inFocus:false},ay=null,K=aj.getConfig()||{},i=ab.getValue(K,"viewPortWidthHeightLimit",10000),m=1,Q=1,S,g={},u=ab.getValue(K,"mousemove")||{},ah=u.sampleRate,L=u.ignoreRadius,J=null,h=[],w=[],b={},n=0,H=1000,d=0,ax=[],x=[],C=document.visibilityState==="visible"?true:false;function aa(){var aF;for(aF in aE){if(aE.hasOwnProperty(aF)){aE[aF].visitedCount=0}}}function aD(aH){var aF=false,aG="|button|image|submit|reset|",aI=null;if(typeof aH!=="object"||!aH.type){return aF}switch(aH.type.toLowerCase()){case"input":aI="|"+(aH.subType||"")+"|";aF=(aG.indexOf(aI.toLowerCase())!==-1);break;case"select":case"textarea":aF=false;break;default:aF=true;break}return aF}function av(aG){var aF=[];aG=aG.parentNode;while(aG){aF.push(aG);aG=aG.parentNode}return aF}function l(aF){return ab.some(aF,function(aH){var aG=ab.getTagName(aH);if(aG==="a"||aG==="button"){return aH}return null})}function F(aF){var aG=aF.type,aH=aF.target;if(typeof aG==="string"){aG=aG.toLowerCase()}else{aG="unknown"}if(aG==="blur"){aG="focusout"}if(aG==="change"){if(aH.type==="INPUT"){switch(aH.subType){case"text":case"date":case"time":aG=aH.subType+"Change";break;default:aG="valueChange";break}}else{if(aH.type==="TEXTAREA"){aG="textChange"}else{aG="valueChange"}}}return aG}function ar(aF,aJ,aG){var aH,aI,aK;if(document.querySelector(aF)){return true}for(aH=0;aH<aJ.length;aH++){aK=aJ[aH];if(aK.querySelector(aF)){return true}}for(aH=0;aH<aG.length;aH++){aI=aG[aH];if(aI.querySelector(aF)){return true}}return false}function aq(aJ,aO,aG){var aM,aK,aP,aI,aQ,aF,aN,aH,aL;for(aM=0;aM<x.length;aM++){aN=x[aM];aK=aN.delayUntil.selector;aP=ab.getValue(aN.delayUntil,"exists",true);aI=aN.delayUntil.dualSnapshot||false;aQ=ar(aK,aO,aG);aF=aN.lastStatus||false;aH=aN.config||{};aL=aN.timerId;if((aP===true&&aQ===true&&aF===false)||(aP===false&&aQ===false&&aF===true)||(aI===true&&aQ===true&&aF===false)||(aI===true&&aQ===false&&aF===true)){aj.performDOMCapture(document,aH);if(!aI||aQ===false){x.splice(aM--,1);if(x.length===0){TLT.registerMutationCallback(aq,false)}if(aL){clearTimeout(aL)}}}aN.lastStatus=aQ}}function A(aI){var aH,aF,aG;for(aH=0;aH<x.length;aH+=1){aF=x[aH];aG=aF.config||{};if(aG.dcid===aI){aG.timeoutExpired=true;aj.performDOMCapture(document,aG);x.splice(aH--,1);if(x.length===0){TLT.registerMutationCallback(aq,false)}}}}function k(aF,aH,aG){var aJ=null,aI;if(!aF){return aJ}aH=aH||{};aH.eventOn=Y;Y=false;if(aG){aJ="dcid-"+ab.getSerialNumber()+"."+(new Date()).getTime()+"s";if(typeof aG==="object"){aH.dcid=aJ;aI={config:aH,delayUntil:aG,lastStatus:false};x.push(aI);TLT.registerMutationCallback(aq,true);if(typeof aG.timeout!=="undefined"&&aG.timeout>=0){aI.timerId=window.setTimeout(function(){A(aJ)},aG.timeout)}}else{window.setTimeout(function(){aH.dcid=aJ;aj.performDOMCapture(aF,aH)},aG)}}else{delete aH.dcid;aJ=aj.performDOMCapture(aF,aH)}return aJ}function T(aG,aI){var aH,aF,aJ,aK;for(aH=0,aF=aG.length;aH<aF;aH+=1){aJ=aG[aH];if(aI&&aI.indexOf("#")===0){aK=location.pathname+aI}else{if(typeof aI==="undefined"||aI===r){aK=location.pathname+location.hash}else{aK=aI}}aK=aj.normalizeUrl(aK,2);switch(typeof aJ){case"object":if(!aJ.cRegex){aJ.cRegex=new RegExp(aJ.regex,aJ.flags)}aJ.cRegex.lastIndex=0;if(aJ.cRegex.test(aK)){return true}break;case"string":if(aJ===aK){return true}break;default:break}}return false}function ak(){var aF=false,aG;if(!u.enabled||window.hasOwnProperty("ontouchstart")){return}if(h.length===0){return}if(n>=H){aF=true}aG={type:18,mousemove:{elements:w.slice(0),data:h.slice(0),config:{ignoreRadius:u.ignoreRadius,sampleRate:u.sampleRate},limitReached:aF,maxInactivity:d}};aj.post(aG);w.length=0;h.length=0;b={};d=0;return aG}function aB(aG,aS,aH){var aN,aL,aV=false,aI={},aU=false,aK,aP,aR=null,aM=0,aQ,aO,aF,aJ,aT;if(!aG||(!aS&&!aH)){return aR}if(!aS&&!(aG==="load"||aG==="unload")){return aR}K=aj.getConfig()||{};aU=ab.getValue(K,"domCapture.enabled",false);if(!aU||ab.isLegacyIE){return aR}aT=ab.getValue(K,"domCapture.screenviewBlacklist",[]);if(T(aT,aH)){return aR}aP=ab.getValue(K,"domCapture.triggers")||[];for(aN=0,aQ=aP.length;!aV&&aN<aQ;aN+=1){aK=aP[aN];if(aK.event===aG){if(aG==="load"||aG==="unload"){if(aK.screenviews){aF=aK.screenviews;for(aL=0,aJ=aF.length;!aV&&aL<aJ;aL+=1){aO=aF[aL];switch(typeof aO){case"object":if(!aO.cRegex){aO.cRegex=new RegExp(aO.regex,aO.flags)}aO.cRegex.lastIndex=0;aV=aO.cRegex.test(aH);break;case"string":aV=(aO===aH);break;default:break}}}else{aV=true}}else{if(aK.targets){aV=(-1!==ab.matchTarget(aK.targets,aS))}else{aV=true}}}if(aK.event==="change"&&aK.delayUntil){ax=ax.concat(aK.targets)}}if(aV){aM=aK.delay||aK.delayUntil||(aK.event==="load"?7:0);aI.forceFullDOM=!!aK.fullDOMCapture;aR=k(window.document,aI,aM);if(aR){ak()}}return aR}function at(aN){var aH,aI=ab.getValue(aN,"webEvent.target",{}),aF=aI.type,aJ=aI.subType||"",aG=ab.getTlType(aI),aK=av(ab.getValue(aI,"element")),aM=null,aL=ab.getValue(aN,"webEvent.subType",null);aH={timestamp:ab.getValue(aN,"webEvent.timestamp",0),type:4,target:{id:aI.id||"",idType:aI.idType,name:aI.name,tlType:aG,type:aF,position:{width:ab.getValue(aI,"size.width"),height:ab.getValue(aI,"size.height")},currState:aN.currState||null},event:{tlEvent:F(ab.getValue(aN,"webEvent")),type:ab.getValue(aN,"webEvent.type","UNKNOWN")}};if(aI.accessibility){aH.target.accessibility=aI.accessibility}if(aI.attributes){aH.target.attributes=aI.attributes}if(aJ){aH.target.subType=aJ}if(typeof aN.dwell==="number"&&aN.dwell>0){aH.target.dwell=aN.dwell}if(typeof aN.visitedCount==="number"){aH.target.visitedCount=aN.visitedCount}if(typeof aN.prevState!=="undefined"){aH.prevState=aN.prevState}if(aL){aH.event.subType=aL}aM=l(aK);aH.target.isParentLink=!!aM;if(aM){if(aM.href){aH.target.currState=aH.target.currState||{};aH.target.currState.href=aH.target.currState.href||aM.href}if(aM.value){aH.target.currState=aH.target.currState||{};aH.target.currState.value=aH.target.currState.value||aM.value}if(aM.innerText||aM.textContent){aH.target.currState=aH.target.currState||{};aH.target.currState.innerText=ab.trim(aH.target.currState.innerText||aM.innerText||aM.textContent)}}if(ab.isUndefOrNull(aH.target.currState)){delete aH.target.currState}if(ab.isUndefOrNull(aH.target.name)){delete aH.target.name}return aH}function ag(aF){aj.post(aF)}function aC(aJ){var aH,aF,aK=aJ.length,aM,aL,aI,aN={mouseout:true,mouseover:true},aG=[];for(aH=0;aH<aK;aH+=1){aM=aJ[aH];if(!aM){continue}if(aN[aM.event.type]){aG.push(aM)}else{for(aF=aH+1;aF<aK&&aJ[aF];aF+=1){if(!aN[aJ[aF].event.type]){break}}if(aF<aK){aL=aJ[aF];if(aL&&aM.target.id===aL.target.id&&aM.event.type!==aL.event.type){if(aM.event.type==="click"){aI=aM;aM=aL;aL=aI}if(aL.event.type==="click"){aM.target.position=aL.target.position;aH+=1}else{if(aL.event.type==="blur"){aM.target.dwell=aL.target.dwell;aM.target.visitedCount=aL.target.visitedCount;aM.focusInOffset=aL.focusInOffset;aM.target.position=aL.target.position;aH+=1}}aJ[aF]=null;aJ[aH]=aM}}aG.push(aJ[aH])}}for(aM=aG.shift();aM;aM=aG.shift()){aj.post(aM)}aJ.splice(0,aJ.length)}function aA(aG){var aI=null,aJ,aL=ab.getValue(aG,"nativeEvent.message"),aH=ab.getValue(aG,"nativeEvent.filename",""),aF=ab.getValue(aG,"nativeEvent.lineno",-1),aK=ab.getValue(aG,"nativeEvent.error");if(typeof aL!=="string"){return}if(aH){aH=aj.normalizeUrl(aH,6)}if(aK&&aK.stack){aJ=aK.stack.toString()}else{aJ=(aL+" "+aH+" "+aF).toString()}if(g[aJ]){g[aJ].exception.repeats=g[aJ].exception.repeats+1}else{aI={type:6,exception:{description:aL,url:aH,line:aF}};aj.post(aI);g[aJ]={exception:{description:aL,url:aH,line:aF,repeats:1}}}v+=1}function G(aF,aG){D.push(at({webEvent:aF,id:aG,currState:ab.getValue(aF,"target.state")}))}function ad(aL,aG,aI){var aH=false,aK,aF,aJ;if(!aL){return}if(D.length===0){return}aG=aG||(aE[aL]?aE[aL].webEvent:{});if(!aG){return}if(aG.type==="blur"||aG.type==="change"){aJ=ab.getValue(aG,"target.state",{})}else{if(aG.target){aJ=ab.getTargetState(aG.target.element)||{}}else{aJ={}}}if(aJ&&aJ.disabled){aI=true}aF=D[D.length-1];if(aE[aL]){aF.focusInOffset=aE[aL].focusInOffset;aF.target.visitedCount=aE[aL].visitedCount;if(aE[aL].focus){aE[aL].dwell=Number(new Date())-aE[aL].focus;aF.target.dwell=aE[aL].dwell}if(!aE[aL].processedChange&&aE[aL].prevState&&!aI){if(!ab.isEqual(aE[aL].prevState,aJ)){aG.type="change";aF.event.type=aG.type;aF.event.tlEvent=F(aG);aF.target.prevState=aE[aL].prevState;aF.target.currState=aJ}}}else{aE[aL]={}}if(aF.event.type==="click"){if(!aD(aF.target)){aF.target.currState=aJ;aH=true}}else{if(aF.event.type==="focus"){aH=true}}if(aH&&!aI){aF.event.type="blur";aF.event.tlEvent="focusout"}if(!aF.dcid){aK=aB(aF.event.type,aG.target);if(aK){aF.dcid=aK}}if(!aI){f.inFocus=false}aE[aL].prevState=aJ?ab.mixin({},aJ):aJ;aC(D)}function j(aI,aG){var aH=D.length,aF=aH?D[aH-1]:null;if(f.inFocus&&f.target.id===aI){if(!aF||aF.target.id!==aI){G(aG,aI);aE[aI].processedChange=false;aE[aI].processedClick=false}return}if(f.inFocus){ad(f.target.id,f)}f=aG;f.inFocus=true;if(!aE[aI]){aE[aI]={}}aE[aI].focus=f.dwellStart=Number(new Date());aE[aI].focusInOffset=ai?f.dwellStart-Number(ai):-1;if(aG.type==="focus"){aE[aI].prevState=ab.getValue(aG,"target.state")}else{if(aG.type==="click"&&!aE[aI].prevState){aE[aI].prevState=ab.getValue(aG,"target.state");if(aE[aI].prevState&&(aG.target.subType==="checkbox"||aG.target.subType==="radio")){aE[aI].prevState.checked=!aE[aI].prevState.checked}}}aE[aI].visitedCount=aE[aI].visitedCount+1||1;aE[aI].webEvent=aG;aE[aI].processedChange=false;aE[aI].processedClick=false;G(aG,aI)}function N(aK,aH){var aG=false,aI,aJ=D.length,aF=aJ?D[aJ-1]:null;if(!aF){return aG}aI=aF.target.id;if(aI!==aK&&aF.target.tltype!=="selectList"){if(aH.type==="focus"||aH.type==="click"||aH.type==="change"||aH.type==="blur"||aH.type==="unload"){ad(aI);aG=true}}if(aI===aK&&((aH.type==="click"&&aE[aK].processedClick)||(aH.type==="change"&&aE[aK].processedChange)||(aH.type==="pointerup"&&aE[aK].processedClick&&ab.getValue(aH.target,"state.disabled",false)))){ad(aI,null,true);aG=true}return aG}function B(aH,aG){var aF;j(aH,aG);aF=D[D.length-1];aF.event.type="change";aF.event.tlEvent=F(aG);aF.target.currState=aG.target.state;if(aE[aH].prevState){aF.target.prevState=aE[aH].prevState}aE[aH].webEvent=aG;aE[aH].processedChange=true;if(ab.matchTarget(ax,aG.target)!==-1){ad(aH,aG)}}function M(aI,aH){var aG,aF;if(aH.target.type==="select"&&ay&&ay.target.id===aI){ay=null;return}j(aI,aH);aG=D[D.length-1];if(aG.event.type==="focus"){aG.event.type="click";aG.event.tlEvent=F(aH)}aF=aH.nativeEvent;if(aF&&(!window.MouseEvent||!(aF instanceof MouseEvent&&aF.detail===0)||(window.PointerEvent&&aF instanceof PointerEvent&&aF.pointerType!==""))){aG.target.position.relXY=ab.getValue(aH,"target.position.relXY")}if(!aE[aI].processedChange){aE[aI].webEvent=aH}aE[aI].processedClick=true;if(aD(aH.target)){ad(aI,aH,true)}ay=aH}function R(aH,aG){var aF=aH;if(!ab.getValue(aG,"target.element.disabled",false)){return}switch(aG.type){case"pointerdown":o=aF;break;case"pointerup":if(aF===o){aG.type="click";M(aH,aG)}o=null;break}}function c(aJ){var aH,aN=0,aF=0,aI,aG,aL,aM,aK;if(!u.enabled||window.hasOwnProperty("ontouchstart")){return}if(n>=H){return}aH={element:{id:aJ.target.id,idType:aJ.target.idType},x:aJ.position.x,y:aJ.position.y,offset:aj.getCurrentOffset()};if(J!==null){aN=aH.offset-J.offset;if(ah&&aN<ah){return}aM=Math.abs(aH.x-J.x);aK=Math.abs(aH.y-J.y);aF=(aM>aK)?aM:aK;if(L&&aF<L){return}if(aN>d){d=aN}}aI=JSON.stringify(aH.element);aG=b[aI];if(typeof aG==="undefined"){w.push(aH.element);aG=w.length-1;b[aI]=aG}aL=ab.getValue(aJ,"target.position.relXY").split(",");h.push([aG,aL[0],aL[1],aH.offset]);n+=1;J=aH}function a(aG){var aF=aG.orientation,aH={type:4,event:{type:"orientationchange"},target:{prevState:{orientation:O,orientationMode:ab.getOrientationMode(O)},currState:{orientation:aF,orientationMode:ab.getOrientationMode(aF)}}};ag(aH);O=aF}function s(aF){var aI=document.visibilityState==="visible"?true:false,aH={type:4,event:{type:"visibilitychange"},target:{prevState:{visible:C},currState:{visible:aI}}},aG;aG=aB(aF.type,aF.target);if(aG){aH.dcid=aG}ag(aH);C=aI}function e(aG){var aF=false;if(!aG){return aF}aF=(ao.scale===aG.scale&&Math.abs((new Date()).getTime()-ao.timestamp)<500);return aF}function V(aF){ao.scale=aF.scale;ao.rotation=aF.rotation;ao.timestamp=(new Date()).getTime()}function E(){var aF,aG;aF=m-Q;if(isNaN(aF)){aG="INVALID"}else{if(aF<0){aG="CLOSE"}else{if(aF>0){aG="OPEN"}else{aG="NONE"}}}return aG}function y(aJ){var aO=document.documentElement||{},aL=document.body||{},aP=window.screen,aG=aP.width,aH=aP.height,aK=ab.getValue(aJ,"orientation",0),aM=!ab.isiOS?aG:Math.abs(aK)===90?aH:aG,aI={type:1,clientState:{pageWidth:Math.max(aL.clientWidth||0,aO.offsetWidth||0,aO.scrollWidth||0),pageHeight:Math.max(aL.clientHeight||0,aO.offsetHeight||0,aO.scrollHeight||0),viewPortWidth:window.innerWidth||aO.clientWidth,viewPortHeight:window.innerHeight||aO.clientHeight,viewPortX:Math.round(window.pageXOffset||(aO||aL).scrollLeft||0),viewPortY:Math.round(window.pageYOffset||(aO||aL).scrollTop||0),deviceOrientation:aK,event:ab.getValue(aJ,"type")}},aN=aI.clientState,aF;an=an||aI;if(aN.event==="unload"&&aN.viewPortHeight===aN.pageHeight&&aN.viewPortWidth===aN.pageWidth){if(an.clientState.viewPortHeight<aN.viewPortHeight){aN.viewPortHeight=an.clientState.viewPortHeight;aN.viewPortWidth=an.clientState.viewPortWidth}}if((aN.viewPortY+aN.viewPortHeight)>aN.pageHeight){aN.viewPortY=aN.pageHeight-aN.viewPortHeight}if(aN.viewPortY<0){aN.viewPortY=0}aF=!aN.viewPortWidth?1:(aM/aN.viewPortWidth);aN.deviceScale=aF.toFixed(3);aN.viewTime=0;if(ap&&Z){aN.viewTime=Z.getTime()-ap.getTime()}if(aJ.type==="scroll"){aN.viewPortXStart=an.clientState.viewPortX;aN.viewPortYStart=an.clientState.viewPortY}return aI}function af(){var aF;if(X){aF=X.clientState;if(aF.viewPortHeight>0&&aF.viewPortHeight<i&&aF.viewPortWidth>0&&aF.viewPortWidth<i){ag(X)}an=X;X=null;ap=P||ap;Z=null}af.timeoutId=0}function z(aF){var aG=null;if(ab.isOperaMini){return}X=y(aF);if(aF.type==="scroll"||aF.type==="resize"){if(af.timeoutId){window.clearTimeout(af.timeoutId)}af.timeoutId=window.setTimeout(af,ab.getValue(K,"scrollTimeout",2000))}else{if(aF.type==="touchstart"||aF.type==="load"){if(X){Q=parseFloat(X.clientState.deviceScale)}}else{if(aF.type==="touchend"){if(X){m=parseFloat(X.clientState.deviceScale);af()}}}}if(aF.type==="load"||aF.type==="unload"){if(aF.type==="unload"&&W){aG=ab.clone(X);aG.clientState.event="attention";aG.clientState.viewTime=(new Date()).getTime()-W}af();if(aG){X=aG;af()}}return X}function am(aG){var aF=ab.getValue(aG,"nativeEvent.touches.length",0);if(aF===2){z(aG)}}function q(aI){var aH,aG={},aJ=ab.getValue(aI,"nativeEvent.rotation",0)||ab.getValue(aI,"nativeEvent.touches[0].webkitRotationAngle",0),aF=null,aK={type:4,event:{type:"touchend"},target:{id:ab.getValue(aI,"target.id"),idType:ab.getValue(aI,"target.idType")}};aH=ab.getValue(aI,"nativeEvent.changedTouches.length",0)+ab.getValue(aI,"nativeEvent.touches.length",0);if(aH!==2){return}z(aI);aF={rotation:aJ?aJ.toFixed(2):0,scale:m?m.toFixed(2):1};aF.pinch=E();aG.scale=Q?Q.toFixed(2):1;aK.target.prevState=aG;aK.target.currState=aF;ag(aK)}function al(aP,aI){var aM=["type","name","target.id"],aH=null,aJ,aL,aK=true,aN=10,aG=0,aO=0,aF=0;if(!aP||!aI||typeof aP!=="object"||typeof aI!=="object"){return false}for(aJ=0,aL=aM.length;aK&&aJ<aL;aJ+=1){aH=aM[aJ];if(ab.getValue(aP,aH)!==ab.getValue(aI,aH)){aK=false;break}}if(aK){aO=ab.getValue(aP,"timestamp");aF=ab.getValue(aI,"timestamp");if(!(isNaN(aO)&&isNaN(aF))){aG=Math.abs(ab.getValue(aP,"timestamp")-ab.getValue(aI,"timestamp"));if(isNaN(aG)||aG>aN){aK=false}}}return aK}function p(aF){var aH={type:4,event:{tlEvent:F(aF),type:aF.type},target:{id:ab.getValue(aF,"target.id"),idType:ab.getValue(aF,"target.idType"),currState:ab.getValue(aF,"target.state")}},aG;aG=aB(aF.type,aF.target);if(aG){aH.dcid=aG}ag(aH)}return{init:function(){D=[]},destroy:function(){ad(az);D=[];if(af.timeoutId){window.clearTimeout(af.timeoutId);af.timeoutId=0}},onevent:function(aG){var aM=null,aJ=null,aF,aK,aL,aI,aH=null;if(typeof aG!=="object"||!aG.type){return}if(al(aG,aw)){aw=aG;return}aw=aG;aM=ab.getValue(aG,"target.id");if(!aE[aM]){aE[aM]={}}N(aM,aG);switch(aG.type){case"hashchange":break;case"focus":j(aM,aG);break;case"blur":ad(aM,aG);break;case"pointerdown":R(aM,aG);break;case"pointerup":R(aM,aG);break;case"click":M(aM,aG);break;case"change":B(aM,aG);break;case"orientationchange":a(aG);break;case"touchstart":am(aG);break;case"touchend":q(aG);break;case"loadWithFrames":TLT.logScreenviewLoad("rootWithFrames");break;case"load":O=aG.orientation;ap=new Date();if(typeof ab.getOrientationAngle()!=="number"||ab.isAndroid){aK=(window.screen.width>window.screen.height?90:0);aF=ab.getOrientationAngle();if(Math.abs(aF)!==aK&&!(aF===180&&aK===0)&&!(aF===270&&aK===90)){ab.isLandscapeZeroDegrees=true;if(Math.abs(aF)===180||Math.abs(aF)===0){O=90}else{if(Math.abs(aF)===90||Math.abs(aF)===270){O=0}}}}setTimeout(function(){if(aj.isInitialized()){z(aG)}},100);if(ab.getValue(K,"forceRootScreenview",false)){ae=r}else{ae=aj.normalizeUrl(location.hash,2)||r}TLT.logScreenviewLoad(ae);break;case"screenview_load":ai=new Date();aa();aJ=aB("load",null,aG.name);break;case"screenview_unload":aJ=aB("unload",null,aG.name);break;case"resize":case"scroll":if(!Z){Z=new Date()}P=new Date();z(aG);break;case"unload":for(aL in g){if(g.hasOwnProperty(aL)){aI=g[aL].exception;if(aI.repeats>1){aH={type:6,exception:aI};aj.post(aH)}}}if(D){aC(D)}Z=new Date();z(aG);if(ae===r||aj.normalizeUrl(location.hash,2)===ae){TLT.logScreenviewUnload(ae)}break;case"mousemove":c(aG);break;case"error":aA(aG);break;case"visibilitychange":s(aG);break;default:p(aG);break}az=aM;return aJ},onmessage:function(){}}}); // eslint-disable-line


/**
 * @fileOverview The Gesture module implements the logic for capturing Hammer.js gesture events.
 * @version 6.2.0.2010
 * @exports gesture
 */

/*global TLT:true */
/*global Hammer:true */

TLT.addModule("gestures", function (context) {
    "use strict";

    var tlTypes = {
            "input:radio": "radioButton",
            "input:checkbox": "checkBox",
            "input:text": "textBox",
            "input:password": "textBox",
            "input:file": "fileInput",
            "input:button": "button",
            "input:submit": "submitButton",
            "input:reset": "resetButton",
            "input:image": "image",
            "input:color": "color",
            "input:date": "date",
            "input:datetime": "datetime",
            "input:datetime-local": "datetime-local",
            "input:number": "number",
            "input:email": "email",
            "input:tel": "tel",
            "input:search": "search",
            "input:url": "url",
            "input:time": "time",
            "input:week": "week",
            "input:month": "month",
            "textarea:": "textBox",
            "select:": "selectList",
            "select:select-one": "selectList",
            "button:": "button",
            "a:": "link"
        },
        utils = context.utils,
        firstTouches = [],
        tapCount = 0,
        swipeOk = true,
        timer,
        curriedTap = function () {},
        gestureOptions = {
            swipeAfterPinchInterval: 300,
            doubleTapInterval: 300,
            preventMouse: true,
            dragMinDistance: 10
        },
        hammertimeArray = [],
        elementArray = [],
        prevGestureQueueEvent,
        hammerVersion,
        startEventTarget;

    /**
     * Posts Gesture Event to Queue
     * @private
     * @param {object} queueEvent A queueEvent created with createGestureQueueEvent.
     * @return {void}
     */
    function postGestureEvent(queueEvent) {
        context.post(queueEvent);
    }

    /**
     * Get tlEvent from webEvent.
     * @private
     * @param {object} webEvent A webEvent with properties a type 11 object that is a control.
     * @return {string} tlEvent.
     */
    function getTlEvent(webEvent) {
        var tlEvent;

        //We consider the Hammer.js event named "drag" a swipe. We currently do not support the Hammer.js event named "swipe".
        if (webEvent.type === "drag") {
            tlEvent = "swipe";
        //We consider the Hammer.js event named "hold" a tapHold. There is no Hammer.js event called "tapHold".
        } else if (webEvent.type === "hold") {
            tlEvent = "tapHold";
        } else {
            tlEvent = webEvent.type;
        }

        if (typeof tlEvent === "string") {
            tlEvent = tlEvent.toLowerCase();
        } else {
            tlEvent = "unknown";
        }

        return tlEvent;
    }
    /**
     * Gets the top left X & Y values of a webEvent target.
     * @private
     * @param {WebEvent} webEvent Normalized browser event
     * @return value of top left X & Y
     */
    function getElementTopLeft(webEvent) {
        var target = webEvent.gesture.srcEvent.target,
            topLeftY = 0,
            topLeftX = 0;
        while (target && target.tagName !== "BODY") {
            topLeftY += target.offsetTop;
            topLeftX += target.offsetLeft;
            target = target.offsetParent;
        }
        return { topLeftX: topLeftX, topLeftY: topLeftY };
    }

    /**
     * Cleans a gesture touch by removing fields if they do not exist, are null, or otherwise should not be included. Works by cleaning the first object in the sent array.
     * @private
     * @param {obj} touch Gesture touch object (an object containing  information about a single position of a single finger).
     * @param {string} tlType The tealeaf name of the element.
     * @return Array A cleaned touchPosition array.
     */
    function cleanGestureQueueEvent(touch, tlType) {

        //Delete relXY for radio buttons.
        if (tlType === "radioButton") {
            delete touch.control.position.relXY;
        }
        //Delete the element name from the touch position if name does not exist.
        if (touch.control.name === null || touch.control.name === undefined || touch.control.name === "") {
            delete touch.control.name;
        }
        //Delete the element subType from the touch position if subType does not exist.
        if (touch.control.subType === null || touch.control.subType === undefined || touch.control.subType === "") {
            delete touch.control.subType;
        }
    }

    /**
     * Creates a gesture queue event with the specified options.
     * @private
     * @param {obj} options Includes the data that will be used to create the gesture queue event.
     * @return Object A gesture queue event.

Queue Event JSON Schema

{
    "$ref" : "MessageHeader",
    "event": {
        "description": "Event from control",
        "type": "object",
        "properties": {
            "tlEvent": {
                "title": "Tealeaf type of event",
                "type": "string",
                "required": true
            },
            "type": {
                "title": "Type of event framework reports",
                "type": "string",
                "required": false
            }
        }
    },
    "touches": {
        "description": "Gestures touch objects per finger.",
        "type": "array",
        "required": true
        "items": {
                "description": "Touch objects per finger starting with intial and ends with last object when finger is lifted from device.",
                "type": "array",
                "required": true,
                "$ref": "Touch"
            }
        }
    },
    "direction": {
        "title": "The direction of the swipe which can be up, down. left or right.",
        "type": "string",
        "required": false
    },
    "velocityX": {
        "title": "The velocity of this measured in pixels per second along the x axis",
        "type": "float",
        "required": false
    },
    "velocityY": {
        "title": "The velocity of this measured in pixels per second along the y axis",
        "type": "float",
        "required": false
    }

     */
    function createGestureQueueEvent(options) {
        var control,
            tlEventType = getTlEvent(utils.getValue(options, "webEvent")),
            target = utils.getValue(options, "webEvent.gesture.srcEvent.target", document.body),
            tagName = utils.getTagName(target) || "body",
            elType = utils.getValue(target, "type", ""),
            tlType = tlTypes[tagName.toLowerCase() + ":" + elType.toLowerCase()] || tagName,
            eventSubtype = utils.getValue(options, "webEvent.target.subtype"),
            tlTouches = [],
            hammerTouches,
            hammerTouchesLocation,
            saveFirstTouch,
            addFirstTouch,
            relPosInfo,
            i;

        if (hammerVersion === "1") {
            hammerTouches = options.webEvent.gesture.touches;
            hammerTouchesLocation = "webEvent.gesture.touches.";
            saveFirstTouch = (tlEventType === "swipe" && !(prevGestureQueueEvent !== undefined && prevGestureQueueEvent.event.tlEvent === "swipe")) || (tlEventType === "pinch" && !(prevGestureQueueEvent !== undefined && prevGestureQueueEvent.event.tlEvent === "pinch"));
            addFirstTouch = tlEventType === "swipe" || tlEventType === "pinch";
        } else {
            hammerTouches = options.webEvent.gesture.pointers;
            hammerTouchesLocation = "webEvent.gesture.pointers.";
            saveFirstTouch = utils.getValue(options, "webEvent.gesture.firstOrLastSwipeEvent") === "first" || utils.getValue(options, "webEvent.gesture.firstOrLastPinchEvent") === "first";
            addFirstTouch = utils.getValue(options, "webEvent.gesture.firstOrLastSwipeEvent") === "last" || utils.getValue(options, "webEvent.gesture.firstOrLastPinchEvent") === "last";
        }
        //Cycle through all finger touches.
        for (i = 0; i < hammerTouches.length; i += 1) {
            //Add the final position of each finger. All gestures apply.
            relPosInfo = {
                x : utils.getValue(options, hammerTouchesLocation + i + ".pageX") - getElementTopLeft(options.webEvent).topLeftX,
                y : utils.getValue(options, hammerTouchesLocation + i + ".pageY") - getElementTopLeft(options.webEvent).topLeftY,
                width : utils.getValue(options, "webEvent.gesture.srcEvent.target.offsetWidth"),
                height : utils.getValue(options, "webEvent.gesture.srcEvent.target.offsetHeight")
            };
            tlTouches.push(
                [
                    {
                        position: {
                            y: Math.round(utils.getValue(options, hammerTouchesLocation + i + ".pageY")),
                            x: Math.round(utils.getValue(options, hammerTouchesLocation + i + ".pageX"))
                        },
                        control: {
                            position: {
                                width: Math.round(utils.getValue(options, hammerTouchesLocation + i + ".target.offsetWidth")),
                                height: Math.round(utils.getValue(options, hammerTouchesLocation + i + ".target.offsetHeight")),
                                relXY: utils.calculateRelativeXY(relPosInfo),
                                scrollX: Math.round(document.documentElement.scrollLeft || document.body.scrollLeft),
                                scrollY: Math.round(document.documentElement.scrollTop || document.body.scrollTop)
                            },
                            id: utils.getValue(options, hammerTouchesLocation + i + ".target.id") || context.getXPathFromNode(utils.getValue(options, hammerTouchesLocation + i + ".target")),
                            idType: utils.getValue(options, "webEvent.gesture.idType"),
                            name: utils.getValue(options, hammerTouchesLocation + i + ".target.name"),
                            tlType: tlType,
                            type: tagName,
                            subType: elType
                        }
                    }
                ]
            );

            //Clean after adding a position of a finger
            cleanGestureQueueEvent(tlTouches[i][0], tlType);
        }

        //Save the first touches for pinch and swipe events.
        if (saveFirstTouch) {
            //Cycle through all finger touches.
            for (i = 0; i < hammerTouches.length; i += 1) {
                firstTouches.push(tlTouches[i][0]);
            }
        }

        //Add in the first touch for pinch and swipe events.
        if (addFirstTouch) {
            //Cycle through all finger touches.
            for (i = 0; i < hammerTouches.length; i += 1) {
                tlTouches[i].unshift(firstTouches[i]);
            }
        }

        //Build the control object
        control = {
            type: 11,
            event: {
                tlEvent: tlEventType,
                type: tlEventType
            },
            touches: tlTouches
        };

        //Handle Gestures with Velocity, currently just swipe
        if (tlEventType === "swipe") {
            control.velocityX = options.webEvent.gesture.velocityX;
            control.velocityY = options.webEvent.gesture.velocityY;
        }

        //Handle Gestures with Direction, currently swipe and pinch
        if (tlEventType === "swipe") {
            control.direction = options.webEvent.gesture.direction;
            //Hammer JS 2 supplies the directions as the numbers 2,4,8,16(left,right,up,down)
            if (control.direction === 2) {
                control.direction = "left";
            }
            if (control.direction === 4) {
                control.direction = "right";
            }
            if (control.direction === 8) {
                control.direction = "up";
            }
            if (control.direction === 16) {
                control.direction = "down";
            }
        }
        if (tlEventType === "pinch") {
            if (options.webEvent.gesture.scale > 1) {
                control.direction = "open";
            } else if (options.webEvent.gesture.scale < 1) {
                control.direction = "close";
            }
        }
        //Add the event subtype if it exists.
        if (eventSubtype !== undefined && eventSubtype !== null) {
            control.event.subType = eventSubtype;
        }

        return control;
    }

    /**
     * Handles the fired gesture event, except tap which gets handled specially in handleTap.
     * @private
     * @param {string} id ID of the target the event is fired on.
     * @param {obj} webEvent The event object.
     */
    function handleGesture(id, webEvent) {
        if (hammerVersion === "1") {
            //Immediately post a doubletap, tap, or hold event.
            if (webEvent.type === "doubletap" || webEvent.type === "hold" || webEvent.type === "tap") {
                postGestureEvent(createGestureQueueEvent({
                    webEvent: webEvent,
                    id: id,
                    currState: utils.getValue(webEvent, "target.state")
                }));
            } else if (webEvent.type === "release" && prevGestureQueueEvent !== undefined && (prevGestureQueueEvent.event.tlEvent === "swipe" || prevGestureQueueEvent.event.tlEvent === "pinch")) {
                //If a release is fired after a pinch/swipe post that pinch/swipe since it is the final pinch/swipe. The logic to store the first pinch/touch is included in createGestureQueueEvent.
                postGestureEvent(prevGestureQueueEvent);
                //Reset the previous gesture event after posting it.
                prevGestureQueueEvent = undefined;
                //Reset firstTouches used in createGestureQueueEvent
                firstTouches = [];
            } else if (webEvent.type === "drag" || webEvent.type === "pinch") {
                //Store an event to be posted later. Note that webEvent.type === "drag" is the tlEvent swipe.
                prevGestureQueueEvent = createGestureQueueEvent({
                    webEvent: webEvent,
                    id: id,
                    currState: utils.getValue(webEvent, "target.state")
                });
            }
        } else {
            //Immediately post a doubletap, tap, or hold event.
            if (webEvent.type === "doubletap" || webEvent.type === "tapHold" || webEvent.type === "tap") {
                postGestureEvent(createGestureQueueEvent({
                    webEvent: webEvent,
                    id: id,
                    currState: utils.getValue(webEvent, "target.state")
                }));
            } else if (webEvent.gesture.firstOrLastSwipeEvent === "last" || webEvent.gesture.firstOrLastPinchEvent === "last") {
                postGestureEvent(createGestureQueueEvent({
                    webEvent: webEvent,
                    id: id,
                    currState: utils.getValue(webEvent, "target.state")
                }));
                //Reset firstTouches used in createGestureQueueEvent
                firstTouches = [];
            } else if (webEvent.gesture.firstOrLastSwipeEvent === "first" || webEvent.gesture.firstOrLastPinchEvent === "first") {
                //The logic to store the first pinch/touch is included in createGestureQueueEvent.
                createGestureQueueEvent({
                    webEvent: webEvent,
                    id: id,
                    currState: utils.getValue(webEvent, "target.state")
                });
            }
        }
    }

    /**
     * Higher order function that stores elementId and webEvent of
     * the latest tap event and returns a function with these values preset,
     * callable from inside a setTimeout or outside
     * @private
     * @param {string} id ID of the target the event is fired on.
     * @param {obj} webEvent the event object.
     */
    function createCurriedTap(id, webEvent) {
        var curriedId = id,
            curriedWebEvent = webEvent;
        return function () {
            handleGesture(curriedId, curriedWebEvent);
            tapCount = 0;
        };
    }

    /**
     * Specially handles the tap gesture event
     * @private
     * @param {string} id ID of the target the event is fired on.
     * @param {obj} webEvent The event object.
     */
    function handleTap(id, webEvent) {
        var doubleTapInterval = gestureOptions.doubleTapInterval;

        //Increment the tap count as more taps happen
        tapCount += 1;

        if (tapCount === 1) {
            curriedTap = createCurriedTap(id, webEvent);
            timer = setTimeout(function () {
                curriedTap();
                curriedTap = function () {};
            }, doubleTapInterval);
        } else {
            clearTimeout(timer);
            //Change the tap into a doubletap
            webEvent.type = "doubletap";
            handleGesture(id, webEvent);
            curriedTap = function () {};
            //Reset the tap count after a doubletap
            tapCount = 0;
        }
    }

    /**
     * Flushes out any queued taps on unload event
     **/
    function handleQueuedTapOnUnload() {
        clearTimeout(timer);
        curriedTap();
    }

    /**
     * Specially handles the pinch and swipe gesture event
     * @private
     * @param {string} id ID of the target the event is fired on.
     * @param {obj} webEvent The event object.
     */
    function handlePinchAndSwipe(id, webEvent) {
        var swipeAfterPinchInterval = gestureOptions.swipeAfterPinchInterval;

        if (swipeOk && (webEvent.type === "swipe" || webEvent.type === "drag")) {
            handleGesture(id, webEvent);
        }

        if (webEvent.type === "pinch") {
            handleGesture(id, webEvent);
            //Do not capture swipe events immediately after a pinch
            swipeOk = false;
            timer = setTimeout(function () {
                //Allow swipe events after the timeout
                swipeOk = true;
            }, swipeAfterPinchInterval);
        }
    }

    function createEvent(eventData) {
        var webEvent;
        if (document.createEvent) {
            webEvent = document.createEvent("HTMLEvents");
            //the arguments are event name, bubbles, cancelable
            webEvent.initEvent(eventData.type, true, true);
            webEvent.gesture = eventData;
        } else {
            webEvent = document.createEventObject();
            webEvent.eventType = eventData.type;
            webEvent.gesture = eventData;
        }
        return webEvent;
    }

    function callEvent(ev, target) {
        if (target === undefined) {
            return;
        }
        if (document.createEvent) {
            target.dispatchEvent(ev);
        } else {
            target.fireEvent("on" + ev.eventType, ev);
        }
    }

    function callTealeafEvent(eventData) {
        var eventName = eventData.type,
            target = eventData.target;

        if (eventName === "tap") {
            callEvent(createEvent(eventData), target);
            startEventTarget = undefined;
        } else if (eventName === "press") {
            //the tealeaf event tapHold is called press in hammer.js 2.0
            eventData.type = "tapHold";
            callEvent(createEvent(eventData), target);
            startEventTarget = undefined;
        } else if (eventName === "panstart") {
            //the tealeaf event swipe is called pan in hammer.js 2.0
            eventData.type = "swipe";
            //Save the fact this is the first swipe event since the data is lost when panstart is renamed to swipe
            eventData.firstOrLastSwipeEvent = "first";
            callEvent(createEvent(eventData), target);
            startEventTarget = target;
        } else if (eventName === "panend") {
            //the tealeaf event swipe is called pan in hammer.js 2.0
            eventData.type = "swipe";
            //Save the fact this is the last swipe event since the data is lost when panend is renamed to swipe
            eventData.firstOrLastSwipeEvent = "last";
            //Use the target of the panstart as the panend target could be different
            callEvent(createEvent(eventData), startEventTarget);
            startEventTarget = undefined;
        } else if (eventName === "pinchstart") {
            eventData.type = "pinch";
            //Save the fact this is the last pinch event since the data is lost when pinchstart is renamed to pinch
            eventData.firstOrLastPinchEvent = "first";
            callEvent(createEvent(eventData), target);
            startEventTarget = target;
        } else if (eventName === "pinchend") {
            eventData.type = "pinch";
            //Save the fact this is the last pinch event since the data is lost when pinchend is renamed to pinch
            eventData.firstOrLastPinchEvent = "last";
            //Use the target of the pinchstart as the pinchend target could be different
            callEvent(createEvent(eventData), startEventTarget);
            startEventTarget = undefined;
        }
    }

    // Return the module's interface object. This contains callback functions which
    // will be invoked by the UIC core.
    return {
        init: function () {
            var i, j, k,
                cssSelectors,
                cssSelectorArray,
                elements = [],
                gestureEvents = TLT.getCoreConfig().modules.gestures.events,
                elementPosition,
                eventsToEnable = "",
                hammertime,
                eventName,
                counter = 0;

            //Check hammer.js is available and check the version
            if (typeof Hammer === "function") {
                //Set the hammer version to the major version number to easily compare between Hammer.js 1.x.x and 2.x.x
                hammerVersion = Hammer.VERSION.split(".")[0];
            } else {
                return;
            }

            if (hammerVersion === "1") {
                //Set hammer default options so that default behaviors are not prevented
                Hammer.defaults.behavior.userSelect = "auto";
                Hammer.defaults.behavior.userDrag = "auto";
                Hammer.defaults.behavior.contentZooming = "auto";
                Hammer.defaults.behavior.touchCallout = "default";
                Hammer.defaults.behavior.touchAction = "auto";
            }

            if (context.getConfig()) {
                if (context.getConfig().options) {
                    //Add the user specified gesture options to gestureOptions, overriding the default options if there is a conflict
                    utils.extend(true, gestureOptions, context.getConfig().options);
                }
            }

            //Build the element array. This is to avoid creating multiple hammertimes for an element.
            //Iterate over all of the gesture events specified in the user configuration
            for (i = 0; i < gestureEvents.length; i += 1) {
                eventName = gestureEvents[i].name;
                //Add the events that are configured to eventsToEnable so the proper events are enabled when Hammer2 is enabled
                if (eventName === "tap") {
                    eventsToEnable += "tap ";
                }
                if (eventName === "swipe") {
                    eventsToEnable += "panstart panend ";
                }
                if (eventName === "tapHold") {
                    eventsToEnable += "press ";
                }
                if (eventName === "pinch") {
                    eventsToEnable += "pinchstart pinchend";
                }
                //Set the css selectors that will determine what elements hammertimes should be registered for
                cssSelectors = gestureEvents[i].target;
                //Check if Hammer is being enabled for the entire page
                if (cssSelectors === window || cssSelectors === "window") {
                    if (hammerVersion === "1") {
                        hammertimeArray.push(new Hammer(window, gestureOptions));
                    }
                } else {
                    if (cssSelectorArray !== undefined && cssSelectorArray !== null) {
                        //Separate each css selector
                        cssSelectorArray = cssSelectors.split(", ");
                        //iterate over all of the css selectors
                        for (j = 0; j < cssSelectorArray.length; j += 1) {
                            //Query for each element the css selector applies to
                            elements = TLT.getService('browser').queryAll(cssSelectorArray[j], document);
                            //Iterate over each element.
                            for (k = 0; k < elements.length; k += 1) {
                                elementPosition = utils.indexOf(elementArray, elements[k]);
                                //check if element is unique
                                if (elementPosition === -1) {
                                    //add element to the elementArray
                                    elementArray.push(elements[k]);
                                    counter += 1;
                                }
                            }
                        }
                    }
                }
            }
            //enable hammer js for the specified elements
            if (hammerVersion === "1") {
                for (i = 0; i < elementArray.length; i += 1) {
                    hammertimeArray.push(new Hammer(elementArray[i], gestureOptions));
                }
            } else {
                if (elementArray.length !== 0) {
                    for (i = 0; i < elementArray.length; i += 1) {
                        hammertime = new Hammer.Manager(elementArray[i]);
                        hammertime.add(new Hammer.Tap({event: 'tap'}));
                        hammertime.add(new Hammer.Pan({direction: Hammer.DIRECTION_ALL}));
                        hammertime.add(new Hammer.Press());
                        hammertime.add(new Hammer.Pinch({enable: true}));
                        hammertime.on(eventsToEnable, function hammertimeOnCallback(eventData) {
                            if ((eventData.type === "panend" || eventData.type === "pinchend") && elementArray.indexOf(startEventTarget) > -1) {
                                //a pan or pinch might start on a element that is being captured and end on a element that is not being captured
                                callTealeafEvent(eventData);
                            } else if (elementArray.indexOf(eventData.target) > -1) {
                                //hammer.js 2.0 no longer relies on firing it's own gesture events like in hammer.js 1.0. Because of this an event should be created and fired.
                                callTealeafEvent(eventData);
                            }
                        });
                        hammertimeArray.push(hammertime);
                    }
                } else {
                    if (window.style === undefined) {
                        //hammerjs expects a style property
                        window.style = [];
                    }
                    hammertime = new Hammer.Manager(window);
                    hammertime.add(new Hammer.Tap({event: 'tap'}));
                    hammertime.add(new Hammer.Pan({direction: Hammer.DIRECTION_ALL}));
                    hammertime.add(new Hammer.Press());
                    hammertime.add(new Hammer.Pinch({enable: true}));
                    hammertime.on(eventsToEnable, function hammertimeOnCallback(eventData) {
                        callTealeafEvent(eventData);
                    });
                    hammertimeArray.push(hammertime);
                }
            }
        },
        destroy: function () {
            var i;

            //Turn off all the hammertimes
            if (hammertimeArray !== undefined && hammertimeArray !== null) {
                for (i = 0; i < hammertimeArray.length; i += 1) {
                    hammertimeArray[i].off("tap press pinchstart pinchend panstart panend");
                    hammertimeArray[i].enabled = false;
                }
            }
            //Reset the hammertime and element arrays
            hammertimeArray = [];
            elementArray = [];
        },
        onevent: function (webEvent) {
            var id;

            // Sanity checks
            if (typeof webEvent !== "object" || !webEvent.type || (!webEvent.gesture && webEvent.type !== "unload") || !webEvent.target) {
                return;
            }

            if (webEvent.type !== "unload" && webEvent.gesture.pointerType === "mouse" && gestureOptions.preventMouse) {
                return;
            }

            id = utils.getValue(webEvent, "target.id");

            switch (webEvent.type) {
            case "tap":
                handleTap(id, webEvent);
                break;
            case "swipe":
                handlePinchAndSwipe(id, webEvent);
                break;
            case "pinch":
                handlePinchAndSwipe(id, webEvent);
                break;
            case "tapHold":
                handleGesture(id, webEvent);
                break;
            case "hold":
                handleGesture(id, webEvent);
                break;
            case "drag":
                handlePinchAndSwipe(id, webEvent);
                break;
            case "release":
                handleGesture(id, webEvent);
                break;
            case "unload":
                handleQueuedTapOnUnload();
                break;
            }
        }
    };

});


/*!
* Tealeaf Ajax Listener 1.3.0
*
* README
* https://github.com/acoustic-analytics/UICaptureSDK-Modules/blob/master/AjaxListener/README.md
* @version 1.3.0
*/
TLT.addModule("ajaxListener",function(c){var l={},h=false,j,p,A,k,u=c.utils;function q(D){var F,B,G,E=false,C=l.urlBlocklist;if(!D||!C){return E}for(F=0,B=C.length;!E&&F<B;F+=1){G=C[F];E=G.cRegex.test(D)}return E}function f(D,I,C){var F,B,G={},H=l.filters,E;if(!H||!H.length){return G}for(F=0,B=H.length,E=false;!E&&F<B;F+=1){G=H[F];E=true;if(G.url){E=G.url.cRegex.test(D)}if(E&&G.method){E=G.method.cRegex.test(I)}if(E&&G.status){E=G.status.cRegex.test(C)}}if(!E){G=null}return G}function o(F){var H={},D,B,G,C,E;F=F.split(/[\r\n]+/);for(D=0,B=F.length;D<B;D+=1){G=F[D].split(": ");C=G[0];E=u.rtrim(G[1]);if(C&&C.length){H[C]=E}}return H}function m(I,E){var H={type:5,customEvent:{name:"ajaxListener",data:{interfaceType:"XHR"}}},D,C=H.customEvent.data,B;if(!I){return}D=document.createElement("a");D.href=I.tListener.url;C.originalURL=D.host+(D.pathname[0]==="/"?"":"/")+D.pathname;C.requestURL=c.normalizeUrl?c.normalizeUrl(C.originalURL,3):C.originalURL;C.description="Full Ajax Monitor "+C.requestURL;C.method=I.tListener.method;C.status=I.status;C.statusText=I.statusText||"";C.async=I.tListener.async;C.ajaxResponseTime=I.tListener.end-I.tListener.start;C.locationHref=c.normalizeUrl(document.location.href,3);if(E.requestHeaders){C.requestHeaders=I.tListener.reqHeaders}if(E.requestData&&typeof I.tListener.reqData==="string"&&!I.tListener.isSystemXHR){try{C.request=JSON.parse(I.tListener.reqData)}catch(G){C.request=I.tListener.reqData}}if(E.responseHeaders){C.responseHeaders=o(I.getAllResponseHeaders())}if(E.responseData){if(typeof I.responseType==="undefined"){B=I.responseText}else{if(I.responseType===""||I.responseType==="text"){B=I.response}else{if(I.responseType==="json"){C.response=I.response}else{C.response=typeof I.response}}}if(B){try{C.response=JSON.parse(B)}catch(F){C.response=B}}if(I.responseType){C.responseType=I.responseType}}c.post(H)}function r(D){var F,E={},C=D.entries(),B=C.next();while(!B.done){F=B.value;E[F[0]]=F[1];B=C.next()}return E}function g(B){return r(B)}function b(B){var D=B;if(!B){return D}if(typeof B==="object"&&B.toString().indexOf("FormData")!==-1){D=r(B)}else{if(typeof B==="string"){try{D=JSON.parse(B)}catch(C){D=B}}}return D}function s(B,E,F){var G={type:5,customEvent:{name:"ajaxListener",data:{interfaceType:"fetch"}}},D,C=G.customEvent.data,H;D=document.createElement("a");D.href=B.url;C.originalURL=D.host+(D.pathname[0]==="/"?"":"/")+D.pathname;C.requestURL=c.normalizeUrl?c.normalizeUrl(C.originalURL,3):C.originalURL;C.description="Full Ajax Monitor "+C.requestURL;C.method=B.initData.method;C.status=E.status;C.statusText=E.statusText||"";C.async=true;C.ajaxResponseTime=B.end-B.start;C.responseType=E.type;C.locationHref=c.normalizeUrl(document.location.href,3);if(F.requestHeaders){if(B.initData.headers&&B.initData.headers.toString().indexOf("Headers")!==-1){C.requestHeaders=g(B.initData.headers)}else{C.requestHeaders=B.initData.headers||""}}if(F.requestData&&typeof B.body!=="undefined"&&!B.isSystemXHR){C.request=b(B.body)}if(F.responseHeaders){C.responseHeaders=g(E.headers)}if(F.responseData){H=E.headers.get("content-type");if(H&&H.indexOf("application/json")!==-1){E.clone().json().then(function(I){C.response=I;c.post(G)});return}if(H&&(H.indexOf("text")!==-1||H.indexOf("xml")!==-1)){E.clone().text().then(function(I){C.response=I;c.post(G)});return}C.response="Not logging unsupported response content: "+H}c.post(G)}function n(F){var D,C=F.tListener.url,G=F.tListener.method,B=F.status.toString(),E={requestHeaders:false,requestData:false,responseHeaders:false,responseData:false};D=f(C,G,B);if(D){if(D.log){E=D.log}m(F,E)}}function a(B,F){var E,D=B.url,H=B.initData.method,C=F.status.toString(),G={requestHeaders:false,requestData:false,responseHeaders:false,responseData:false};if(q(D)){return}E=f(D,H,C);if(E){if(E.log){G=E.log}s(B,F,G)}}function x(C){var D,B;if(!C||!C.target){return}D=C.target;B=D.readyState;if(B===4){D.removeEventListener("readystatechange",x);D.tListener.end=Date.now();n(D)}}function t(C){var B=C.setRequestHeader;C.setRequestHeader=function(G,E){var F=this,D=F.tListener;if(G&&G.length){D.reqHeaders[G]=E}return B.apply(F,arguments)}}function z(B){var C=B.send;B.send=function(E){var F=this,D=F.tListener;if(E){D.reqData=E}D.start=Date.now();return C.apply(F,arguments)}}function v(C){var D,B,E;B=TLT.getServiceConfig("queue");E=B.queues||[];for(D=0;D<E.length;D+=1){if(E[D].endpoint&&C.indexOf(E[D].endpoint)!==-1){return true}}return false}function w(E,B,C){var D=this;if(h&&!q(B)){D.addEventListener("readystatechange",x);D.tListener={method:E,url:B,async:(typeof C==="undefined")?true:!!C,reqHeaders:{},isSystemXHR:v(B)};t(D);z(D)}return j.apply(D,arguments)}function y(){if(XMLHttpRequest){j=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=w}}function i(){p=window.fetch;window.fetch=function(D,C){var B={},E;if(typeof D==="object"){B.initData=D;B.url=D.url;B.initData.clone().text().then(function(F){if(F.length>0){B.body=F}})}else{B.initData=C||{};B.url=D;if(C&&C.body){B.body=C.body}}B.isSystemXHR=v(B.url);B.start=Date.now();E=p.apply(this,arguments);return E.then(function(F){B.end=Date.now();a(B,F);return F})}}function d(B){if(B&&B.regex){B.cRegex=new RegExp(B.regex,B.flags)}}function e(D){var E,B,F,G=[],C=u.getValue(D,"skipSafetyCheck",false);if(D&&D.filters){G=D.filters}for(E=0,B=G.length;E<B;E+=1){F=G[E];u.forEach([F.url,F.method,F.status],d)}if(D&&D.urlBlocklist){u.forEach(D.urlBlocklist,d)}A=u.getValue(D,"xhrEnabled",true)&&window.XMLHttpRequest;if(A&&!C&&(XMLHttpRequest.toString().indexOf("[native code]")===-1||XMLHttpRequest.toString().indexOf("XMLHttpRequest")===-1)){A=false}k=u.getValue(D,"fetchEnabled",true)&&window.fetch;if(k&&!C&&window.fetch.toString().indexOf("[native code]")===-1){k=false}}return{init:function(){l=c.getConfig();e(l)},destroy:function(){h=false},onevent:function(B){switch(B.type){case"load":if(A){y()}if(k){i()}h=true;break;case"unload":h=false;break;default:break}},version:"1.3.0"}}); // eslint-disable-line

// --------------------------------------------------------------------------------------
// ------------------------------------------------------ digitalData custom module -----
// --------------------------------------------------------------------------------------
// :: OPTIONAL ::
// Use digitalData if there are existing custom functions in the customer's legacy UIC that
// have not been superceeded by core UIC functionality. Also includes TLT.flushAll options.
TLT.addModule("digitalData", function () {
    // If the WebAnalytics object exists, capture its data and send to Tealeaf on load
    function getWebAnalyticsData() {
        if (typeof (WebAnalytics) !== "undefined") {
            TLT.logCustomEvent("WebAnalytics", WebAnalytics.returnAnalyticsUserData());
            TLT.logCustomEvent("PageData", WebAnalytics.returnPageData());
        }
    }
    return {
        onevent: function (webEvent) {
            if (typeof webEvent !== "object" || !webEvent.type) {
                return;
            }
            if (webEvent) {
                switch (webEvent.type) {
                case "load":
                    console.log("---> digitaData module triggered on load");
                    getWebAnalyticsData();
                    break;
                case "click":
                    TLT.flushAll();
                    break;
                case "visibilitychange":
                    TLT.flushAll();
                    break;
                default:
                    break;
                }
            }
        }
    };
});

// --------------------------------------------------------------------------------------
// ------------------------------------------------------- flushQueue custom module -----
// --------------------------------------------------------------------------------------
// :: OPTIONAL ::
// Triggers TLT.flushAll on visibilitychange. Used in conjunection with iOS tuning at end of config.
TLT.addModule("flushQueue", function () {
    return {
        onevent: function (webEvent) {
            if (webEvent) {
                switch (webEvent.type) {
                case "visibilitychange":
                    console.log("---> flushQueue module triggered on visibilitychange");
                    TLT.flushAll();
                    break;
                default:
                    break;
                }
            }
        }
    };
});

// --------------------------------------------------------------------------------------
// ---------------------------------------------------------- Tealeaf configuration -----
// --------------------------------------------------------------------------------------
(function () {
    "use strict";

    var config,
        TLT = window.TLT,
        // :: OPTIONAL ::
        // Function for collecting Google Tag Manager (GTM) data. Use when "window.dataLayer"
        // does not work reliably. Handles late loading of the dataLayer and re-collecting same data.
        GTMdataLayerFunction = !function(){var nextEventNum=0;Object.assign=Object.assign||function(targetObj){for(var hasOwnProp=Object.prototype.hasOwnProperty,i=1,len=arguments.length,sourceObj,prop;i<len;){for(prop in sourceObj=arguments[i])hasOwnProp.call(sourceObj,prop)&&(targetObj[prop]=sourceObj[prop]);i+=1}return targetObj}}(); // eslint-disable-line

    if (TLT.utils.isLegacyIE) {
        if (console) {
            console.warn("This version of the UIC does not support Internet Explorer 8.");
            console.info("Applications requiring Internet Explorer 8 (or below) support should use UIC 5.2.0");
        }
        TLT.terminationReason = "Unsupported browser";
        return;
    }

    config = {
        core: {
            buildNote: "Reference 2022-06-14",
            blockedElements: [],
            ieExcludedLinks: ["a[href*=\"javascript:void\"]", "input[onclick*='javascript:']"],
            blockedUserAgents: [
                { regex: "(Google|Bing|Face|DuckDuck|Yandex|Exa)bot|spider|archiver", flags: "i" },
                "PhantomJS"
            ],
            inactivityTimeout: 1000 * 60 * 29, // 29 minutes, just under 30 min Tealeaf app timeout

            modules: {
                replay: {
                    events: [
                        { name: "change", attachToShadows: true, recurseFrames: true },
                        { name: "click", recurseFrames: true },
                        { name: "dblclick", recurseFrames: true },
                        { name: "contextmenu", recurseFrames: true },
                        { name: "pointerdown", recurseFrames: true },
                        { name: "pointerup", recurseFrames: true },
                        { name: "hashchange", target: window },
                        { name: "focus", recurseFrames: true },
                        { name: "blur", recurseFrames: true },
                        { name: "load", target: window },
                        { name: "unload", target: window },
                        { name: "resize", target: window },
                        { name: "scroll", target: window },
                        { name: "mousemove", recurseFrames: true },
                        { name: "orientationchange", target: window },
                        { name: "touchend" },
                        { name: "touchstart" },
                        { name: "error", target: window },
                        { name: "visibilitychange" }
                    ]
                },
                // :: OPTIONAL ::
                digitalData: {
                    enabled: false,
                    events: [
                        { name: "load", target: window }
                    ]
                },
                // :: OPTIONAL ::
                flushQueue: {
                    events: []
                },
                overstat: {
                    enabled: true,
                    events: [
                        { name: "click", recurseFrames: true },
                        { name: "mousemove", recurseFrames: true },
                        { name: "mouseout", recurseFrames: true },
                        { name: "submit", recurseFrames: true }
                    ]
                },
                performance: {
                    enabled: true,
                    events: [
                        { name: "load", target: window },
                        { name: "unload", target: window }
                    ]
                },
                ajaxListener: {
                    enabled: false,
                    events: [
                        { name: "load", target: window },
                        { name: "unload", target: window }
                    ]
                },
                dataLayer: {
                    enabled: false,
                    events: [
                        { name: "load", target: window },
                        { name: "unload", target: window }
                    ]
                },
                gestures: {
                    events : [
                        { name: "tap", target: window },
                        { name: "hold", target: window },
                        { name: "drag", target: window },
                        { name: "pinch", target: window },
                        { name: "release", target: window }
                    ]
                },
                TLCookie: {
                    enabled: true
                }
            },

            // Normalize URL, path, or fragment (can be left commented out if not needed)
            // normalization: {
            //     /**
            //      * User defined URL normalization function which accepts an URL, path or fragment and returns
            //      * the normalized value.
            //      * @param urlOrPath {String} URL, path or fragment which needs to be normalized
            //      * @param [messageType] {Integer} The message type to normalize, undefined otherwise (6.1+)
            //      * @returns {String} The normalized URL/path/fragment value
            //      */
            //     urlFunction: function (urlOrPath, messageType) {
            //         // Normalize the URL/path/fragment here.
            //         // Refer to the documentation for examples.
            //         return urlOrPath;
            //     }
            // },

            // Share session identifier with eluminate.js or other libraries (can be left commented out if not needed)
            // sessionDataEnabled: false,
            // sessionData: {
            //     sessionValueNeedsHashing: true,
            //     sessionQueryName: "sessionID",
            //     sessionQueryDelim: ";",
            //     sessionCookieName: "jsessionid"
            // },

            screenviewAutoDetect: true,
            framesBlacklist: []
        },
        services: {
            queue: {
                asyncReqOnUnload: true,
                // asyncReqOnUnload: /WebKit/i.test(navigator.userAgent), // No longer recommended as of May 2022
                useBeacon: true,
                useFetch: true,
                queues: [{
                    qid: "DEFAULT",
                    // endpoint: "https://teabooster-eu.acoustic-demo.com/collector/dancarter/collectorPost",
                    // endpoint: "https://lib-eu-1.brilliantcollector.com/collector/collectorPost",
                    //endpoint: "https://lib-us-1.brilliantcollector.com/collector/collectorPost",
                    // endpoint: "https://lib-us-2.brilliantcollector.com/collector/collectorPost",
                     //endpoint: "",
                    // endpoint: "https://lib-ap-1.brilliantcollector.com/collector/collectorPost",
                    endpoint:"/",
                    maxEvents: 30,
                    timerInterval: 350000,
                    maxSize: 300000 //,
                    // checkEndpoint: true,
                    // endpointCheckTimeout: 3000,
                    // encoder: "gzip"
                }]
            },
            message: {
                privacy: [{
                    // exclude: true, // Defaults to false. If true, flips targets to whitelist.
                    targets: [
                        "input[type=password]" // ------------------ Mask all password fields
                        // ":not(.piiSafe)", // -------------------- Mask form fields without piiSafe
                        // ".piiMask" // --------------------------- Mask form fields with piiMask
                    ],
                    maskType: 2  // Mask with XXXXX
                },
                {
                    // exclude: false, // Each set of targets can have its own "exclude" setting
                    targets: [
                        "#something-here"
                    ],
                    maskType: 4,
                    maskFunction: function (val, element) {
                        if (element && element.innerText) {
                            element.innerText = "Masked by Tealeaf UIC";
                        }
                        return val;
                    }
                }],
                privacyPatterns: [
                    {
                        pattern: {
                            regex: '<a id=".*?-some-customer-full-name.*?">.*?</a>',
                            flags: "g"
                        },
                        replacement: "<a>XXXXXXX</a>"
                    }]
            },
            encoder: {
                gzip: {
                    encode: "window.pako.gzip",
                    defaultEncoding: "gzip"
                }
            },
            domCapture: {
                diffEnabled: false,
                // Options are set to these defaults:
                //
                // maxMutations: 100         // If this threshold is reached, the full DOM is captured instead of a diff
                // maxLength: 1000000        // If this threshold is reached, the DOM snapshot will not be sent
                // captureShadowDOM: false   // Enable ONLY if app is using shadown DOM. Also set allowHitSplit to false in org properties.
                // captureFrames: false      // Enable ONLY if child frames/iframes need to be captured for replay
                // removeScripts: true       // Disable ONLY if script tags need to be preserved
                // removeComments: true      // Disable ONLY if comments need to be preserved
                // discardBase64: 0          // Not present by default! Discard all base64 encoded inline image data that exceeds N characters.
                // captureStyle: true        // Disable to remove inline CSS. Reduces the size of the DOM snapshots, but may affect replay.
                // keepImports: false        // Enable to honor the "import" link type, a now deprecated and Chrome specific feature
                //
                // Override as needed below:
                options: {
                    maxLength: 5000000
                }
            },
            browser: {
                normalizeTargetToParentLink: true,
                // blacklist: ["duplicate-id"], // Note no leading "#"
                // customid: ["name"]
            }
        },
        modules: {
            overstat: {
                hoverThreshold: 2000
            },
            performance: {
                calculateRenderTime: true,
                renderTimeThreshold: 600000,
                performanceAlert: {
                    enabled: true,
                    threshold: 3000,
                    maxAlerts: 100,
                    resourceTypes: ["script", "img", "css", "xmlhttprequest"],
                    blacklist: []
                },
            },
            replay: {
                domCapture: {
                    enabled: true,
                    screenviewBlacklist: [],
                    triggers: [
                        // Note: also see "DOM Capture Config by URL" section below.
                        // Force Full DOM Capture on specific clicks
                        {
                            event: "click",
                            targets: [{ id: { regex: ".*ui-datepicker-div.*" }, idType: -2 }], // XPath with regex
                            fullDOMCapture: true,
                        },
                        // Some clicks may require a slight delay
                        {
                            event: "click",
                            targets: ["#register-tab", "#login-tab"],
                            delay: 100
                        },
                        // All other clicks except those on specific label elements. Avoids click+change for every interaction.
                        {
                            event: "click",
                            targets: [":not(.custom-control-label)"]               // CSS with :not pseudo class
                        },
                        // Force Full DOM Capture on specific changes
                        {
                            event: "change",
                            targets: [".form-radio", ".form-select", ".form-checkbox"],
                            fullDOMCapture: true
                        },
                        // Other changes can use DOM Diff
                        { event: "change" },
                        { event: "dblclick" },
                        { event: "contextmenu" },
                        { event: "visibilitychange" },
                        // Wait for spinner/loaders/overlay to be removed to avoid blank screen on load
                        {
                            event: "load",
                            fullDOMCapture: true,
                            delayUntil: { selector: '.async-hide, div.loader[style*="display: block"], div.content--faqs-box[style*="opacity"]', exists: false, timeout: 5000 }
                        }
                    ]
                },
                mousemove: {
                    enabled: false,
                    sampleRate: 200,
                    ignoreRadius: 3
                }
            },
            ajaxListener: {
                urlBlocklist: [
                    { regex: "brilliantcollector\\.com" } // The template UIC says this doesn't work, but I think it does :-)
                ],
                filters: [
                    {
                        status: { regex: "[45]\\d\\d" }, // Log 4xx and 5xx status messages
                        log: {
                            requestHeaders: true,
                            requestData: true,
                            responseHeaders: true,
                            responseData: true
                        }
                    }
                ]
            },
            dataLayer: {
                dataObject: GTMdataLayerFunction || "window.dataLayer",
                screenviewBlocklist: [],
                propertyBlocklist: []
            },
            TLCookie: {
                appCookieWhitelist: [{ regex: ".*" }],
                //tlAppKey: "492f82470c7a4e10ac711b4eacf37973" // US-1/Tealeaf/This Demonstration
                tlAppKey: "b6c3709b7a4c479bb4b5a9fb8fec324c" // US-2/TealeafCSP/Default - iOS
                // tlAppKey: "836f230276f44e49b803a73434a50a66" // US-2/Tealeaf/DanCarter-Test
                // secureTLTSID: true,                       // Defaults to false. Only set to true if 100% HTTPS.
                // sessionIDUsesStorage: true,               // Defaults to false. Use local storage for TLTSID.
                // sessionIDUsesCookie: false,               // Defaults to true. Set to false to prevent fallback from local storage.
                // sessionizationCookieName: "TLCookie",     // Defaults to TLTSID
                // samesite: "None"                          // Defaults to Strict, can be None|Lax|Strict
            }
        }
    };

    // ----------------------------------------------------------------------------------
    // ---------------------------------------- Prevent UIC loading on specific URL -----
    // ----------------------------------------------------------------------------------
    // :: OPTIONAL ::
    if (window.location.href.indexOf("StorefrontToolkit") > -1) {
        TLT.terminationReason = "Do not capture Developer Toolkit!";
        return;
    }

    // ----------------------------------------------------------------------------------
    // -------------------------------------------------- DOM Capture Config by URL -----
    // ----------------------------------------------------------------------------------
    // :: OPTIONAL ::
    (function () {
        var url = window.location.hostname + window.location.pathname;
        if (url === "www.sample.com/forms/complex-form") {
            config.services.domCapture.diffEnabled = false;
        }
    }());

    // ----------------------------------------------------------------------------------
    // ------------------------------------------ Automatic tlAppKey using location -----
    // ----------------------------------------------------------------------------------
    // :: OPTIONAL ::
    (function () {
        var host = window.location.hostname,
            url = host + window.location.pathname,
            appKey;
        if (host === "www.sample.com"
         || host === "accounts.sample.com") {
            appKey = "b2b4a1d10a40485e9511d27ad7d60c5e";
        } else if (host === "test.sample.com") {
            appKey = "0917aa9be9524b6cbb45c35c2079569c";
        } else if (url === "dev.sample.com/specific-url/") {          // URL exact match
            appKey = "0a262a3f6fd94e31ae0af2a668b48208";
        } else if (url.indexOf("dev.sample.com/this/section/") === 0  // URL starts with
         || url.indexOf("www.sample.com/that/section/") === 0) {
            appKey = "45da7a3795e44e4194b7deb7805ca220";
        }

        if (appKey) config.modules.TLCookie.tlAppKey = appKey;
    }());

    // ----------------------------------------------------------------------------------
    // ------------------------------------------------------- Alternate IE Configs -----
    // ----------------------------------------------------------------------------------
    if (TLT.utils.isIE) {
    // Disable DOM Capture and Ajax Monitor in IE9
        if (document.documentMode === 9) {
            config.modules.replay.domCapture.enabled = false;
            config.modules.ajaxListener.enabled = false;
        }
        // Disable DOM Diff, limit DOM Capture triggers in IE10
        if (document.documentMode === 10) {
            config.services.domCapture.diffEnabled = false;
            config.modules.replay.domCapture.triggers = [
                { event: "click", targets: ["a", "a *", "button", "button *"] },
                { event: "change" },
                { event: "load", delay: 100 }
            ];
        }
    }

    // ----------------------------------------------------------------------------------
    // ----------------------------------------------------- Android and iOS Tuning -----
    // ----------------------------------------------------------------------------------
    // :: OPTIONAL ::
    if (TLT.utils.isiOS || TLT.utils.isAndroid) {
        (function () {
            var uaMatch;

            // Reduce batch size, increase frequency, increase endpoint timeout
            config.services.queue.queues[0].maxEvents = 10;
            config.services.queue.queues[0].maxSize = 10000;
            config.services.queue.queues[0].timerInterval = 10000;
            config.services.queue.queues[0].endpointCheckTimeout = 10000;

            if (TLT.utils.isiOS) {
                // Disable Beacon in iOS 12 and earlier due to Safari on iOS bug
                uaMatch = window.navigator.userAgent.match(/OS (\d+)_/);
                if (uaMatch && uaMatch[1] < 13) {
                    config.services.queue.useBeacon = false;
                }
                // :: OPTIONAL ::
                // Flush queue on visibilitychange as unload is not a reliable trigger in iOS.
                // Requires flushQueue (or digitaData) module and entry in core.modules section.
                if (config.core.modules.flushQueue && config.core.modules.flushQueue.events) {
                    config.core.modules.flushQueue.events.push({ name: "visibilitychange" });
                } else {
                    console.log("Tealeaf Error: include the flushQueue module!");
                }
            }
        }());
    }
//     setTimeout(function() {
//         alert("load tealeaf");
//         window.TLT.init(config);
//        // TLT.logScreenviewLoad("WebViewTest");
//        // TLT.flushAll();
//    }, 5000);
    
    window.TLT.init(config);
    console.log("tealeaf enabled");
}());

// --------------------------------------------------------------------------------------
// ------------------------------------------------------------ Restart TLT for SPA -----
// --------------------------------------------------------------------------------------
// :: OPTIONAL ::
(function () {
    var origDestroy = window.TLT.destroy,
        prevConfig;
    // Check if document is active (visible and focused)
    function checkVisibility() {
        if (document.visibilityState === "visible" && document.hasFocus()) {
            if (prevConfig && window.TLT && !TLT.isInitialized()) {
                console.log("Restarting TLT");
                TLT.init(prevConfig);
                prevConfig = null;
            }
            window.removeEventListener("visibilitychange", checkVisibility);
            window.removeEventListener("focus", checkVisibility);
        }
    }
    // If termination reason was inactivity, set listener for active document
    window.TLT.destroy = function (se, tr) {
        if (tr === "inactivity") {
            prevConfig = TLT.getConfig();
            window.addEventListener("visibilitychange", checkVisibility);
            window.addEventListener("focus", checkVisibility);
        }
        origDestroy.call(window.TLT, se, tr);
    };
}());
