"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2058],{956:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(4848),r=t(8453);const s={sidebar_position:1},o="Requirements On Source Code",a={id:"main-system/python-execution-service/requirements-on-source-code",title:"Requirements On Source Code",description:"There are multiple requirements regarding the code structure as well as the files as well.",source:"@site/docs/main-system/python-execution-service/requirements-on-source-code.md",sourceDirName:"main-system/python-execution-service",slug:"/main-system/python-execution-service/requirements-on-source-code",permalink:"/storage-system-documentation/docs/main-system/python-execution-service/requirements-on-source-code",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main-system/python-execution-service/requirements-on-source-code.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSystemSidebar",previous:{title:"Introduction",permalink:"/storage-system-documentation/docs/main-system/python-execution-service/introduction"},next:{title:"Code Registration",permalink:"/storage-system-documentation/docs/main-system/python-execution-service/code-registration"}},c={},d=[{value:"Python Files Only",id:"python-files-only",level:3},{value:"Importing of Other Files",id:"importing-of-other-files",level:3},{value:"One Main File Requirement",id:"one-main-file-requirement",level:3},{value:"Defining the Main Function in the Entry File",id:"defining-the-main-function-in-the-entry-file",level:3},{value:"Main Function must print valid JSON string as output",id:"main-function-must-print-valid-json-string-as-output",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"requirements-on-source-code",children:"Requirements On Source Code"}),"\n",(0,i.jsx)(n.p,{children:"There are multiple requirements regarding the code structure as well as the files as well."}),"\n",(0,i.jsx)(n.h3,{id:"python-files-only",children:"Python Files Only"}),"\n",(0,i.jsxs)(n.p,{children:["All files uploaded need to be valid python files with ",(0,i.jsx)(n.code,{children:".py"})," ending."]}),"\n",(0,i.jsx)(n.h3,{id:"importing-of-other-files",children:"Importing of Other Files"}),"\n",(0,i.jsx)(n.p,{children:"You can upload up to 10 python files which can import one another."}),"\n",(0,i.jsx)(n.h3,{id:"one-main-file-requirement",children:"One Main File Requirement"}),"\n",(0,i.jsxs)(n.p,{children:["As mentioned before, you can import multiple files ",(0,i.jsxs)(n.strong,{children:["but exactly one of them must be called ",(0,i.jsx)(n.code,{children:"main.py"})]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If none of the files will be called ",(0,i.jsx)(n.code,{children:"main.py"})," or more of them will be called the same, ",(0,i.jsx)(n.code,{children:"Python Execution Service"})," won't accept such source code."]}),"\n",(0,i.jsx)(n.h3,{id:"defining-the-main-function-in-the-entry-file",children:"Defining the Main Function in the Entry File"}),"\n",(0,i.jsx)(n.p,{children:"The entry point of the script should be named main.py. This file must include a main() function that serves as the entry point for executing the script. The function should be structured to accept command line arguments. It needs to ignore the first one ( this is just the name of the program ) and it needs to handle the second argument. This will be the JSON object. This object contains the custom data."}),"\n",(0,i.jsx)(n.h3,{id:"main-function-must-print-valid-json-string-as-output",children:"Main Function must print valid JSON string as output"}),"\n",(0,i.jsx)(n.p,{children:"This printed value will be taken as a return value from the executed program and therefore needs to be a valid JSON string."}),"\n",(0,i.jsx)(n.p,{children:"This is an example of a simple source code, which just returns received data ( through the second argument ) and greets the user."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="main.py"',children:'from utils import greet\r\n\r\nimport sys\r\nimport json\r\n\r\ndef main():\r\n    # check if the json object argument is passed\r\n    if len(sys.argv) != 2:\r\n        print(json.dumps({"error": "Expected one JSON string argument"}))\r\n        sys.exit(1) # indicate error\r\n\r\n    json_arg = sys.argv[1]\r\n    try:\r\n        # Parse the JSON string from the command line\r\n        data = json.loads(json_arg)\r\n    except json.JSONDecodeError as e:\r\n        print(json.dumps({"error": "Invalid JSON provided"}))\r\n        sys.exit(1)  # Exit with a non-zero status to indicate an error\r\n\r\n    print(json.dumps({"received_data": data, "greeting": greet("user")}))\r\n\r\nif __name__ == "__main__":\r\n    main()\r\n\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="utils.py"',children:'def greet(name):\r\n    return f"Hello, {name}!"\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);