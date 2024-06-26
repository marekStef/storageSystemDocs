"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8517],{8835:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=n(4848),s=n(8453);const i={sidebar_position:3},o="Profile Registration",a={id:"main-system/auth-service/profle-registration",title:"Profile Registration",description:"After your app is set up and has jwtTokenForPermissionRequestsAndProfiles correctly saved, it can proceed to create a new profile.",source:"@site/docs/main-system/auth-service/profle-registration.md",sourceDirName:"main-system/auth-service",slug:"/main-system/auth-service/profle-registration",permalink:"/storage-system-documentation/docs/main-system/auth-service/profle-registration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main-system/auth-service/profle-registration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mainSystemSidebar",previous:{title:"New App Setup",permalink:"/storage-system-documentation/docs/main-system/auth-service/new-app-setup"},next:{title:"Permissions",permalink:"/storage-system-documentation/docs/main-system/auth-service/permissions"}},c={},l=[{value:"When to create a new profile?",id:"when-to-create-a-new-profile",level:2},{value:"Profile registration",id:"profile-registration-1",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"profile-registration",children:"Profile Registration"}),"\n",(0,t.jsxs)(r.p,{children:["After your app is set up and has ",(0,t.jsx)(r.code,{children:"jwtTokenForPermissionRequestsAndProfiles"})," correctly saved, it can proceed to create a new ",(0,t.jsx)(r.code,{children:"profile"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Before proceeding, please read about profiles ",(0,t.jsx)(r.a,{href:"/docs/main-system/introduction/aspects-of-system-and-vocabulary#profile",children:"here in introduction"})]}),"\n",(0,t.jsx)(r.h2,{id:"when-to-create-a-new-profile",children:"When to create a new profile?"}),"\n",(0,t.jsx)(r.p,{children:"Now it's time to ask yourself a question about whether your app is about to produce its own unique data or not."}),"\n",(0,t.jsxs)(r.p,{children:["If not, you can skip creating a ",(0,t.jsx)(r.em,{children:"profile"})," and go to ",(0,t.jsx)(r.em,{children:"Permissions"})," part."]}),"\n",(0,t.jsx)(r.h2,{id:"profile-registration-1",children:"Profile registration"}),"\n",(0,t.jsx)(r.p,{children:"You are here because your app has been developed to produce its own data. Before it can start saving that data in this system, it first needs to tell this system something about the structure of that data."}),"\n",(0,t.jsxs)(r.p,{children:["As you can see, the profile registration request object is very similar to the event itself. That's because the ",(0,t.jsx)(r.code,{children:"auth service"})," stores these profiles as general events in the ",(0,t.jsx)(r.em,{children:"Data Storage"})," system."]}),"\n",(0,t.jsxs)(r.p,{children:["As you already know, each ",(0,t.jsx)(r.code,{children:"Event"})," needs to have ",(0,t.jsx)(r.code,{children:"profile"})," field set in the metadata so that the system knows of what type this event is."]}),"\n",(0,t.jsxs)(r.p,{children:["Therefore, this new permission request needs to have ",(0,t.jsx)(r.code,{children:"metadata.profile"})," set to ",(0,t.jsx)(r.code,{children:"core:profile-registration_v1"}),"."]}),"\n",(0,t.jsxs)(r.admonition,{type:"warning",children:[(0,t.jsx)(r.mdxAdmonitionTitle,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"metadata.profile"})," really needs to be set to ",(0,t.jsx)(r.code,{children:"core:profile-registration_v1"}),"! Nothing else won't work. ",(0,t.jsx)(r.code,{children:"core:profile-registration_v1"})," is automatically registered in the system and is added to the ",(0,t.jsx)(r.code,{children:"Data Storage"})," component via a manual running of a script when this whole system is being set up."]}),(0,t.jsxs)(r.p,{children:["If you are the future admin of this system, head over to ",(0,t.jsx)(r.a,{href:"./setup",children:"auth service setup"})," to know which script needs to be run when the whole system is being set up for the first time. If you are a developer of a new app, ignore this."]})]}),"\n",(0,t.jsxs)(r.p,{children:["This is the content of ",(0,t.jsx)(r.code,{children:"core:profile-registration_v1"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="core:profile-registration_v1"',children:'{\r\n    "type": "object",\r\n    "properties": {\r\n        "metadata": {\r\n            "type": "object",\r\n            "properties": {\r\n                "createdDate": { "type": "string", "format": "date-time" },\r\n                "profile": { "type": "string" },\r\n                "source": { "type": "string" },\r\n                "acceptedDate": { "type": "string", "format": "date-time" }\r\n            },\r\n            "required": [\r\n                "createdDate",\r\n                "profile",\r\n                "source",\r\n                "acceptedDate"\r\n            ]\r\n        },\r\n        "payload": { \r\n            "type": "object",\r\n            "properties": {\r\n                "profile_name": { "type": "string" },\r\n                "json_schema": { "type": "object" }\r\n            },\r\n            "required": ["profile_name", "json_schema"]\r\n        }\r\n    },\r\n    "required": ["metadata", "payload"]\r\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["To create a new profile, a request to ",(0,t.jsx)(r.strong,{children:"/app/api/registerNewProfile"})," ",(0,t.jsx)(r.em,{children:"(POST)"})," endpoint needs to be made."]}),"\n",(0,t.jsx)(r.p,{children:"This is what the body of the request needs to look like:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="body of /app/api/registerNewProfile request"',children:'{\r\n    "jwtTokenForPermissionRequestsAndProfiles": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjY1ZmFlMDk0N2E5MGI0YTUyNjNhNDk4MCIsIm5hbWVEZWZpbmVkQnlVc2VyIjoiTXkgTmV3IEFwcGxpY2F0aW9uIiwibmFtZURlZmluZWRCeUFwcCI6ImFwcGxpY2F0aW9uLmNvbSIsImlhdCI6MTcxMDk0MDcxMywiZXhwIjoxMTE3ODIyMDcxM30.3zHTC0_igQKfzjF8uZadJLkmd4qRXY_hePd_M6pmPj0",\r\n    "metadata": {\r\n        "createdDate": "2024-02-08T21:56:18.277Z",\r\n        "profile": "core:profile-registration_v1"\r\n    },\r\n    "payload": {\r\n        "profile_name": "application.com/first_profile",\r\n        "json_schema": {\r\n            "type": "object",\r\n            "properties": {\r\n                "latitude": {\r\n                    "type": "number",\r\n                    "minimum": -90,\r\n                    "maximum": 90\r\n                },\r\n                "longitude": {\r\n                    "type": "number",\r\n                    "minimum": -180,\r\n                    "maximum": 180\r\n                }\r\n            },\r\n            "required": [\r\n                "latitude",\r\n                "longitude"\r\n            ],\r\n            "additionalProperties": false\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"There are multiple kinds of resposnes based on the outcome:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"request is successfull - profile created"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="201 (created) response"',children:'{\r\n    "message": "Profile registered successfully"\r\n}\n'})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"profile with a given name already exists but the content of json schema is the same (hash is computed internally and matched against existing profile)"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="201 (created) response (profile name uniquness broken but pardoned due to the json schema being same)"',children:'{\r\n    "message": "Profile registered successfully",\r\n    "code": "ALREADY_EXISING_WITH_SAME_SCHEMA"\r\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["As you can see, additional ",(0,t.jsx)(r.code,{children:"code"})," has been returned but this can be ignored."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"profile with a given name already exists and json schemas differ from each other (this cannot be resolved and manual intervention is needed)"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="different json schema with the same name as above"',children:'{\r\n    "jwtTokenForPermissionRequestsAndProfiles": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjY1ZmFlMDk0N2E5MGI0YTUyNjNhNDk4MCIsIm5hbWVEZWZpbmVkQnlVc2VyIjoiTXkgTmV3IEFwcGxpY2F0aW9uIiwibmFtZURlZmluZWRCeUFwcCI6ImFwcGxpY2F0aW9uLmNvbSIsImlhdCI6MTcxMDk0MDcxMywiZXhwIjoxMTE3ODIyMDcxM30.3zHTC0_igQKfzjF8uZadJLkmd4qRXY_hePd_M6pmPj0",\r\n    "metadata": {\r\n        "createdDate": "2024-02-08T21:56:18.277Z",\r\n        "profile": "core:profile-registration_v1"\r\n    },\r\n    "payload": {\r\n        "profile_name": "application.com/first_profile",\r\n        "json_schema": {\r\n            "type": "object",\r\n            "properties": {\r\n                "differentKey": {\r\n                    "type": "object"\r\n                }\r\n            },\r\n            "required": [\r\n                "differentKey"\r\n            ],\r\n            "additionalProperties": false\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="400 (bad request)"',children:'{\r\n    "message": "Profile name must be unique"\r\n}\n'})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"something missing in the request"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"For instance this request lacks jwt token:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="bad request example"',children:'{\r\n    "metadata": {\r\n        "createdDate": "2024-02-08T21:56:18.277Z",\r\n        "profile": "core:profile-registration_v1"\r\n    },\r\n    "payload": {\r\n        "profile_name": "application.com/first_profile",\r\n        "json_schema": {\r\n            "type": "object",\r\n            "properties": {\r\n                "latitude": {\r\n                    "type": "number",\r\n                    "minimum": -90,\r\n                    "maximum": 90\r\n                },\r\n                "longitude": {\r\n                    "type": "number",\r\n                    "minimum": -180,\r\n                    "maximum": 180\r\n                }\r\n            },\r\n            "required": [\r\n                "latitude",\r\n                "longitude"\r\n            ],\r\n            "additionalProperties": false\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="400 (bad request)"',children:'{\r\n    "message": "Missing required fields"\r\n}\n'})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"invalid jwt token"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="400 (bad request)"',children:'{\r\n    "message": "Invalid or expired JWT token"\r\n}\n'})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.admonition,{type:"caution",children:[(0,t.jsx)(r.p,{children:"You might suppose your app now has all permissions to this profile since it just created it a few moments ago but that is not the case!"}),(0,t.jsx)(r.p,{children:"Next step for your app is to request permissions for that profile as if it was a profile created by another app."})]}),"\n",(0,t.jsx)(r.p,{children:"Congratulations! Your app has now its own profile registered in the system! \ud83c\udf89\ud83c\udf89\ud83c\udf89"})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var t=n(6540);const s={},i=t.createContext(s);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);