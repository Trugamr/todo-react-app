(this["webpackJsonptodo-react-app"]=this["webpackJsonptodo-react-app"]||[]).push([[0],{163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},169:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(32),o=a.n(i),c=a(21),s=a(64),l=(a(83),a(16)),d=a.n(l),u=a(20),p=a(28),m=a(6),f=a(7),h=a(5),b=a(8),g=a(9),E=(a(85),a(66)),v=a(31);a(86);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=r.a.createElement("title",null,"pencil"),k=r.a.createElement("g",{id:"pencil"},r.a.createElement("polygon",{points:"10.01 43.01 2 46 4.98 37.99 5 38 10 43 10.01 43.01",fill:"#2d346a"}),r.a.createElement("polygon",{points:"14.37 33.63 20.02 39.28 10.01 43.01 10 43 5 38 4.98 37.99 8.72 27.97 14.37 33.63",fill:"#fff"}),r.a.createElement("path",{d:"M41.11,18.19,20,39.28l-5.65-5.65L39,9l5.6,5.6a5.32,5.32,0,0,1-.59.68L41.12,18.2Z",fill:"#ffc12e"}),r.a.createElement("path",{d:"M29.81,6.89,32.74,4a5.4,5.4,0,0,1,.69-.59L39,9,14.37,33.63,8.72,28Z",fill:"#ffc12e"}),r.a.createElement("path",{d:"M46,10.41a6.84,6.84,0,0,1-1.36,4.16L39,9,33.43,3.36c2.85-2.16,7.17-1.72,10,1.16A8.39,8.39,0,0,1,46,10.41Z",fill:"#c3cce9"}),r.a.createElement("polyline",{points:"41.43 17.86 20.02 39.28 8.72 27.97 30.14 6.57",fill:"none",stroke:"#2d346a",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2}),r.a.createElement("path",{d:"M29.81,6.89,32.74,4c2.81-2.81,7.62-2.55,10.74.57h0c3.12,3.12,3.38,7.93.57,10.73L41.12,18.2",fill:"none",stroke:"#2d346a",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2}),r.a.createElement("polyline",{points:"20.02 39.28 2 46 8.72 27.97",fill:"none",stroke:"#2d346a",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2}),r.a.createElement("line",{x1:5,y1:38,x2:10,y2:43,fill:"none",stroke:"#2d346a",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2}),r.a.createElement("line",{x1:33.43,y1:3.36,x2:44.68,y2:14.61,fill:"none",stroke:"#2d346a",strokeLinejoin:"round",strokeWidth:2}),r.a.createElement("line",{x1:14.37,y1:33.63,x2:39.04,y2:8.97,fill:"none",stroke:"#2d346a",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})),j=function(e){var t=e.svgRef,a=e.title,n=x(e,["svgRef","title"]);return r.a.createElement("svg",y({id:"icons",viewBox:"0 0 48 48",ref:t},n),void 0===a?O:a?r.a.createElement("title",null,a):null,k)},w=r.a.forwardRef((function(e,t){return r.a.createElement(j,y({svgRef:t},e))})),S=(a.p,a(185)),L=a(187),C=a(69),R=a(192),U=a(12),A=a(191),N=a(45),D=(a(87),function(e){var t=e.name,a=e.imageURL,n=Object(U.a)(e,["name","imageURL"]);return r.a.createElement(S.a,Object.assign({display:"flex",marginRight:8,marginLeft:8,alignItems:"center"},n),r.a.createElement(A.a,{src:a,name:t,size:32,marginRight:8}),r.a.createElement(N.a,{size:500},t))}),T=a(36),I=a.n(T);a(156),a(158);I.a.initializeApp({apiKey:"AIzaSyCkjxIEEQshEbM3GNrG5LMH2dqtuEgFLsM",authDomain:"todo-react-app-1c2b9.firebaseapp.com",databaseURL:"https://todo-react-app-1c2b9.firebaseio.com",projectId:"todo-react-app-1c2b9",storageBucket:"todo-react-app-1c2b9.appspot.com",messagingSenderId:"494569883453",appId:"1:494569883453:web:0bd3c0a828e36e45296754",measurementId:"G-FXZW0XVN8D"});var _=function(){var e=Object(p.a)(d.a.mark((function e(t,a){var n,r,i,o,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=B.doc("/users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,i=t.email,o=t.photoURL,c=new Date,e.prev=9,e.next=12,n.set(Object(u.a)({displayName:r,email:i,photoURL:o,createdAt:c},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.error("error creating user: ".concat(e.t0.message));case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}(),z=I.a.auth(),B=I.a.firestore(),M=new I.a.auth.GoogleAuthProvider;M.setCustomParameters({prompt:"select_account"});var W=function(){return z.signInWithPopup(M)},P=(I.a,a(44)),X=Object(P.a)([function(e){return e.user}],(function(e){return e.currentUser})),F=a(15),G={hidden:{opacity:0,y:-50},show:{opacity:1,y:0}},Z={hidden:{opacity:0,x:100},show:{opacity:1,x:0}},q={type:"spring",damping:10,stiffness:50},H={type:"spring",damping:25,stiffness:300},J=Object(c.b)((function(e){return{currentUser:X(e)}}))((function(e){var t=e.currentUser;return r.a.createElement("div",{className:"header-container"},r.a.createElement(F.b.div,{initial:"hidden",animate:"show",transition:q,variants:G},r.a.createElement(S.a,{className:"header",display:"flex",padding:16,borderRadius:3,background:"tint2",overflow:"hidden"},r.a.createElement(S.a,{flex:1,display:"flex",alignItems:"center"},r.a.createElement(w,{className:"logo"}),r.a.createElement(L.a,{size:600}," Todo")),r.a.createElement(S.a,{display:"flex"},r.a.createElement(F.a,{exitBeforeEnter:!0,initial:!1},t?r.a.createElement(F.b.div,{initial:"hidden",animate:"show",exit:"hidden",variants:Z,transition:H,key:"forAnimationPresence1"},r.a.createElement(S.a,{display:"flex"},r.a.createElement(D,{name:t.displayName,imageURL:t.photoURL}),r.a.createElement(C.a,{onClick:function(){return z.signOut()},appearance:"minimal",paddingX:8},r.a.createElement(R.a,{icon:"log-out",color:"muted"})))):r.a.createElement(F.b.div,{initial:"hidden",animate:"show",exit:"hidden",transition:H,variants:Z,key:"forAnimationPresence2"},r.a.createElement(C.a,{onClick:W,appearance:"primary"},r.a.createElement("span",null,"Sign In"),r.a.createElement(R.a,{icon:"log-in",marginLeft:10}))))))))})),K=(a(163),a(2)),Q=(a(164),a(188)),V=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={text:"",createdAt:null,disabled:!1},a.handleChange=function(e){a.setState(Object(K.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({disabled:!0}),n=a.props.currentUser,e.prev=3,e.next=6,B.collection("/users/".concat(n.id,"/todos"));case 6:return r=e.sent,e.next=9,r.add({text:a.state.text,createdAt:new Date,starred:!1,completed:!1});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error("couldn't save todo ".concat(e.t0.message));case 14:a.setState({text:"",disabled:!1});case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.currentUser;return r.a.createElement("form",{className:"todo-form",onSubmit:this.handleSubmit},r.a.createElement(S.a,{display:"flex",margin:20,borderRadius:3,alignItems:"center",className:"todo-item",height:50},r.a.createElement(S.a,{flex:1,alignItems:"center",display:"flex",width:20,height:"100%"},r.a.createElement(Q.a,{className:"text-input",name:"text",onChange:this.handleChange,placeholder:"Enter a new task",width:"100%",size:500,height:"100%",paddingX:12,required:!0,value:this.state.text,disabled:!e||this.state.disabled})),r.a.createElement(S.a,{height:"100%"},r.a.createElement(C.a,{className:"add-button",appearance:"minimal",height:"100%",paddingX:20,disabled:!e||this.state.disabled},r.a.createElement(N.a,{size:400},"Add")))))}}]),t}(r.a.Component),Y=Object(c.b)((function(e){return{currentUser:X(e)}}))(V),$=a(35),ee=(a(165),a(166),a(190)),te=a(189),ae=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={text:"",starred:!1,completed:!1,isShown:!1,isLoading:!1,isShownDel:!1},a.handleCompleted=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.currentUser,e.prev=1,r=!a.state.completed,e.next=5,B.doc("/users/".concat(n.id,"/todos/").concat(t)).update({completed:r});case 5:a.setState({completed:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("failed to set todo as completed: ".concat(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleStarred=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.currentUser,e.prev=1,r=!a.state.starred,e.next=5,B.doc("/users/".concat(n.id,"/todos/").concat(t)).update({starred:r});case 5:a.setState({starred:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("failed to set todo as starred: ".concat(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleDelete=function(){var e=Object(p.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.props.currentUser,n&&n(),e.prev=2,e.next=5,B.doc("/users/".concat(r.id,"/todos/").concat(t)).delete();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error("failed to delete todo: ".concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t,a){return e.apply(this,arguments)}}(),a.handleChange=function(e){a.setState(Object(K.a)({},e.target.name,e.target.value))},a.handleDialogConfirm=function(){var e=Object(p.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),r=a.props.currentUser,e.prev=2,e.next=5,B.doc("/users/".concat(r.id,"/todos/").concat(t)).update({text:a.state.text});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error("failed to edit todo : ".concat(e.t0.message));case 10:n();case 11:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.text,a=e.starred,n=e.completed;this.setState({text:t,starred:a,completed:n})}},{key:"render",value:function(){var e=this,t=this.props,a=t.todoId,n=t.index,i=t.text,o=t.starred,c=t.completed;return r.a.createElement(S.a,{display:"flex",padding:6,borderRadius:3,alignItems:"center",className:"todo-item"},r.a.createElement(S.a,{flex:1,alignItems:"center",display:"flex",width:20,marginRight:6},r.a.createElement(N.a,{size:500,marginX:4},"".concat(n,".")),r.a.createElement(N.a,{size:500,marginX:4,overflow:"hidden",className:"todo-text ".concat(c?"strike-text":""),onClick:function(){return e.handleCompleted(a)},"data-completed":c},i)),r.a.createElement(S.a,null,r.a.createElement(F.b.div,{className:"motion-button",whileTap:{scale:.9}},r.a.createElement(C.a,{appearance:"minimal",marginRight:4,onClick:function(){return e.setState({isShown:!0})},padding:8},r.a.createElement(R.a,{icon:"edit",color:"selected"}))),r.a.createElement(F.b.div,{className:"motion-button",whileTap:{scale:.9}},r.a.createElement(C.a,{appearance:"minimal",marginRight:4,padding:8,onClick:function(){return e.handleStarred(a)}},r.a.createElement(R.a,{icon:"star",color:"".concat(o?"#F7D154":"muted")}))),r.a.createElement(F.b.div,{className:"motion-button",whileTap:{scale:.9}},r.a.createElement(C.a,{appearance:"minimal",padding:8,onClick:function(){return e.setState({isShownDel:!0})}},r.a.createElement(R.a,{icon:"cross",color:"danger"})))),r.a.createElement(ee.a,{isShown:this.state.isShown,title:"Edit todo",onCloseComplete:function(){return e.setState({isShown:!1,isLoading:!1})},confirmLabel:this.state.isLoading?"Saving...":"Save",isConfirmLoading:this.state.isLoading,onConfirm:function(t){return e.handleDialogConfirm(a,t)},onCancel:function(){return e.setState({isShown:!1})}},r.a.createElement(te.a,{name:"text",placeholder:"Your todo...",value:this.state.text,onChange:this.handleChange,required:!0})),r.a.createElement(ee.a,{isShown:this.state.isShownDel,title:"Delete todo",intent:"danger",onCloseComplete:function(){return e.setState({isShownDel:!1,isLoadingDel:!1})},confirmLabel:"Delete",onConfirm:function(t){return e.handleDelete(a,t)},onCancel:function(){return e.setState({isShownDel:!1})}},r.a.createElement(N.a,null,this.state.text)))}}]),t}(r.a.Component),ne=Object(c.b)((function(e){return{currentUser:X(e)}}))(ae),re=Object(P.a)([function(e){return e.todo}],(function(e){return e.todos})),ie={hidden:{y:-20,scale:0,opacity:0},show:function(e){return{y:0,scale:1,opacity:1,transition:{delay:.08*e}}},exit:{y:-20,opacity:0,scale:0,transition:{duration:.2}}},oe={type:"spring",damping:20,stiffness:200},ce=Object(c.b)((function(e){return{todos:re(e)}}))((function(e){var t=e.todos,a=Object(n.useState)(!0),i=Object($.a)(a,2),o=i[0],c=i[1],s=t.length;return r.a.createElement(S.a,{display:"flex",flexDirection:"column",borderRadius:3,margin:20,className:"todo-container"},s?r.a.createElement(F.a,null,t.map((function(e,t){var a=e.id,n=e.text,i=e.starred,l=e.completed,d=Object(U.a)(e,["id","text","starred","completed"]);return r.a.createElement(F.b.div,{key:a,custom:o?t+20:1,initial:"hidden",animate:"show",transition:oe,variants:ie,positionTransition:!0,exit:"exit",onAnimationComplete:function(){t===s-1&&c(!1)}},r.a.createElement(ne,Object.assign({todoId:a,text:n,index:t+1,starred:i,completed:l},d)))}))):r.a.createElement(S.a,{display:"flex",padding:16,borderRadius:3,alignItems:"center",justifyContent:"center"},r.a.createElement(L.a,{color:"#7B8B9A"},"Empty :(")))})),se=Object(c.b)((function(e){return{currentUser:X(e)}}))((function(e){var t=e.currentUser,a={hidden:{opacity:0,y:-30},show:{opacity:1,y:0}},n={type:"spring",damping:30,stiffness:200};return r.a.createElement("div",{className:"todo-page"},r.a.createElement(F.a,{exitBeforeEnter:!0},t?null:r.a.createElement(F.b.div,{initial:"hidden",animate:"show",exit:"hidden",key:"forAnimation1",transition:Object(u.a)({},n,{delay:.4}),variants:a},r.a.createElement(S.a,{display:"flex",padding:15,borderRadius:3,background:"tint2",margin:20,alignItems:"center"},r.a.createElement(L.a,{color:"#7B8B9A"},"Sign in and start adding tasks ^_^"))),t?r.a.createElement(F.b.div,{initial:"hidden",animate:"show",exit:"hidden",transition:n,variants:a,key:"forAnimation2"},r.a.createElement(Y,null)):null),t?r.a.createElement(ce,null):null)})),le=(a(169),function(){var e=Object(n.useState)(!1),t=Object($.a)(e,2),a=t[0],i=t[1],o={stop:{scale:1},animate:{scale:[1,1.1,.9,1],transition:{repeatDelay:1,loop:1/0}}};return r.a.createElement("div",{className:"footer-container"},r.a.createElement(F.b.div,{initial:"hidden",animate:"show",transition:Object(u.a)({},{type:"spring",damping:10,stiffness:50},{delay:.6}),variants:{hidden:{opacity:0,y:50},show:{opacity:1,y:0}}},r.a.createElement(S.a,{className:"footer",display:"flex",padding:16,borderRadius:3,background:"tint2",justifyContent:"center"},r.a.createElement(N.a,{display:"flex",alignItems:"center"},"made with",r.a.createElement(F.b.span,{variants:o,animate:a?"animate":"stop",onHoverStart:function(){return i(!0)},onHoverEnd:function(){return i(!1)}},r.a.createElement(R.a,{marginX:4,size:14,icon:"heart",color:"#EC4C47"})),"by tru ^_^"))))}),de={SET_CURRENT_USER:"SET_CURRENT_USER"},ue={SET_ALL_TODOS:"SET_ALL_TODOS"},pe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromAuth=null,a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setCurrentUser,a=e.setAllTodos;this.unsubscribeFromAuth=z.onAuthStateChanged(function(){var e=Object(p.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=11;break}return e.next=3,B.collection("/users/".concat(n.uid,"/todos/"));case 3:return e.sent.onSnapshot((function(e){return a(e)})),e.next=7,_(n);case 7:e.sent.onSnapshot((function(e){t(Object(u.a)({id:e.id},e.data()))})),e.next=13;break;case 11:t(n),a(null);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return r.a.createElement(E.a,{basename:"/todo-react-app"},r.a.createElement("div",{className:"app"},r.a.createElement(J,{className:"header"}),r.a.createElement("div",{className:"content"},r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/"},r.a.createElement(se,null)))),r.a.createElement(le,{className:"footer"})))}}]),t}(r.a.Component),me=Object(c.b)(null,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:de.SET_CURRENT_USER,payload:e}}(t))},setAllTodos:function(t){return e(function(e){return{type:ue.SET_ALL_TODOS,payload:e}}(t))}}}))(pe),fe=a(27),he=a(53),be=a(68),ge=a.n(be),Ee=(a(173),{currentUser:null}),ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de.SET_CURRENT_USER:return Object(u.a)({},e,{currentUser:t.payload});default:return e}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e?e.docs.map((function(e){return Object(u.a)({id:e.id},e.data())})).sort((function(e,t){return e.createdAt-t.createdAt})):[]},xe={todos:[]},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue.SET_ALL_TODOS:return Object(u.a)({},e,{todos:ye(t.payload)});default:return e}},ke=Object(fe.c)({user:ve,todo:Oe}),je={key:"user",storage:ge.a},we=Object(he.a)(je,ke),Se=[],Le=Object(fe.d)(we,fe.a.apply(void 0,Se)),Ce=Object(he.b)(Le);o.a.render(r.a.createElement(c.a,{store:Le},r.a.createElement(s.a,{loading:null,persistor:Ce},r.a.createElement(me,null))),document.getElementById("root"))},74:function(e,t,a){e.exports=a(174)},83:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.7b078d07.chunk.js.map