(this["webpackJsonpwheres-waldo"]=this["webpackJsonpwheres-waldo"]||[]).push([[0],{36:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/waldo-1.9736162a.jpeg"},41:function(e,t,n){"use strict";n.r(t);var c=n(11),a=n.n(c),s=n(30),r=n.n(s),i=(n(36),n(0)),o=n.n(i),u=n(3),d=n(10),j=n(5),l=function(e){var t=("0"+Math.floor(e.time/1e3)%60).slice(-2),n=("0"+Math.floor(e.time/6e4)%60).slice(-2);return Object(c.useEffect)((function(){var t=null;return e.timerOn?t=setInterval((function(){e.setTime((function(e){return e+1e3}))}),1e3):e.timerOn||clearInterval(t),function(){return clearInterval(t)}}),[e.timerOn]),Object(j.jsxs)("div",{className:"Timer",children:[Object(j.jsx)("div",{className:"Timer-name",children:Object(j.jsx)("h1",{children:"Time:\xa0"})}),Object(j.jsx)("div",{className:"Timer-minutes",children:Object(j.jsx)("h1",{children:n})}),Object(j.jsx)("div",{className:"Timer-separator",children:Object(j.jsx)("h1",{children:":"})}),Object(j.jsx)("div",{className:"Timer-seconds",children:Object(j.jsx)("h1",{children:t})})]})},h=function(e){return Object(j.jsxs)("div",{className:"Header",children:[Object(j.jsxs)("div",{className:"Header-title",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{style:{color:"red"},children:"Where's "}),Object(j.jsx)("span",{style:{color:"#1da1f2"},children:"Waldo?"})]})}),Object(j.jsx)("p",{children:"A project coded with React and Firebase"})]}),Object(j.jsx)("h3",{children:"Left to find:"}),e.characterState.map((function(e){return Object(j.jsxs)("div",{className:"Header-char",style:e.found?{opacity:.2}:{opacity:1},children:[Object(j.jsx)("p",{children:e.name}),Object(j.jsx)("img",{src:e.image,alt:e.name})]},e.name)})),Object(j.jsx)(l,{timerOn:e.timerOn,time:e.time,setTime:e.setTime})]})},m=function(e){var t=e.charLocations,n=e.gameDimensions,c=e.userCoords[0],a=e.userCoords[1],s={};s["--dropdown-left"]=c+20+"px",s["--dropdown-top"]=a+90+"px";return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"Dropdown",style:s,children:Object(j.jsx)("div",{className:"Dropdown-table",children:e.characterState.map((function(s){return!s.found&&Object(j.jsxs)("div",{className:"Dropdown-row",onClick:function(){return function(s){var r=t.find((function(e){return e.name===s}));c>n.width*r.coords.x*.92&&c<n.width*r.coords.x*1.08&&a>n.height*r.coords.y*.92&&a<n.height*r.coords.y*1.08?(e.handleMessage("You found "+r.name+"!"),e.setToggleMessageBox(!0),setTimeout((function(){e.setToggleMessageBox(!1),e.setToggleDropdown(!1),e.handleFound(r.name)}),1500)):(e.handleMessage("That's not "+r.name+"!"),e.setToggleMessageBox(!0),setTimeout((function(){e.setToggleMessageBox(!1),e.setToggleDropdown(!1)}),1500))}(s.name)},children:[Object(j.jsx)("img",{src:s.image,alt:s.name}),Object(j.jsx)("p",{children:s.name})]},s.name)}))})})})},b=function(e){return Object(j.jsx)("div",{className:"Message-container",children:Object(j.jsxs)("div",{className:"Message-box",children:[Object(j.jsx)("h2",{children:e.message}),e.toggleInput&&Object(j.jsx)("form",{onSubmit:e.handleSubmit,children:Object(j.jsx)("input",{onChange:e.handleInputChange,value:e.userName,type:"text",placeholder:"Enter your name...",maxLength:12,required:!0})})]})})},f=n(31),O=n(18),g=Object(f.a)({apiKey:"AIzaSyDibCxXn_EsXjSIDfEsD2Dq1ZjZuiLhwtM",authDomain:"wheres-waldo-82629.firebaseapp.com",projectId:"wheres-waldo-82629",storageBucket:"wheres-waldo-82629.appspot.com",messagingSenderId:"1042527864001",appId:"1:1042527864001:web:9b010bf07fabab106e0040"}),p=Object(O.d)(g),x=[];(function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)(Object(O.a)(t,"characters"));case 2:return e.sent.forEach((function(e){var t={};t.name=e.id,t.coords=e.data(),x.push(t)})),e.abrupt("return",x);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(p);var v,w=function(e){return Object(c.useEffect)((function(){e.getHighScores(p)}),[]),Object(j.jsx)("div",{className:"Message-container",children:Object(j.jsxs)("div",{className:"Message-box",children:[Object(j.jsx)("h2",{children:"High Scores"}),Object(j.jsx)("div",{className:"Highscores",children:e.topScores.map((function(e,t){return Object(j.jsxs)("div",{className:"Highscores-user",children:[Object(j.jsx)("h3",{children:t+1}),Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("h3",{children:e.time})]},e.name)}))}),Object(j.jsx)("button",{className:"reset",onClick:function(){return e.handleResetGame()},children:"Play again!"})]})})},S=n(22),N=n(40),T=[{name:"Waldo",found:!1,image:"/img/waldo-1.png"},{name:"Wenda",found:!1,image:"/img/wenda-1.png"},{name:"Wizard",found:!1,image:"/img/wizard-1.png"},{name:"Odlaw",found:!1,image:"/img/odlaw-1.png"}],M=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(T),r=Object(d.a)(s,2),i=r[0],l=r[1],f=Object(c.useState)([]),g=Object(d.a)(f,2),M=g[0],y=g[1],D=Object(c.useState)(!1),I=Object(d.a)(D,2),C=I[0],k=I[1],E=Object(c.useState)(""),B=Object(d.a)(E,2),H=B[0],L=B[1],W=Object(c.useState)(!1),A=Object(d.a)(W,2),F=A[0],R=A[1],z=Object(c.useState)(!1),X=Object(d.a)(z,2),q=X[0],G=X[1],J=Object(c.useState)(0),Y=Object(d.a)(J,2),Z=Y[0],K=Y[1],P=Object(c.useState)(""),_=Object(d.a)(P,2),Q=_[0],U=_[1],V=Object(c.useState)(!1),$=Object(d.a)(V,2),ee=$[0],te=$[1],ne=Object(c.useState)([]),ce=Object(d.a)(ne,2),ae=ce[0],se=ce[1],re=Object(c.useState)(!1),ie=Object(d.a)(re,2),oe=ie[0],ue=ie[1];Object(c.useEffect)((function(){je(p),te(!1),k(!1),l((function(e){return e.map((function(e){return e.found=!1,e}))})),K(0),de(),setTimeout((function(){G(!0)}),1500)}),[oe]);var de=function(){he("Find the characters!"),k(!0),setTimeout((function(){k(!1)}),2e3)},je=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,Object(S.c)(Object(S.a)(t,"highscores"));case 3:e.sent.forEach((function(e){var t=e.data();n.push(t)})),n.sort((function(e,t){return e.seconds-t.seconds})),c=n.slice(0,10),le(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(e){se(e)},he=function(e){L(e)};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{characterState:i,timerOn:q,time:Z,setTime:K}),Object(j.jsx)("img",{src:N.default,alt:"Not found",onClick:function(e){if(q){v=e.target.getBoundingClientRect();var t=e.clientX-v.left,c=e.clientY-v.top;y([t,c]),a(!n)}}}),n&&Object(j.jsx)(m,{characterState:i,setToggleDropdown:a,userCoords:M,charLocations:x,gameDimensions:v,setToggleMessageBox:k,handleMessage:he,handleFound:function(e){l((function(t){return t.map((function(t){return t.name===e?(t.found=!0,t):t}))})),i.every((function(e){return!0===e.found}))&&function(){G(!1);var e=ae.filter((function(e){return!!e.seconds&&e}));Z/1e3<e[e.length-1].seconds?(he("Nice work! A new high score!"),k(!0),R(!0)):te(!0)}()}}),C&&Object(j.jsx)(b,{message:H,toggleInput:F,handleInputChange:function(e){U(e.target.value)},handleSubmit:function(e){e.preventDefault(),function(e,t,n){var c=Object(O.b)(p,"highscores",e);Object(O.e)(c,{name:e,seconds:t,time:n},{merge:!0})}(Q,Z/1e3,function(e){var t=("0"+Math.floor(e/1e3)%60).slice(-2);return("0"+Math.floor(e/6e4)%60).slice(-2)+":"+t}(Z)),U(""),R(!1),k(!1),he(""),te(!0)},userName:Q}),ee&&Object(j.jsx)(w,{getHighScores:je,topScores:ae,handleResetGame:function(){ue((function(e){return!e}))}})]})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.26088ce5.chunk.js.map