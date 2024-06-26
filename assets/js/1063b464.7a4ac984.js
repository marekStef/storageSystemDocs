"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4369],{6597:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=s(4848),t=s(8453);const r={sidebar_position:0},o="Introduction",d={id:"main-system/auth-service/introduction",title:"Introduction",description:"This component is the only component accessible to apps. All other components of the system (except for a part of View Manager component) will be on a hidden private network. This allows all the other components to communicated with each other with http requests instead of setting up https.",source:"@site/docs/main-system/auth-service/introduction.md",sourceDirName:"main-system/auth-service",slug:"/main-system/auth-service/introduction",permalink:"/storage-system-documentation/docs/main-system/auth-service/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main-system/auth-service/introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"mainSystemSidebar",previous:{title:"Auth Service",permalink:"/storage-system-documentation/docs/category/auth-service"},next:{title:"Schemas",permalink:"/storage-system-documentation/docs/main-system/auth-service/schemas"}},a={},l=[{value:"Endpoints",id:"endpoints",level:2},{value:"Endpoints meant to be used from admin control panel",id:"endpoints-meant-to-be-used-from-admin-control-panel",level:3},{value:"Permissions related",id:"permissions-related",level:4},{value:"Views related",id:"views-related",level:4},{value:"Endpoints meant to be used by applications themselves",id:"endpoints-meant-to-be-used-by-applications-themselves",level:3},{value:"Association, registration, permissions related",id:"association-registration-permissions-related",level:4},{value:"Events related",id:"events-related",level:4},{value:"Views related",id:"views-related-1",level:4},{value:"Status info routes",id:"status-info-routes",level:3}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"This component is the only component accessible to apps. All other components of the system (except for a part of View Manager component) will be on a hidden private network. This allows all the other components to communicated with each other with http requests instead of setting up https."}),"\n",(0,i.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Auth Service"})," has extensive set of endpoints divided based on their intended use."]}),"\n",(0,i.jsx)(n.h3,{id:"endpoints-meant-to-be-used-from-admin-control-panel",children:"Endpoints meant to be used from admin control panel"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/admin/api/apps"})," ",(0,i.jsx)(n.em,{children:"(GET)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["/admin/api/apps/",":appHolderId"]})," ",(0,i.jsx)(n.em,{children:"(GET)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/admin/api/registerNewApp"})," ",(0,i.jsx)(n.em,{children:"(POST)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/admin/api/generateOneTimeAssociationToken"})," ",(0,i.jsx)(n.em,{children:"(POST)"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"permissions-related",children:"Permissions related"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/admin/api/permissions/getUnapprovedPermissionsRequests?pageIndex=2&limit=100"})," ",(0,i.jsx)(n.em,{children:"(GET)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["/admin/api/permissions/getUnapprovedPermissionsRequests /",":appHolderId"]})," ",(0,i.jsx)(n.em,{children:"(GET)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/admin/api/permissions/approvePermissionRequest"})," ",(0,i.jsx)(n.em,{children:"(PUT)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/admin/api/permissions/revokePermission"})," ",(0,i.jsx)(n.em,{children:"(PUT)"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"views-related",children:"Views related"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/admin/api/views"})," ",(0,i.jsx)(n.em,{children:"(GET)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["/admin/api/apps/",":appHolderId","/views"]})," ",(0,i.jsx)(n.em,{children:"(GET)"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"endpoints-meant-to-be-used-by-applications-themselves",children:"Endpoints meant to be used by applications themselves"}),"\n",(0,i.jsx)(n.h4,{id:"association-registration-permissions-related",children:"Association, registration, permissions related"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/app/api/associateWithStorageAppHolder"})," ",(0,i.jsx)(n.em,{children:"(POST)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/app/api/registerNewProfile"})," ",(0,i.jsx)(n.em,{children:"(POST)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/app/api/requestNewPermission"})," ",(0,i.jsx)(n.em,{children:"(POST)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/app/api/checkAccessTokenStatus?accessToken=[token]"})," ",(0,i.jsx)(n.em,{children:"(GET)"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"events-related",children:"Events related"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/app/api/uploadNewEvents"})," ",(0,i.jsx)(n.em,{children:"(POST)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/app/api/modifyEvent"})," ",(0,i.jsx)(n.em,{children:"(PUT)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/app/api/deleteEvent"})," ",(0,i.jsx)(n.em,{children:"(DELETE)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/app/api/getAllEventsForGivenAccessToken"})," ",(0,i.jsx)(n.em,{children:"(GET)"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"views-related-1",children:"Views related"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/app/api/views/registerNewViewInstanceAccess"})," ",(0,i.jsx)(n.em,{children:"(POST)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/app/api/views/runViewInstance"})," ",(0,i.jsx)(n.em,{children:"(POST)"})]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Registering a new ",(0,i.jsx)(n.code,{children:"View Template"})," needs to be done manually through ",(0,i.jsx)(n.code,{children:"View Manager API"}),". Allowing third-party applications to register new ",(0,i.jsx)(n.code,{children:"View Template"}),"s directly could inadvertently open the door to executing malicious code, thereby compromising the system's integrity and potentially leading to a range of unwanted outcomes, from data breaches to unauthorized access or manipulation of system functionalities."]})}),"\n",(0,i.jsx)(n.h3,{id:"status-info-routes",children:"Status info routes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"/status_info/checks/check_auth_service_presence"})," ",(0,i.jsx)(n.em,{children:"(GET)"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var i=s(6540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);