(this.webpackJsonpugauss=this.webpackJsonpugauss||[]).push([[9],{172:function(e,t,r){"use strict";t.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}]},485:function(e,t,r){"use strict";r.r(t);var a=r(96),n=r(0),s=r.n(n),i=r(2),u=r(94),o=r(172),c=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}};t.default=function(){var e=Object(i.g)(),t=Object(i.h)().search.match(/page=([0-9]+)/,""),r=Number(t&&t[1]?t[1]:1),d=Object(n.useState)(r),l=Object(a.a)(d,2),m=l[0],g=l[1];return Object(n.useEffect)((function(){r!==m&&g(r)}),[r,m]),s.a.createElement(u.A,null,s.a.createElement(u.h,{xl:6},s.a.createElement(u.e,null,s.a.createElement(u.g,null,"Users",s.a.createElement("small",{className:"text-muted"}," example")),s.a.createElement(u.f,null,s.a.createElement(u.k,{items:o.a,fields:[{key:"name",_classes:"font-weight-bold"},"registered","role","status"],hover:!0,striped:!0,itemsPerPage:5,activePage:m,clickableRows:!0,onRowClick:function(t){return e.push("/users/".concat(t.id))},scopedSlots:{status:function(e){return s.a.createElement("td",null,s.a.createElement(u.a,{color:c(e.status)},e.status))}}}),s.a.createElement(u.z,{activePage:m,onActivePageChange:function(t){r!==t&&e.push("/users?page=".concat(t))},pages:5,doubleArrows:!1,align:"center"})))))}},95:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(97);function n(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(a.a)(e,t):void 0}}},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(95);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,s=void 0;try{for(var i,u=e[Symbol.iterator]();!(a=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(o){n=!0,s=o}finally{try{a||null==u.return||u.return()}finally{if(n)throw s}}return r}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},97:function(e,t,r){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}r.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=9.49bad0a1.chunk.js.map