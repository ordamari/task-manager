(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{42:function(e,t,a){e.exports=a.p+"static/media/taskmanager.70740aa3.png"},57:function(e,t,a){e.exports=a(89)},87:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(22),i=a.n(o),r=a(23),l=a(53),s=a(21),u=a(3),d=a(42),m=a.n(d),f=a(13),b=a.n(f),p=a(4),g=a(2);function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=Object(n.useState)(e),c=Object(u.a)(a,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){t(o)}),[o]),[o,function(e){if(e){var t="number"===e.target.type?+e.target.value:e.target.value;i(Object(g.a)({},o,Object(p.a)({},e.target.name,t)))}else i({contact:"",title:"",keyword:""})}]}var k=a(43),E=a.n(k),O={getNewImage:function(e){var t;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=E.a.get("https://api.unsplash.com/search/photos/?client_id=PA3Oow8kvS9lXoH0KnT7yxn2e_FAaKFzROSIXsAdPNE&query=".concat(e)),a.abrupt("return",t.then((function(e){return e.data})));case 2:case"end":return a.stop()}}))}};var h=a(19),j=a.n(h),w=a(45),y=a.n(w);function I(e){var t=e.setImgs,a=v({keyword:""}),n=Object(u.a)(a,2),o=n[0],i=n[1];return c.a.createElement("div",{className:"imgs-input"},c.a.createElement("div",{className:"in-input flex"},o.keyword.length>0&&c.a.createElement("div",{className:"flex align-center delete-container"},c.a.createElement("button",{onClick:function(){return i(),void t([])}},c.a.createElement(j.a,null))),c.a.createElement(y.a,null)),c.a.createElement("form",{className:"flex align-center",onSubmit:function(e){!function(e){var a;b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,b.a.awrap(O.getNewImage(o.keyword));case 3:a=n.sent,console.log("handleSubmit -> data",a),t(a.results);case 6:case"end":return n.stop()}}))}(e)}},c.a.createElement("input",{name:"keyword",autoComplete:"off",placeholder:"Background Image",value:o.keyword,onChange:i,type:"text"})))}var x={on:function(e,t){var a=function(e){var a=e.detail;t(a)};return window.addEventListener(e,a),function(){window.removeEventListener(e,a)}},emit:function(e,t){window.dispatchEvent(new CustomEvent(e,{detail:t}))}};function D(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],o=t[1];return c.a.createElement("div",{className:"navbar-container"},c.a.createElement("nav",{className:"flex space-between align-center"},c.a.createElement("div",{className:"flex align-center"},c.a.createElement("img",{src:m.a,alt:""}),c.a.createElement("h1",null,"Task Manager")),c.a.createElement(I,{setImgs:o})),a.length>0&&c.a.createElement("div",{className:"imgs-container"},a.map((function(e,t){return c.a.createElement("img",{onClick:function(){return t=e.urls.full,a=e.urls.thumb,x.emit("setBackground",{full:t,thumb:a}),void o([]);var t,a},key:t,src:e.urls.thumb})}))))}var T=a(7),N={tasks:{t101:{id:"t101",contact:"buy food",info:{media:"",show:!0,tdList:[{title:"chips",isFinish:!1},{title:"bamba",isFinish:!0},{title:"apropo",isFinish:!0}]}},t102:{id:"t102",contact:"buy drink",info:{media:"",show:!0,tdList:[{title:"kola",isFinish:!1},{title:"spring",isFinish:!0},{title:"orange juice",isFinish:!0}]}},t103:{id:"t103",contact:"choose song",info:{media:"https://www.youtube.com/watch?v=t4-Z8vVMRBs",show:!0}},t104:{id:"t104",contact:"invite friends",info:{media:"",show:!0,tdList:[{title:"guy",isFinish:!1},{title:"sapir",isFinish:!0},{title:"oshri",isFinish:!0}]}},t105:{id:"t105",contact:"party",info:{media:"https://amp.thenationalnews.com/image/policy:1.1042483:1593608070/tr30-June-Ibiza.jpg?f=16x9&w=1200&$p$f$w=ae152f2",show:!0}}},colums:{c101:{id:"c101",title:"Todo",taskIds:["t102","t104"]},c102:{id:"c102",title:"Doing",taskIds:["t105","t103"]},c103:{id:"c103",title:"Done",taskIds:["t101"]}},columnOrder:["c101","c102","c103"]},C=["t101","t102"];var S={query:function(){return Object(g.a)({},N)},updateData:function(e){N=e},getLocks:function(){return Object(T.a)(C)},updateLocks:function(e){C=e}},L=a(20);function F(e){var t=e.addTask,a=e.columnId,n=v({contact:""}),o=Object(u.a)(n,2),i=o[0],r=o[1];return c.a.createElement("form",{onSubmit:function(e){!function(e){e.preventDefault(),t(i.contact,a),r()}(e)}},c.a.createElement("input",{name:"contact",autoComplete:"off",placeholder:"Add task",value:i.contact,onChange:r,type:"text"}))}var _=a(47),A=a.n(_),P=a(51),R=a.n(P),B=a(50),M=a.n(B),K=a(49),U=a.n(K),q=a(28),H=a.n(q),J=a(52),X=a.n(J),$=a(27),z=a.n($),V=a(46),W=a.n(V);function Q(e){var t=e.editData,a=e.taskId,n=e.toggleDataEdit,o=v({media:""}),i=Object(u.a)(o,2),r=i[0],l=i[1];return c.a.createElement("form",{onSubmit:function(e){!function(e){t(a,r.media),e.preventDefault(),n()}(e)}},c.a.createElement("input",{name:"media",autoComplete:"off",placeholder:"img or youtube link",value:r.media,onChange:l,type:"text"}))}function Z(e){var t=e.addTD,a=e.taskId,n=v({title:""}),o=Object(u.a)(n,2),i=o[0],r=o[1];return c.a.createElement("form",{onSubmit:function(e){!function(e){e.preventDefault(),t(a,i.title),r()}(e)}},c.a.createElement("input",{name:"title",autoComplete:"off",placeholder:"Add To Do",value:i.title,onChange:r,type:"text"}))}var G={uploadImg:function(e){var t,a,n,c;return b.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return"dif8yy3on",t="https://api.cloudinary.com/v1_1/".concat("dif8yy3on","/image/upload"),(a=new FormData).append("file",e.target.files[0]),a.append("upload_preset","misterToy"),o.prev=5,o.next=8,b.a.awrap(fetch(t,{method:"POST",body:a}));case 8:return n=o.sent,o.next=11,b.a.awrap(n.json());case 11:return c=o.sent,o.abrupt("return",c);case 15:o.prev=15,o.t0=o.catch(5),console.log(o.t0);case 18:case"end":return o.stop()}}),null,null,[[5,15]])}};var Y=a(48),ee=a.n(Y);function te(e){var t=e.task,a=e.index,o=e.removeTask,i=e.columnId,r=e.lockTasks,l=e.createTD,s=e.toggleIsLock,d=e.toggleIsShown,m=e.editData,f=e.addTD,p=e.toggleIsFinish,g=e.removeTD,v=r.some((function(e){return e===t.id})),k=Object(n.useState)(!1),E=Object(u.a)(k,2),O=E[0],h=E[1],w=Object(n.useState)(!1),y=Object(u.a)(w,2),I=y[0],D=y[1];Object(n.useEffect)((function(){return x.on("toggle-is-open",(function(e){e!==t.id&&h(!1)})),x.on("close-menu",(function(e){e===t.id&&h(!1)})),function(){null,null}}),[]);var N=function(){D(!I)},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];x.emit("toggle-is-open",t.id),D(!1),e.apply(void 0,Object(T.a)(a)),h(!O)},S=function(e){var a,n;return b.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e.target.name,c.prev=1,c.next=4,b.a.awrap(G.uploadImg(e));case 4:a=c.sent,n=a.secure_url,m(t.id,n),D(!1),c.next=12;break;case 10:c.prev=10,c.t0=c.catch(1);case 12:case"end":return c.stop()}}),null,null,[[1,10]])};return c.a.createElement(L.b,{draggableId:t.id,index:a,isDragDisabled:v},(function(e,a){return c.a.createElement("li",Object.assign({},e.draggableProps,{ref:e.innerRef,className:"".concat(a.isDragging?"dragging":""," ").concat(v?"no-drag":""," flex space-between align-center task")}),c.a.createElement("div",{className:"flex column"},c.a.createElement("div",{className:"flex space-between title"},c.a.createElement("div",{className:"flex align-center "},c.a.createElement("div",Object.assign({className:"handle"},e.dragHandleProps)),c.a.createElement("p",null,t.contact)),c.a.createElement("div",{className:"flex align-center"},t.info.media&&"youtube"!==t.info.media.split(".")[1]&&c.a.createElement(z.a,null),t.info.media&&"youtube"===t.info.media.split(".")[1]&&c.a.createElement(W.a,null),t.info.tdList&&c.a.createElement(H.a,null),c.a.createElement("button",{className:"menu-btn",onClick:function(){return C()}},c.a.createElement(A.a,null)))),t.info.media&&t.info.show&&"youtube"!==t.info.media.split(".")[1]&&c.a.createElement("img",{src:t.info.media,alt:""}),t.info.media&&t.info.show&&"youtube"===t.info.media.split(".")[1]&&c.a.createElement("iframe",{width:"180",height:"150",title:t.contacts,src:"https://www.youtube.com/embed/".concat(t.info.media.split("watch?v=")[1])}),t.info.tdList&&t.info.show&&c.a.createElement("div",{className:"list-container"},c.a.createElement("ul",{className:"list"},t.info.tdList.map((function(e,a){return c.a.createElement("li",{className:"flex space-between",key:a},c.a.createElement("div",{className:"flex align-center ".concat(e.isFinish?"done":"")},c.a.createElement("input",{onClick:function(){return p(t.id,a)},type:"checkbox",defaultChecked:e.isFinish}),e.title),c.a.createElement("button",{onClick:function(){return g(t.id,a)}},c.a.createElement(j.a,null)))}))),c.a.createElement(Z,{addTD:f,taskId:t.id}))),I&&c.a.createElement("div",{className:"edit-container"},c.a.createElement("div",{className:"flex flex-end"},c.a.createElement("button",{onClick:N},c.a.createElement(j.a,null))),c.a.createElement(Q,{editData:m,taskId:t.id,toggleDataEdit:N}),c.a.createElement("label",{className:"upload-btn flex align-center",htmlFor:"upload-file"},c.a.createElement(ee.a,null)," Upload Img "),c.a.createElement("input",{hidden:!0,type:"file",className:"file-input",name:"img",id:"upload-file",onChange:S})),O&&c.a.createElement("div",{className:"menu"},c.a.createElement("button",{onClick:function(){C()}},c.a.createElement(j.a,null)," close"),!v&&c.a.createElement("button",{onClick:function(){C(o,[t.id,i])}},c.a.createElement(U.a,null)," Remove"),c.a.createElement("button",{onClick:function(){C(s,[t.id])}},v?c.a.createElement(M.a,null):c.a.createElement(R.a,null)," ",v?"Unlock":"Lock"),c.a.createElement("button",{onClick:function(){C(d,[t.id])}},c.a.createElement(X.a,null)," ",t.info.show?"Unshow":"Show"),c.a.createElement("button",{onClick:function(){C(N)}},c.a.createElement(z.a,null)," Media"),c.a.createElement("button",{onClick:function(){C(l,[t.id])}},c.a.createElement(H.a,null)," List")))}))}function ae(e){var t=e.column,a=e.tasks,n=e.index,o=e.addTask,i=e.createTD,r=e.removeColumn,l=e.removeTask,s=e.lockTasks,u=e.toggleIsLock,d=e.toggleIsShown,m=e.editData,f=e.addTD,b=e.toggleIsFinish,p=e.removeTD;return c.a.createElement(L.b,{draggableId:t.id,index:n},(function(e){return c.a.createElement("li",Object.assign({className:"columns"},e.draggableProps,{ref:e.innerRef}),c.a.createElement("div",{className:"flex flex-end"},c.a.createElement("button",{onClick:function(){r(t.id,n)}},c.a.createElement(j.a,null))),c.a.createElement("h2",e.dragHandleProps,t.title),c.a.createElement(L.c,{droppableId:t.id,type:"task"},(function(e,n){return c.a.createElement("ul",Object.assign({ref:e.innerRef},e.droppableProps,{className:"flex column ".concat(n.isDraggingOver?"dragging":"")}),a.map((function(e,a){return c.a.createElement(te,{editData:m,toggleIsFinish:b,addTD:f,key:e.id,toggleIsShown:d,task:e,index:a,removeTask:l,columnId:t.id,lockTasks:s,toggleIsLock:u,removeTD:p,createTD:i})})),c.a.createElement("div",{className:"place-holder"},e.placeholder))})),c.a.createElement(F,{addTask:o,columnId:t.id}))}))}function ne(){return"_"+Math.random().toString(36).substr(2,9)}function ce(e){var t=e.addColumn,a=v({title:""}),n=Object(u.a)(a,2),o=n[0],i=n[1];return c.a.createElement("form",{onSubmit:function(e){!function(e){e.preventDefault(),t(o.title),i()}(e)}},c.a.createElement("input",{name:"title",autoComplete:"off",placeholder:"Add card",value:o.title,onChange:i,type:"text"}))}function oe(e){var t=Object(n.useState)(S.query()),a=Object(u.a)(t,2),o=a[0],i=a[1],r=Object(n.useState)(S.getLocks()),l=Object(u.a)(r,2),s=l[0],d=l[1],m=Object(n.useState)("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"),f=Object(u.a)(m,2),b=f[0],v=f[1];Object(n.useEffect)((function(){S.updateData(o)}),[o]),Object(n.useEffect)((function(){S.updateLocks(s)}),[s]),Object(n.useEffect)((function(){return x.on("setBackground",(function(e){var t=e.full,a=e.thumb;v(a),v(t)})),function(){null}}),[]);var k=function(e,t){var a=Object(T.a)(o.colums[e].taskIds),n=Object(T.a)(o.columnOrder);n.splice(t,1);var c=Object(g.a)({},o.colums);delete c[e];var r=Object(g.a)({},o.tasks);a.forEach((function(e){return delete r[e]}));var l={tasks:r,colums:c,columnOrder:n};console.log(l),i(l)},E=function(e,t){var a=o.colums[t].taskIds.filter((function(t){return t!==e})),n=Object(g.a)({},o.colums,Object(p.a)({},t,Object(g.a)({},o.colums[t],{taskIds:a}))),c=Object(g.a)({},o.tasks);delete c[e];var r=Object(g.a)({},o,{tasks:c,colums:n});i(r)},O=function(e,t){var a=ne(),n={id:a,contact:e,info:{media:"",show:!0}},c={tasks:Object(g.a)({},o.tasks,Object(p.a)({},a,n)),colums:Object(g.a)({},o.colums,Object(p.a)({},t,Object(g.a)({},o.colums[t],{taskIds:[].concat(Object(T.a)(o.colums[t].taskIds),[a])}))),columnOrder:Object(T.a)(o.columnOrder)};i(c)},h=function(e){var t=s.findIndex((function(t){return t===e}));if(-1===t)d([].concat(Object(T.a)(s),[e]));else{var a=Object(T.a)(s);a.splice(t,1),d(a)}},j=function(e){var t=Object(g.a)({},o.tasks[e]);t.info.show=!t.info.show;var a=Object(g.a)({},o,{tasks:Object(g.a)({},o.tasks,Object(p.a)({},e,t))});i(a)},w=function(e,t){var a=Object(g.a)({},o.tasks[e]);a.info.media=t;var n=Object(g.a)({},o,{tasks:Object(g.a)({},o.tasks,Object(p.a)({},e,a))});i(n)},y=function(e,t){var a=Object(g.a)({},o.tasks[e]);a.info.tdList.push({isFinish:!1,title:t});var n=Object(g.a)({},o,{tasks:Object(g.a)({},o.tasks,Object(p.a)({},e,a))});i(n)},I=function(e,t){var a=Object(g.a)({},o.tasks[e]);a.info.tdList[t].isFinish=!a.info.tdList[t].isFinish;var n=Object(g.a)({},o,{tasks:Object(g.a)({},o.tasks,Object(p.a)({},e,a))});i(n)},D=function(e,t){var a=Object(g.a)({},o.tasks[e]);a.info.tdList.splice(t,1);var n=Object(g.a)({},o,{tasks:Object(g.a)({},o.tasks,Object(p.a)({},e,a))});i(n)},N=function(e){var t=Object(g.a)({},o.tasks[e]);if(!t.info.tdList){t.info.tdList=[];var a=Object(g.a)({},o,{tasks:Object(g.a)({},o.tasks,Object(p.a)({},e,t))});i(a)}};return c.a.createElement("div",{style:{backgroundImage:"url(".concat(b,")")},className:"main-div"},c.a.createElement(L.a,{onDragEnd:function(e){var t;document.body.style.color="inherit",document.body.style.backgroundColor="inherit";var a=e.destination,n=e.source,c=e.draggableId,r=e.type;if(a&&(a.droppableId!==n.droppableId||a.index!==n.index))if("column"!==r){var l=o.colums[n.droppableId],s=o.colums[a.droppableId];if(l!==s){var u=Array.from(l.taskIds);u.splice(n.index,1);var d=Object(g.a)({},l,{taskIds:u}),m=Array.from(s.taskIds);m.splice(a.index,0,c);var f=Object(g.a)({},s,{taskIds:m}),b=Object(g.a)({},o,{colums:Object(g.a)({},o.colums,(t={},Object(p.a)(t,d.id,d),Object(p.a)(t,f.id,f),t))});i(b)}else{var v=Array.from(l.taskIds);v.splice(n.index,1),v.splice(a.index,0,c);var k=Object(g.a)({},l,{taskIds:v}),E=Object(g.a)({},o,{colums:Object(g.a)({},o.colums,Object(p.a)({},k.id,k))});i(E)}}else{var O=Array.from(o.columnOrder);O.splice(n.index,1),O.splice(a.index,0,c);var h=Object(g.a)({},o,{columnOrder:O});i(h)}},onDragStart:function(e){console.log(e),x.emit("close-menu",e.draggableId),document.body.style.color="grey"},onDragUpdate:function(e){var t=e.destination,a=t?t.index/Object.keys(o.tasks).length:0;document.body.style.backgroundColor="rgba(180, 214, 211,".concat(a,")"),document.body.style.transition="background-color .3s ease"}},c.a.createElement("section",{className:"flex align-start specialities"},c.a.createElement(L.c,{droppableId:"all-columns",direction:"horizontal",type:"column"},(function(e){return c.a.createElement("ul",Object.assign({},e.droppableProps,{ref:e.innerRef,className:"flex align-start"}),o.columnOrder.map((function(e,t){var a=o.colums[e],n=a.taskIds.map((function(e){return o.tasks[e]}));return c.a.createElement(ae,{key:a.id,addTD:y,editData:w,column:a,tasks:n,index:t,toggleIsShown:j,toggleIsFinish:I,addTask:O,removeColumn:k,removeTask:E,lockTasks:s,toggleIsLock:h,removeTD:D,createTD:N})})),e.placeholder)})),c.a.createElement("div",{className:"add-column-container"},c.a.createElement(ce,{addColumn:function(e){var t=ne(),a={id:t,title:e,taskIds:[]},n={tasks:Object(g.a)({},o.tasks),colums:Object(g.a)({},o.colums,Object(p.a)({},t,a)),columnOrder:[].concat(Object(T.a)(o.columnOrder),[t])};i(n)}})))))}function ie(e){return c.a.createElement("section",null,c.a.createElement(oe,null))}var re=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(D,null),c.a.createElement(l.a,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{component:ie,path:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(87);var le=a(9),se=a(55),ue={tasks:[]},de=Object(le.c)({task:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_TASKS":return Object(g.a)({},e,{tasks:t.tasks});case"TASK_ADD":return Object(g.a)({},e,{tasks:[].concat(Object(T.a)(e.tasks),[t.task])});case"TASK_UPDATE":return Object(g.a)({},e,{tasks:e.tasks.map((function(e){return e._id===t.task._id?t.task:e}))});case"TASK_REMOVE":return Object(g.a)({},e,{tasks:e.tasks.filter((function(e){return e._id!==t.taskId}))});default:return e}}}),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||le.d,fe=Object(le.e)(de,me(Object(le.a)(se.a)));i.a.render(c.a.createElement(r.a,{store:fe},c.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.0f737235.chunk.js.map