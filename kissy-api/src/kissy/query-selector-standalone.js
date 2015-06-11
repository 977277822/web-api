var querySelectorAll=function(){var t,e={};return t=function(t){var n,r,a;return n=function(t){function e(t){var e=0;return parseFloat(t.replace(/\./g,function(){return 0===e++?".":""}))}function n(){var t,n;return(t=m.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/))&&(n=t[1]||t[2])?p.documentMode||e(n):void 0}function r(t,e){for(var n in e)t[n]=e[n]}function a(t,e){for(var n=0,r=t.length;r>n&&e(t[n],n)!==!1;n++);}var i,o=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,f=/:|^on/,c={},l={tabindex:{get:function(t){var e=t.getAttributeNode("tabindex");return e&&e.specified?parseInt(e.value,10):u.test(t.nodeName)||s.test(t.nodeName)&&t.href?0:void 0}}},h={get:function(t,e){return t[i[e]||e]?e.toLowerCase():void 0}},d={};l.style={get:function(t){return t.style.cssText}},i={hidefocus:"hideFocus",tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"};var m="undefined"!=typeof navigator?navigator.userAgent:"",p="undefined"!=typeof document?document:{},v=n();if(v&&8>v&&(l.style.set=function(t,e){t.style.cssText=e},r(d,{get:function(t,e){var n=t.getAttributeNode(e);return n&&(n.specified||n.nodeValue)?n.nodeValue:void 0}}),r(c,i),l.tabIndex=l.tabindex,a(["href","src","width","height","colSpan","rowSpan"],function(t){l[t]={get:function(e){var n=e.getAttribute(t,2);return null===n?void 0:n}}}),l.placeholder={get:function(t,e){return t[e]||d.get(t,e)}}),v){var x=l.href=l.href||{};x.set=function(t,e,n){var r,a=t.childNodes,i=a.length,o=i>0;for(i-=1;i>=0;i--)3!==a[i].nodeType&&(o=0);o&&(r=t.ownerDocument.createElement("b"),r.style.display="none",t.appendChild(r)),t.setAttribute(n,""+e),r&&t.removeChild(r)}}var g,y=/^[\s\xa0]+|[\s\xa0]+$/g,b=String.prototype.trim,T=" ";if(g=function(t,e){return e.getElementsByTagName(t)},p.createElement){var E=p.createElement("div");E.appendChild(document.createComment("")),E.getElementsByTagName("*").length&&(g=function(t,e){var n=e.getElementsByTagName(t),r="*"===t;if(r||"number"!=typeof n.length){for(var a,i=[],o=0;a=n[o++];)r&&1!==a.nodeType||i.push(a);return i}return n})}var N="sourceIndex"in(p&&p.documentElement||{})?function(t,e){return t.sourceIndex-e.sourceIndex}:function(t,e){if(!t.compareDocumentPosition||!e.compareDocumentPosition)return t.compareDocumentPosition?-1:1;var n=4&t.compareDocumentPosition(e);return n?-1:1},C=t={ie:v,unique:function(){function t(t,n){return t===n?(e=!0,0):N(t,n)}var e,n=!0;return[0,0].sort(function(){return n=!1,0}),function(r){if(e=n,r.sort(t),e)for(var a=1,i=r.length;i>a;)r[a]===r[a-1]?(r.splice(a,1),--i):a++;return r}}(),getElementsByTagName:g,getSimpleAttr:function(t,e){var n=t&&t.getAttributeNode(e);return n&&n.specified?"value"in n?n.value:n.nodeValue:void 0},contains:v?function(t,e){return 9===t.nodeType&&(t=t.documentElement),e=e.parentNode,t===e?!0:e&&1===e.nodeType?t.contains&&t.contains(e):!1}:function(t,e){return!!(16&t.compareDocumentPosition(e))},isTag:function(t,e){return"*"===e||t.nodeName.toLowerCase()===e.toLowerCase()},hasSingleClass:function(t,e){var n=t&&C.getSimpleAttr(t,"class");return n&&(n=n.replace(/[\r\t\n]/g,T))&&(T+n+T).indexOf(T+e+T)>-1},startsWith:function(t,e){return 0===t.lastIndexOf(e,0)},endsWith:function(t,e){var n=t.length-e.length;return n>=0&&t.indexOf(e,n)===n},trim:b?function(t){return null==t?"":b.call(t)}:function(t){return null==t?"":(t+"").replace(y,"")},attr:function(t,e){var n,r;if(e=e.toLowerCase(),e=c[e]||e,n=o.test(e)?h:f.test(e)?d:l[e],t&&1===t.nodeType){if("form"===t.nodeName.toLowerCase()&&(n=d),n&&n.get)return n.get(t,e);if(r=t.getAttribute(e),""===r){var a=t.getAttributeNode(e);if(!a||!a.specified)return void 0}return null===r?void 0:r}}};return t}(),r=function(t){var n=function(t){function e(t,e){for(var n in e)t[n]=e[n]}function n(t){return"[object Array]"===Object.prototype.toString.call(t)}function r(t,e,r){if(t){var a,i,o,u=0;if(r=r||null,n(t))for(o=t.length,i=t[0];o>u&&e.call(r,i,u,t)!==!1;i=t[++u]);else for(a in t)if(e.call(r,t[a],a,t)===!1)break}}function a(t,e){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return!0;return!1}var i={},o={SHIFT_TYPE:1,REDUCE_TYPE:2,ACCEPT_TYPE:0,TYPE_INDEX:0,PRODUCTION_INDEX:1,TO_INDEX:2},u=function(t){var n=this;n.rules=[],e(n,t),n.resetInput(n.input)};u.prototype={resetInput:function(t){e(this,{input:t,matched:"",stateStack:[u.STATIC.INITIAL],match:"",text:"",firstLine:1,lineNumber:1,lastLine:1,firstColumn:1,lastColumn:1})},getCurrentRules:function(){var t=this,e=t.stateStack[t.stateStack.length-1],n=[];return t.mapState&&(e=t.mapState(e)),r(t.rules,function(t){var r=t.state||t[3];r?a(e,r)&&n.push(t):e===u.STATIC.INITIAL&&n.push(t)}),n},pushState:function(t){this.stateStack.push(t)},popState:function(t){t=t||1;for(var e;t--;)e=this.stateStack.pop();return e},showDebugInfo:function(){var t=this,e=u.STATIC.DEBUG_CONTEXT_LIMIT,n=t.matched,r=t.match,a=t.input;n=n.slice(0,n.length-r.length);var i=(n.length>e?"...":"")+n.slice(0-e).replace(/\n/," "),o=r+a;return o=o.slice(0,e)+(o.length>e?"...":""),i+o+"\n"+new Array(i.length+1).join("-")+"^"},mapSymbol:function(t){return this.symbolMap[t]},mapReverseSymbol:function(t){var e,n=this,r=n.symbolMap,a=n.reverseSymbolMap;if(!a&&r){a=n.reverseSymbolMap={};for(e in r)a[r[e]]=e}return a?a[t]:t},lex:function(){var n,r,a,i,o,s=this,f=s.input,c=s.getCurrentRules();if(s.match=s.text="",!f)return s.mapSymbol(u.STATIC.END_TAG);for(n=0;n<c.length;n++){r=c[n];var l=r.regexp||r[1],h=r.token||r[0],d=r.action||r[2]||t;if(a=f.match(l)){o=a[0].match(/\n.*/g),o&&(s.lineNumber+=o.length),e(s,{firstLine:s.lastLine,lastLine:s.lineNumber+1,firstColumn:s.lastColumn,lastColumn:o?o[o.length-1].length-1:s.lastColumn+a[0].length});var m;return m=s.match=a[0],s.matches=a,s.text=m,s.matched+=m,i=d&&d.call(s),i=i===t?h:s.mapSymbol(i),f=f.slice(m.length),s.input=f,i?i:s.lex()}}}},u.STATIC={INITIAL:"I",DEBUG_CONTEXT_LIMIT:20,END_TAG:"$EOF"};var s=new u({rules:[["b",/^\[(?:[\t\r\n\f\x20]*)/,function(){this.text=this.yy.trim(this.text)}],["c",/^(?:[\t\r\n\f\x20]*)\]/,function(){this.text=this.yy.trim(this.text)}],["d",/^(?:[\t\r\n\f\x20]*)~=(?:[\t\r\n\f\x20]*)/,function(){this.text=this.yy.trim(this.text)}],["e",/^(?:[\t\r\n\f\x20]*)\|=(?:[\t\r\n\f\x20]*)/,function(){this.text=this.yy.trim(this.text)}],["f",/^(?:[\t\r\n\f\x20]*)\^=(?:[\t\r\n\f\x20]*)/,function(){this.text=this.yy.trim(this.text)}],["g",/^(?:[\t\r\n\f\x20]*)\$=(?:[\t\r\n\f\x20]*)/,function(){this.text=this.yy.trim(this.text)}],["h",/^(?:[\t\r\n\f\x20]*)\*=(?:[\t\r\n\f\x20]*)/,function(){this.text=this.yy.trim(this.text)}],["i",/^(?:[\t\r\n\f\x20]*)\=(?:[\t\r\n\f\x20]*)/,function(){this.text=this.yy.trim(this.text)}],["j",/^(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)\(/,function(){this.text=this.yy.trim(this.text).slice(0,-1),this.pushState("fn")}],["k",/^[^\)]*/,function(){this.popState()},["fn"]],["l",/^(?:[\t\r\n\f\x20]*)\)/,function(){this.text=this.yy.trim(this.text)}],["m",/^:not\((?:[\t\r\n\f\x20]*)/i,function(){this.text=this.yy.trim(this.text)}],["n",/^(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)/,function(){this.text=this.yy.unEscape(this.text)}],["o",/^"(\\"|[^"])*"/,function(){this.text=this.yy.unEscapeStr(this.text)}],["o",/^'(\\'|[^'])*'/,function(){this.text=this.yy.unEscapeStr(this.text)}],["p",/^#(?:(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))+)/,function(){this.text=this.yy.unEscape(this.text.slice(1))}],["q",/^\.(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)/,function(){this.text=this.yy.unEscape(this.text.slice(1))}],["r",/^(?:[\t\r\n\f\x20]*),(?:[\t\r\n\f\x20]*)/,function(){this.text=this.yy.trim(this.text)}],["s",/^::?/,0],["t",/^(?:[\t\r\n\f\x20]*)\+(?:[\t\r\n\f\x20]*)/,function(){this.text=this.yy.trim(this.text)}],["u",/^(?:[\t\r\n\f\x20]*)>(?:[\t\r\n\f\x20]*)/,function(){this.text=this.yy.trim(this.text)}],["v",/^(?:[\t\r\n\f\x20]*)~(?:[\t\r\n\f\x20]*)/,function(){this.text=this.yy.trim(this.text)}],["w",/^\*/,0],["x",/^(?:[\t\r\n\f\x20]+)/,0],["y",/^./,0]]});return i.lexer=s,s.symbolMap={$EOF:"a",LEFT_BRACKET:"b",RIGHT_BRACKET:"c",INCLUDES:"d",DASH_MATCH:"e",PREFIX_MATCH:"f",SUFFIX_MATCH:"g",SUBSTRING_MATCH:"h",ALL_MATCH:"i",FUNCTION:"j",PARAMETER:"k",RIGHT_PARENTHESES:"l",NOT:"m",IDENT:"n",STRING:"o",HASH:"p",CLASS:"q",COMMA:"r",COLON:"s",PLUS:"t",GREATER:"u",TILDE:"v",UNIVERSAL:"w",S:"x",INVALID:"y",$START:"z",selectors_group:"aa",selector:"ab",simple_selector_sequence:"ac",combinator:"ad",type_selector:"ae",id_selector:"af",class_selector:"ag",attrib_match:"ah",attrib:"ai",attrib_val:"aj",pseudo:"ak",negation:"al",negation_arg:"am",suffix_selector:"an",suffix_selectors:"ao"},i.productions=[["z",["aa"]],["aa",["ab"],function(){return[this.$1]}],["aa",["aa","r","ab"],function(){this.$1.push(this.$3)}],["ab",["ac"]],["ab",["ab","ad","ac"],function(){this.$1.nextCombinator=this.$3.prevCombinator=this.$2;var t;return t=this.$1.order=this.$1.order||0,this.$3.order=t+1,this.$3.prev=this.$1,this.$1.next=this.$3,this.$3}],["ad",["t"]],["ad",["u"]],["ad",["v"]],["ad",["x"],function(){return" "}],["ae",["n"],function(){return{t:"tag",value:this.$1}}],["ae",["w"],function(){return{t:"tag",value:this.$1}}],["af",["p"],function(){return{t:"id",value:this.$1}}],["ag",["q"],function(){return{t:"cls",value:this.$1}}],["ah",["f"]],["ah",["g"]],["ah",["h"]],["ah",["i"]],["ah",["d"]],["ah",["e"]],["ai",["b","n","c"],function(){return{t:"attrib",value:{ident:this.$2}}}],["aj",["n"]],["aj",["o"]],["ai",["b","n","ah","aj","c"],function(){return{t:"attrib",value:{ident:this.$2,match:this.$3,value:this.$4}}}],["ak",["s","j","k","l"],function(){return{t:"pseudo",value:{fn:this.$2.toLowerCase(),param:this.$3}}}],["ak",["s","n"],function(){return{t:"pseudo",value:{ident:this.$2.toLowerCase()}}}],["al",["m","am","l"],function(){return{t:"pseudo",value:{fn:"not",param:this.$2}}}],["am",["ae"]],["am",["af"]],["am",["ag"]],["am",["ai"]],["am",["ak"]],["an",["af"]],["an",["ag"]],["an",["ai"]],["an",["ak"]],["an",["al"]],["ao",["an"],function(){return[this.$1]}],["ao",["ao","an"],function(){this.$1.push(this.$2)}],["ac",["ae"]],["ac",["ao"],function(){return{suffix:this.$1}}],["ac",["ae","ao"],function(){return{t:"tag",value:this.$1.value,suffix:this.$2}}]],i.table={gotos:{0:{aa:8,ab:9,ae:10,af:11,ag:12,ai:13,ak:14,al:15,an:16,ao:17,ac:18},2:{ae:20,af:21,ag:22,ai:23,ak:24,am:25},9:{ad:33},10:{af:11,ag:12,ai:13,ak:14,al:15,an:16,ao:34},17:{af:11,ag:12,ai:13,ak:14,al:15,an:35},19:{ah:43},28:{ab:46,ae:10,af:11,ag:12,ai:13,ak:14,al:15,an:16,ao:17,ac:18},33:{ae:10,af:11,ag:12,ai:13,ak:14,al:15,an:16,ao:17,ac:47},34:{af:11,ag:12,ai:13,ak:14,al:15,an:35},43:{aj:50},46:{ad:33}},action:{0:{b:[1,t,1],m:[1,t,2],n:[1,t,3],p:[1,t,4],q:[1,t,5],s:[1,t,6],w:[1,t,7]},1:{n:[1,t,19]},2:{b:[1,t,1],n:[1,t,3],p:[1,t,4],q:[1,t,5],s:[1,t,6],w:[1,t,7]},3:{a:[2,9],r:[2,9],t:[2,9],u:[2,9],v:[2,9],x:[2,9],p:[2,9],q:[2,9],b:[2,9],s:[2,9],m:[2,9],l:[2,9]},4:{a:[2,11],r:[2,11],t:[2,11],u:[2,11],v:[2,11],x:[2,11],p:[2,11],q:[2,11],b:[2,11],s:[2,11],m:[2,11],l:[2,11]},5:{a:[2,12],r:[2,12],t:[2,12],u:[2,12],v:[2,12],x:[2,12],p:[2,12],q:[2,12],b:[2,12],s:[2,12],m:[2,12],l:[2,12]},6:{j:[1,t,26],n:[1,t,27]},7:{a:[2,10],r:[2,10],t:[2,10],u:[2,10],v:[2,10],x:[2,10],p:[2,10],q:[2,10],b:[2,10],s:[2,10],m:[2,10],l:[2,10]},8:{a:[0],r:[1,t,28]},9:{a:[2,1],r:[2,1],t:[1,t,29],u:[1,t,30],v:[1,t,31],x:[1,t,32]},10:{a:[2,38],r:[2,38],t:[2,38],u:[2,38],v:[2,38],x:[2,38],b:[1,t,1],m:[1,t,2],p:[1,t,4],q:[1,t,5],s:[1,t,6]},11:{a:[2,31],r:[2,31],t:[2,31],u:[2,31],v:[2,31],x:[2,31],p:[2,31],q:[2,31],b:[2,31],s:[2,31],m:[2,31]},12:{a:[2,32],r:[2,32],t:[2,32],u:[2,32],v:[2,32],x:[2,32],p:[2,32],q:[2,32],b:[2,32],s:[2,32],m:[2,32]},13:{a:[2,33],r:[2,33],t:[2,33],u:[2,33],v:[2,33],x:[2,33],p:[2,33],q:[2,33],b:[2,33],s:[2,33],m:[2,33]},14:{a:[2,34],r:[2,34],t:[2,34],u:[2,34],v:[2,34],x:[2,34],p:[2,34],q:[2,34],b:[2,34],s:[2,34],m:[2,34]},15:{a:[2,35],r:[2,35],t:[2,35],u:[2,35],v:[2,35],x:[2,35],p:[2,35],q:[2,35],b:[2,35],s:[2,35],m:[2,35]},16:{a:[2,36],r:[2,36],t:[2,36],u:[2,36],v:[2,36],x:[2,36],p:[2,36],q:[2,36],b:[2,36],s:[2,36],m:[2,36]},17:{a:[2,39],r:[2,39],t:[2,39],u:[2,39],v:[2,39],x:[2,39],b:[1,t,1],m:[1,t,2],p:[1,t,4],q:[1,t,5],s:[1,t,6]},18:{a:[2,3],r:[2,3],t:[2,3],u:[2,3],v:[2,3],x:[2,3]},19:{c:[1,t,36],d:[1,t,37],e:[1,t,38],f:[1,t,39],g:[1,t,40],h:[1,t,41],i:[1,t,42]},20:{l:[2,26]},21:{l:[2,27]},22:{l:[2,28]},23:{l:[2,29]},24:{l:[2,30]},25:{l:[1,t,44]},26:{k:[1,t,45]},27:{a:[2,24],r:[2,24],t:[2,24],u:[2,24],v:[2,24],x:[2,24],p:[2,24],q:[2,24],b:[2,24],s:[2,24],m:[2,24],l:[2,24]},28:{b:[1,t,1],m:[1,t,2],n:[1,t,3],p:[1,t,4],q:[1,t,5],s:[1,t,6],w:[1,t,7]},29:{n:[2,5],w:[2,5],p:[2,5],q:[2,5],b:[2,5],s:[2,5],m:[2,5]},30:{n:[2,6],w:[2,6],p:[2,6],q:[2,6],b:[2,6],s:[2,6],m:[2,6]},31:{n:[2,7],w:[2,7],p:[2,7],q:[2,7],b:[2,7],s:[2,7],m:[2,7]},32:{n:[2,8],w:[2,8],p:[2,8],q:[2,8],b:[2,8],s:[2,8],m:[2,8]},33:{b:[1,t,1],m:[1,t,2],n:[1,t,3],p:[1,t,4],q:[1,t,5],s:[1,t,6],w:[1,t,7]},34:{a:[2,40],r:[2,40],t:[2,40],u:[2,40],v:[2,40],x:[2,40],b:[1,t,1],m:[1,t,2],p:[1,t,4],q:[1,t,5],s:[1,t,6]},35:{a:[2,37],r:[2,37],t:[2,37],u:[2,37],v:[2,37],x:[2,37],p:[2,37],q:[2,37],b:[2,37],s:[2,37],m:[2,37]},36:{a:[2,19],r:[2,19],t:[2,19],u:[2,19],v:[2,19],x:[2,19],p:[2,19],q:[2,19],b:[2,19],s:[2,19],m:[2,19],l:[2,19]},37:{n:[2,17],o:[2,17]},38:{n:[2,18],o:[2,18]},39:{n:[2,13],o:[2,13]},40:{n:[2,14],o:[2,14]},41:{n:[2,15],o:[2,15]},42:{n:[2,16],o:[2,16]},43:{n:[1,t,48],o:[1,t,49]},44:{a:[2,25],r:[2,25],t:[2,25],u:[2,25],v:[2,25],x:[2,25],p:[2,25],q:[2,25],b:[2,25],s:[2,25],m:[2,25]},45:{l:[1,t,51]},46:{a:[2,2],r:[2,2],t:[1,t,29],u:[1,t,30],v:[1,t,31],x:[1,t,32]},47:{a:[2,4],r:[2,4],t:[2,4],u:[2,4],v:[2,4],x:[2,4]},48:{c:[2,20]},49:{c:[2,21]},50:{c:[1,t,52]},51:{a:[2,23],r:[2,23],t:[2,23],u:[2,23],v:[2,23],x:[2,23],p:[2,23],q:[2,23],b:[2,23],s:[2,23],m:[2,23],l:[2,23]},52:{a:[2,22],r:[2,22],t:[2,22],u:[2,22],v:[2,22],x:[2,22],p:[2,22],q:[2,22],b:[2,22],s:[2,22],m:[2,22],l:[2,22]}}},i.parse=function(e,n){var r,a,i,u=this,s=u.lexer,f=u.table,c=f.gotos,l=f.action,h=u.productions,d=[null],m=n?"in file: "+n+" ":"",p=[0];for(s.resetInput(e);;){if(r=p[p.length-1],a||(a=s.lex()),i=a?l[r]&&l[r][a]:null,!i){var v,x=[];if(l[r])for(var g in l[r])x.push(u.lexer.mapReverseSymbol(g));throw v=m+"syntax error at line "+s.lineNumber+":\n"+s.showDebugInfo()+"\nexpect "+x.join(", "),new Error(v)}switch(i[o.TYPE_INDEX]){case o.SHIFT_TYPE:p.push(a),d.push(s.text),p.push(i[o.TO_INDEX]),a=null;break;case o.REDUCE_TYPE:var y,b=h[i[o.PRODUCTION_INDEX]],T=b.symbol||b[0],E=b.action||b[2],N=b.rhs||b[1],C=N.length,S=0,I=d[d.length-C];for(y=t,u.$$=I;C>S;S++)u["$"+(C-S)]=d[d.length-1-S];E&&(y=E.call(u)),I=y!==t?y:u.$$,p=p.slice(0,-1*C*2),d=d.slice(0,-1*C),p.push(T),d.push(I);var w=c[p[p.length-2]][p[p.length-1]];p.push(w);break;case o.ACCEPT_TYPE:return I}}},i}();return"undefined"!=typeof e&&(t=n),t}(),a=function(t){function e(t){return t.replace($,_)}function a(){C={}}function i(t,e){do t=t[e];while(t&&1!==t.nodeType);return t}function o(t){var e,n=0,r=0;return"number"==typeof t?r=t:"odd"===t?(n=2,r=1):"even"===t?(n=2,r=0):(e=t.replace(/\s/g,"").match(A))&&(e[1]?(n=parseInt(e[2],10),isNaN(n)&&(n="-"===e[2]?-1:1)):n=0,r=parseInt(e[3],10)||0),{a:n,b:r}}function u(t,e,n,r){if(0===e){if(t===n)return r}else if((t-n)/e>=0&&(t-n)%e===0&&r)return 1;return void 0}function s(t){var e=t&&(t.ownerDocument||t).documentElement;return e?"html"!==e.nodeName.toLowerCase():!1}function f(t,e){return v(t,null,e)}function c(t,e){if(!e)return!0;if(!t)return!1;if(9===t.nodeType)return!1;var n,r,a=1,i=e.suffix;if("tag"===e.t&&(a&=g.tag(t,e.value)),a&&i)for(n=i.length,r=0;a&&n>r;r++){var o=i[r],u=o.t;g[u]&&(a&=g[u](t,o.value))}return a}function l(t,e){var n,r=1,a=t,o=e;do{if(r&=c(t,e),!r)return n=k[e.nextCombinator],n.immediate?{el:i(a,k[o.nextCombinator].dir),match:o}:{el:t&&i(t,n.dir),match:e};if(e=e&&e.prev,!e)return!0;if(n=k[e.nextCombinator],t=i(t,n.dir),!n.immediate)return{el:t,match:e}}while(t);return{el:i(a,k[o.nextCombinator].dir),match:o}}function h(t,e){var n,r=e;do{if(!c(t,r))return null;if(r=r.prev,!r)return!0;n=k[r.nextCombinator],t=i(t,n.dir)}while(t&&n.immediate);return t?{el:t,match:r}:null}function d(t){var e;return x?(e=t.getAttribute(T))||t.setAttribute(T,e=+new Date+"_"+ ++N):(e=t[T])||(e=t[T]=+new Date+"_"+ ++N),e}function m(t,e){var n,r=d(t);return n=r+"_"+(e.order||0),n in C?C[n]:(C[n]=p(t,e),C[n])}function p(t,e){var n=l(t,e);if(n===!0)return!0;for(t=n.el,e=n.match;t;){if(m(t,e))return!0;t=i(t,k[e.nextCombinator].dir)}return!1}function v(t,e,n){E[t]||(E[t]=b.parse(t));var r,i,o=E[t],u=0,f=o.length,c=[];for(n&&(e=e||n[0].ownerDocument),r=e&&e.ownerDocument||"undefined"!=typeof document&&document,e&&9===e.nodeType&&!r&&(r=e),e=e||r,x=s(e);f>u;u++){a(),i=o[u];var l,d,p,v,g=i.suffix,T=n,N=null;if(!T){if(g&&!x)for(l=0,d=g.length;d>l;l++){var C=g[l];if("id"===C.t){N=C.value;break}}if(N){var I=!e.getElementById,w=y.contains(r,e),A=I?w?r.getElementById(N):null:e.getElementById(N);if(!A&&I||A&&S(A,"id")!==N){for(var $=y.getElementsByTagName("*",e),_=$.length,q=0;_>q;q++)if(A=$[q],S(A,"id")===N){T=[A];break}q===_&&(T=[])}else w&&A&&e!==r&&(A=y.contains(e,A)?A:null),T=A?[A]:[]}else T=y.getElementsByTagName(i.value||"*",e)}if(p=0,v=T.length)for(;v>p;p++){var D=T[p],L=h(D,i);L===!0?c.push(D):L&&m(L.el,L.match)&&c.push(D)}}return f>1&&(c=y.unique(c)),c}var x,g,y=n,b=r,T="_ks_data_selector_id_",E={},N=0,C={},S=function(t,e){return x?y.getSimpleAttr(t,e):y.attr(t,e)},I=y.hasSingleClass,w=y.isTag,A=/^(([+-]?(?:\d+)?)?n)?([+-]?\d+)?$/,$=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,_=function(t,e){var n="0x"+e-65536;return isNaN(n)?e:0>n?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)},q={"nth-child":function(t,e){var n=o(e),r=n.a,a=n.b;if(0===r&&0===a)return 0;var i=0,s=t.parentNode;if(s)for(var f,c,l=s.childNodes,h=0,d=l.length;d>h;h++)if(f=l[h],1===f.nodeType&&(i++,c=u(i,r,a,f===t),void 0!==c))return c;return 0},"nth-last-child":function(t,e){var n=o(e),r=n.a,a=n.b;if(0===r&&0===a)return 0;var i=0,s=t.parentNode;if(s)for(var f,c,l=s.childNodes,h=l.length,d=h-1;d>=0;d--)if(f=l[d],1===f.nodeType&&(i++,c=u(i,r,a,f===t),void 0!==c))return c;return 0},"nth-of-type":function(t,e){var n=o(e),r=n.a,a=n.b;if(0===r&&0===a)return 0;var i=0,s=t.parentNode;if(s)for(var f,c,l=s.childNodes,h=t.tagName,d=0,m=l.length;m>d;d++)if(f=l[d],f.tagName===h&&(i++,c=u(i,r,a,f===t),void 0!==c))return c;return 0},"nth-last-of-type":function(t,e){var n=o(e),r=n.a,a=n.b;if(0===r&&0===a)return 0;var i=0,s=t.parentNode;if(s)for(var f,c,l=s.childNodes,h=l.length,d=t.tagName,m=h-1;m>=0;m--)if(f=l[m],f.tagName===d&&(i++,c=u(i,r,a,f===t),void 0!==c))return c;return 0},lang:function(t,n){var r;n=e(n.toLowerCase());do if(r=x?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return r=r.toLowerCase(),r===n||0===r.indexOf(n+"-");while((t=t.parentNode)&&1===t.nodeType);return!1},not:function(t,e){return!g[e.t](t,e.value)}},D={empty:function(t){for(var e,n,r=t.childNodes,a=0,i=r.length-1;i>a;a++)if(e=r[a],n=e.nodeType,1===n||3===n||4===n||5===n)return 0;return 1},root:function(t){return 9===t.nodeType?!0:t.ownerDocument&&t===t.ownerDocument.documentElement},"first-child":function(t){return q["nth-child"](t,1)},"last-child":function(t){return q["nth-last-child"](t,1)},"first-of-type":function(t){return q["nth-of-type"](t,1)},"last-of-type":function(t){return q["nth-last-of-type"](t,1)},"only-child":function(t){return D["first-child"](t)&&D["last-child"](t)},"only-of-type":function(t){return D["first-of-type"](t)&&D["last-of-type"](t)},focus:function(t){var e=t.ownerDocument;return e&&t===e.activeElement&&(!e.hasFocus||e.hasFocus())&&!!(t.type||t.href||t.tabIndex>=0)},target:function(t){var e=location.hash;return e&&e.slice(1)===S(t,"id")},enabled:function(t){return!t.disabled},disabled:function(t){return t.disabled},checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&t.checked||"option"===e&&t.selected}},L={"~=":function(t,e){return!e||e.indexOf(" ")>-1?0:-1!==(" "+t+" ").indexOf(" "+e+" ")},"|=":function(t,e){return-1!==(" "+t).indexOf(" "+e+"-")},"^=":function(t,e){return e&&y.startsWith(t,e)},"$=":function(t,e){return e&&y.endsWith(t,e)},"*=":function(t,e){return e&&-1!==t.indexOf(e)},"=":function(t,e){return t===e}},k={">":{dir:"parentNode",immediate:1}," ":{dir:"parentNode"},"+":{dir:"previousSibling",immediate:1},"~":{dir:"previousSibling"}};return g={tag:w,cls:I,id:function(t,e){return S(t,"id")===e},attrib:function(t,e){var n=e.ident;x||(n=n.toLowerCase());var r=S(t,n),a=e.match;if(!a&&void 0!==r)return 1;if(a){if(void 0===r)return 0;var i=L[a];if(i)return i(r+"",e.value+"")}return 0},pseudo:function(t,e){var n,r,a;if(r=e.fn){if(!(n=q[r]))throw new SyntaxError("Syntax error: not support pseudo: "+r);return n(t,e.param)}if(a=e.ident){if(!D[a])throw new SyntaxError("Syntax error: not support pseudo: "+a);return D[a](t)}return 0}},b.lexer.yy={trim:y.trim,unEscape:e,unEscapeStr:function(t){return this.unEscape(t.slice(1,-1))}},t=v,v.parse=function(t){return b.parse(t)},v.matches=f,v.util=y,v.version="1.0.6",t}(),t=a}()}();