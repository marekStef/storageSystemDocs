"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1701],{3497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=n(4848),a=n(8453);const i={sidebar_position:0},o="Introduction",r={id:"main-system/data-storage/introduction",title:"Introduction",description:"This component is the heart of the whole system. It allows any general event to be stored as long as the event contains payload and metadata. In the metadata object, profile and source needs to be set (it can be seen from the schema). These two fields will be checked when saving the event, otherwise anything else can be put both in the metadata and payload.",source:"@site/docs/main-system/data-storage/introduction.md",sourceDirName:"main-system/data-storage",slug:"/main-system/data-storage/introduction",permalink:"/storage-system-documentation/docs/main-system/data-storage/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main-system/data-storage/introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"mainSystemSidebar",previous:{title:"Data Storage",permalink:"/storage-system-documentation/docs/category/data-storage"},next:{title:"Schemas",permalink:"/storage-system-documentation/docs/main-system/data-storage/schemas"}},c={},d=[{value:"Endpoints",id:"endpoints",level:2},{value:"Events Related",id:"events-related",level:3},{value:"Status Related",id:"status-related",level:3}];function l(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["This component is the heart of the whole system. It allows any general event to be stored as long as the event contains ",(0,s.jsx)(t.code,{children:"payload"})," and ",(0,s.jsx)(t.code,{children:"metadata"}),". In the ",(0,s.jsx)(t.code,{children:"metadata"})," object, ",(0,s.jsx)(t.code,{children:"profile"})," and ",(0,s.jsx)(t.code,{children:"source"})," needs to be set (it can be seen from the schema). These two fields will be checked when saving the event, otherwise anything else can be put both in the ",(0,s.jsx)(t.code,{children:"metadata"})," and ",(0,s.jsx)(t.code,{children:"payload"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Any component having access to this component can do anything with the data. Therefore, access to this component cannot be directly provided to users' apps, unless you don't want any form of authentication / authorisation. That's why ",(0,s.jsx)(t.code,{children:"Auth Service"})," is put between a user (client 3rd party app) to authenticate and authorise any actions it comes across."]}),"\n",(0,s.jsx)(t.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,s.jsx)(t.h3,{id:"events-related",children:"Events Related"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"EventsRoutes.js"})}),"\n",(0,s.jsx)(t.p,{children:"It allows these operations as of now:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"/app/api/uploadNewEvents"})," ",(0,s.jsx)(t.em,{children:"(POST)"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"/app/api/getFilteredEvents"})," ",(0,s.jsx)(t.em,{children:"(POST)"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.strong,{children:["/app/api/events/",":eventId"]})," ",(0,s.jsx)(t.em,{children:"(PUT)"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.strong,{children:["/app/api/events/",":eventId"]})," ",(0,s.jsx)(t.em,{children:"(DELETE)"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"status-related",children:"Status Related"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"statusInfoRoutes.js"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"/status_info/checks/check_data_storage_presence"})," ",(0,s.jsx)(t.em,{children:"(GET)"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The current functionality of ",(0,s.jsx)(t.strong,{children:"Data Storage"})," component has been intentionally designed to be minimalistic, prioritizing a high level of generality. This design choice ensures that it can serve as a ",(0,s.jsx)(t.em,{children:"foundational building block"}),". By focusing on a core set of features and not adding other non-critical ones, we give other runtime components (current as well as future ones) in the system the freedom to utilize this component in ways that best suit their needs."]}),"\n",(0,s.jsxs)(t.p,{children:["This approach also ensures that the component remains ",(0,s.jsx)(t.em,{children:"lightweight"}),", facilitating ease of potential future expansions. The simplicity of the component's current capabilities does not limit its potential; rather, it lays the groundwork for a scalable system that can evolve over time. As new requirements emerge (from other runtime components in the system) or as the ecosystem around it grows (new 3rd party apps requirements or whole new concepts being added in), additional functionalities can be seamlessly integrated."]}),"\n",(0,s.jsxs)(t.p,{children:["In this way, the minimalist design of this component is not a reflection of its limitations but a strategic decision to maximize its adaptability and utility across a wide range of applications. This ensures that as the system evolves, the ",(0,s.jsx)(t.strong,{children:"Data Storage"})," component can be enhanced, making it a versatile and valuable asset in the architecture of the system."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"To know more about the schemas of the event and about the interfaces of the endpoints, continue with your reading, please."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(6540);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);