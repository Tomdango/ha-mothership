(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{771:function(e,t,a){"use strict";a.r(t);var n=a(51),r=a(52),l=a(54),c=a(53),o=a(55),i=a(0),s=a.n(i),u=a(321),m=a(50),d=a(320),p=a(29),f=a(234),h=a(124),E=a(126),b=a(87),y=a(744),g=a(746),v=a(747),j=a(745),O=a(748),N=a(39),w=a(30),k=a(56),x=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).setActiveNode=function(e,t){(0,a.props.setActiveNode)(e,t)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.area,n=t.nodes;return s.a.createElement(h.a,{in:!0},s.a.createElement(b.a,{className:"nodes-table-paper"},s.a.createElement(m.a,{style:{padding:15,fontWeight:"lighter"},variant:"h5"},a),s.a.createElement(y.a,null,s.a.createElement(j.a,null,s.a.createElement(g.a,null,s.a.createElement(v.a,null,"Name"),s.a.createElement(v.a,null,"Type"),s.a.createElement(v.a,null))),s.a.createElement(O.a,null,n.map(function(t){return s.a.createElement(g.a,null,s.a.createElement(v.a,{style:{display:"flex",alignItems:"center"},component:"th",scope:"row"},s.a.createElement("div",{className:"nodetable-status nodetable-status__".concat(t.online?"online":"offline")}),t.name),s.a.createElement(v.a,null,t.type),s.a.createElement(v.a,{align:"right",style:{padding:0,paddingRight:10}},s.a.createElement(N.b,{to:"".concat(w.a,"/nodes/").concat(t.id),onClick:function(){return e.setActiveNode(t.id,t.name)},style:{textDecoration:"none"}},s.a.createElement(E.a,{variant:"outlined",size:"small"},"Control"))))})))))}}]),t}(i.Component),D=Object(p.b)(null,function(e){return{setActiveNode:function(t,a){return e(Object(k.e)(t,a))}}})(x),A=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchData)()}},{key:"render",value:function(){var e=this.props,t=e.requestStatus,a=e.nodeData.map(function(e){return s.a.createElement(d.a,{item:!0,xs:12,md:6,className:"nodes-table-container"},s.a.createElement(D,e))});return s.a.createElement(u.a,{maxWidth:"xl",style:{marginTop:20}},s.a.createElement("div",{style:{display:"flex",alignItems:"center"}},s.a.createElement(m.a,{variant:"h3",style:{fontWeight:"lighter"},gutterBottom:!0},"Nodes"),"fetching"===t?s.a.createElement(f.a,{color:"secondary",style:{marginLeft:30}}):null),s.a.createElement(d.a,{container:!0},a))}}]),t}(i.Component);t.default=Object(p.b)(function(e){return{requestStatus:e.nodes.areas.requestStatus,nodeData:e.nodes.areas.data}},function(e){return{fetchData:function(){return e(Object(k.f)())}}})(A)}}]);
//# sourceMappingURL=10.68b5c888.chunk.js.map