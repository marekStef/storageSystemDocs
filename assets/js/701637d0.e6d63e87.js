"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8273],{7846:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var o=n(4848),r=n(8453);const t={sidebar_position:2},c="Code Registration",i={id:"main-system/js-execution-service/code-registration",title:"Code Registration",description:"Uploading New Source Code",source:"@site/docs/main-system/js-execution-service/code-registration.md",sourceDirName:"main-system/js-execution-service",slug:"/main-system/js-execution-service/code-registration",permalink:"/storageSystemDocs/docs/main-system/js-execution-service/code-registration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main-system/js-execution-service/code-registration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSystemSidebar",previous:{title:"Requirements On Source Code",permalink:"/storageSystemDocs/docs/main-system/js-execution-service/requirements-on-source-code"},next:{title:"Code Execution",permalink:"/storageSystemDocs/docs/main-system/js-execution-service/code-execution"}},d={},l=[{value:"Uploading New Source Code",id:"uploading-new-source-code",level:2},{value:"Fetching Source Code",id:"fetching-source-code",level:2},{value:"Deleting Source Code",id:"deleting-source-code",level:2}];function a(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"code-registration",children:"Code Registration"}),"\n",(0,o.jsx)(s.h2,{id:"uploading-new-source-code",children:"Uploading New Source Code"}),"\n",(0,o.jsxs)(s.p,{children:["For source code files uploading, this node js express component uses ",(0,o.jsx)(s.a,{href:"https://www.npmjs.com/package/multer",children:"multer"})," middleware. Therefore, the post request must be of ",(0,o.jsx)(s.code,{children:"form-data"})," type."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"router.post('/uploadNewSourceCode', uploadMulterMiddleware.array('files'), uploadNewSourceCode);\n"})}),"\n",(0,o.jsxs)(s.p,{children:["The body of ",(0,o.jsx)(s.code,{children:"form-data"})," request must contain ",(0,o.jsx)(s.code,{children:"files"})," key and the values are the actual files."]}),"\n",(0,o.jsx)(s.p,{children:"There are multiple kinds of responses:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"source code registered successfully"}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="201 Created"',children:'{\r\n    "message": "Files were uploaded",\r\n    "sourceCodeId": "3cd89158-9968-44cc-94c6-629c68f551dd"\r\n}\n'})}),"\n",(0,o.jsxs)(s.p,{children:["The response body in this case contains ",(0,o.jsx)(s.code,{children:"sourceCodeId"})," which is a handle for this code from now on."]}),"\n",(0,o.jsxs)(s.p,{children:["Now any other component using ",(0,o.jsx)(s.code,{children:"Javascript Execution Service"})," only remembers ",(0,o.jsx)(s.code,{children:"sourceCodeId"}),"."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"no files in the request"}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="400 Bad Request"',children:'{\r\n    "message": "No files were uploaded."\r\n}\n'})}),"\n",(0,o.jsx)(s.h2,{id:"fetching-source-code",children:"Fetching Source Code"}),"\n",(0,o.jsxs)(s.p,{children:["For fetching an existing source code based on ",(0,o.jsx)(s.code,{children:"sourceCodeId"}),", there is ",(0,o.jsxs)(s.strong,{children:["/sourceCodes/",":sourceCodeId"]})," ",(0,o.jsx)(s.em,{children:"(GET)"})," endpoint."]}),"\n",(0,o.jsxs)(s.p,{children:["For instance for this example request ",(0,o.jsx)(s.code,{children:"{{JS_EXECUTION_SERVICE_URL}}/sourceCodes/3cd89158-9968-44cc-94c6-629c68f551dd"})," with empty body it retuns the following:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="Response for source code fethching"',children:'{\r\n    "sourceCode": [\r\n        {\r\n            "name": "main.js",\r\n            "code": "const { getResponseMessage } = require(\'./second\');\\r\\n\\r\\nconst helloWorld = (name) => {\\r\\n    return getResponseMessage() + name;\\r\\n}\\r\\n\\r\\nmodule.exports = helloWorld;"\r\n        },\r\n        {\r\n            "name": "second.js",\r\n            "code": "console.log(\'hello world\');\\r\\n\\r\\nconst getResponseMessage = () => {\\r\\n    return \'hello world\';\\r\\n}\\r\\n\\r\\nmodule.exports = {\\r\\n    getResponseMessage\\r\\n}"\r\n        }\r\n    ]\r\n}\n'})}),"\n",(0,o.jsx)(s.h2,{id:"deleting-source-code",children:"Deleting Source Code"}),"\n",(0,o.jsxs)(s.p,{children:["Last simple endpoint is for source code deletion. Endpoint is basically the same (",(0,o.jsxs)(s.strong,{children:["/sourceCodes/",":sourceCodeId"]})," ",(0,o.jsx)(s.em,{children:"(DELETE)"}),") except for the http method type."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="200 OK Response"',children:'{\r\n    "message": "Source code deleted"\r\n}\n'})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>i});var o=n(6540);const r={},t=o.createContext(r);function c(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);