(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(34)},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=(a(14),a(15),a(3)),s=(a(16),a(35));a(17),a(18);var r=function(e){let{values:t,changeOptions:a,selected:n}=e;var c=Object.keys(t).map(function(e){return l.a.createElement("div",{class:"option"},l.a.createElement("label",{htmlFor:e},l.a.createElement("input",{type:"radio",id:e,checked:e===n,name:"answer",value:e,onChange:(t,n)=>{((e,t)=>{a(e,t)})(t,e)}}),t[e]))});return l.a.createElement("section",{class:"answer-options"},c)};a(19);var o=function(e){let{onClickCallback:t}=e;return l.a.createElement("div",{class:"buttons"},l.a.createElement("button",{class:"grid-btn previous-btn",onClick:e=>t(e,"Previous")},"Previous"),l.a.createElement("button",{class:"grid-btn rev-btn",onClick:e=>t(e,"Review")},"mark for Review and next"),l.a.createElement("button",{class:"grid-btn next-btn",onClick:e=>t(e,"Next")},"Next"),l.a.createElement("button",{class:"grid-btn clear-ans",onClick:e=>t(e,"clear")},"clear Answer"),l.a.createElement("button",{class:"grid-btn finish-btn",onClick:e=>t(e,"Finish")},"Finish"))};var i=function(e){let{questionInfo:t={question:"",id:0,value:null},clickCallback:a,saveOptions:c,userAns:s={value:null}}=e;const[i,m]=Object(n.useState)(null);Object(n.useEffect)(()=>{m()},[t.id]),console.log(t,"-------------------------question");const u={A:t.A,B:t.B,C:t.C,D:t.D};return l.a.createElement("div",null,l.a.createElement("section",{className:"questionInfo"},t&&l.a.createElement("div",null,l.a.createElement("p",null,t.id+1,". ",t.question),l.a.createElement(r,{values:u,selected:i,changeOptions:(e,a)=>((e,a)=>{console.log(a),m(e.target.value),c(e,{id:t.id,question:t.question,ans:a,value:t.answer})})(e,a)}),l.a.createElement(o,{onClickCallback:(e,t)=>((e,t)=>{m(null),a(e,t)})(e,t)}))))};a(20),a(21);a(22);var m=function(e){let{clickCallback:t}=e;const[a,c]=Object(n.useState)(0),[s,r]=Object(n.useState)(10),o=e=>{const t=Math.floor(e/10),a=Math.floor(e%10/60),n=e%60;return"".concat(t.toString().padStart(2,"0"),":").concat(a.toString().padStart(2,"0"),":").concat(n.toString().padStart(2,"0"))};return Object(n.useEffect)(()=>{const e=setInterval(()=>{s>0?r(e=>Math.max(0,e-1)):(clearInterval(e),t(null,"Finish"))},1e3);return()=>clearInterval(e)},[]),Object(n.useEffect)(()=>{const e=setInterval(()=>{a<10?c(e=>Math.min(10,e+1)):clearInterval(e)},1e3);return()=>clearInterval(e)},[]),l.a.createElement("div",{class:"stopwatch"},l.a.createElement("div",{class:"stopwatch"},l.a.createElement("h1",{class:"stopwatch-h"},"Time Status"),l.a.createElement("span",{class:"timer"},o(a)),l.a.createElement("div",{class:"total-time-h"},l.a.createElement("p",null,"Total Time",l.a.createElement("span",{class:"total-time"},o(s))))))};var u=function(e){let{count:t,selectedIndex:a,clickCallback:n}=e;return l.a.createElement("aside",{class:"right-panel"},l.a.createElement(m,{clickCallback:(e,t)=>n(e,t)}),l.a.createElement("h1",null,"Questions Summary"),l.a.createElement(e=>{let{value:a}=e;console.log(a);const n=(e,t)=>{let a="grid-item";return e==t?a="grid-item active":e<t&&(a="grid-item selected"),a};return l.a.createElement("div",{className:"grid-container"},Array.from(Array(t),(e,t)=>l.a.createElement("div",{className:n(t,a),key:t},l.a.createElement("span",null),t+1)))},{value:a}))};const d="http://localhost:3000/api/",E='"'.concat(d,'setResults"'),v='"'.concat(d,'getResults"'),g='"'.concat(d,'questions"'),p='"'.concat(d,'login"');var b=function(){const[e,t]=Object(n.useState)(null),[a,r]=Object(n.useState)(null),[o,m]=Object(n.useState)({}),[d,v]=Object(n.useState)(0),[p,b]=Object(n.useState)([]),[f,h]=Object(n.useState)(null),[N,k]=Object(n.useState)(""),w=Object(c.o)();Object(n.useEffect)(()=>{fetch(g).then(e=>e.json()).then(e=>{const a=e;t(a),m(a[d])}).catch(e=>console.error(e))},[]);const S=(t,a)=>{console.log(a,"getQuestion----------- index"),"Previous"===a?(v(d-1),m(e[d-1])):"clear"===a?(v(d),m(e[d])):"Review"===a?(v(d+1),m(e[d+1])):"Finish"===a?((async e=>{try{const a=await s.a.post(E,{results:e,email:"jithu@gmail.com",id:1}),n=a.data;n.length>0?(console.log("saved in DB successful:",a.data),w("/login")):(console.error(n),k("Error in saving"))}catch(t){console.error(t),k("Error in saving")}})(p),w("/results")):(v(d+1),m(e[d+1]))};return l.a.createElement("div",null,l.a.createElement("div",{class:"question-section"},l.a.createElement("section",{class:"question"},l.a.createElement(i,{userAns:p.find(e=>e.id===d),questionInfo:o,clickCallback:(e,t)=>S(0,t),saveOptions:(e,t)=>((e,t)=>{console.log("user selected options",t);const a=((e,t)=>{const a=e.findIndex(e=>e.id===t.id);return a>-1?e[a]=t:e.push(t),e})(p,t);b(a),console.log(a)})(0,t)}),e&&l.a.createElement(u,{count:e.length,selectedIndex:o.id,clickCallback:(e,t)=>S(0,t)}))))};var f=()=>{const[e,t]=Object(n.useState)(""),[a,r]=Object(n.useState)(""),[o,i]=Object(n.useState)(""),m=Object(c.o)();return l.a.createElement("div",{className:"login-container"},l.a.createElement("h2",null,"Login"),l.a.createElement("form",{onSubmit:async t=>{t.preventDefault();try{const t=await s.a.post(p,{user_email:e,user_password:a});console.log("Login successful:",t.data);const l=t.data;l.length>0?(m("/"),i("Login successful")):(console.error(l),i("Invalid username or password"))}catch(n){console.error(n),i("Invalid username or password")}},className:"login-form"},l.a.createElement("label",{htmlFor:"name"},"Name:"),l.a.createElement("input",{type:"text",id:"name",value:e,onChange:e=>t(e.target.value),required:!0}),l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("input",{type:"password",id:"password",value:a,onChange:e=>r(e.target.value),required:!0}),l.a.createElement("button",{type:"submit"},"Login")),o&&l.a.createElement("p",{className:"message"},o))};a(27);var h=function(e){let{count:t,selectedIndex:a,clickCallback:c}=e;const[r,o]=Object(n.useState)(""),[i,m]=Object(n.useState)("");return Object(n.useEffect)(()=>{(async e=>{try{const a=(await s.a.post(v,{email:e})).data;a.length>0?(console.log("saved in DB successful:",a),m(a[0]),o("sucess here")):(console.error(a),o("Error in get results"))}catch(t){console.error(t),o("Error in results")}})("jithu@gmail.com")},[r]),l.a.createElement("section",null,l.a.createElement("div",{className:"container-results"},l.a.createElement("div",{className:"container-left"},l.a.createElement("div",{className:"title title-left white-color"},"Your Result"),l.a.createElement("div",{className:"circle"},l.a.createElement("div",{className:"circle-score white-color"},i.marks),l.a.createElement("div",{className:"circle-out-of white-color"},"of 100")),l.a.createElement("div",{className:"container-left-bottom"},l.a.createElement("div",{className:"container-left-bottom-compliment white-color"},"Great"))),l.a.createElement("div",{className:"container-right-box"}),l.a.createElement("div",{className:"container-right"},l.a.createElement("div",{className:"title title-right"},"Summary"),l.a.createElement("div",{className:"stat-box"},l.a.createElement("div",{className:"stat stat-memory"},l.a.createElement("div",{className:"stat-part-left yellow"},l.a.createElement("img",{src:"/assets/images/icon-memory.svg",alt:""}),"Name"),l.a.createElement("div",{className:"stat-part-right"},l.a.createElement("span",{className:"blue"},i.name))),l.a.createElement("div",{className:"stat stat-reaction"},l.a.createElement("div",{className:"stat-part-left red"},l.a.createElement("img",{src:"/assets/images/icon-reaction.svg",alt:""}),"Group"),l.a.createElement("div",{className:"stat-part-right"},l.a.createElement("span",{className:"blue"},i.group))),l.a.createElement("div",{className:"stat stat-verbal"},l.a.createElement("div",{className:"stat-part-left green"},l.a.createElement("img",{src:"/assets/images/icon-verbal.svg",alt:""}),"Marks"),l.a.createElement("div",{className:"stat-part-right"},l.a.createElement("span",{className:"blue"},i.marks)," / 100")),l.a.createElement("div",{className:"stat stat-visual"},l.a.createElement("div",{className:"stat-part-left purple"},l.a.createElement("img",{src:"/assets/images/icon-visual.svg",alt:""}),"Final Status"),l.a.createElement("div",{className:"stat-part-right"},l.a.createElement("span",{className:"blue"},i.finalStatus)))))))};var N=function(){return l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/login",element:l.a.createElement(f,null)}),l.a.createElement(c.a,{path:"/",element:l.a.createElement(b,null)}),l.a.createElement(c.a,{path:"/results",element:l.a.createElement(h,null)}))};var k=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:c,getTTFB:s}=t;a(e),n(e),l(e),c(e),s(e)})},w=a(10),S=a.n(w),O=a(6);S.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O.a,null,l.a.createElement(N,null)))),k()}],[[12,1,2]]]);
//# sourceMappingURL=main.cbe38e7f.chunk.js.map