(this["webpackJsonpip-tracker"]=this["webpackJsonpip-tracker"]||[]).push([[0],{13:function(e,t,n){},17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(14),c=n.n(l),o=(n(22),n(3)),u=n.n(o),i=n(15),s=n(2),m=n(16),E=n.n(m),g=(n(13),function(e){var t=e.items;return e.isLoading?r.a.createElement("h2",null,"Loading..."):r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Query :")," ",t.query),r.a.createElement("li",null,r.a.createElement("strong",null,"ISP :")," ",t.isp),r.a.createElement("li",null,r.a.createElement("strong",null,"Region :")," ",t.regionName),r.a.createElement("li",null,r.a.createElement("strong",null,"Country :")," ",t.country),r.a.createElement("li",null,r.a.createElement("strong",null,"City :")," ",t.city),r.a.createElement("li",null,r.a.createElement("strong",null,"Timezone :")," ",t.timezone),r.a.createElement("li",null,r.a.createElement("strong",null,"Status :")," ",t.status)))}),p=function(e){var t=e.getQuery,n=Object(a.useState)(""),l=Object(s.a)(n,2),c=l[0],o=l[1];return r.a.createElement("section",null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"search",placeholder:"Enter Target IP",value:c,onChange:function(e){return n=e.target.value,o(n),void t(n);var n},autoFocus:!0})))};var f=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!0),o=Object(s.a)(c,2),m=o[0],f=o[1],d=Object(a.useState)(""),v=Object(s.a)(d,2),h=v[0],b=v[1];return Object(a.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("http://ip-api.com/json/".concat(h));case 2:t=e.sent,console.log("result is: ",t.data),l(t.data),f(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h]),r.a.createElement("div",{className:"App"},r.a.createElement(p,{getQuery:function(e){return b(e)}}),r.a.createElement(g,{items:n,isLoading:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.19bb7e79.chunk.js.map