(window.webpackJsonpkounter=window.webpackJsonpkounter||[]).push([[0],{190:function(e,a,t){e.exports=t(405)},405:function(e,a,t){"use strict";t.r(a);t(191),t(200);var n=t(0),r=t.n(n),l=t(91),c=t.n(l),o=t(58),u=t(46),i=t(23),m=function(e){return{type:"ADD_PROFILE",profile:e}},f=function(e){return{type:"ADD_FOOD",food:e}};function s(){var e=Object(i.b)(),a=r.a.createRef(),t=r.a.createRef();return r.a.createElement("form",{onSubmit:function(n){n.preventDefault();var r={name:a.current.value,kcal:parseInt(t.current.value)};e(f(r)),n.currentTarget.reset()}},"nome ",r.a.createElement("input",{name:"meal",type:"text",ref:a}),r.a.createElement("br",null),"kcal ",r.a.createElement("input",{name:"kcal",type:"number",ref:t}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"add"))}function p(e){var a=e.item,t=a.name,n=a.kcal;return r.a.createElement("li",null,t," ",r.a.createElement("span",{className:"meal-kcal"},n)," Kcal")}var v=function(e){var a="\xe0\xe1\xe4\xe2\xe3\xe5\u0103\xe6\u0105\xe7\u0107\u010d\u0111\u010f\xe8\xe9\u011b\u0117\xeb\xea\u0119\u011f\u01f5\u1e27\xec\xed\xef\xee\u012f\u0142\u1e3f\u01f9\u0144\u0148\xf1\xf2\xf3\xf6\xf4\u0153\xf8\u1e55\u0155\u0159\xdf\u015f\u015b\u0161\u0219\u0165\u021b\xf9\xfa\xfc\xfb\u01d8\u016f\u0171\u016b\u0173\u1e83\u1e8d\xff\xfd\u017a\u017e\u017c\xb7/_,:;",t=new RegExp(a.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(t,(function(e){return"aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(a.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},d=function(e){var a=e.weight,t=e.height,n=e.age,r=0;switch(e.gender.value){case"male":r=66+13.7*a.value+5*t.value-6.8*n.value;break;case"female":r=665+9.6*a.value+1.9*t.value-4.7*n.value}return parseInt(r)};function b(e){var a=Object(i.c)((function(e){return e.food.food}));return r.a.createElement("ul",{className:"meal-list"},a.map((function(e){return r.a.createElement(p,{key:v(e.name),item:e})})))}var g=function(){return r.a.createElement("span",{role:"img","aria-label":"happy"},"\ud83d\ude0a")},E=function(){return r.a.createElement("span",{role:"img","aria-label":"Sad"},"\ud83d\ude15")};function h(e){return r.a.createElement("div",{className:"total"},r.a.createElement("div",{className:"total__partial"},"Total in: ",r.a.createElement("span",{className:"total-kcal"},e.total)," Kcal"),r.a.createElement("div",{className:"total__main"},"Total amount of calories:"," ",r.a.createElement("strong",null,r.a.createElement("span",{className:"total-sum"},e.deltaKcal)," Kcal ",e.deltaKcal>0?r.a.createElement(E,null):r.a.createElement(g,null))))}function O(e){var a=Object(i.c)((function(e){return e.profile.userProfile})),t=Object(i.c)((function(e){return e.food.total}));return a.name?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hi ",a.name.value),r.a.createElement(o.b,{to:{pathname:"/",profile:a}},"edit profile"),r.a.createElement("ul",{className:"profile"},Object.keys(a).filter((function(e){return a[e].visibleOnProfile})).map((function(e){return r.a.createElement("li",{key:e,className:e,"data-key":a[e].value},e,": ",a[e].value,"weight"===e?" kg":null,"height"===e?" cm":null,"basalMetabolism"===e?" Kcal":null)}))),r.a.createElement(s,null),t>0&&r.a.createElement(b,null),t>0&&r.a.createElement(h,{total:t,deltaKcal:t-a.basalMetabolism.value})):r.a.createElement("p",null,"loading...")}var y=t(187),w=t.n(y),k=t(73),j=t.n(k),S=(t(402),j.a.initializeApp(function(e){switch(e){case"development":return{apiKey:"AIzaSyBnTyxYKxTjdAgY1lTMgBhwmkuQi_cd6UI",authDomain:"kounter-dev-e60ff.firebaseapp.com",databaseURL:"https://kounter-dev-e60ff.firebaseio.com",projectId:"kounter-dev-e60ff",storageBucket:"kounter-dev-e60ff.appspot.com",messagingSenderId:"178156453221",appId:"1:178156453221:web:27575e448e324690b1358c"};case"production":return{apiKey:"AIzaSyBA8Gwx7omYnoSCZujw-35mQPy0PANM51M",authDomain:"kounter-92315.firebaseapp.com",databaseURL:"https://kounter-92315.firebaseio.com",projectId:"kounter-92315",storageBucket:"kounter-92315.appspot.com",messagingSenderId:"604239372694",appId:"1:604239372694:web:2c995aaefdacd98d3abdb7"}}}("production"))),P=w.a.createClass(S.database());function D(e){var a=Object(i.b)();return function(){var t=localStorage.getItem(e.match.params.name);if(t){var n=JSON.parse(t);a(m(n))}P.post("".concat(e.match.params.name,"/profile"),{data:JSON.parse(t)})}(),localStorage.getItem(e.match.params.name)?r.a.createElement(O,{state:{food:[]}}):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"data not found"),r.a.createElement(o.b,{to:"/"},"back to data"))}function _(e){var a=r.a.createRef(),t=r.a.createRef(),n=r.a.createRef(),l=r.a.createRef(),c=r.a.createRef(),o=Object(i.b)(),u=function(){var e="";if(a.current){e=v(a.current.value);var r=JSON.parse(localStorage.getItem(e));r&&(a.current.value=r.name.value,t.current.value=r.weight.value,n.current.value=r.gender.value,l.current.value=r.age.value,c.current.value=r.height.value)}};return u(),r.a.createElement("form",{onSubmit:function(r){r.preventDefault();var u={name:{value:a.current.value,visibleOnProfile:!1},slug:{value:v(a.current.value),visibleOnProfile:!1},weight:{value:t.current.value,visibleOnProfile:!0},gender:{value:n.current.value,visibleOnProfile:!0},age:{value:l.current.value,visibleOnProfile:!0},height:{value:c.current.value,visibleOnProfile:!0},basalMetabolism:{value:0,visibleOnProfile:!0}};u.basalMetabolism.value=d(u),localStorage.setItem(u.slug.value,JSON.stringify(u)),e.history.push({pathname:"/counter/".concat(u.slug.value),profile:u}),o(m(u))}},r.a.createElement("label",null,"Name:",r.a.createElement("input",{type:"text",name:"name",required:!0,ref:a,defaultValue:e.location.profile?e.location.profile.name.value:"",onChange:u})),r.a.createElement("br",null),r.a.createElement("label",null,"Gender:",r.a.createElement("select",{name:"gender",required:!0,ref:n,defaultValue:e.location.profile?e.location.profile.gender.value:""},r.a.createElement("option",{value:"male"},"male"),r.a.createElement("option",{value:"female"},"female"))),r.a.createElement("br",null),r.a.createElement("label",null,"Age:",r.a.createElement("input",{type:"number",min:"0",name:"age",required:!0,ref:l,defaultValue:e.location.profile?e.location.profile.age.value:""})),r.a.createElement("br",null),r.a.createElement("label",null,"Weight (Kg):",r.a.createElement("input",{type:"number",min:"0",name:"weight",required:!0,ref:t,defaultValue:e.location.profile?e.location.profile.weight.value:""})),r.a.createElement("br",null),r.a.createElement("label",null,"Height (cm):",r.a.createElement("input",{type:"number",min:"0",name:"height",required:!0,ref:c,defaultValue:e.location.profile?e.location.profile.height.value:""})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Calculate"))}var I=function(e){return r.a.createElement(o.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:_}),r.a.createElement(u.a,{path:"/counter/:name",component:D,store:e})))},N=t(57),R=t(189),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{food:[],total:0},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_FOOD":return{food:[].concat(Object(R.a)(e.food),[a.food]),total:e.total+a.food.kcal};default:return e}},K=t(188);function x(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?x(t,!0).forEach((function(a){Object(K.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROFILE":return T({},e,{userProfile:a.profile});default:return e}},M=Object(N.b)({food:A,profile:L}),V=j.a.database(),z=Object(N.c)(M,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),B="";z.subscribe((function(){B=z.getState().profile.userProfile.name,F(z.getState(),V)}));var F=function(e,a){a.ref("".concat(B.value,"/food/")).set(e.food)};c.a.render(r.a.createElement(i.a,{store:z},r.a.createElement(I,null)),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.6389e7f3.chunk.js.map