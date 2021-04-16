(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{180:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(5),r=t(10),o=(t(2),t(348)),i={},c={unversionedId:"generated-config/fragment-matcher",id:"generated-config/fragment-matcher",isDocsHomePage:!1,title:"fragment-matcher",description:"This plugin generates an introspection file but only with Interfaces and Unions, based on your GraphQLSchema.",source:"@site/docs/generated-config/fragment-matcher.md",slug:"/generated-config/fragment-matcher",permalink:"/docs/generated-config/fragment-matcher",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/fragment-matcher.md",version:"current"},l=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>module</code>",id:"module",children:[]},{value:"<code>apolloClientVersion</code>",id:"apolloclientversion",children:[]},{value:"<code>useExplicitTyping</code>",id:"useexplicittyping",children:[]},{value:"<code>federation</code>",id:"federation",children:[]}]}],p={toc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This plugin generates an introspection file but only with Interfaces and Unions, based on your GraphQLSchema."),Object(o.b)("p",null,"If you are using ",Object(o.b)("inlineCode",{parentName:"p"},"apollo-client")," and your schema contains ",Object(o.b)("inlineCode",{parentName:"p"},"interface")," or ",Object(o.b)("inlineCode",{parentName:"p"},"union")," declaration, it's recommended to use Apollo's Fragment Matcher and the result generated by the plugin."),Object(o.b)("p",null,"You can read more about it in ",Object(o.b)("inlineCode",{parentName:"p"},"apollo-client")," documentation: ",Object(o.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/data/fragments/#fragments-on-unions-and-interfaces"},"https://www.apollographql.com/docs/react/data/fragments/#fragments-on-unions-and-interfaces"),"."),Object(o.b)("p",null,"Fragment Matcher plugin accepts a TypeScript / JavaScript or a JSON file as an output ",Object(o.b)("em",{parentName:"p"},"(",Object(o.b)("inlineCode",{parentName:"em"},".ts, .tsx, .js, .jsx, .json"),")"),"."),Object(o.b)("p",null,"Both in TypeScript and JavaScript a default export is being used."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The output is based on the output you choose for the output file name.")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("img",{alt:"fragment-matcher plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/fragment-matcher?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(o.b)("div",{className:"admonition admonition-shell"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(o.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",Object(o.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/fragment-matcher\n")))),Object(o.b)("h2",{id:"api-reference"},"API Reference"),Object(o.b)("h3",{id:"module"},Object(o.b)("inlineCode",{parentName:"h3"},"module")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string (values: commonjs, es2015)"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"es2015")),Object(o.b)("p",null,"Compatible only with JSON extension, allow you to choose the export type, either ",Object(o.b)("inlineCode",{parentName:"p"},"module.exports")," or ",Object(o.b)("inlineCode",{parentName:"p"},"export default"),".  Allowed values are: ",Object(o.b)("inlineCode",{parentName:"p"},"commonjs"),",  ",Object(o.b)("inlineCode",{parentName:"p"},"es2015"),"."),Object(o.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.json:\n plugins:\n   - fragment-matcher\n config:\n   module: commonjs\n")),Object(o.b)("h3",{id:"apolloclientversion"},Object(o.b)("inlineCode",{parentName:"h3"},"apolloClientVersion")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"number (values: 2, 3)"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"3")),Object(o.b)("p",null,"Compatible only with TS/TSX/JS/JSX extensions, allow you to generate output based on your Apollo-Client version. Valid values are: ",Object(o.b)("inlineCode",{parentName:"p"},"2"),", ",Object(o.b)("inlineCode",{parentName:"p"},"3"),"."),Object(o.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - fragment-matcher\n config:\n   apolloClientVersion: 3\n")),Object(o.b)("h3",{id:"useexplicittyping"},Object(o.b)("inlineCode",{parentName:"h3"},"useExplicitTyping")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Create an explicit type based on your schema. This can help IDEs autofill your fragment matcher. This is mostly useful if you do more with your fragment matcher than just pass it to an Apollo-Client."),Object(o.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - fragment-matcher\n config:\n   useExplicitTyping: true\n")),Object(o.b)("h3",{id:"federation"},Object(o.b)("inlineCode",{parentName:"h3"},"federation")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")))}s.isMDXComponent=!0},348:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(2),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),u=a,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return t?r.a.createElement(d,c(c({ref:n},p),{},{components:t})):r.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);