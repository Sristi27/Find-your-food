(this["webpackJsonpfood-recipe"]=this["webpackJsonpfood-recipe"]||[]).push([[0],[,,,function(e,t,a){e.exports={recipe:"Recipe_recipe__n3x7X",ing:"Recipe_ing__3giMX"}},,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),i=(a(12),a(2)),l=a.n(i),s=a(6),u=a(1),m=(a(14),a(3)),p=a.n(m),f=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingred;return c.a.createElement("div",{className:p.a.recipe},c.a.createElement("h2",null,t),c.a.createElement("ol",{className:p.a.ing},r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("p",null,c.a.createElement("b",null,"Calories:"),a),c.a.createElement("img",{src:n,alt:t}))},h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(u.a)(o,2),m=i[0],p=i[1],h=Object(n.useState)(""),b=Object(u.a)(h,2),d=b[0],g=b[1];Object(n.useEffect)((function(){v()}),[d]);var v=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("77165a02","&app_key=").concat(" 5c5b6e7d93a2b00604c0beb1f8f06f4f"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),r(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),g(m),p("")}},c.a.createElement("input",{className:"search-bar",placeholder:"Which food are you looking for?",onChange:function(e){p(e.target.value)},value:m,type:"text"}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),c.a.createElement("div",{className:"recipes"},a.map((function(e){return c.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingred:e.recipe.ingredients})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.7d24f6bb.chunk.js.map