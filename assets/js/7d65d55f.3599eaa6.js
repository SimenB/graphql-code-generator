(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{202:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(5),l=a(10),r=(a(2),a(348)),o={id:"schema-field",title:"`schema` field"},c={unversionedId:"getting-started/schema-field",id:"getting-started/schema-field",isDocsHomePage:!1,title:"`schema` field",description:"The schema field should point to your GraphQLSchema - there are multiple ways you can specify it and load your GraphQLSchema.",source:"@site/docs/getting-started/schema-field.md",slug:"/getting-started/schema-field",permalink:"/docs/getting-started/schema-field",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/schema-field.md",version:"current",sidebar:"sidebar",previous:{title:"codegen.yml",permalink:"/docs/getting-started/codegen-config"},next:{title:"`documents` field",permalink:"/docs/getting-started/documents-field"}},i=[{value:"How to use it?",id:"how-to-use-it",children:[{value:"Root level",id:"root-level",children:[]},{value:"Output-file level",id:"output-file-level",children:[]},{value:"Multiple schemas and client-side schema",id:"multiple-schemas-and-client-side-schema",children:[]}]},{value:"Available formats",id:"available-formats",children:[{value:"URL",id:"url",children:[]},{value:"JSON",id:"json",children:[]},{value:"Local <code>.graphql</code> files",id:"local-graphql-files",children:[]},{value:"Code Files",id:"code-files",children:[]},{value:"JavaScript export",id:"javascript-export",children:[]},{value:"String",id:"string",children:[]},{value:"GitHub",id:"github",children:[]},{value:"Git",id:"git",children:[]},{value:"Apollo Engine",id:"apollo-engine",children:[]}]},{value:"Custom Schema Loader",id:"custom-schema-loader",children:[]}],s={toc:i};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"schema")," field should point to your ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," - there are multiple ways you can specify it and load your ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLSchema"),"."),Object(r.b)("p",null,"You can specify either a ",Object(r.b)("inlineCode",{parentName:"p"},"string")," pointing to your schema, or ",Object(r.b)("inlineCode",{parentName:"p"},"string[]")," point to multiple schemas, and they will be merged."),Object(r.b)("h2",{id:"how-to-use-it"},"How to use it?"),Object(r.b)("h3",{id:"root-level"},"Root level"),Object(r.b)("p",null,"You can specify the ",Object(r.b)("inlineCode",{parentName:"p"},"schema")," field in your root level config, as follow:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema: http://localhost:3000/graphql\ngenerates:\n  ./src/types.ts:\n    plugins:\n      - typescript\n")),Object(r.b)("h3",{id:"output-file-level"},"Output-file level"),Object(r.b)("p",null,"Or, you can specify it per-output file level. This way you can"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"generates:\n  ./src/types1.ts:\n    schema: http://server1.com/graphql\n    plugins:\n      - typescript\n  ./src/types2.ts:\n    schema: http://server2.com/graphql\n    plugins:\n      - typescript\n")),Object(r.b)("h3",{id:"multiple-schemas-and-client-side-schema"},"Multiple schemas and client-side schema"),Object(r.b)("p",null,"You can also specify ",Object(r.b)("inlineCode",{parentName:"p"},"schema")," on both levels: root and output-file, and then GraphQL Code Generator will merge both schemas into one:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema: http://localhost:3000/graphql\ngenerates:\n  ./src/types.ts:\n    schema: ./schema.graphql\n    plugins:\n      - typescript\n      - typescript-operations\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"It's also useful if you have a remote schema coming from a server, and a client-side schema that available in your client-side.")),Object(r.b)("h2",{id:"available-formats"},"Available formats"),Object(r.b)("p",null,"The following can be specified as a single value, or as an array with mixed values."),Object(r.b)("h3",{id:"url"},"URL"),Object(r.b)("p",null,"You can specify a URL to load your ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," from:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema: http://localhost:3000/graphql\n")),Object(r.b)("h4",{id:"supported-configuration"},"Supported Configuration"),Object(r.b)("h5",{id:"headers"},Object(r.b)("inlineCode",{parentName:"h5"},"headers")),Object(r.b)("p",null,"You can also specify custom HTTP headers to be sent with the request:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - http://localhost:3000/graphql:\n      headers:\n        Authorization: YOUR-TOKEN-HERE\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note that spacing and indentation is very important in YAML, so please make sure it matches the examples above.")),Object(r.b)("h5",{id:"customfetch"},Object(r.b)("inlineCode",{parentName:"h5"},"customFetch")),Object(r.b)("p",null,"You can specify a custom fetch function for the HTTP request, using the module name you wish to use:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - http://localhost:3000/graphql:\n      customFetch: 'my-custom-fetch'\n")),Object(r.b)("h5",{id:"method"},Object(r.b)("inlineCode",{parentName:"h5"},"method")),Object(r.b)("p",null,"You can specify a HTTP method to use for the introspection query. default is ",Object(r.b)("inlineCode",{parentName:"p"},"POST"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - http://localhost:3000/graphql:\n      method: GET\n")),Object(r.b)("h3",{id:"json"},"JSON"),Object(r.b)("p",null,"You can point to a local ",Object(r.b)("inlineCode",{parentName:"p"},".json")," file that contains ",Object(r.b)("a",{parentName:"p",href:"https://graphql.org/learn/introspection/"},"GraphQL Introspection")," JSON."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema: schema.json\n")),Object(r.b)("h3",{id:"local-graphql-files"},"Local ",Object(r.b)("inlineCode",{parentName:"h3"},".graphql")," files"),Object(r.b)("p",null,"You can point to a single ",Object(r.b)("inlineCode",{parentName:"p"},".graphql")," file that contains AST string of your schema:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema: schema.graphql\n")),Object(r.b)("p",null,"Or, you can point to multiple files using a glob expression (codegen will merge the schema files for you):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema: 'src/**/*.graphql'\n")),Object(r.b)("p",null,"You can also specify multiple patterns:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - 'src/dir1/**/*.graphql'\n  - 'src/dir2/**/*.graphql'\n")),Object(r.b)("p",null,"And, you can specify files to exclude/ignore, using the ",Object(r.b)("inlineCode",{parentName:"p"},"!")," sign: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - './src/**/*.graphql'\n  - '!*.generated.graphql'\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"All provided glob expressions are evaluated together. The usage is similar to ",Object(r.b)("inlineCode",{parentName:"p"},".gitignore"),".")),Object(r.b)("h4",{id:"supported-configuration-1"},"Supported Configuration"),Object(r.b)("h5",{id:"skipgraphqlimport"},Object(r.b)("inlineCode",{parentName:"h5"},"skipGraphQLImport")),Object(r.b)("p",null,"By default, codegen skips ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-import")," in favor of loading all files using glob expressions."),Object(r.b)("p",null,"If you are using ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-import")," syntax in your schema definitions, you can tell codegen to use those import statements:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - 'src/dir1/**/*.graphql':\n      skipGraphQLImport: false\n")),Object(r.b)("h5",{id:"commentdescriptions"},Object(r.b)("inlineCode",{parentName:"h5"},"commentDescriptions")),Object(r.b)("p",null,"This will convert all deprecated form of Graphql comments (marked with ",Object(r.b)("inlineCode",{parentName:"p"},"#"),") into a GraphQL descriptions (marked with ",Object(r.b)("inlineCode",{parentName:"p"},'"'),") during the parsing phase."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - 'src/dir1/**/*.graphql':\n      commentDescriptions: true\n")),Object(r.b)("h5",{id:"assumevalidsdl"},Object(r.b)("inlineCode",{parentName:"h5"},"assumeValidSDL")),Object(r.b)("p",null,"Set to true to assume the SDL is valid, and skip any SDL syntax validations."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - 'src/dir1/**/*.graphql':\n      assumeValidSDL: true\n")),Object(r.b)("h3",{id:"code-files"},"Code Files"),Object(r.b)("p",null,"You can use code files and the codegen will try to extract the GraphQL schema from it, based on ",Object(r.b)("inlineCode",{parentName:"p"},"gql")," tag:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema: './src/**/*.ts'\n")),Object(r.b)("p",null,"The codegen will try to load the file as an AST and look for explicit GraphQL strings, but if it can't find those, it will try to ",Object(r.b)("inlineCode",{parentName:"p"},"require")," the file and looks for operations in the default export."),Object(r.b)("h4",{id:"supported-configuration-2"},"Supported Configuration"),Object(r.b)("h5",{id:"norequire"},Object(r.b)("inlineCode",{parentName:"h5"},"noRequire")),Object(r.b)("p",null,"You can disable the ",Object(r.b)("inlineCode",{parentName:"p"},"require")," if it causes errors for you (for example, because of different module system or missing deps):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - './src/**/*.ts':\n      noRequire: true\n")),Object(r.b)("h5",{id:"nopluck"},Object(r.b)("inlineCode",{parentName:"h5"},"noPluck")),Object(r.b)("p",null,"You can disable the AST lookup phase, and tell codegen to skip and directly try to ",Object(r.b)("inlineCode",{parentName:"p"},"require")," each file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - './src/**/*.ts':\n      noPluck: true\n")),Object(r.b)("h5",{id:"assumevalid"},Object(r.b)("inlineCode",{parentName:"h5"},"assumeValid")),Object(r.b)("p",null,"Set this to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," in order to tell codegen to skip AST validation."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - './src/**/*.ts':\n      assumeValid: true\n")),Object(r.b)("h3",{id:"javascript-export"},"JavaScript export"),Object(r.b)("p",null,"You can also specify a code file that exports your ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," object as named export ",Object(r.b)("inlineCode",{parentName:"p"},"schema")," or as default export."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema: schema.js\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const { buildSchema } = require('graphql');\n\nmodule.exports = buildSchema(/* GraphQL */ `\n  type MyType {\n    foo: String!\n  }\n\n  type Query {\n    myType: MyType!\n  }\n`);\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can also import from TypeScript files, but don't forget to specify ",Object(r.b)("a",{parentName:"p",href:"/docs/getting-started/require-field"},"require field"),".")),Object(r.b)("h3",{id:"string"},"String"),Object(r.b)("p",null,"You can specify your schema directly as an AST string in your config file. It's very useful for testing."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema: 'type MyType { foo: String }    type Query { myType: MyType }'\n")),Object(r.b)("h3",{id:"github"},"GitHub"),Object(r.b)("p",null,"You can load your schema file from a remote GitHub file, using the following syntax:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema: github:user/repo#branchName:path/to/file.graphql\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can load from a JSON file, ",Object(r.b)("inlineCode",{parentName:"p"},".graphql")," file or from a code file containing ",Object(r.b)("inlineCode",{parentName:"p"},"gql")," tag syntax.")),Object(r.b)("h3",{id:"git"},"Git"),Object(r.b)("p",null,"You can load your schema file from a Git repository, using the following syntax:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema: git:branch:path/to/file.graphql\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can load from a JSON file, ",Object(r.b)("inlineCode",{parentName:"p"},".graphql")," file or from a code file containing ",Object(r.b)("inlineCode",{parentName:"p"},"gql")," tag syntax.")),Object(r.b)("h3",{id:"apollo-engine"},"Apollo Engine"),Object(r.b)("p",null,"You can load your schema from Apollo Engine, with the following syntax:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - apollo-engine: \n      engine:\n        apiKey: APOLLO_ENGINE_KEY_ID\n      graph: GRAPH_ID\n      variant: current\n")),Object(r.b)("h2",{id:"custom-schema-loader"},"Custom Schema Loader"),Object(r.b)("p",null,"If your schema has a different or complicated way of loading, you can point to a single code file, that does that work for you."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - http://localhost:3000/graphql:\n      loader: ./my-url-loader.js\n  - schema.graphql:\n      loader: ./my-file-loader.js\n")),Object(r.b)("p",null,"Your custom loader should export a default function that returns ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," object, or an identifier called ",Object(r.b)("inlineCode",{parentName:"p"},"schema"),". For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const { buildSchema } = require('graphql');\nconst { readFileSync } = require('fs');\n\nmodule.exports = function(schemaString, config) {\n  // Your logic for loading your GraphQLSchema\n  return buildSchema(readFileSync(schemaString, { encoding: 'utf-8' }));\n};\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The second parameter passed to the loader function is a config object that includes a ",Object(r.b)("inlineCode",{parentName:"p"},"pluginContext")," property. This value is passed to any executed plugins, so it can be modified by the loader to pass any additional information to those plugins.")))}p.isMDXComponent=!0},348:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(2),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=l.a.createContext({}),p=function(e){var t=l.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||r;return a?l.a.createElement(d,c(c({ref:t},s),{},{components:a})):l.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);