(this["webpackJsonpreact-tick-tack-toe"]=this["webpackJsonpreact-tick-tack-toe"]||[]).push([[0],[,,,,,,,,,,,,function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},,function(n,t,e){"use strict";e.r(t);var c=e(1),r=e.n(c),a=e(6),i=e.n(a),u=(e(12),e(13),e(7)),s=e(3),o=(e(14),e(15),e(16),e(0)),l=function(n){var t=n.value,e=n.onClick,c=n.index;return Object(o.jsx)("button",{className:"square",onClick:function(){return e(c)},children:t})},j=function(n){var t=n.squares,e=n.click;return Object(o.jsx)("div",{className:"board",children:t.map((function(n,t){return Object(o.jsx)(l,{value:n,onClick:e,index:t},t)}))})};var b=Array(9).fill(null),f=function(){var n=r.a.useState(b),t=Object(s.a)(n,2),e=t[0],c=t[1],a=r.a.useState(!0),i=Object(s.a)(a,2),l=i[0],f=i[1],d=function(n){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],e=0;e<t.length;e++){var c=Object(s.a)(t[e],3),r=c[0],a=c[1],i=c[2];if(n[r]&&n[r]===n[a]&&n[r]===n[i])return n[r]}return null}(e);return Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("button",{className:"start__btn",onClick:function(){c(b)},children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e"}),Object(o.jsx)(j,{squares:e,click:function(n){var t=Object(u.a)(e);if(d||t[n])return null;t[n]=l?"X":"0",c(t),f(!l)}}),Object(o.jsx)("p",{className:"game__info",children:d?"\u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c "+d:"\u0421\u0435\u0439\u0447\u0430\u0441 \u0445\u043e\u0434\u0438\u0442 "+(l?"X":"0")})]})};var d=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(f,{})})};i.a.render(Object(o.jsx)(d,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.156c1e69.chunk.js.map