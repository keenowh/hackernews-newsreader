(this.webpackJsonpnewsreader=this.webpackJsonpnewsreader||[]).push([[0],{25:function(n,e,t){n.exports=t(48)},48:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(21),c=t(4),i=t(5),u=t.n(i),s=t(7),l=t(8),f=t.n(l),d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.id,t=n.by,r=n.title,o=n.url,a=n.time;return{id:e,by:t,title:r,url:o,time:a}},b="https://hacker-news.firebaseio.com/v0/",h="".concat(b,"newstories.json"),p="".concat(b,"item/"),m=function(){var n=Object(s.a)(u.a.mark((function n(e){var t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.get("".concat(p+e,".json")).then((function(n){var e=n.data;return d(e)}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=Object(s.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.get(h).then((function(n){return n.data}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=t(2),w=t(3);function y(){var n=Object(g.a)(["\n  font-weight: bold;\n  color: ",";\n"]);return y=function(){return n},n}function E(){var n=Object(g.a)(["\n  font-style: italic;\n\n  > span:first-child {\n    margin-right: 10px;\n  }\n\n  > span:not(:first-child):before \n  content: '*'\n  margin: 0 7px;\n\n  .story__meta-bold {\n    font-weight:bold;\n  }\n}\n"]);return E=function(){return n},n}function j(){var n=Object(g.a)(["\n  margin-bottom: 5px;\n  font-size: 18px;\n  line-height: 1.8;\n  margin: 0;\n  text-decoration: none;\n\n  a {\n    color: #2e2e2c;\n    background-color: #f8dc3d;\n    text-decoration: none;\n  }\n"]);return j=function(){return n},n}function x(){var n=Object(g.a)(["\n  padding-top: 10px;\n  margin-bottom: 20px;\n  border-top: 1px solid #cccccc;\n\n  &:first-of-type {\n    border-top: 0;\n  }\n\n  &:last-of-type {\n    margin-bottom: 0;\n    padding-bottom: 0;\n  }\n"]);return x=function(){return n},n}var O=w.b.section(x()),k=w.b.h1(j()),S=w.b.div(E()),M=w.b.span(y(),(function(n){return n.color||"red"})),W=Object(r.memo)((function(n){var e=n.storyId,t=Object(r.useState)({}),a=Object(c.a)(t,2),i=a[0],u=a[1];return Object(r.useEffect)((function(){m(e).then((function(n){return n&&n.url&&u(n)}))}),[]),i&&i.url?o.a.createElement(O,{"data-testid":"story"},o.a.createElement(k,null,o.a.createElement("a",{href:i.url},o.a.createElement("p",null,i.title))),o.a.createElement(S,null,o.a.createElement("span",{"data-testid":"story-by"},o.a.createElement(M,{color:"#000"},"By:")," ",i.by),o.a.createElement("span",{"data-testid":"story-posted"},o.a.createElement(M,{color:"#000"},"Posted:"),"  ",function(n){var e=Math.floor((new Date-1e3*n)/1e3),t=Math.floor(e/31536e3);return t>1?"".concat(t," years"):(t=Math.floor(e/2592e3))>1?"".concat(t," months"):(t=Math.floor(e/86400))>1?"".concat(t," days"):(t=Math.floor(e/3600))>1?"".concat(t," hours"):(t=Math.floor(e/60))>1?"".concat(t," minutes"):"".concat(Math.floor(e)," seconds")}(i.time)))):null}));function z(){var n=Object(g.a)(["\n  max-width: 1140px;\n  padding: 20px 15px;\n  margin: auto;\n"]);return z=function(){return n},n}function A(){var n=Object(g.a)(["\n  html {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    -webkit-box-sizing: inherit;\n            box-sizing: inherit;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    line-height: 1;\n    color: #202020;\n    background-color: #fafafe;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 16px;\n\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n"]);return A=function(){return n},n}var T=Object(w.a)(A()),H=w.b.main(z()),L=function(){var n=Object(r.useState)(!1),e=Object(c.a)(n,2),t=e[0],o=e[1],a=Object(r.useState)(30),i=Object(c.a)(a,2),u=i[0],s=i[1];return Object(r.useEffect)((function(){t&&(s(u+30>=500?500:u+30),o(!1))}),[t]),Object(r.useEffect)((function(){var n=function(n,e,t,r){var o;return function(){var a=t&&!o;clearTimeout(o),o=setTimeout((function(){o=null,t||n.apply(void 0,r)}),e),a&&n.apply(void 0,r)}}((function(){if(Math.floor(document.documentElement.offsetHeight-(window.innerHeight+document.documentElement.scrollTop))>5||t)return!1;o(!0)}),300);return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[]),{count:u}},B=function(){var n=L().count,e=Object(r.useState)([]),t=Object(c.a)(e,2),a=t[0],i=t[1];return Object(r.useEffect)((function(){v().then((function(n){return i(n)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(T,null),o.a.createElement(H,{"data-test-id":"stories-container"},o.a.createElement("h1",null,"Hacker News Stories"),a.slice(0,n).map((function(n){return o.a.createElement(W,{key:n,storyId:n})}))))},C=function(){return o.a.createElement(B,null)},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}Object(a.render)(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");I?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):N(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(e,n)}))}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.612145c4.chunk.js.map