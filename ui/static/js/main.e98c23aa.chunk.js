(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{112:function(e,t,n){"use strict";var a=n(50),r=n(51),o=n(53),c=n(52),u=n(54),i=n(0),l=n.n(i),s=n(185),d=n(186),f=n(29),E=n(187),p=n(188),m=n(193),A=n(189),y=n(196),h=n(192),g=n(191),b=n(126),O=n(55),S=n(63),v=function(e){function t(e){var n,r;Object(a.a)(this,t);for(var u=arguments.length,i=new Array(u>1?u-1:0),l=1;l<u;l++)i[l-1]=arguments[l];return(r=Object(o.a)(this,(n=Object(c.a)(t)).call.apply(n,[this,e].concat(i)))).handleSubmit=function(){var e=r.state,t=e.name,n=e.selectedArea,a=r.props,o=a.handleSubmit,c=a.setupNodeId,u={};u.name=""!==t,u.selectedArea=null!==n,Object.values(u).reduce(function(e,t){return!!e&&t},!0)?(o(c,t,n),r.setState({validation:{}})):r.setState({validation:u})},r.handleAreaSelect=function(e){var t=e.target.value;r.setState({selectedArea:t})},r.state={selectedArea:null,name:"",validation:{name:!0,selectedArea:!0}},r}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.areasFetched,n=e.ensureAreas;t||n()}},{key:"render",value:function(){var e=this,t=this.props,n=t.setupActive,a=t.handleClose,r=t.handleCancel,o=t.areas,c=this.state,u=c.selectedArea,i=c.validation,f=c.name;return l.a.createElement(s.a,{onClose:a,open:n},l.a.createElement(d.a,null,"Node Setup"),l.a.createElement(E.a,null,l.a.createElement(p.a,null,"This Node requires setup before it can operate properly."),l.a.createElement(m.a,{margin:"none",label:"Name",type:"text",fullWidth:!0,error:!i.name&&0===f.length,onChange:function(t){return e.setState({name:t.target.value})},style:{marginBottom:20}}),l.a.createElement(A.a,{style:{width:"100%",marginBottom:20}},l.a.createElement(y.a,null,"Assigned Room"),l.a.createElement(h.a,{value:u,onChange:this.handleAreaSelect,placeholder:"Assigned Room",error:!i.selectedArea&&null===u,margin:"none",label:"Room"},o.map(function(e){return l.a.createElement(g.a,{value:e.areaId},e.name)}))),l.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement(b.a,{variant:"contained",color:"secondary",style:{marginBottom:10},onClick:r},"Cancel"),l.a.createElement(b.a,{onClick:this.handleSubmit,type:"submit",variant:"contained",style:{marginLeft:10,marginBottom:10}},"Submit"))))}}]),t}(i.Component);t.a=Object(f.b)(function(e){return{setupActive:e.nodes.setup.setupActive,areas:e.areas.data.areas,areasFetched:e.areas.data.areasFetched,setupNodeId:e.nodes.setup.setupNodeId}},function(e){return{handleClose:function(){return e(Object(O.b)())},handleCancel:function(){return e(Object(O.a)())},handleSubmit:function(t,n,a){return e(Object(O.h)(t,n,a))},ensureAreas:function(){return e(Object(S.g)())}}})(v)},115:function(e,t,n){"use strict";(function(e){var a=n(62),r=n(0),o=n.n(r),c=n(182),u=n(183),i=n(184),l=n(49),s=n(120),d=n.n(s),f=n(194),E=n(125),p=n(33),m=n(59),A=n(119),y=n.n(A),h=n(29),g=n(180),b=n(60),O=n(38),S=n(181),v=Object(h.b)(function(e){return{uninitializedNodes:e.nodes.discovery.uninitializedNodes.length}},null)(function(t){var n=t.onClose,a=t.onOpen,r=t.open,c=t.uninitializedNodes,u=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent);return o.a.createElement(f.a,{onClose:n,onOpen:a,disableBackdropTransition:!u,disableDiscovery:u,open:r},o.a.createElement(E.a,{style:{minWidth:300}},o.a.createElement(O.b,{className:"sidebar-links",to:"/",as:p.a},o.a.createElement(p.a,{button:!0},o.a.createElement(m.a,null),o.a.createElement(b.a,{primary:"Home"}))),o.a.createElement(g.a,null),o.a.createElement(O.b,{className:"sidebar-links",to:"/areas",onClick:n,as:p.a},o.a.createElement(p.a,{button:!0},o.a.createElement(m.a,null),o.a.createElement(b.a,{primary:"Areas"}))),o.a.createElement(O.b,{className:"sidebar-links",to:"/nodes",onClick:n,as:p.a},o.a.createElement(p.a,{button:!0},o.a.createElement(m.a,null),o.a.createElement(b.a,{primary:"Nodes"}))),o.a.createElement(O.b,{className:"sidebar-links",to:"/setup",onClick:n,as:p.a},c?o.a.createElement(p.a,{button:!0},o.a.createElement(S.a,{variant:"standard",badgeContent:c,color:"secondary"},o.a.createElement(m.a,null),o.a.createElement(b.a,{style:{paddingRight:10}},"Setup"))):o.a.createElement(p.a,{button:!0},o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,null),o.a.createElement(b.a,{primary:"Setup"}))))),o.a.createElement(E.a,null,o.a.createElement(p.a,{button:!0},o.a.createElement(m.a,null,o.a.createElement(y.a,null)),o.a.createElement(b.a,{primary:""}))))});t.a=function(){var e=o.a.useState({open:!1}),t=Object(a.a)(e,2),n=t[0],r=t[1],s=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&r({open:e})}};return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{open:n.open,onClose:s(!1),onOpen:s(!0)}),o.a.createElement(c.a,{position:"static"},o.a.createElement(u.a,null,o.a.createElement(i.a,{onClick:s(!0),edge:"start",color:"inherit","aria-label":"Menu"},o.a.createElement(d.a,null)),o.a.createElement(l.a,{variant:"h6"},"163 Roberts Wharf"))))}}).call(this,n(93))},12:function(e,t,n){"use strict";n.d(t,"h",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"l",function(){return o}),n.d(t,"g",function(){return c}),n.d(t,"j",function(){return u}),n.d(t,"d",function(){return i}),n.d(t,"q",function(){return l}),n.d(t,"r",function(){return s}),n.d(t,"a",function(){return d}),n.d(t,"c",function(){return f}),n.d(t,"s",function(){return E}),n.d(t,"t",function(){return p}),n.d(t,"n",function(){return m}),n.d(t,"k",function(){return A}),n.d(t,"f",function(){return y}),n.d(t,"m",function(){return h}),n.d(t,"o",function(){return g}),n.d(t,"e",function(){return b}),n.d(t,"p",function(){return O}),n.d(t,"i",function(){return S});var a="AREAS.FETCHING_AREA_DATA",r="AREAS.AREA_DATA_FETCHED",o="AREAS.OPEN_NEW_AREA_MODAL",c="AREAS.CLOSE_NEW_AREA_MODAL",u="AREAS.IN_PROGRESS",i="AREAS.AREA_SUCCESSFULLY_CREATED",l="AREAS.SINGLE_AREA_FETCH",s="AREAS.SINGLE_AREA_FETCH_SUCCESSFUL",d="AREAS.AREA_CREATION_FAILED",f="AREAS.AREA_NOT_FOUND",E="AREAS.TEMP_UPDATE",p="AREAS.TEMP_UPDATE_SUCCESS",m="AREAS.ROUTINE_SUCCESSFULLY_ADDED",A="AREAS.OPEN_EDIT_ROUTINE_DIALOG",y="AREAS.CLOSE_EDIT_ROUTINE_DIALOG",h="AREAS.RESET_EDIT_ROUTINE_DIALOG",g="AREAS.ROUTINE_SUCCESSFULLY_DELETED",b="AREAS.AREA_SUCCESSFULLY_DELETED",O="AREAS.SET_NODES_SUCCESSFUL",S="AREAS.HEATING_TOGGLE_SUCCESS"},14:function(e,t,n){"use strict";n.d(t,"f",function(){return a}),n.d(t,"a",function(){return r}),n.d(t,"l",function(){return o}),n.d(t,"c",function(){return c}),n.d(t,"g",function(){return u}),n.d(t,"j",function(){return i}),n.d(t,"i",function(){return l}),n.d(t,"e",function(){return s}),n.d(t,"m",function(){return d}),n.d(t,"d",function(){return f}),n.d(t,"b",function(){return E}),n.d(t,"k",function(){return p}),n.d(t,"h",function(){return m});var a="NODES.FETCHING_AREA_DATA",r="NODES.AREA_DATA_FETCHED",o="NODES.SET_ACTIVE_NODE",c="NODES.CLEAR_ACTIVE_NODE",u="NODES.FETCHING_NODE_INFO",i="NODES.NODE_INFO_FETCHED",l="NODES.NODE_INFO_DIRECT_LOAD",s="NODES.DISCOVERED_NEW_NODE",d="NODES.START_NODE_SETUP",f="NODES.CLOSE_NODE_SETUP",E="NODES.CANCEL_NODE_SETUP",p="NODES.NODE_SETUP_SUCCESS",m="NODES.NODE_DATA_FETCHED"},142:function(e,t,n){e.exports=n(178)},169:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),u=n(122),i=n(235),l=n(74),s=n(29),d=n(11),f=n(83),E=n.n(f),p=n(114),m=n(50),A=n(51),y=n(53),h=n(52),g=n(54),b=n(23),O=n.n(b),S=n(55),v=n(21),N=function(e){function t(e){var n,a;Object(m.a)(this,t);for(var r=arguments.length,o=new Array(r>1?r-1:0),c=1;c<r;c++)o[c-1]=arguments[c];return(a=Object(y.a)(this,(n=Object(h.a)(t)).call.apply(n,[this,e].concat(o)))).discoverNodes=Object(p.a)(E.a.mark(function e(){var t,n,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.props,n=t.uninitializedNodes,r=t.nodesDiscovered,O.a.get(v.c.getUninitialised).then(function(e){var t=e.data,a=n.map(function(e){return e.nodeId}),o=t.filter(function(e){return!a.includes(e.nodeId)});o.length>0&&(d.c.info("There are new nodes which require setup."),r(o))}).catch(function(e){d.c.error("Failed to get node discovery info.\n".concat(e.toString()))});case 2:case"end":return e.stop()}},e)})),a.state={intervalIDs:[]},a}return Object(g.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){var e=[];[{func:this.discoverNodes,timeout:1e4}].forEach(function(t){t.func(),e.push(setInterval(t.func,t.timeout))}),this.setState(e)}},{key:"componentWillUnmount",value:function(){this.state.intervalIDs.forEach(clearInterval)}},{key:"render",value:function(){return null}}]),t}(a.Component),D=Object(s.b)(function(e){return{uninitializedNodes:e.nodes.discovery.uninitializedNodes}},function(e){return{nodesDiscovered:function(t){return e(Object(S.g)(t))}}})(N),R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null))},T=(n(169),n(38)),C=n(42),j=n(115).a,_=n(62),w=n(185),F=n(186),I=n(187),k=n(188),U=n(193),L=n(126),P=n(234),H=n(63),M=Object(C.f)(Object(s.b)(function(e){return{open:e.areas.config.newRoomModal,inProgress:"createNewArea"===e.areas.config.inProgress}},function(e){return{onClose:function(){return e(Object(H.b)())},createNewArea:function(t,n,a){return e(Object(H.c)(t,n,a))}}})(function(e){var t=e.open,n=e.onClose,a=e.inProgress,o=e.createNewArea,c=e.history,u=r.a.useState(!1),i=Object(_.a)(u,2),l=i[0],s=i[1],d=r.a.useState(""),f=Object(_.a)(d,2),E=f[0],p=f[1];return r.a.createElement(w.a,{open:t,onClose:n},r.a.createElement(F.a,null,"Create New Area"),r.a.createElement(I.a,null,r.a.createElement(k.a,null,"Creating a new area allows you to assign Nodes and set custom temperatures to that area."),r.a.createElement("form",null,r.a.createElement(U.a,{margin:"none",label:"Area Name",error:l&&!E,value:E,required:!0,autoFocus:!0,onChange:function(e){return p(e.target.value)},type:"text",fullWidth:!0,style:{marginBottom:20}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(L.a,{variant:"contained",color:"secondary",style:{marginBottom:10},onClick:function(){p(""),s(!1),n()}},"Cancel"),r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(L.a,{variant:"contained",type:"submit",disabled:a,style:{marginLeft:10,marginBottom:10},onClick:function(e){e.preventDefault(),s(!0),E&&o(E,c,function(){p(""),s(!1)})}},"Submit"),a?r.a.createElement(P.a,{size:24,style:{position:"absolute",color:"#fff",top:"50%",left:"50%",marginTop:-17,marginLeft:-6}}):null)))))})),z=n(112),B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement(z.a,null))},W=n(58),x=r.a.lazy(function(){return n.e(7).then(n.bind(null,767))}),G=r.a.lazy(function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,771))}),q=r.a.lazy(function(){return Promise.all([n.e(1),n.e(6),n.e(9)]).then(n.bind(null,766))}),V=r.a.lazy(function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,768))}),Y=r.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(8)]).then(n.bind(null,765))}),J=function(){return r.a.createElement(T.a,null,r.a.createElement(j,null),r.a.createElement(B,null),r.a.createElement(a.Suspense,{fallback:r.a.createElement("p",null,"Loading...")},r.a.createElement(C.c,null,r.a.createElement(C.a,{component:x,path:"".concat(W.a,"/areas"),exact:!0}),r.a.createElement(C.a,{component:Y,path:"".concat(W.a,"/areas/:id"),exact:!0}),r.a.createElement(C.a,{component:G,path:"".concat(W.a,"/nodes"),exact:!0}),r.a.createElement(C.a,{component:q,path:"".concat(W.a,"/nodes/:id"),exact:!0}),r.a.createElement(C.a,{component:V,path:"".concat(W.a,"/setup"),exact:!0}))))},$=n(31),K=n(121),Q=n(44),X=n(10),Z=n(12),ee={TempUpdate:"DATAFEED.AREA.TEMPUPDATE",HumUpdate:"DATAFEED.AREA.HUMUPDATE",TargetSet:"DATAFEED.AREA.TARGETSET",NodeAdd:"DATAFEED.AREA.NODEADD",NewRoutine:"DATAFEED.AREA.NEWROUTINE",RemoveRoutine:"DATAFEED.AREA.REMOVEROUTINE",RemoveNode:"DATAFEED.AREA.REMOVENODE",NodesSet:"DATAFEED.AREA.NODESSET",SetHeatingEnabled:"DATAFEED.AREA.SETHEATINGENABLED"},te={requestStatus:"idle",areasFetched:!1,areas:[],areasNotFound:[]},ne={newRoomModal:!1,inProgress:""},ae={dialogOpen:!1,routineId:"",routineData:""},re=Object($.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z.h:return Object(X.a)({},e,{requestStatus:"fetching"});case Z.b:return Object(X.a)({},e,{requestStatus:"idle",areas:t.payload,areasFetched:!0});case Z.d:return Object(X.a)({},e,{areas:[].concat(Object(Q.a)(e.areas),[t.payload])});case Z.r:var n=e.areas,a=t.payload.areaId,r=n.filter(function(e){return e.areaId!==a});return Object(X.a)({},e,{areas:[].concat(Object(Q.a)(r),[t.payload])});case Z.c:return e.areasNotFound.includes(t.payload)?e:Object(X.a)({},e,{areasNotFound:[].concat(Object(Q.a)(e.areasNotFound),[t.payload])});case ee.TempUpdate:case ee.HumUpdate:case ee.TargetSet:case ee.NodeAdd:case ee.NewRoutine:case ee.RemoveRoutine:case ee.RemoveNode:case ee.NodesSet:case ee.SetHeatingEnabled:var o=t.payload.feed,c=[],u=[];return Object.keys(o).forEach(function(t){e.areas.forEach(function(e){e.areaId===t?c.push(Object(X.a)({},e,o[t])):u.push(e)})}),Object(X.a)({},e,{areas:[].concat(u,c)});default:return e}},config:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z.l:return Object(X.a)({},e,{newRoomModal:!0});case Z.g:return Object(X.a)({},e,{newRoomModal:!1});case Z.j:return Object(X.a)({},e,{inProgress:t.payload});case Z.d:return Object(X.a)({},e,{inProgress:""});default:return e}},editRoutine:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae;switch((arguments.length>1?arguments[1]:void 0).type){case Z.k:return Object(X.a)({},e,{dialogOpen:!0});case Z.f:return Object(X.a)({},e,{dialogOpen:!1});case Z.m:return ae;default:return e}}}),oe=n(14),ce={requestStatus:"idle",data:[]},ue={latestVersion:"2.0.0",activeNode:{id:"",data:{},loading:!1}},ie={uninitializedNodes:[]},le={setupActive:!1,setupNodeId:"",currentSetup:{}},se={nodes:[],nodesLoaded:!1},de=Object($.c)({areas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.f:return Object(X.a)({},e,{requestStatus:"fetching"});case oe.a:return Object(X.a)({},e,{requestStatus:"idle",data:t.payload});default:return e}},core:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.i:return Object(X.a)({},e,{activeNode:Object(X.a)({},e.activeNode,{id:t.payload,loading:!0})});case oe.j:return Object(X.a)({},e,{activeNode:Object(X.a)({},e.activeNode,{data:t.payload,name:t.payload.name,loading:!1})});case oe.l:return Object(X.a)({},e,{activeNode:Object(X.a)({},e.activeNode,t.payload)});case oe.g:return Object(X.a)({},e,{activeNode:Object(X.a)({},e.activeNode,{loading:!0})});case oe.c:return Object(X.a)({},e,{activeNode:{id:"",data:{},loading:!1}});default:return e}},discovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.e:return Object(X.a)({},e,{uninitializedNodes:[].concat(Object(Q.a)(e.uninitializedNodes),Object(Q.a)(t.payload))});case oe.k:var n=t.payload.node;return Object(X.a)({},e,{uninitializedNodes:e.uninitializedNodes.filter(function(e){return e.nodeId!==n.nodeId})});default:return e}},setup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.m:return t.payload===e.setupNodeId?Object(X.a)({},e,{setupActive:!0}):Object(X.a)({},e,{setupActive:!0,setupNodeId:t.payload,currentSetup:{}});case oe.d:return Object(X.a)({},e,{setupActive:!1});case oe.b:return le;default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe.h:return Object(X.a)({},e,{nodes:t.payload,nodesLoaded:!0});default:return e}}}),fe=Object($.c)({nodes:de,areas:re}),Ee=(0,$.d)(Object($.a)(K.a)),pe=function(){return Object($.e)(fe,Ee)},me=function(e){function t(e){var n,a;Object(m.a)(this,t);for(var r=arguments.length,o=new Array(r>1?r-1:0),c=1;c<r;c++)o[c-1]=arguments[c];return(a=Object(y.a)(this,(n=Object(h.a)(t)).call.apply(n,[this,e].concat(o)))).openWebSocket=function(){var e=new WebSocket(v.b.areas);e.onopen=a.onOpen,e.onmessage=a.onMessage,e.onclose=a.onClose,e.onerror=a.onError},a.onOpen=function(){var e=a.state.initialConnection;a.setState({initialConnection:!0,connected:!0}),e?d.c.info("Datafeed.Area Reconnnected",{autoClose:2e3,transition:d.a,closeButton:!1}):d.c.info("Datafeed.Area Connnected",{autoClose:2e3,transition:d.a,closeButton:!1})},a.onClose=function(){var e=a.state,t=e.connected,n=e.currentTimeout;a.setState({connected:!1}),t&&d.c.warn("Datafeed.Area Closed",{autoClose:2e3,transition:d.a,closeButton:!1}),n||a.setState({currentTimeout:setTimeout(function(){a.openWebSocket(),a.setState({currentTimeout:null})},500)})},a.onError=function(){var e=a.state,t=e.connected,n=e.currentTimeout;a.setState({connected:!1}),t&&d.c.error("Datafeed.Area Errored",{autoClose:2e3,transition:d.a,closeButton:!1}),n||a.setState({currentTimeout:setTimeout(function(){a.openWebSocket(),a.setState({currentTimeout:null})},500)})},a.onMessage=function(e){var t=a.props.feed,n=JSON.parse(e.data);switch(n.type){case"Area.TempUpdate":return t({type:ee.TempUpdate,message:n});case"Area.HumUpdate":return t({type:ee.HumUpdate,message:n});case"Area.TargetSet":return t({type:ee.TargetSet,message:n});case"Area.NodeAdd":return t({type:ee.NodeAdd,message:n});case"Area.NewRoutine":return t({type:ee.NewRoutine,message:n});case"Area.RemoveRoutine":return t({type:ee.RemoveRoutine,message:n});case"Area.RemoveNode":return t({type:ee.RemoveNode,message:n});case"Area.NodesSet":return t({type:ee.NodesSet,message:n});case"Area.SetHeatingEnabled":return t({type:ee.SetHeatingEnabled,message:n});default:return d.c.error('Unknown Message Type "'.concat(n.type,'"'))}},a.state={initialConnection:!1,connected:!1,currentTimeout:null},a}return Object(g.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.openWebSocket()}},{key:"render",value:function(){return null}}]),t}(a.PureComponent),Ae=Object(s.b)(null,function(e){return{feed:function(t){var n=t.type,a=t.message;e({type:n,payload:a})}}})(me),ye=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae,null))},he=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye,null))},ge=Object(u.a)({palette:{type:"dark",primary:l.a}}),be=function(){return r.a.createElement(s.a,{store:pe()},r.a.createElement(i.a,{theme:ge},r.a.createElement(d.b,{position:"top-right",autoClose:6e3,newestOnTop:!0,hideProgressBar:!0,pauseOnVisibilityChange:!0,draggable:!0,pauseOnHover:!0}),r.a.createElement(R,null),r.a.createElement(J,null),r.a.createElement(he,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},21:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return c});var a="ws://".concat(window.location.hostname).concat(window.location.port?":".concat(window.location.hostname):"","/datafeed/"),r={all:"".concat("/api/","areas"),single:function(e){return"".concat("/api/","areas/").concat(e)},createArea:"".concat("/api/","areas/create"),tempHistory:function(e){return"".concat("/api/","areas/").concat(e,"/temp-history")},setTarget:function(e){return"".concat("/api/","areas/").concat(e,"/set-target")},addRoutine:function(e){return"".concat("/api/","areas/").concat(e,"/add-routine")},deleteRoutine:function(e,t){return"".concat("/api/","areas/").concat(e,"/routines/").concat(t)},setNodes:function(e){return"".concat("/api/","areas/").concat(e,"/set-nodes")},setHeating:function(e,t){return"".concat("/api/","areas/").concat(e,"/heating/").concat(t?"on":"off")}},o={getUninitialised:"".concat("/api/","nodes/uninitialized"),getAreas:"".concat("/api/","nodes/areas"),setup:function(e){return"".concat("/api/","nodes/").concat(e,"/setup")},all:"".concat("/api/","nodes")},c={areas:"".concat(a,"areas")}},55:function(e,t,n){"use strict";n.d(t,"f",function(){return i}),n.d(t,"e",function(){return l}),n.d(t,"c",function(){return s}),n.d(t,"g",function(){return d}),n.d(t,"i",function(){return f}),n.d(t,"b",function(){return E}),n.d(t,"a",function(){return p}),n.d(t,"h",function(){return m}),n.d(t,"d",function(){return A});var a=n(23),r=n.n(a),o=n(11),c=n(14),u=n(21),i=function(){return function(e){e({type:c.f}),r.a.get(u.c.getAreas).then(function(t){e({type:c.a,payload:t.data})})}},l=function(e,t){return function(n){n({type:c.l,payload:{id:e,name:t}}),n({type:c.g}),setTimeout(function(){n({type:c.j,payload:{name:"Radiator (Balcony)",type:"Heater",timeOn:{today:6e3,week:48e3},status:!0,on:!0,power:2e3,firmwareVersion:"1.0.0"}})},1e3)}},s=function(e){return l(e,"")},d=function(e){return{type:c.e,payload:e}},f=function(e){return{type:c.m,payload:e}},E=function(){return{type:c.d}},p=function(){return{type:c.b}},m=function(e,t,n){return function(a){a(E()),r.a.post(u.c.setup(e),{name:t,areaId:n}).then(function(e){var t=e.data;o.c.success("Successfully setup Node."),a({type:c.k,payload:t})}).catch(function(){o.c.error("Failed to setup node.")})}},A=function(){return function(e){r.a.get(u.c.all).then(function(t){var n=t.data;e({type:c.h,payload:n})})}}},58:function(e){e.exports={a:"/ui"}},63:function(e,t,n){"use strict";n.d(t,"g",function(){return i}),n.d(t,"h",function(){return l}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return d}),n.d(t,"f",function(){return f}),n.d(t,"k",function(){return E}),n.d(t,"a",function(){return p}),n.d(t,"e",function(){return m}),n.d(t,"d",function(){return A}),n.d(t,"i",function(){return y}),n.d(t,"j",function(){return h});var a=n(23),r=n.n(a),o=n(11),c=n(12),u=n(21),i=function(){return function(e){e({type:c.h}),r.a.get(u.a.all).then(function(t){e({type:c.b,payload:t.data})}).catch(console.error)}},l=function(){return{type:c.l}},s=function(){return{type:c.g}},d=function(e,t,n){return function(a){a({type:c.j,payload:"createNewArea"}),r.a.post(u.a.createArea,{name:e}).then(function(e){var r=e.data.document;a({type:c.d,payload:r}),a(s()),t.push("/areas/".concat(r.areaId)),n()}).catch(function(e){console.error(e),a({type:c.a})})}},f=function(e){return function(t){t({type:c.q}),r.a.get(u.a.single(e)).then(function(e){var n=e.data;t({type:c.r,payload:n})}).catch(function(n){404===n.response.status&&t({type:c.c,payload:e})})}},E=function(e,t){return function(n){n({type:c.s}),r.a.post(u.a.setTarget(e),{target:Number(t)}).then(function(e){var t=e.data;o.c.success("Successfully updated target temperature."),n({type:c.t,payload:t})}).catch(function(e){console.error(e),o.c.error("Failed to update target temperature.")})}},p=function(e,t){return function(n){r.a.post(u.a.addRoutine(e),{routine:t}).then(function(e){var t=e.data;n({type:c.n,payload:t}),o.c.success("Routine Successfullly Created.")}).catch(function(e){console.error(e),o.c.error("Failed to create routine.")})}},m=function e(t,n){return function(a){r.a.delete(e(t,n)).then(function(e){var t=e.data;a({type:c.o,payload:t}),o.c.success("Routine Successfully Deleted.")}).catch(function(e){console.error(e),o.c.error("Failed to delete routine.")})}},A=function(e){return function(t){r.a.delete(u.a.single(e)).then(function(){t({type:c.e,payload:e}),o.c.success("Area successfully deleted. Assigned Nodes are now unassigned.")}).catch(function(e){console.error(e),o.c.error("Failed to delete area.")})}},y=function(e,t){return function(n){r.a.post(u.a.setNodes(e),{nodes:t}).then(function(e){n({type:c.p,payload:e.data}),o.c.success("Set Nodes successfully.")}).catch(function(){o.c.error("Failed to set nodes.")})}},h=function(e,t){return function(n){r.a.post(u.a.setHeating(e,t)).then(function(e){n({type:c.i,payload:e.data}),o.c.success("Successfully toggled heating ".concat(t?"on":"off"))}).catch(function(){o.c.error("Failed to toggle heating.")})}}}},[[142,3,5]]]);
//# sourceMappingURL=main.e98c23aa.chunk.js.map