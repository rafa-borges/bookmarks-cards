(function(t){function n(n){for(var r,i,c=n[0],s=n[1],l=n[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(n);while(d.length)d.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,c=1;c<e.length;c++){var s=e[c];0!==o[s]&&(r=!1)}r&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={app:0},a=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var u=s;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("cd49")},"034f":function(t,n,e){"use strict";e("85ec")},"85ec":function(t,n,e){},"86a9":function(t,n,e){"use strict";e("b881")},b881:function(t,n,e){},cd49:function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("e792"),e("0cdd");var r=e("2b0e"),o=e("5f5b");e("ab8b"),e("2dd8");r["default"].use(o["a"]);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("BookmarksCards",{attrs:{cards:t.cards,"click-on-card":t.handleClickOnCard,"click-on-card-item":t.handleClickOnCardItem}}),e("p",{staticStyle:{"font-size":"10px"}},[t._v(t._s(t.version))])],1)},i=[],c=e("2909"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._l(t.keyCards(t.cards),(function(n,r){return e("b-card",{key:r,staticClass:"key-link",attrs:{"no-body":""}},[e("b-list-group",{attrs:{horizontal:""}},t._l(n.items,(function(n,r){return e("b-list-group-item",{key:r,staticClass:"flex-fill key-link",on:{click:function(e){return t.clickOnCardItem(n)}}},[n.icon?e("b-img",{staticClass:"item-icon",attrs:{src:n.icon}}):t._e(),t._v(" "+t._s(n.name)+" ")],1)})),1)],1)})),e("div",{staticStyle:{margin:"10px"}}),e("b-card-group",{attrs:{columns:""}},t._l(t.standardCards(t.cards),(function(n,r){return e("b-card",{key:r,attrs:{"no-body":""}},[e("b-card-header",{on:{click:function(e){return t.clickOnCard(n)}}},[t._v(t._s(n.name))]),e("b-list-group",t._l(n.items,(function(n,r){return e("b-list-group-item",{key:r,staticClass:"standard-link",on:{click:function(e){return t.clickOnCardItem(n)}}},[n.icon?e("b-img",{staticClass:"item-icon",attrs:{src:n.icon}}):t._e(),t._v(" "+t._s(n.name)+" ")],1)})),1)],1)})),1)],2)},l=[],u=(e("fb6a"),{name:"BookmarksCards",components:{},props:{cards:Array,clickOnCard:Function,clickOnCardItem:Function},methods:{keyCards:function(t){return t.slice(0,1)},standardCards:function(t){return t.slice(1)}}}),f=u,d=(e("86a9"),e("2877")),p=Object(d["a"])(f,s,l,!1,null,"552e2896",null),h=p.exports;function v(){return window.chrome||window["browser"]}var m=e("b85c"),b=(e("4de4"),e("d4ec")),w=(e("b0c0"),function t(n,e){Object(b["a"])(this,t),this.name=n,this.items=e}),y=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"chrome://favicon/"+e;Object(b["a"])(this,t),this.name=n,this.url=e,this.icon=r};function k(t,n){function e(t,r){var o=new Array,a=t.children;if(void 0!=a){var i,c=Object(m["a"])(a.filter((function(t){return t.url})));try{for(c.s();!(i=c.n()).done;){var s=i.value;o.push(new y(s.title,s.url))}}catch(h){c.e(h)}finally{c.f()}if(o.length>0){var l=r+t.title;n.push(new w(l,o))}var u,f=Object(m["a"])(a.filter((function(t){return t.children})));try{for(f.s();!(u=f.n()).done;){var d=u.value,p="0"===t.parentId?r:r+t.title+" → ";e(d,p)}}catch(h){f.e(h)}finally{f.f()}}}t((function(t){var n,r=Object(m["a"])(t);try{for(r.s();!(n=r.n()).done;){var o=n.value,a=o.children;if(void 0!=a){var i,c=Object(m["a"])(a);try{for(c.s();!(i=c.n()).done;){var s=i.value;e(s,"")}}catch(l){c.e(l)}finally{c.f()}}}}catch(l){r.e(l)}finally{r.f()}}))}e("d81d"),e("2ca0");function g(t){if(void 0===t)return"";var n=Math.max(t.lastIndexOf("-"),t.lastIndexOf("|"));return n<=0?t:t.substring(0,n-1)}function O(t,n){t((function(t){var e=t.filter((function(t){return void 0!=t.tab})).filter((function(t){var n,e;return!(null!==(n=t.tab)&&void 0!==n&&null!==(e=n.url)&&void 0!==e&&e.startsWith("chrome"))})).slice(0,3).map((function(t){var n,e;return new y(g(null===(n=t.tab)||void 0===n?void 0:n.title),null===(e=t.tab)||void 0===e?void 0:e.url)}));n.push(new w("Recently Closed",e))}))}e("159b");function C(t){var n=v(),e=t.items.length,r=[];t.items.forEach((function(t){n.tabs.create({url:t.url},(function(t){r.push(t.id),r.length===e&&n.tabs.group({tabIds:r})}))}))}function _(t){window.location.href=t.url}var j=new Array;j.push(new y("Mail","https://gmail.com","https://www.google.com/s2/favicons?domain=https://www.gmail.com/")),j.push(new y("Jira","https://jira.com","https://www.google.com/s2/favicons?domain=https://www.jira.com")),j.push(new y("Stackoverflow","https://stackoverflow.com","https://www.google.com/s2/favicons?domain=https://www.stackoverflow.com")),j.push(new y("Looker","https://looker.com","https://www.google.com/s2/favicons?domain=https://looker.com"));var x=new Array;x.push(new w("Key Links",j));for(var I=0;I<9;I++)x.push(new w("Some More Links ".concat(I+1),j));var S=x,M=[],P={name:"App",components:{BookmarksCards:h},data:function(){try{var t=v();k(t.bookmarks.getTree,M),O(t.sessions.getRecentlyClosed,M)}catch(n){M.push.apply(M,Object(c["a"])(S))}return{cards:M,version:"1.0.1 [6/6/2021]"}},methods:{handleClickOnCard:function(t){C(t)},handleClickOnCardItem:function(t){_(t)}}},A=P,T=(e("034f"),Object(d["a"])(A,a,i,!1,null,null,null)),B=T.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(B)}}).$mount("#app")}});
//# sourceMappingURL=app.f4541b4b.js.map