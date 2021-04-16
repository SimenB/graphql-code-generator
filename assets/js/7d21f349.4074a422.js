(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(5),r=n(10),p=(n(2),n(348)),i={id:"typescript-react-query",title:"TypeScript React-Query"},o={unversionedId:"plugins/typescript-react-query",id:"plugins/typescript-react-query",isDocsHomePage:!1,title:"TypeScript React-Query",description:"{@import ../plugins/client-note.md}",source:"@site/docs/plugins/typescript-react-query.md",slug:"/plugins/typescript-react-query",permalink:"/docs/plugins/typescript-react-query",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-react-query.md",version:"current",sidebar:"sidebar",previous:{title:"TypeScript Generic SDK",permalink:"/docs/plugins/typescript-generic-sdk"},next:{title:"TypeScript React Apollo",permalink:"/docs/plugins/typescript-react-apollo"}},c=[{value:"Usage Examples",id:"usage-examples",children:[{value:"Using default <code>fetch</code>",id:"using-default-fetch",children:[]},{value:"Using <code>fetch</code> with Codegen configuration",id:"using-fetch-with-codegen-configuration",children:[]},{value:"Using <code>graphql-request</code>",id:"using-graphql-request",children:[]},{value:"Using Custom Fetcher",id:"using-custom-fetcher",children:[]}]}],s={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("div",{parentName:"p",className:"admonition admonition-caution alert alert--warning"},Object(p.b)("div",{parentName:"div",className:"admonition-heading"},Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",{parentName:"h5",className:"admonition-icon"},Object(p.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(p.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Usage Requirements")),Object(p.b)("div",{parentName:"div",className:"admonition-content"},Object(p.b)("p",{parentName:"div"},"In order to use this GraphQL Codegen plugin, please make sure that you have GraphQL operations (",Object(p.b)("inlineCode",{parentName:"p"},"query")," / ",Object(p.b)("inlineCode",{parentName:"p"},"mutation")," / ",Object(p.b)("inlineCode",{parentName:"p"},"subscription")," and ",Object(p.b)("inlineCode",{parentName:"p"},"fragment"),") set as ",Object(p.b)("inlineCode",{parentName:"p"},"documents: ...")," in your ",Object(p.b)("inlineCode",{parentName:"p"},"codegen.yml"),"."),Object(p.b)("p",{parentName:"div"},"Without loading your GraphQL operations (query, mutation, subscription and fragment), you won't see any change in the generated output.")))),Object(p.b)("p",null,Object(p.b)("p",{parentName:"p"},"This plugin generates ",Object(p.b)("inlineCode",{parentName:"p"},"React-Query")," Hooks with TypeScript typings."),Object(p.b)("p",{parentName:"p"},"It extends the basic TypeScript plugins: ",Object(p.b)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript"),", ",Object(p.b)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript-operations")," - and thus shares a similar configuration."),Object(p.b)("h2",{parentName:"p"},"Installation"),Object(p.b)("img",{alt:"typescript-react-query plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-react-query?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(p.b)("div",{parentName:"p",className:"admonition admonition-shell"},Object(p.b)("div",{parentName:"div",className:"admonition-heading"},Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",{parentName:"h5",className:"admonition-icon"},Object(p.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},Object(p.b)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),Object(p.b)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",Object(p.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(p.b)("div",{parentName:"div",className:"admonition-content"},Object(p.b)("pre",{parentName:"div"},Object(p.b)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/typescript-react-query\n")))),Object(p.b)("h2",{parentName:"p"},"API Reference"),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"fetcher")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"object | object | string")),Object(p.b)("p",{parentName:"p"},"Customize the fetcher you wish to use in the generated file. React-Query is agnostic to the data-fetcing layer, so you should provide it, or use a custom one."),Object(p.b)("p",{parentName:"p"},"The following options are available to use:"),Object(p.b)("ul",{parentName:"p"},Object(p.b)("li",{parentName:"ul"},"'fetch' - requires you to specify endpoint and headers on each call, and uses ",Object(p.b)("inlineCode",{parentName:"li"},"fetch")," to do the actual http call."),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"{ endpoint: string, fetchParams: RequestInit }"),": hardcode your endpoint and fetch options into the generated output, using the environment ",Object(p.b)("inlineCode",{parentName:"li"},"fetch")," method. You can also use ",Object(p.b)("inlineCode",{parentName:"li"},"process.env.MY_VAR")," as endpoint or header value."),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"file#identifier")," - You can use custom fetcher method that should implement the exported ",Object(p.b)("inlineCode",{parentName:"li"},"ReactQueryFetcher")," interface. Example: ",Object(p.b)("inlineCode",{parentName:"li"},"./my-fetcher#myCustomFetcher"),"."),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"graphql-request"),": Will generate each hook with ",Object(p.b)("inlineCode",{parentName:"li"},"client")," argument, where you should pass your own ",Object(p.b)("inlineCode",{parentName:"li"},"GraphQLClient")," (created from ",Object(p.b)("inlineCode",{parentName:"li"},"graphql-request"),").")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"exposeQueryKeys")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",{parentName:"p"},"For each generate query hook adds getKey(variables: QueryVariables) function. Useful for cache updates. Example:\nconst query = useUserDetailsQuery(...);\nconst key = useUserDetailsQuery.getKey({id: theUsersId});\n// use key in a cache update after a mutation"),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"errorType")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"unknown")),Object(p.b)("p",{parentName:"p"},'Changes the default "TError" generic type.'),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"dedupeOperationSuffix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",{parentName:"p"},"Set this configuration to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you wish to make sure to remove duplicate operation name suffix."),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"omitOperationSuffix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",{parentName:"p"},"Set this configuration to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you wish to disable auto add suffix of operation name, like ",Object(p.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(p.b)("inlineCode",{parentName:"p"},"Mutation"),", ",Object(p.b)("inlineCode",{parentName:"p"},"Subscription"),", ",Object(p.b)("inlineCode",{parentName:"p"},"Fragment"),"."),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"operationResultSuffix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(p.b)("p",{parentName:"p"},"Adds a suffix to generated operation result type names"),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"documentVariablePrefix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(p.b)("p",{parentName:"p"},"Changes the GraphQL operations variables prefix."),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"documentVariableSuffix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"Document")),Object(p.b)("p",{parentName:"p"},"Changes the GraphQL operations variables suffix."),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"fragmentVariablePrefix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(p.b)("p",{parentName:"p"},"Changes the GraphQL fragments variables prefix."),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"fragmentVariableSuffix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"FragmentDoc")),Object(p.b)("p",{parentName:"p"},"Changes the GraphQL fragments variables suffix."),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"optimizeDocumentNode")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"true")),Object(p.b)("p",{parentName:"p"},"If you are using ",Object(p.b)("inlineCode",{parentName:"p"},"documentNode: documentMode | documentNodeImportFragments"),", you can set this to ",Object(p.b)("inlineCode",{parentName:"p"},"true"),' to apply document optimizations for your GraphQL document.\nThis will remove all "loc" and "description" fields from the compiled document, and will remove all empty arrays (such as ',Object(p.b)("inlineCode",{parentName:"p"},"directives"),", ",Object(p.b)("inlineCode",{parentName:"p"},"arguments")," and ",Object(p.b)("inlineCode",{parentName:"p"},"variableDefinitions"),")."),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"pureMagicComment")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",{parentName:"p"},"This config adds PURE magic comment to the static variables to enforce treeshaking for your bundler."),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"experimentalFragmentVariables")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",{parentName:"p"},"If set to true, it will enable support for parsing variables on fragments."),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"scalars")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(p.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"change-case-all#pascalCase")),Object(p.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(p.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(p.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(p.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(p.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(p.b)("p",{parentName:"p"},"Available case functions in ",Object(p.b)("inlineCode",{parentName:"p"},"change-case-all")," are ",Object(p.b)("inlineCode",{parentName:"p"},"camelCase"),", ",Object(p.b)("inlineCode",{parentName:"p"},"capitalCase"),", ",Object(p.b)("inlineCode",{parentName:"p"},"constantCase"),", ",Object(p.b)("inlineCode",{parentName:"p"},"dotCase"),", ",Object(p.b)("inlineCode",{parentName:"p"},"headerCase"),", ",Object(p.b)("inlineCode",{parentName:"p"},"noCase"),", ",Object(p.b)("inlineCode",{parentName:"p"},"paramCase"),", ",Object(p.b)("inlineCode",{parentName:"p"},"pascalCase"),", ",Object(p.b)("inlineCode",{parentName:"p"},"pathCase"),", ",Object(p.b)("inlineCode",{parentName:"p"},"sentenceCase"),", ",Object(p.b)("inlineCode",{parentName:"p"},"snakeCase"),", ",Object(p.b)("inlineCode",{parentName:"p"},"lowerCase"),", ",Object(p.b)("inlineCode",{parentName:"p"},"localeLowerCase"),", ",Object(p.b)("inlineCode",{parentName:"p"},"lowerCaseFirst"),", ",Object(p.b)("inlineCode",{parentName:"p"},"spongeCase"),", ",Object(p.b)("inlineCode",{parentName:"p"},"titleCase"),", ",Object(p.b)("inlineCode",{parentName:"p"},"upperCase"),", ",Object(p.b)("inlineCode",{parentName:"p"},"localeUpperCase")," and ",Object(p.b)("inlineCode",{parentName:"p"},"upperCaseFirst"),"\n",Object(p.b)("a",{parentName:"p",href:"https://github.com/btxtiger/change-case-all"},"See more")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(p.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesPrefix: I\n")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"typesSuffix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(p.b)("p",{parentName:"p"},"Suffixes all the generated types."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesSuffix: I\n")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  skipTypename: true\n")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",{parentName:"p"},"Automatically adds ",Object(p.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",{parentName:"pre",className:"language-yml"},"config:\n  nonOptionalTypename: true\n"))),Object(p.b)("h2",{id:"usage-examples"},"Usage Examples"),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"Note: all generated hooks are just wrappers around ",Object(p.b)("inlineCode",{parentName:"p"},"react-query")," original functions. This codegen plugin just burns the generated TypeScript types into the operation, and provides flexibility to choose your ",Object(p.b)("inlineCode",{parentName:"p"},"fetcher"),".")),Object(p.b)("h3",{id:"using-default-fetch"},"Using default ",Object(p.b)("inlineCode",{parentName:"h3"},"fetch")),Object(p.b)("p",null,"By default, this plugin will generate a ",Object(p.b)("inlineCode",{parentName:"p"},"fetcher")," based on the environment global ",Object(p.b)("inlineCode",{parentName:"p"},"fetch")," definition."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yml"},"schema: MY_SCHEMA_PATH\ndocuments: './src/**/*.graphql'\ngenerates:\n  ./generates.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-react-query\n    config:\n      fetcher: fetch\n")),Object(p.b)("p",null,"To use the generate hooks, import it, and then specify the endpoint and optionally ",Object(p.b)("inlineCode",{parentName:"p"},"fetchParams"),":"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-ts"},"import { useMyQuery } from './generated';\n\nexport const MyComponent = () => {\n  const { status, data, error, isFetching } = useMyQuery({\n    endpoint: 'http://localhost:3000/graphql',\n    fetchParams: {\n      headers: {\n        'My-Header': 'XYZ',\n      },\n    },\n  });\n};\n")),Object(p.b)("h3",{id:"using-fetch-with-codegen-configuration"},"Using ",Object(p.b)("inlineCode",{parentName:"h3"},"fetch")," with Codegen configuration"),Object(p.b)("p",null,"If you wish to avoid specifying ",Object(p.b)("inlineCode",{parentName:"p"},"endpoint")," and ",Object(p.b)("inlineCode",{parentName:"p"},"fetchParams")," on each hook usage, you can specify those in the ",Object(p.b)("inlineCode",{parentName:"p"},"codegen.yml")," file:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yml"},"schema: MY_SCHEMA_PATH\ndocuments: './src/**/*.graphql'\ngenerates:\n  ./generates.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-react-query\n    config:\n      fetcher:\n        endpoint: 'http://localhost:3000/graphql'\n        fetchParams:\n          headers:\n            My-Header: SomeValue\n")),Object(p.b)("p",null,"And if you wish to have more control over the value, or even provide it in runtime, you can use environment variables:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yml"},"schema: MY_SCHEMA_PATH\ndocuments: './src/**/*.graphql'\ngenerates:\n  ./generates.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-react-query\n    config:\n      fetcher:\n        endpoint: 'process.env.ENDPOINT'\n")),Object(p.b)("p",null,"You can even use a custom variable from your code, and add custom imports with ",Object(p.b)("inlineCode",{parentName:"p"},"add")," plugin:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yml"},"schema: MY_SCHEMA_PATH\ndocuments: './src/**/*.graphql'\ngenerates:\n  ./generates.ts:\n    plugins:\n      - add:\n          content: \"import { endpointUrl, fetchParams } from './my-config';\"\n      - typescript\n      - typescript-operations\n      - typescript-react-query\n    config:\n      fetcher:\n        endpoint: 'endpointUrl'\n        fetchParams: 'fetchParams'\n")),Object(p.b)("p",null,"The generated hooks doesn't require you to specify anything, you can just use it as-is:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-ts"},"import { useMyQuery } from './generated';\n\nexport const MyComponent = () => {\n  const { status, data, error, isFetching } = useMyQuery({});\n};\n")),Object(p.b)("h3",{id:"using-graphql-request"},"Using ",Object(p.b)("inlineCode",{parentName:"h3"},"graphql-request")),Object(p.b)("p",null,"If you are using ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-request"),", you can set ",Object(p.b)("inlineCode",{parentName:"p"},"fetcher")," to ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-request"),", and then the generated React Hook will expect you to pass the ",Object(p.b)("inlineCode",{parentName:"p"},"GraphQLClient")," instance (created by ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-request")," library)."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yml"},"schema: MY_SCHEMA_PATH\ndocuments: './src/**/*.graphql'\ngenerates:\n  ./generates.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-react-query\n    config:\n      fetcher: graphql-request\n")),Object(p.b)("p",null,"And the, while using, provide your ",Object(p.b)("inlineCode",{parentName:"p"},"client")," instance:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-ts"},"import { useMyQuery } from './generated';\nimport { client } from './my-graphql-request-client';\n\nexport const MyComponent = () => {\n  const { status, data, error, isFetching } = useMyQuery(client, {});\n};\n")),Object(p.b)("h3",{id:"using-custom-fetcher"},"Using Custom Fetcher"),Object(p.b)("p",null,"If you wish to create a custom fetcher, you can provide your own function as a Mapper string (",Object(p.b)("inlineCode",{parentName:"p"},"file#identifier"),"). Codegen will take care of importing it and use it as a fetcher."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yml"},"schema: MY_SCHEMA_PATH\ndocuments: './src/**/*.graphql'\ngenerates:\n  ./generates.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-react-query\n    config:\n      fetcher:\n        func: './my-file#myFetcher'\n        isReactHook: false # optional, defaults to false, controls the function's signature. Read below\n")),Object(p.b)("p",null,"As a shortcut, the ",Object(p.b)("inlineCode",{parentName:"p"},"fetcher")," property may also directly contain the function as a mapper string:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yml"},"    #...\n    config:\n      fetcher: './my-file#myFetcher' # isReactHook is false here (the default version)\n")),Object(p.b)("p",null,"Codegen will use ",Object(p.b)("inlineCode",{parentName:"p"},"myFetcher"),", and you can just use the hook directly:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-ts"},"import { useMyQuery } from './generated';\n\nexport const MyComponent = () => {\n  const { status, data, error, isFetching } = useMyQuery({});\n};\n")),Object(p.b)("p",null,"Depending on the ",Object(p.b)("inlineCode",{parentName:"p"},"isReactHook")," property, your ",Object(p.b)("inlineCode",{parentName:"p"},"myFetcher")," should be in the following signature:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"isReactHook: false"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",{parentName:"pre",className:"language-ts"},"type MyFetcher<TData, TVariables> = (operation: string, variables?: TVariables): (() => Promise<TData>)\n"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"isReactHook: true"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",{parentName:"pre",className:"language-ts"},"type MyFetcher<TData, TVariables> = (operation: string): ((variables?: TVariables) => Promise<TData>)\n")))),Object(p.b)("h4",{id:"usage-example-isreacthook-false"},"Usage example (",Object(p.b)("inlineCode",{parentName:"h4"},"isReactHook: false"),")"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-tsx"},"export const fetchData = <TData, TVariables>(query: string, variables?: TVariables): (() => Promise<TData>) => {\n  return async () => {\n    const res = await fetch('https://api.url', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        query,\n        variables,\n      }),\n    });\n\n    const json = await res.json();\n\n    if (json.errors) {\n      const { message } = json.errors[0] || 'Error..';\n      throw new Error(message);\n    }\n\n    return json.data;\n  };\n};\n")),Object(p.b)("h4",{id:"usage-example-isreacthook-true"},"Usage example (",Object(p.b)("inlineCode",{parentName:"h4"},"isReactHook: true"),")"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-tsx"},"export const useFetchData = <TData, TVariables>(query: string): (() => Promise<TData>) => {\n  // it is safe to call React Hooks here.\n  const {url, headers} = React.useContext(FetchParamsContext);\n  return async (variables?: TVariables) => {\n    const res = await fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        ...headers\n      },\n      body: JSON.stringify({\n        query,\n        variables,\n      }),\n    });\n\n    const json = await res.json();\n\n    if (json.errors) {\n      const { message } = json.errors[0] || 'Error..';\n      throw new Error(message);\n    }\n\n    return json.data;\n  };\n};\n")),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"Note: The return value is an async function, with no params, that returns a ",Object(p.b)("inlineCode",{parentName:"p"},"Promise")," with the actual data.")))}b.isMDXComponent=!0},348:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(2),r=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=b(n),u=a,d=l["".concat(i,".").concat(u)]||l[u]||m[u]||p;return n?r.a.createElement(d,o(o({ref:t},s),{},{components:n})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<p;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);