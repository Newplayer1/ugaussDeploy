(this.webpackJsonpugauss=this.webpackJsonpugauss||[]).push([[17],{573:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),m=t(3),o=t(206),c=r.a.lazy((function(){return t.e(12).then(t.bind(null,556))})),l=r.a.lazy((function(){return t.e(11).then(t.bind(null,557))})),i=r.a.lazy((function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,558))})),s=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(9)]).then(t.bind(null,564))})),u=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(7),t.e(14)]).then(t.bind(null,577))})),d=r.a.lazy((function(){return t.e(16).then(t.bind(null,567))})),p=r.a.lazy((function(){return t.e(15).then(t.bind(null,568))})),b=[{path:"/",exact:!0,name:"Home"},{path:"/home",name:"About",component:c},{path:"/data",name:"Dashboard",component:r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(8),t.e(13)]).then(t.bind(null,569))}))},{path:"/contact",name:"Contact",component:l},{path:"/batterie",name:"Donn\xe9es",component:u},{path:"/panneauSolaire",name:"Donn\xe9es",component:u},{path:"/mppt",name:"mppt",component:u},{path:"/Sommaire",name:"Sommaire",component:i},{path:"/chargeur",name:"Donn\xe9es",component:u},{path:"/sortie1",name:"Donn\xe9es",component:u},{path:"/onduleur",name:"Donn\xe9es",component:u},{path:"/sortie2",name:"Graphiques",component:u},{path:"/devices",name:"Appareils",component:s},{path:"/users",exact:!0,name:"Users",component:d},{path:"/users/:id",exact:!0,name:"User Details",component:p}],h=r.a.createElement("div",{className:"pt-3 text-center"},r.a.createElement("div",{className:"sk-spinner sk-spinner-pulse"})),v=r.a.memo((function(){return r.a.createElement("main",{className:"c-main"},r.a.createElement(o.i,{fluid:!0},r.a.createElement(n.Suspense,{fallback:h},r.a.createElement(m.d,null,b.map((function(e,a){return e.component&&r.a.createElement(m.b,{key:a,path:e.path,exact:e.exact,name:e.name,render:function(a){return r.a.createElement(o.p,null,r.a.createElement(e.component,a))}})})),r.a.createElement(m.a,{from:"/",to:"/home"})))))})),E=r.a.memo((function(){return r.a.createElement(o.q,{fixed:!1},r.a.createElement("div",null,r.a.createElement("a",null,"UGauss"),r.a.createElement("span",{className:"ml-1"},"\xa9 2020 ")),r.a.createElement("div",{className:"mfs-auto"}))})),N=t(15),S=function(){var e=Object(N.b)(),a=Object(N.c)((function(e){return e.sidebarShow}));return r.a.createElement(o.s,{withSubheader:!0,style:{height:"65px"}},r.a.createElement(o.I,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var t=!![!1,"responsive"].includes(a)||"responsive";e({type:"setNavbar",sidebarShow:t})}}),r.a.createElement(o.I,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var t=![!0,"responsive"].includes(a)&&"responsive";e({type:"setNavbar",sidebarShow:t})}}))},f=t(216),g=[{_tag:"CSidebarNavItem",name:"Accueil",to:"/home",icon:"cil-speedometer"},{_tag:"CSidebarNavItem",name:"Contact",to:"/contact",icon:"cil-speedometer"},{_tag:"CSidebarNavItem",name:"Syst\xe8me",to:"/data",icon:"cil-speedometer"},{_tag:"CSidebarNavDropdown",name:"Composantes du Syst\xe8me",_children:[{_tag:"CSidebarNavItem",name:"Sommaire",to:"/Sommaire",icon:"cil-speedometer"},{_tag:"CSidebarNavItem",name:"Panneau solaire",to:"/PanneauSolaire",icon:"cil-speedometer"},{_tag:"CSidebarNavItem",name:"Batterie",to:"/batterie",icon:"cil-speedometer"},{_tag:"CSidebarNavItem",name:"Chargeur",to:"/chargeur",icon:"cil-speedometer"},{_tag:"CSidebarNavItem",name:"MPPT",to:"/mppt",icon:"cil-speedometer"},{_tag:"CSidebarNavItem",name:"Onduleur",to:"/onduleur",icon:"cil-speedometer"},{_tag:"CSidebarNavItem",name:"Sortie 1",to:"/sortie1",icon:"cil-speedometer"},{_tag:"CSidebarNavItem",name:"Sortie 2",to:"/sortie2",icon:"cil-speedometer"}]}],C=r.a.memo((function(){var e=Object(N.b)(),a=Object(N.c)((function(e){return e.sidebarShow}));return r.a.createElement(o.B,{show:a,onShowChange:function(a){return e({type:"setNavbar",sidebarShow:a})},style:{backgroundColor:"#1e783c"}},r.a.createElement(o.C,{className:"d-md-down-none",to:"/"},r.a.createElement("div",{className:"c-avatar"},r.a.createElement(o.t,{src:"ugauss/uGauss.png",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})),r.a.createElement("div",null,r.a.createElement("div",{className:"px30",style:{color:"white",padding:"10px 10px"}},"UGauss")),r.a.createElement(f.a,{className:"c-sidebar-brand-minimized",name:"sygnet",height:35})),r.a.createElement(o.D,null,r.a.createElement(o.j,{items:g,components:{CSidebarNavDivider:o.E,CSidebarNavDropdown:o.F,CSidebarNavItem:o.G,CSidebarNavTitle:o.H}})))}));a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"c-app c-default-layout"},r.a.createElement(C,null),r.a.createElement("div",{className:"c-wrapper"},r.a.createElement(S,null),r.a.createElement("div",{className:"c-body"},r.a.createElement(v,null)),r.a.createElement(E,null))))}}}]);
//# sourceMappingURL=17.d0161588.chunk.js.map