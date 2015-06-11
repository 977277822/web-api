modulex.add("event-dom/gesture/rotate",["event-dom/gesture/util","event-dom/base","modulex-util","feature"],function(e,t,a){var n,r=e("event-dom/gesture/util"),o=e("event-dom/base"),u=e("modulex-util"),s=e("feature");n=function(e){function t(){}function a(e){2===e.targetTouches.length&&e.preventDefault()}e={};var n=r,i=n.DoubleTouch,l=n.addEvent,d=o,v="rotateStart",g="rotate",h=180/Math.PI,m="rotateEnd",c=u,p=s;c.extend(t,i,{requiredGestureType:"touch",move:function(e){var a=this;t.superclass.move.apply(a,arguments);var n=a.lastTouches,r=n[0],o=n[1],u=a.lastAngle,s=Math.atan2(o.pageY-r.pageY,o.pageX-r.pageX)*h;if(void 0!==u){var i=Math.abs(s-u),l=(s+360)%360,m=(s-360)%360;Math.abs(l-u)<i?s=l:Math.abs(m-u)<i&&(s=m)}a.lastAngle=s,a.isStarted?d.fire(a.target,g,c.mix(e,{angle:s,rotation:s-a.startAngle})):(a.isStarted=!0,a.startAngle=s,a.target=a.getCommonTarget(e),d.fire(a.target,v,c.mix(e,{angle:s,rotation:0})))},end:function(e){var a=this;t.superclass.end.apply(a,arguments),a.lastAngle=void 0,d.fire(a.target,m,c.mix(e,{touches:a.lastTouches}))}});var f=new t;l([m,v],{handle:f});var T={handle:f};return p.isTouchEventSupported()&&(T.setup=function(){this.addEventListener("touchmove",a,!1)},T.tearDown=function(){this.removeEventListener("touchmove",a,!1)}),l(g,T),e={ROTATE_START:v,ROTATE:g,ROTATE_END:m}}(),a.exports=n});