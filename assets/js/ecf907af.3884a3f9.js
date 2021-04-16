(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{258:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(5),a=n(10),i=(n(2),n(348)),o={},p={unversionedId:"generated-config/graphql-modules-preset",id:"generated-config/graphql-modules-preset",isDocsHomePage:!1,title:"graphql-modules-preset",description:"Installation",source:"@site/docs/generated-config/graphql-modules-preset.md",slug:"/generated-config/graphql-modules-preset",permalink:"/docs/generated-config/graphql-modules-preset",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/graphql-modules-preset.md",version:"current"},c=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>baseTypesPath</code>",id:"basetypespath",children:[]},{value:"<code>importBaseTypesFrom</code>",id:"importbasetypesfrom",children:[]},{value:"<code>cwd</code>",id:"cwd",children:[]},{value:"<code>importTypesNamespace</code>",id:"importtypesnamespace",children:[]},{value:"<code>filename</code>",id:"filename",children:[]},{value:"<code>encapsulateModuleTypes</code>",id:"encapsulatemoduletypes",children:[]}]}],l={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("img",{alt:"graphql-modules-preset plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/graphql-modules-preset?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(i.b)("div",{className:"admonition admonition-shell"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(i.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",Object(i.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/graphql-modules-preset\n")))),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)("h3",{id:"basetypespath"},Object(i.b)("inlineCode",{parentName:"h3"},"baseTypesPath")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string")),Object(i.b)("p",null,"Required, should point to the base schema types file.\nThe key of the output is used a the base path for this file."),Object(i.b)("h3",{id:"importbasetypesfrom"},Object(i.b)("inlineCode",{parentName:"h3"},"importBaseTypesFrom")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string")),Object(i.b)("p",null,"Overrides the package import for the base types. Use this if you are within a monorepo and you wish\nto import the base types directly from a different package, and not from a relative path."),Object(i.b)("h3",{id:"cwd"},Object(i.b)("inlineCode",{parentName:"h3"},"cwd")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"process.cwd()")),Object(i.b)("p",null,"Optional, override the ",Object(i.b)("inlineCode",{parentName:"p"},"cwd")," of the execution. We are using ",Object(i.b)("inlineCode",{parentName:"p"},"cwd")," to figure out the imports between files. Use this if your execuion path is not your project root directory."),Object(i.b)("h3",{id:"importtypesnamespace"},Object(i.b)("inlineCode",{parentName:"h3"},"importTypesNamespace")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"Types")),Object(i.b)("p",null,"Optional, override the name of the import namespace used to import from the ",Object(i.b)("inlineCode",{parentName:"p"},"baseTypesPath")," file."),Object(i.b)("h3",{id:"filename"},Object(i.b)("inlineCode",{parentName:"h3"},"filename")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string")),Object(i.b)("p",null,"Required, sets the file name for the generated files."),Object(i.b)("h3",{id:"encapsulatemoduletypes"},Object(i.b)("inlineCode",{parentName:"h3"},"encapsulateModuleTypes")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"namespace")),Object(i.b)("p",null,"Configure how to encapsulate the module types, to avoid confusion."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"namespace")," (default): will wrap all types in a TypeScript namespace, using the module name.\n",Object(i.b)("inlineCode",{parentName:"p"},"prefix"),": will prefix all types from a specific module with the module name.\n",Object(i.b)("inlineCode",{parentName:"p"},"none"),": will skip encapsulation, and generate type as-is."))}s.isMDXComponent=!0},348:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(2),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return n?a.a.createElement(u,p(p({ref:t},l),{},{components:n})):a.a.createElement(u,p({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);