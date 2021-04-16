(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var i=n(5),a=n(10),r=(n(2),n(348)),o={id:"using-visitor",title:"Visitor Pattern"},s={unversionedId:"custom-codegen/using-visitor",id:"custom-codegen/using-visitor",isDocsHomePage:!1,title:"Visitor Pattern",description:'Most of the codegen\'s plugins are written with a design-pattern called Visitor. GraphQL has an internal mechanism for "visiting" a GraphQLSchema and GraphQL operations, and you can use it to transform your GraphQL definitions into a custom output.',source:"@site/docs/custom-codegen/using-visitor.md",slug:"/custom-codegen/using-visitor",permalink:"/docs/custom-codegen/using-visitor",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/custom-codegen/using-visitor.md",version:"current",sidebar:"sidebar",previous:{title:"How to extend the GraphQL Schema?",permalink:"/docs/custom-codegen/extend-schema"},next:{title:"Contributing",permalink:"/docs/custom-codegen/contributing"}},c=[{value:"Basic Visitor",id:"basic-visitor",children:[]},{value:"Codegen and Visitors",id:"codegen-and-visitors",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Most of the codegen's plugins are written with a design-pattern called ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Visitor_pattern"},"Visitor"),'. GraphQL has an internal mechanism for "visiting" a GraphQLSchema and GraphQL operations, and you can use it to transform your GraphQL definitions into a custom output.'),Object(r.b)("p",null,"With visitor pattern you can call a custom function on each AST node, and transform it into something else."),Object(r.b)("p",null,"You can use ",Object(r.b)("a",{parentName:"p",href:"https://astexplorer.net/"},"ASTExplorer")," and see how does GraphQL represents it's definitions in a JSON structure, and you can also use this to understand which function will be called each time."),Object(r.b)("p",null,"In ",Object(r.b)("a",{parentName:"p",href:"https://graphql.org/graphql-js/language/#visit"},"graphql.org")," you can find the exact API documentation we are going to use in this section."),Object(r.b)("h2",{id:"basic-visitor"},"Basic Visitor"),Object(r.b)("p",null,"In this example, we will transform a basic type definition into a list of types and fields:"),Object(r.b)("p",null,"From:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"type MyType {\n  myField: String!\n}\n\ntype MyOtherType {\n  myOtherField: Int!\n}\n")),Object(r.b)("p",null,"To"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"MyType.myField\nMyOtherType.myOtherField\n")),Object(r.b)("p",null,"To get started with a basic visitor, start by extracting the ",Object(r.b)("inlineCode",{parentName:"p"},"astNode")," of your ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLSchema"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const { printSchema, parse } = require('graphql');\n\nmodule.exports = {\n  plugin: (schema, documents, config) => {\n    const printedSchema = printSchema(schema); // Returns a string representation of the schema\n    const astNode = parse(printedSchema); // Transforms the string into ASTNode\n  },\n};\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: if you wish to have GraphQL directives when you print your schema, use ",Object(r.b)("inlineCode",{parentName:"p"},"printSchemaWithDirectives")," from ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-toolkit")," package.")),Object(r.b)("p",null,"Then, create your initial visitor, in our case, we would like to transform a ",Object(r.b)("inlineCode",{parentName:"p"},"FieldDefinition")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ObjectTypeDefinition"),", so let's create an object with a stub definitions, an use ",Object(r.b)("inlineCode",{parentName:"p"},"visit")," to run it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const { printSchema, parse, visit } = require('graphql');\n\nmodule.exports = {\n  plugin: (schema, documents, config) => {\n    const printedSchema = printSchema(schema); // Returns a string representation of the schema\n    const astNode = parse(printedSchema); // Transforms the string into ASTNode\n    const visitor = {\n      FieldDefinition: node => {\n        // This function triggered per each field\n      },\n      ObjectTypeDefinition: node => {\n        // This function triggered per each type\n      },\n    };\n\n    const result = visit(astNode, { leave: visitor });\n\n    return result.definitions.join('\\n');\n  },\n};\n")),Object(r.b)("p",null,"Now, let's implement ",Object(r.b)("inlineCode",{parentName:"p"},"ObjectTypeDefinition")," and ",Object(r.b)("inlineCode",{parentName:"p"},"FieldDefinition"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const { printSchema, parse, visit } = require('graphql');\n\nmodule.exports = {\n  plugin: (schema, documents, config) => {\n    const printedSchema = printSchema(schema); // Returns a string representation of the schema\n    const astNode = parse(printedSchema); // Transforms the string into ASTNode\n    const visitor = {\n      FieldDefinition: node => {\n        // Transform the field AST node into a string, containing only the name of the field\n        return node.name.value;\n      },\n      ObjectTypeDefinition: node => {\n        // \"node.fields\" is an array of strings, because we transformed it using \"FieldDefinition\".\n        return node.fields.map(field => `${node.name.value}.${field}`).join('\\n');\n      },\n    };\n\n    const result = visit(astNode, { leave: visitor });\n\n    return result.definitions.join('\\n');\n  },\n};\n")),Object(r.b)("h2",{id:"codegen-and-visitors"},"Codegen and Visitors"),Object(r.b)("p",null,"This repository also contains a set of utils that might help you to write plugins faster using visitor pattern."),Object(r.b)("p",null,"All those utils are part of ",Object(r.b)("inlineCode",{parentName:"p"},"@graphql-codegen/visitor-plugin-common")," package."),Object(r.b)("p",null,"It includes set of Visitor classes that you can use and extend, to implement your plugin easily:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"BaseVisitor")," is a class that contains a very basic implementation and utils for plugin configuration, and let you easily implement plugins that compatiable with ",Object(r.b)("inlineCode",{parentName:"p"},"namingConvention")," and ",Object(r.b)("inlineCode",{parentName:"p"},"scalars")," configuration. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/dotansimha/graphql-code-generator/blob/master/packages/plugins/typescript/mongodb/src/visitor.ts#L38"},"Here you can find an example for using it"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"BaseTypesVisitor")," is a class that contains implementation for converting types, interfaces, unions, enums and fields. It's the base implementation for ",Object(r.b)("a",{parentName:"p",href:"https://github.com/dotansimha/graphql-code-generator/blob/master/packages/plugins/flow/flow/src/visitor.ts#L12"},Object(r.b)("inlineCode",{parentName:"a"},"flow"))," and ",Object(r.b)("a",{parentName:"p",href:"https://github.com/dotansimha/graphql-code-generator/blob/master/packages/plugins/typescript/typescript/src/visitor.ts#L18"},Object(r.b)("inlineCode",{parentName:"a"},"typescript"))," plugins.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"BaseResolversVisitor")," is a class that contains implementation for generating a resolvers signature, it's the base implementation for ",Object(r.b)("a",{parentName:"p",href:"https://github.com/dotansimha/graphql-code-generator/blob/master/packages/plugins/flow/resolvers/src/visitor.ts#L10"},Object(r.b)("inlineCode",{parentName:"a"},"flow-resolvers"))," and ",Object(r.b)("a",{parentName:"p",href:"https://github.com/dotansimha/graphql-code-generator/blob/master/packages/plugins/typescript/resolvers/src/visitor.ts#L13"},Object(r.b)("inlineCode",{parentName:"a"},"typescript-resolvers")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"BaseDocumentsVisitor")," is class that contains implementation for transforming GraphQL operations (query/mutation/subscription/fragment) with a resursive handler for selection-sets. It's the base implementation for ",Object(r.b)("a",{parentName:"p",href:"https://github.com/dotansimha/graphql-code-generator/blob/master/packages/plugins/flow/operations/src/visitor.ts#L14"},Object(r.b)("inlineCode",{parentName:"a"},"flow-operations"))," and ",Object(r.b)("a",{parentName:"p",href:"https://github.com/dotansimha/graphql-code-generator/blob/master/packages/plugins/typescript/operations/src/visitor.ts#L15"},Object(r.b)("inlineCode",{parentName:"a"},"typescript-operations")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ClientSideBaseVisitor")," is a class that contains implementation for creating client-side code for consuming GraphQL operations, it's in use by ",Object(r.b)("inlineCode",{parentName:"p"},"typescript-apollo-angular"),", ",Object(r.b)("inlineCode",{parentName:"p"},"typescript-react-apollo"),", ",Object(r.b)("inlineCode",{parentName:"p"},"typescript-vue-apollo")," and ",Object(r.b)("inlineCode",{parentName:"p"},"typescript-apollo-stencil")," plugins."))),Object(r.b)("p",null,"You can use the above classes as base, and extend it as you wish, to create a custom plugin."))}l.isMDXComponent=!0},348:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var i=n(2),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||r;return n?a.a.createElement(d,s(s({ref:t},p),{},{components:n})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);