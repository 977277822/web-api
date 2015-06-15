modulex.add("event-dom/ie",["event-dom/base","dom"],function(e,n,t){var r,i,a,o=e("event-dom/base"),c=e("dom");r=function(e){function n(e){return m.test(e.nodeName)}function t(e){var n=e.type;return"checkbox"===n||"radio"===n}function r(e){if("checked"===e.originalEvent.propertyName){var n=this;n.__changed=1,n.__changeTimer&&clearTimeout(n.__changeTimer),n.__changeTimer=setTimeout(function(){n.__changed=0,n.__changeTimer=null},50)}}function i(e){this.__changed&&(this.__changed=0,s.fire(this,"change",e))}function a(e){var t=e.target;n(t)&&!t.__changeHandler&&(t.__changeHandler=1,s.on(t,"change",{fn:u,last:1}))}function u(e){var n=this;if(!e.isPropagationStopped()&&!t(n)){var r;(r=n.parentNode)&&s.fire(r,"change",e)}}e={};var s=o,f=c,h=s.Special,m=/^(?:textarea|input|select)$/i;return h.change={setup:function(){var e=this;if(n(e)){if(!t(e))return!1;s.on(e,"propertychange",r),s.on(e,"click",i)}else s.on(e,"beforeactivate",a)},tearDown:function(){var e=this;if(n(e)){if(!t(e))return!1;s.remove(e,"propertychange",r),s.remove(e,"click",i)}else s.remove(e,"beforeactivate",a),f.query("textarea,input,select",e).each(function(e){e.__changeHandler&&(e.__changeHandler=0,s.remove(e,"change",{fn:u,last:1}))})}},e}(),i=function(e){function n(e){var n=e.target,i=u(n),a="input"===i||"button"===i?n.form:null;a&&!a.__submitFix&&(a.__submitFix=1,r.on(a,"submit",{fn:t,last:1}))}function t(e){var n=this;!n.parentNode||e.isPropagationStopped()||e.synthetic||r.fire(n.parentNode,"submit",e)}e={};var r=o,i=c,a=r.Special,u=i.nodeName;return a.submit={setup:function(){var e=this;return"form"===u(e)?!1:(r.on(e,"click keypress",n),void 0)},tearDown:function(){var e=this;return"form"===u(e)?!1:(r.remove(e,"click keypress",n),i.query("form",e).each(function(e){e.__submitFix&&(e.__submitFix=0,r.remove(e,"submit",{fn:t,last:1}))}),void 0)}},e}(),a=function(e){return e={}}(),t.exports=a});