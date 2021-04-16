(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(5),i=n(10),o=(n(2),n(348)),l={},r={unversionedId:"generated-config/typescript-stencil-apollo",id:"generated-config/typescript-stencil-apollo",isDocsHomePage:!1,title:"typescript-stencil-apollo",description:"This plugin generates Stencil Apollo functional components typings",source:"@site/docs/generated-config/typescript-stencil-apollo.md",slug:"/generated-config/typescript-stencil-apollo",permalink:"/docs/generated-config/typescript-stencil-apollo",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-stencil-apollo.md",version:"current"},p=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>componentType</code>",id:"componenttype",children:[]},{value:"<code>noGraphQLTag</code>",id:"nographqltag",children:[]},{value:"<code>gqlImport</code>",id:"gqlimport",children:[]},{value:"<code>documentNodeImport</code>",id:"documentnodeimport",children:[]},{value:"<code>noExport</code>",id:"noexport",children:[]},{value:"<code>dedupeOperationSuffix</code>",id:"dedupeoperationsuffix",children:[]},{value:"<code>omitOperationSuffix</code>",id:"omitoperationsuffix",children:[]},{value:"<code>operationResultSuffix</code>",id:"operationresultsuffix",children:[]},{value:"<code>documentVariablePrefix</code>",id:"documentvariableprefix",children:[]},{value:"<code>documentVariableSuffix</code>",id:"documentvariablesuffix",children:[]},{value:"<code>fragmentVariablePrefix</code>",id:"fragmentvariableprefix",children:[]},{value:"<code>fragmentVariableSuffix</code>",id:"fragmentvariablesuffix",children:[]},{value:"<code>documentMode</code>",id:"documentmode",children:[]},{value:"<code>optimizeDocumentNode</code>",id:"optimizedocumentnode",children:[]},{value:"<code>importOperationTypesFrom</code>",id:"importoperationtypesfrom",children:[]},{value:"<code>importDocumentNodeExternallyFrom</code>",id:"importdocumentnodeexternallyfrom",children:[]},{value:"<code>pureMagicComment</code>",id:"puremagiccomment",children:[]},{value:"<code>experimentalFragmentVariables</code>",id:"experimentalfragmentvariables",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>typesSuffix</code>",id:"typessuffix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]},{value:"<code>useTypeImports</code>",id:"usetypeimports",children:[]}]}],c={toc:p};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This plugin generates Stencil Apollo functional components typings"),Object(o.b)("p",null,"It extends the basic TypeScript plugins: ",Object(o.b)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript"),", ",Object(o.b)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript-operations")," - and thus shares a similar configuration."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("img",{alt:"typescript-stencil-apollo plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-stencil-apollo?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(o.b)("div",{className:"admonition admonition-shell"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(o.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",Object(o.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/typescript-stencil-apollo\n")))),Object(o.b)("h2",{id:"api-reference"},"API Reference"),Object(o.b)("h3",{id:"componenttype"},Object(o.b)("inlineCode",{parentName:"h3"},"componentType")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"StencilComponentType"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"functional")),Object(o.b)("p",null,"Customize the output of the plugin - you can choose to generate a Component class or a function component."),Object(o.b)("h3",{id:"nographqltag"},Object(o.b)("inlineCode",{parentName:"h3"},"noGraphQLTag")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Deprecated. Changes the documentMode to ",Object(o.b)("inlineCode",{parentName:"p"},"documentNode"),"."),Object(o.b)("h3",{id:"gqlimport"},Object(o.b)("inlineCode",{parentName:"h3"},"gqlImport")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-tag#gql")),Object(o.b)("p",null,"Customize from which module will ",Object(o.b)("inlineCode",{parentName:"p"},"gql")," be imported from.\nThis is useful if you want to use modules other than ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-tag"),", e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"graphql.macro"),"."),Object(o.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(o.b)("h5",{id:"graphqlmacro"},"graphql.macro"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  gqlImport: graphql.macro#gql\n")),Object(o.b)("h5",{id:"gatsby"},"Gatsby"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  gqlImport: gatsby#graphql\n")),Object(o.b)("h3",{id:"documentnodeimport"},Object(o.b)("inlineCode",{parentName:"h3"},"documentNodeImport")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"graphql#DocumentNode")),Object(o.b)("p",null,"Customize from which module will ",Object(o.b)("inlineCode",{parentName:"p"},"DocumentNode")," be imported from.\nThis is useful if you want to use modules other than ",Object(o.b)("inlineCode",{parentName:"p"},"graphql"),", e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"@graphql-typed-document-node"),"."),Object(o.b)("h3",{id:"noexport"},Object(o.b)("inlineCode",{parentName:"h3"},"noExport")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Set this configuration to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if you wish to tell codegen to generate code with no ",Object(o.b)("inlineCode",{parentName:"p"},"export")," identifier."),Object(o.b)("h3",{id:"dedupeoperationsuffix"},Object(o.b)("inlineCode",{parentName:"h3"},"dedupeOperationSuffix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Set this configuration to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if you wish to make sure to remove duplicate operation name suffix."),Object(o.b)("h3",{id:"omitoperationsuffix"},Object(o.b)("inlineCode",{parentName:"h3"},"omitOperationSuffix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Set this configuration to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if you wish to disable auto add suffix of operation name, like ",Object(o.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Mutation"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Subscription"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Fragment"),"."),Object(o.b)("h3",{id:"operationresultsuffix"},Object(o.b)("inlineCode",{parentName:"h3"},"operationResultSuffix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(o.b)("p",null,"Adds a suffix to generated operation result type names"),Object(o.b)("h3",{id:"documentvariableprefix"},Object(o.b)("inlineCode",{parentName:"h3"},"documentVariablePrefix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(o.b)("p",null,"Changes the GraphQL operations variables prefix."),Object(o.b)("h3",{id:"documentvariablesuffix"},Object(o.b)("inlineCode",{parentName:"h3"},"documentVariableSuffix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"Document")),Object(o.b)("p",null,"Changes the GraphQL operations variables suffix."),Object(o.b)("h3",{id:"fragmentvariableprefix"},Object(o.b)("inlineCode",{parentName:"h3"},"fragmentVariablePrefix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(o.b)("p",null,"Changes the GraphQL fragments variables prefix."),Object(o.b)("h3",{id:"fragmentvariablesuffix"},Object(o.b)("inlineCode",{parentName:"h3"},"fragmentVariableSuffix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"FragmentDoc")),Object(o.b)("p",null,"Changes the GraphQL fragments variables suffix."),Object(o.b)("h3",{id:"documentmode"},Object(o.b)("inlineCode",{parentName:"h3"},"documentMode")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"DocumentMode"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"graphQLTag")),Object(o.b)("p",null,"Declares how DocumentNode are created:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"graphQLTag"),": ",Object(o.b)("inlineCode",{parentName:"li"},"graphql-tag")," or other modules (check ",Object(o.b)("inlineCode",{parentName:"li"},"gqlImport"),") will be used to generate document nodes. If this is used, document nodes are generated on client side i.e. the module used to generate this will be shipped to the client"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"documentNode"),": document nodes will be generated as objects when we generate the templates."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"documentNodeImportFragments"),": Similar to documentNode except it imports external fragments instead of embedding them."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"external"),": document nodes are imported from an external file. To be used with ",Object(o.b)("inlineCode",{parentName:"li"},"importDocumentNodeExternallyFrom"))),Object(o.b)("p",null,"Note that some plugins (like ",Object(o.b)("inlineCode",{parentName:"p"},"typescript-graphql-request"),") also supports ",Object(o.b)("inlineCode",{parentName:"p"},"string")," for this parameter."),Object(o.b)("h3",{id:"optimizedocumentnode"},Object(o.b)("inlineCode",{parentName:"h3"},"optimizeDocumentNode")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"true")),Object(o.b)("p",null,"If you are using ",Object(o.b)("inlineCode",{parentName:"p"},"documentNode: documentMode | documentNodeImportFragments"),", you can set this to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),' to apply document optimizations for your GraphQL document.\nThis will remove all "loc" and "description" fields from the compiled document, and will remove all empty arrays (such as ',Object(o.b)("inlineCode",{parentName:"p"},"directives"),", ",Object(o.b)("inlineCode",{parentName:"p"},"arguments")," and ",Object(o.b)("inlineCode",{parentName:"p"},"variableDefinitions"),")."),Object(o.b)("h3",{id:"importoperationtypesfrom"},Object(o.b)("inlineCode",{parentName:"h3"},"importOperationTypesFrom")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(o.b)("p",null,"This config is used internally by presets, but you can use it manually to tell codegen to prefix all base types that it's using.\nThis is useful if you wish to generate base types from ",Object(o.b)("inlineCode",{parentName:"p"},"typescript-operations")," plugin into a different file, and import it from there."),Object(o.b)("h3",{id:"importdocumentnodeexternallyfrom"},Object(o.b)("inlineCode",{parentName:"h3"},"importDocumentNodeExternallyFrom")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(o.b)("p",null,"This config should be used if ",Object(o.b)("inlineCode",{parentName:"p"},"documentMode")," is ",Object(o.b)("inlineCode",{parentName:"p"},"external"),". This has 2 usage:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"any string: This would be the path to import document nodes from. This can be used if we want to manually create the document nodes e.g. Use ",Object(o.b)("inlineCode",{parentName:"li"},"graphql-tag")," in a separate file and export the generated document"),Object(o.b)("li",{parentName:"ul"},"'near-operation-file': This is a special mode that is intended to be used with ",Object(o.b)("inlineCode",{parentName:"li"},"near-operation-file")," preset to import document nodes from those files. If these files are ",Object(o.b)("inlineCode",{parentName:"li"},".graphql")," files, we make use of webpack loader.")),Object(o.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: path/to/document-node-file\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: near-operation-file\n")),Object(o.b)("h3",{id:"puremagiccomment"},Object(o.b)("inlineCode",{parentName:"h3"},"pureMagicComment")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"This config adds PURE magic comment to the static variables to enforce treeshaking for your bundler."),Object(o.b)("h3",{id:"experimentalfragmentvariables"},Object(o.b)("inlineCode",{parentName:"h3"},"experimentalFragmentVariables")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"If set to true, it will enable support for parsing variables on fragments."),Object(o.b)("h3",{id:"scalars"},Object(o.b)("inlineCode",{parentName:"h3"},"scalars")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(o.b)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(o.b)("h3",{id:"namingconvention"},Object(o.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"change-case-all#pascalCase")),Object(o.b)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(o.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(o.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(o.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(o.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(o.b)("p",null,"Available case functions in ",Object(o.b)("inlineCode",{parentName:"p"},"change-case-all")," are ",Object(o.b)("inlineCode",{parentName:"p"},"camelCase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"capitalCase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"constantCase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"dotCase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"headerCase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"noCase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"paramCase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"pascalCase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"pathCase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"sentenceCase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"snakeCase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"lowerCase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"localeLowerCase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"lowerCaseFirst"),", ",Object(o.b)("inlineCode",{parentName:"p"},"spongeCase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"titleCase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"upperCase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"localeUpperCase")," and ",Object(o.b)("inlineCode",{parentName:"p"},"upperCaseFirst"),"\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/btxtiger/change-case-all"},"See more")),Object(o.b)("h3",{id:"typesprefix"},Object(o.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(o.b)("p",null,"Prefixes all the generated types."),Object(o.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesPrefix: I\n")),Object(o.b)("h3",{id:"typessuffix"},Object(o.b)("inlineCode",{parentName:"h3"},"typesSuffix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(o.b)("p",null,"Suffixes all the generated types."),Object(o.b)("h4",{id:"usage-examples-3"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesSuffix: I\n")),Object(o.b)("h3",{id:"skiptypename"},Object(o.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(o.b)("h4",{id:"usage-examples-4"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  skipTypename: true\n")),Object(o.b)("h3",{id:"nonoptionaltypename"},Object(o.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Automatically adds ",Object(o.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(o.b)("h4",{id:"usage-examples-5"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  nonOptionalTypename: true\n")),Object(o.b)("h3",{id:"usetypeimports"},Object(o.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Will use ",Object(o.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(o.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'))}b.isMDXComponent=!0},348:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(2),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=b(n),s=a,u=d["".concat(l,".").concat(s)]||d[s]||m[s]||o;return n?i.a.createElement(u,r(r({ref:t},c),{},{components:n})):i.a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);