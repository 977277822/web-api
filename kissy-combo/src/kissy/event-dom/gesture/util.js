modulex.add("event-dom/gesture/util",["modulex-util","dom","ua","event-dom/base","feature"],function(e,t,n){var o,u,r,i,c,a=e("modulex-util"),s=e("dom"),h=e("ua"),d=e("event-dom/base"),l=e("feature");o=function(e){function t(e){return y.startsWith(e,"touch")}function n(e){return y.startsWith(e,"mouse")}function o(e){return y.startsWith(e,"MSPointer")||y.startsWith(e,"pointer")}function u(e){var t=this;t.doc=e,t.eventHandles=[],t.init(),t.touches=[],t.inTouch=0}function r(e){f(this,e)}function i(e){T(this,e)}function c(e){r.call(this,e),S[e].setup.apply(this,arguments)}function v(e){i.call(this,e),S[e].tearDown.apply(this,arguments)}function f(e,t){var n=E.getDocument(e),o=E.data(n,w);o||E.data(n,w,o=new u(n)),t&&o.addEventHandle(t)}function T(e,t){var n=E.getDocument(e),o=E.data(n,w);o&&(t&&o.removeEventHandle(t),o.eventHandles.length||(o.destroy(),E.removeData(n,w)))}e={};var p,m,g,y=a,E=s,S={},M=h,H=d,P=H.Special,w=y.guid("touch-handle"),x=l,D=2500,k=25;return x.isTouchEventSupported()?M.ios?(g="touchend touchcancel",p="touchstart",m="touchmove"):(g="touchend touchcancel mouseup",p="touchstart mousedown",m="touchmove mousemove"):x.isPointerSupported()?(p="pointerdown",m="pointermove",g="pointerup pointercancel"):x.isMsPointerSupported()?(p="MSPointerDown",m="MSPointerMove",g="MSPointerUp MSPointerCancel"):(p="mousedown",m="mousemove",g="mouseup"),u.prototype={constructor:u,lastTouches:[],firstTouch:null,init:function(){var e=this,t=e.doc;H.on(t,p,e.onTouchStart,e),o(m)||H.on(t,m,e.onTouchMove,e),H.on(t,g,e.onTouchEnd,e)},addTouch:function(e){e.identifier=e.pointerId,this.touches.push(e)},removeTouch:function(e){for(var t,n=0,o=e.pointerId,u=this.touches,r=u.length;r>n;n++)if(t=u[n],t.pointerId===o){u.splice(n,1);break}},updateTouch:function(e){for(var t,n=0,o=e.pointerId,u=this.touches,r=u.length;r>n;n++)t=u[n],t.pointerId===o&&(u[n]=e)},isPrimaryTouch:function(e){return this.firstTouch===e.identifier},setPrimaryTouch:function(e){null===this.firstTouch&&(this.firstTouch=e.identifier)},removePrimaryTouch:function(e){this.isPrimaryTouch(e)&&(this.firstTouch=null)},dupMouse:function(e){var t=this.lastTouches,n=e.changedTouches[0];if(this.isPrimaryTouch(n)){var o={x:n.clientX,y:n.clientY};t.push(o),setTimeout(function(){var e=t.indexOf(o);e>-1&&t.splice(e,1)},D)}},isEventSimulatedFromTouch:function(e){for(var t,n=this.lastTouches,o=e.clientX,u=e.clientY,r=0,i=n.length;i>r&&(t=n[r]);r++){var c=Math.abs(o-t.x),a=Math.abs(u-t.y);if(k>=c&&k>=a)return!0}return 0},normalize:function(e){var u,r,i,c=e.type;return(r=t(c))?(i="touchend"===c||"touchcancel"===c?e.changedTouches:e.touches,e.gestureType="touch"):(o(c)?e.gestureType=e.originalEvent.pointerType:n(c)&&(e.gestureType="mouse"),i=this.touches),i&&1===i.length&&(e.which=1,e.pageX=i[0].pageX,e.pageY=i[0].pageY),r?e:(u=!c.match(/(up|cancel)$/i),e.touches=u?i:[],e.targetTouches=u?i:[],e.changedTouches=i,e)},onTouchStart:function(e){var u,r,i=this,c=e.type,a=i.eventHandles;if(t(c))i.setPrimaryTouch(e.changedTouches[0]),i.dupMouse(e);else if(n(c)){if(i.isEventSimulatedFromTouch(e))return;i.touches=[e]}else{if(!o(c))throw new Error("unrecognized touch event: "+e.type);i.addTouch(e.originalEvent),1===i.touches.length&&H.on(i.doc,m,i.onTouchMove,i)}for(var s=0,h=a.length;h>s;s++)u=a[s],r=a[u].handle,r.isActive=1;i.callEventHandle("onTouchStart",e)},onTouchMove:function(e){var u=this,r=e.type;if(n(r)){if(u.isEventSimulatedFromTouch(r))return;u.touches=[e]}else if(o(r))u.updateTouch(e.originalEvent);else if(!t(r))throw new Error("unrecognized touch event: "+e.type);u.callEventHandle("onTouchMove",e)},onTouchEnd:function(e){var u=this,r=e.type;n(r)&&u.isEventSimulatedFromTouch(e)||(u.callEventHandle("onTouchEnd",e),t(r)?(u.dupMouse(e),y.makeArray(e.changedTouches).forEach(function(e){u.removePrimaryTouch(e)})):n(r)?u.touches=[]:o(r)&&(u.removeTouch(e.originalEvent),u.touches.length||H.detach(u.doc,m,u.onTouchMove,u)))},callEventHandle:function(e,t){var n,o,u=this,r=u.eventHandles,i=r.concat();t=u.normalize(t);var c=t.gestureType;if(t.changedTouches.length){for(var a=0,s=i.length;s>a;a++)if(n=i[a],r[n]){if(o=r[n].handle,o.requiredGestureType&&c!==o.requiredGestureType)continue;if(o.processed)continue;o.processed=1,o.isActive&&o[e]&&o[e](t)===!1&&(o.isActive=0)}for(a=0,s=i.length;s>a;a++)n=r[a],r[n]&&(o=r[n].handle,o.processed=0)}},addEventHandle:function(e){var t=this,n=t.eventHandles,o=S[e].handle;n[e]?n[e].count++:(n.push(e),t.sortEventHandles(),n[e]={count:1,handle:o})},sortEventHandles:function(){this.eventHandles.sort(function(e,t){var n=S[e],o=S[t];return n.order-o.order})},removeEventHandle:function(e){var t=this.eventHandles;t[e]&&(t[e].count--,t[e].count||(t.splice(y.indexOf(e,t),1),delete t[e]))},destroy:function(){var e=this,t=e.doc;H.detach(t,p,e.onTouchStart,e),H.detach(t,m,e.onTouchMove,e),H.detach(t,g,e.onTouchEnd,e)}},e=function(e,t){"string"==typeof e&&(e=[e]),y.each(e,function(e){var n={};n.setup=t.setup?c:r,n.tearDown=t.tearDown?v:i,n.add=t.add,n.remove=t.remove,t.order=t.order||100,S[e]=t,P[e]=n})}}(),u=function(e){function t(){}e={};var n=function(){};return t.prototype={constructor:t,requiredTouchCount:0,onTouchStart:function(e){var t=this,n=t.requiredTouchCount,o=e.touches,u=o.length;return u===n?(t.isTracking||(t.isTracking=!0,t.isStarted=!1),t.lastTouches=e.touches,t.startTime=e.timeStamp,t.start(e)):(u>n&&t.onTouchEnd(e,!0),void 0)},onTouchMove:function(e){var t=this;return t.isTracking?(t.lastTouches=e.touches,t.move(e)):void 0},onTouchEnd:function(e,t){var n=this;n.isTracking&&(n.isTracking=!1,n.isStarted&&(n.isStarted=!1,n.end(e,t)))},start:n,move:n,end:n},e=t}(),r=function(e){function t(){}e={};var n=u,o=a;return o.extend(t,n,{requiredTouchCount:1,start:function(){t.superclass.start.apply(this,arguments);var e=this,n=e.lastTouches;e.lastXY={pageX:n[0].pageX,pageY:n[0].pageY}}}),e=t}(),i=function(e){function t(){}e={};var n=s,o=u,r=a;return r.extend(t,o,{requiredTouchCount:2,getCommonTarget:function(e){var t=e.touches,o=t[0].target,u=t[1].target;if(o===u)return o;if(n.contains(o,u))return o;for(;u;){if(n.contains(u,o))return u;u=u.parentNode}return void 0}}),e=t}(),c=function(e){e={};var t=o;return e={addEvent:t,Touch:u,SingleTouch:r,DoubleTouch:i}}(),n.exports=c});