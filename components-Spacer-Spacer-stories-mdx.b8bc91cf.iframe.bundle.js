"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[507],{"./src/utils/theme/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>color});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const color=colorPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(colorPath,theme.colors)))},"./src/utils/theme/fontFamily.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>fontFamily});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const fontFamily=family=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(family,theme.fonts)))},"./src/utils/theme/fromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>fromTheme});const fromTheme=callback=>_ref=>{let{theme,...props}=_ref;return callback(theme,props)}},"./src/utils/theme/spacing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>spacing});var _foundations_designTokens__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/foundations/designTokens/index.ts");const{space}=_foundations_designTokens__WEBPACK_IMPORTED_MODULE_0__.W,spacing=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return args.map((level=>space[level])).join(" ")}},"./src/utils/theme/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>typography});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const typography=typographyPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(typographyPath,theme.typography)))},"./src/components/Spacer/Spacer.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Spacer_stories,shorthand:()=>shorthand,specificDirections:()=>specificDirections});__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),typography=__webpack_require__("./src/utils/theme/typography.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spacing=__webpack_require__("./src/utils/theme/spacing.ts");const Container=styled_components_browser_esm.ZP.div`
    padding: ${_ref=>{let{padding}=_ref;return(0,spacing.W)(...padding)}}; // Uses padding instead of margin to avoid margin collapse issue.

    // Will not display if there are no children
    &:empty {
        display: none;
    }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Spacer=_ref=>{let{children,vertical=0,horizontal=0,top=vertical,right=horizontal,bottom=vertical,left=horizontal,...rest}=_ref;return(0,jsx_runtime.jsx)(Container,{padding:[top,right,bottom,left],...rest,children})};Spacer.displayName="Spacer",Spacer.displayName="Spacer";try{Spacer.displayName="Spacer",Spacer.__docgenInfo={description:"",displayName:"Spacer",props:{top:{defaultValue:{value:"0"},description:"Padding space from the top using theme spacing.",name:"top",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},right:{defaultValue:{value:"0"},description:"Padding space from the right using theme spacing.",name:"right",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},bottom:{defaultValue:{value:"0"},description:"Padding space from the bottom using theme spacing.",name:"bottom",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},left:{defaultValue:{value:"0"},description:"Padding space from the left using theme spacing.",name:"left",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},vertical:{defaultValue:{value:"0"},description:"Padding space from top and bottom using theme spacing.",name:"vertical",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},horizontal:{defaultValue:{value:"0"},description:"Padding space from left and right using theme spacing.",name:"horizontal",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},children:{defaultValue:null,description:"Renders text content and / or any HTML node inside.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spacer/Spacer.tsx#Spacer"]={docgenInfo:Spacer.__docgenInfo,name:"Spacer",path:"src/components/Spacer/Spacer.tsx#Spacer"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Template=args=>{const{vertical,horizontal,top,right,bottom,left,...rest}=args;return(0,esm.kt)(Spacer,_extends({vertical,horizontal,top,right,bottom,left},rest,{mdxType:"Spacer"}),(0,esm.kt)("div",null,vertical||horizontal?[(0,esm.kt)("span",null,vertical&&`vertical: ${vertical}`),(0,esm.kt)("span",null,horizontal&&`horizontal: ${horizontal}`)]:[(0,esm.kt)("span",null,top&&`top: ${top}`),(0,esm.kt)("span",null,left&&`left: ${left}`,"   ",right&&`right: ${right}`),(0,esm.kt)("span",null,bottom&&`bottom: ${bottom}`)]))};Template.displayName="Template";name="StoryContent";var name;const layoutProps={Template};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Components/Spacer",component:Spacer,parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>{const StoryContent=styled_components_browser_esm.ZP.div`
                font-family: ${(0,fontFamily.I)("default")};
                ${(0,typography.c)("message")};
                // styled Spacer
                & > div {
                    background-color: ${(0,color.$)("yellow.400")};
                    display: inline-block;
                }
                // styled content in Spacer
                & > div > div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-color: ${(0,color.$)("background.secondary")};
                    color: ${(0,color.$)("content.secondary")};
                    width: 100px;
                    height: 100px;
                }
            `;return(0,esm.kt)(StoryContent,{mdxType:"StoryContent"},(0,esm.kt)(Story,{mdxType:"Story"}))}],mdxType:"Meta"}),(0,esm.kt)("h1",null,"Spacer"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"Meant for adding space between different components. It allows extracting margins from other components which allows making components more reusable. Also, ",(0,esm.kt)("inlineCode",{parentName:"p"},"Spacer")," allows avoiding creation of custom components that are meant just for adding some margins."),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},"Keep in mind that ",(0,esm.kt)("inlineCode",{parentName:"strong"},"Spacer")," should be used only in places where using ",(0,esm.kt)("inlineCode",{parentName:"strong"},"flex gap")," and ",(0,esm.kt)("inlineCode",{parentName:"strong"},"grid gap")," doesn't make sense.")),(0,esm.kt)("h3",null,"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,esm.kt)("h3",null,"Usage"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Spacer } from '@lokalise/louis';\n\nexport default () => <Spacer>Hello world!</Spacer>;\n")),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{of:Spacer,sort:"requiredFirst",mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"examples"},"Examples"),(0,esm.kt)("h3",null,"Specific Directions"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Specific Directions",args:{top:2,right:4,bottom:6,left:8},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",null,"Shorthand"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Shorthand",args:{vertical:2,horizontal:8},mdxType:"Story"},Template.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const specificDirections=Template.bind({});specificDirections.storyName="Specific Directions",specificDirections.args={top:2,right:4,bottom:6,left:8},specificDirections.parameters={storySource:{source:"args => {\n  const {\n    vertical,\n    horizontal,\n    top,\n    right,\n    bottom,\n    left,\n    ...rest\n  } = args;\n  return <Spacer vertical={vertical} horizontal={horizontal} top={top} right={right} bottom={bottom} left={left} {...rest}>\n            <div>\n                {vertical || horizontal ? [<span>{vertical && `vertical: ${vertical}`}</span>, <span>{horizontal && `horizontal: ${horizontal}`}</span>] : [<span>{top && `top: ${top}`}</span>, <span>\n                              {left && `left: ${left}`}\n                              &nbsp; &nbsp;\n                              {right && `right: ${right}`}\n                          </span>, <span>{bottom && `bottom: ${bottom}`}</span>]}\n            </div>\n        </Spacer>;\n}"}};const shorthand=Template.bind({});shorthand.storyName="Shorthand",shorthand.args={vertical:2,horizontal:8},shorthand.parameters={storySource:{source:"args => {\n  const {\n    vertical,\n    horizontal,\n    top,\n    right,\n    bottom,\n    left,\n    ...rest\n  } = args;\n  return <Spacer vertical={vertical} horizontal={horizontal} top={top} right={right} bottom={bottom} left={left} {...rest}>\n            <div>\n                {vertical || horizontal ? [<span>{vertical && `vertical: ${vertical}`}</span>, <span>{horizontal && `horizontal: ${horizontal}`}</span>] : [<span>{top && `top: ${top}`}</span>, <span>\n                              {left && `left: ${left}`}\n                              &nbsp; &nbsp;\n                              {right && `right: ${right}`}\n                          </span>, <span>{bottom && `bottom: ${bottom}`}</span>]}\n            </div>\n        </Spacer>;\n}"}};const componentMeta={title:"Components/Spacer",parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>{const StoryContent=styled_components_browser_esm.ZP.div`
                font-family: ${(0,fontFamily.I)("default")};
                ${(0,typography.c)("message")};
                // styled Spacer
                & > div {
                    background-color: ${(0,color.$)("yellow.400")};
                    display: inline-block;
                }
                // styled content in Spacer
                & > div > div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-color: ${(0,color.$)("background.secondary")};
                    color: ${(0,color.$)("content.secondary")};
                    width: 100px;
                    height: 100px;
                }
            `;return(0,esm.kt)(StoryContent,null,(0,esm.kt)(Story,null))}],component:Spacer,includeStories:["specificDirections","shorthand"]},mdxStoryNameToKey={"Specific Directions":"specificDirections",Shorthand:"shorthand"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Spacer_stories=componentMeta,__namedExportsOrder=["Template","specificDirections","shorthand"]}}]);
//# sourceMappingURL=components-Spacer-Spacer-stories-mdx.b8bc91cf.iframe.bundle.js.map