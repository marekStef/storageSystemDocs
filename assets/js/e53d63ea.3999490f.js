"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3099],{7145:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var s=i(4848),t=i(8453);const c={sidebar_position:6},a="Views Handling",r={id:"main-system/auth-service/views-handling",title:"Views Handling",description:"View Templates and View Instances are trully being handled by View Manager component. Auth Service only checks whether the app is authorised to use given View Instance and then delegates this request to View Manager component. To know more about it, head over there, please.",source:"@site/docs/main-system/auth-service/views-handling.md",sourceDirName:"main-system/auth-service",slug:"/main-system/auth-service/views-handling",permalink:"/storage-system-documentation/docs/main-system/auth-service/views-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main-system/auth-service/views-handling.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"mainSystemSidebar",previous:{title:"Events Handling",permalink:"/storage-system-documentation/docs/main-system/auth-service/events-handling"},next:{title:"Setup",permalink:"/storage-system-documentation/docs/main-system/auth-service/setup"}},o={},d=[{value:"Registering New View Instance <em>(application endpoint)</em>",id:"registering-new-view-instance-application-endpoint",level:2},{value:"Running View Instance <em>(application endpoint)</em>",id:"running-view-instance-application-endpoint",level:2},{value:"Getting All View Accesses <em>(admin endpoint)</em>",id:"getting-all-view-accesses-admin-endpoint",level:2},{value:"Getting All View Accesses For a Given App <em>(admin endpoint)</em>",id:"getting-all-view-accesses-for-a-given-app-admin-endpoint",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"views-handling",children:"Views Handling"}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"View Templates"})," and ",(0,s.jsx)(n.code,{children:"View Instances"})," are trully being handled by ",(0,s.jsx)(n.code,{children:"View Manager"})," component. ",(0,s.jsx)(n.code,{children:"Auth Service"})," only checks whether the app is authorised to use given ",(0,s.jsx)(n.code,{children:"View Instance"})," and then delegates this request to ",(0,s.jsx)(n.code,{children:"View Manager"})," component. To know more about it, head over ",(0,s.jsx)(n.a,{href:"../view-manager/introduction",children:"there"}),", please."]}),(0,s.jsxs)(n.p,{children:["Therefore, we have ",(0,s.jsx)(n.code,{children:"View Access"})," in ",(0,s.jsx)(n.code,{children:"Auth Service"})," ",(0,s.jsx)(n.a,{href:"./schemas",children:"have a look in schemas"}),"."]})]}),"\n",(0,s.jsxs)(n.p,{children:["Before your app is able to register a ",(0,s.jsx)(n.code,{children:"View Instance"}),", ",(0,s.jsx)(n.code,{children:"View Template"})," needs to have been already created at this point. As mentioned before during this tour, there is no possibility for the app to register a custom source code by itself. The app needs to prepare ",(0,s.jsx)(n.code,{children:"View Template"}),"'s code to it to the user but it's ultimately the user who needs to make a decision about whether the code is safe enough to be registered in the ",(0,s.jsx)(n.code,{children:"View Template"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"registering-new-view-instance-application-endpoint",children:["Registering New View Instance ",(0,s.jsx)(n.em,{children:"(application endpoint)"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"/app/api/views/registerNewViewInstanceAccess"})," ",(0,s.jsx)(n.em,{children:"(POST)"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="Body of the request"',children:'{\r\n    "viewAccessName": "New View Access Name",\r\n    "jwtTokenForPermissionRequestsAndProfiles": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjY2MDQyZTkwYzMwMjBmODc3YzFhYjEzOSIsIm5hbWVEZWZpbmVkQnlVc2VyIjoidGVzdGluZyIsIm5hbWVEZWZpbmVkQnlBcHAiOiJhcHBsaWNhdGlvbi5jb20iLCJpYXQiOjE3MTE1NTAxMDMsImV4cCI6MTExNzg4MzAxMDN9.qW2kUn0DvXMaGxnAvMVAZS8crAWh8f9OT1wXsis38aU",\r\n    "viewTemplateId": "65fd8d379b3332eccb2769fd",\r\n    //highlight-start\r\n    "configuration": {}\r\n    //highlight-end\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["As you can see in the request there is this ",(0,s.jsx)(n.code,{children:"configuration"})," field that may surprise you, in particular what it's for. To learn more about it, visit ",(0,s.jsx)(n.a,{href:"../view-manager/introduction",children:"View Manager component"}),". Long story short, each ",(0,s.jsx)(n.code,{children:"View Instance"})," can have a ",(0,s.jsx)(n.code,{children:"configuration"})," which can't be modified for the period of the ",(0,s.jsx)(n.code,{children:"View Instance"}),"'s whole life but this ",(0,s.jsx)(n.code,{children:"configuration"})," is passed (along with other things - and yes dynamic ",(0,s.jsx)(n.code,{children:"configuration"})," named as ",(0,s.jsx)(n.code,{children:"clientData"})," exists as well) to the ",(0,s.jsx)(n.code,{children:"View Instance"})," when being executed."]}),"\n",(0,s.jsxs)(n.h2,{id:"running-view-instance-application-endpoint",children:["Running View Instance ",(0,s.jsx)(n.em,{children:"(application endpoint)"})]}),"\n",(0,s.jsxs)(n.p,{children:["As mentioned, ",(0,s.jsx)(n.strong,{children:"Auth Service"})," only performs checks and delegates Views related business logic to ",(0,s.jsx)(n.strong,{children:"View Manager"})," component. Therefore it's that component which is in the power of saying what's needed in the request."]}),"\n",(0,s.jsxs)(n.p,{children:["For the sake of completness, we show it here as it's the ",(0,s.jsx)(n.strong,{children:"Auth Service"})," that is being requested (",(0,s.jsx)(n.strong,{children:"View Manager"})," does not have ",(0,s.jsx)(n.code,{children:"View Instances"})," related endpoints publicly accessible)."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"/app/api/views/runViewInstance"})," ",(0,s.jsx)(n.em,{children:"(POST)"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="Example Request Body"',children:'{\r\n    "viewAccessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWV3SW5zdGFuY2VJZCI6IjY1ZmRjMzBiM2VjZGEzMDA0NTFmYTVjZCIsImFwcElkIjoiNjVmZGMyZmQ5MDI2OTUyZjRhMzJlMTVhIiwiYXV0aFNlcnZpY2VWaWV3QWNjZXNzSWQiOiI2NWZkYzMwYjkwMjY5NTJmNGEzMmUxNmQiLCJpYXQiOjE3MTExMjk4NzYsImV4cCI6MTExNzg0MDk4NzZ9.pBiJnWjPCHZV-bf_0FPhs2H0RETB-VEfy7HyVOvVw6c",\r\n    //highlight-start\r\n    "clientCustomData": {\r\n        "from": "new"\r\n    }\r\n    //highlight-end\r\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["To really know how ",(0,s.jsx)(n.code,{children:"configuration"})," (static, life-time object being passed to each view execution), ",(0,s.jsx)(n.code,{children:"clientCustomData"})," (dynamic, per-execution object being passed to each view instance from the client side request) and other data are passed to ",(0,s.jsx)(n.code,{children:"View Instance"})," during its execution, you need to read ",(0,s.jsx)(n.strong,{children:"View Manager"})," component thoroughly as it has been already advised multiple times to you."]})}),"\n",(0,s.jsxs)(n.h2,{id:"getting-all-view-accesses-admin-endpoint",children:["Getting All View Accesses ",(0,s.jsx)(n.em,{children:"(admin endpoint)"})]}),"\n",(0,s.jsxs)(n.p,{children:["This endpoint is utilised by a frontend admin ",(0,s.jsx)(n.strong,{children:"Control Centre"})," component. The endpoint basically returns all ",(0,s.jsx)(n.code,{children:"View Accesses"})," currently registered in the system."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"/admin/api/views"})," ",(0,s.jsx)(n.em,{children:"(GET)"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="200 - OK Response"',children:'[\r\n    {\r\n        "_id": "66045360c3020f877c1ab189",\r\n        "app": "66045321c3020f877c1ab176",\r\n        "viewAccessName": "View Instance Access Name For Calendar Events Fetching Based On Selected Week",\r\n        "viewInstanceId": "660453604d828192b18e62f1",\r\n        "createdDate": "2024-03-27T17:12:00.620Z",\r\n        "__v": 0,\r\n        "viewAccessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWV3SW5zdGFuY2VJZCI6IjY2MDQ1MzYwNGQ4MjgxOTJiMThlNjJmMSIsImFwcElkIjoiNjYwNDUzMjFjMzAyMGY4NzdjMWFiMTc2IiwiYXV0aFNlcnZpY2VWaWV3QWNjZXNzSWQiOiI2NjA0NTM2MGMzMDIwZjg3N2MxYWIxODkiLCJpYXQiOjE3MTE1NTk1MjAsImV4cCI6MTExNzg4Mzk1MjB9.Ekx_M3nAvpzv3sGeTFTwlvjQVDXfb3F75d06AyQtqo8"\r\n    },\r\n    {\r\n        "_id": "660884c34b4934969eeb25c6",\r\n        "app": "66045321c3020f877c1ab176",\r\n        "viewAccessName": "View access for getting unique apps names",\r\n        "viewInstanceId": "660884c34d828192b18e6c25",\r\n        "createdDate": "2024-03-30T21:31:47.373Z",\r\n        "__v": 0,\r\n        "viewAccessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWV3SW5zdGFuY2VJZCI6IjY2MDg4NGMzNGQ4MjgxOTJiMThlNmMyNSIsImFwcElkIjoiNjYwNDUzMjFjMzAyMGY4NzdjMWFiMTc2IiwiYXV0aFNlcnZpY2VWaWV3QWNjZXNzSWQiOiI2NjA4ODRjMzRiNDkzNDk2OWVlYjI1YzYiLCJpYXQiOjE3MTE4MzQzMDcsImV4cCI6MTExNzkxMTQzMDd9.sdDE9WLVwFnywlYkjGKCOJUQPIBIUfPi_zneydtaY_o"\r\n    },\r\n    {\r\n        "_id": "6608869c4b4934969eeb2624",\r\n        "app": "66045321c3020f877c1ab176",\r\n        "viewAccessName": "View access for getting location data from the android app",\r\n        "viewInstanceId": "6608869c4d828192b18e6c74",\r\n        "createdDate": "2024-03-30T21:39:40.556Z",\r\n        "__v": 0,\r\n        "viewAccessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWV3SW5zdGFuY2VJZCI6IjY2MDg4NjljNGQ4MjgxOTJiMThlNmM3NCIsImFwcElkIjoiNjYwNDUzMjFjMzAyMGY4NzdjMWFiMTc2IiwiYXV0aFNlcnZpY2VWaWV3QWNjZXNzSWQiOiI2NjA4ODY5YzRiNDkzNDk2OWVlYjI2MjQiLCJpYXQiOjE3MTE4MzQ3ODAsImV4cCI6MTExNzkxMTQ3ODB9.MqSsVSnDdVQAFUYFESx3hruCYn1dIIbOqP2GMuwi7cE"\r\n    }\r\n]\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["As mentioned above, ",(0,s.jsx)(n.code,{children:"View Access"})," is just an access to the ",(0,s.jsx)(n.code,{children:"View Instance"}),". ",(0,s.jsx)(n.code,{children:"View Instances"})," are being managed by ",(0,s.jsx)(n.code,{children:"View Manager"}),"."]})}),"\n",(0,s.jsxs)(n.h2,{id:"getting-all-view-accesses-for-a-given-app-admin-endpoint",children:["Getting All View Accesses For a Given App ",(0,s.jsx)(n.em,{children:"(admin endpoint)"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["/admin/api/apps/",":appHolderId","/views"]})," ",(0,s.jsx)(n.em,{children:"(GET)"})," endpoint is for getting more detailed ",(0,s.jsx)(n.code,{children:"View Accesses"})," information for a given app."]}),"\n",(0,s.jsxs)(n.p,{children:["For a request like this ",(0,s.jsx)(n.code,{children:"{{AUTH_SERVER_URL}}/admin/api/apps/66045321c3020f877c1ab176/views"})," we get this response:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="200 OK Response"',children:'{\r\n    "viewAccesses": [\r\n        {\r\n            "viewAccessId": "66096a55495e3a7c8e05cc19",\r\n            "viewAccessName": "View access for getting windows apps data",\r\n            "viewAccessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWV3SW5zdGFuY2VJZCI6IjY2MDk2YTU1NGQ4MjgxOTJiMThlNmU5YyIsImFwcElkIjoiNjYwNDUzMjFjMzAyMGY4NzdjMWFiMTc2IiwiYXV0aFNlcnZpY2VWaWV3QWNjZXNzSWQiOiI2NjA5NmE1NTQ5NWUzYTdjOGUwNWNjMTkiLCJpYXQiOjE3MTIwOTk2MDQsImV4cCI6MTExNzkzNzk2MDR9.vleXBOO4Q7-tbVcwrTU_D08SpSxSv_C222DnWYwfvZw",\r\n            "viewInstanceId": "66096a554d828192b18e6e9c",\r\n            "createdDate": "2024-03-31T13:51:17.902Z",\r\n            "viewInstance": {\r\n                "_id": "66096a554d828192b18e6e9c",\r\n                "viewTemplate": {\r\n                    "_id": "66096a4d4d828192b18e6e8c",\r\n                    "templateName": "get_windows_apps_data_for_calendar_view_template",\r\n                    "sourceCodeId": "d5fd5709-8a08-42eb-9e88-2959e8fc82b2",\r\n                    "metadata": {\r\n                        "runtime": "javascript"\r\n                    },\r\n                    "profiles": [\r\n                        {\r\n                            "profile": "activityTracker.com/activityTrackerEvent",\r\n                            "read": true,\r\n                            "create": false,\r\n                            "modify": false,\r\n                            "delete": false,\r\n                            "_id": "66096a4d4d828192b18e6e8d"\r\n                        }\r\n                    ],\r\n                    "createdDate": "2024-03-31T13:51:09.449Z",\r\n                    "__v": 0\r\n                },\r\n                "accessTokensToProfiles": {\r\n                    "activityTracker.com/activityTrackerEvent": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhQWNjZXNzUGVybWlzc2lvbklkIjoiNjYwOTZhNTU0OTVlM2E3YzhlMDVjYzE1IiwiYXBwSWQiOiI2NjA0NTMyMWMzMDIwZjg3N2MxYWIxNzYiLCJwZXJtaXNzaW9uIjp7InByb2ZpbGUiOiJhY3Rpdml0eVRyYWNrZXIuY29tL2FjdGl2aXR5VHJhY2tlckV2ZW50IiwicmVhZCI6dHJ1ZSwiY3JlYXRlIjpmYWxzZSwibW9kaWZ5IjpmYWxzZSwiZGVsZXRlIjpmYWxzZX0sImNyZWF0ZWREYXRlIjoiMjAyNC0wMy0zMVQxMzo1MToxNy44ODVaIiwiYXBwcm92ZWREYXRlIjpudWxsLCJleHBpcmF0aW9uRGF0ZSI6bnVsbCwiaWF0IjoxNzExODkzMDc3LCJleHAiOjExMTc5MTczMDc3fQ.m88oLlyu3T0GGUX4_6tICWU2GhBQb6AXpJZepdmuPSI"\r\n                },\r\n                "createdDate": "2024-03-31T13:51:17.896Z",\r\n                "__v": 0\r\n            }\r\n        }\r\n    ]\r\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["Congratulations! You have now covered most of the ",(0,s.jsx)(n.code,{children:"Auth Service"})," component functionality! \ud83c\udf89\ud83c\udf89\ud83c\udf89"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(6540);const t={},c=s.createContext(t);function a(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);