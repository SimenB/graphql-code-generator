(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{236:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return d}));var i=t(5),r=t(10),a=(t(2),t(348)),o={},c={unversionedId:"generated-config/introspection",id:"generated-config/introspection",isDocsHomePage:!1,title:"introspection",description:"This plugin generates a GraphQL introspection file based on your GraphQL schema.",source:"@site/docs/generated-config/introspection.md",slug:"/generated-config/introspection",permalink:"/docs/generated-config/introspection",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/introspection.md",version:"current"},p=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>minify</code>",id:"minify",children:[]},{value:"<code>descriptions</code>",id:"descriptions",children:[]},{value:"<code>specifiedByUrl</code>",id:"specifiedbyurl",children:[]},{value:"<code>directiveIsRepeatable</code>",id:"directiveisrepeatable",children:[]},{value:"<code>schemaDescription</code>",id:"schemadescription",children:[]},{value:"<code>federation</code>",id:"federation",children:[]}]}],l={toc:p};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This plugin generates a GraphQL introspection file based on your GraphQL schema."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("img",{alt:"introspection plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/introspection?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(a.b)("div",{className:"admonition admonition-shell"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(a.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",Object(a.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/introspection\n")))),Object(a.b)("h2",{id:"api-reference"},"API Reference"),Object(a.b)("h3",{id:"minify"},Object(a.b)("inlineCode",{parentName:"h3"},"minify")),Object(a.b)("p",null,"type: ",Object(a.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(a.b)("inlineCode",{parentName:"p"},"false")),Object(a.b)("p",null,"Set to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," in order to minify the JSON output."),Object(a.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yml"},"generates:\nintrospection.json:\n  plugins:\n    - introspection\n  config:\n    minify: true\n")),Object(a.b)("h3",{id:"descriptions"},Object(a.b)("inlineCode",{parentName:"h3"},"descriptions")),Object(a.b)("p",null,"type: ",Object(a.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(a.b)("inlineCode",{parentName:"p"},"true")),Object(a.b)("p",null,"Whether to include descriptions in the introspection result."),Object(a.b)("h3",{id:"specifiedbyurl"},Object(a.b)("inlineCode",{parentName:"h3"},"specifiedByUrl")),Object(a.b)("p",null,"type: ",Object(a.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(a.b)("inlineCode",{parentName:"p"},"false")),Object(a.b)("p",null,"Whether to include ",Object(a.b)("inlineCode",{parentName:"p"},"specifiedByUrl")," in the introspection result."),Object(a.b)("h3",{id:"directiveisrepeatable"},Object(a.b)("inlineCode",{parentName:"h3"},"directiveIsRepeatable")),Object(a.b)("p",null,"type: ",Object(a.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(a.b)("inlineCode",{parentName:"p"},"true")),Object(a.b)("p",null,"Whether to include ",Object(a.b)("inlineCode",{parentName:"p"},"isRepeatable")," flag on directives."),Object(a.b)("h3",{id:"schemadescription"},Object(a.b)("inlineCode",{parentName:"h3"},"schemaDescription")),Object(a.b)("p",null,"type: ",Object(a.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(a.b)("inlineCode",{parentName:"p"},"false")),Object(a.b)("p",null,"Whether to include ",Object(a.b)("inlineCode",{parentName:"p"},"description")," field on schema."),Object(a.b)("h3",{id:"federation"},Object(a.b)("inlineCode",{parentName:"h3"},"federation")),Object(a.b)("p",null,"type: ",Object(a.b)("inlineCode",{parentName:"p"},"boolean")))}d.isMDXComponent=!0},348:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var i=t(2),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=d(t),u=i,m=b["".concat(o,".").concat(u)]||b[u]||s[u]||a;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);