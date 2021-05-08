(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[4737],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,b=m["".concat(s,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3400:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),i={id:"tab-actions",title:"TabActions reference",sidebar_label:"TabActions"},c={unversionedId:"tab-actions",id:"version-5.x/tab-actions",isDocsHomePage:!1,title:"TabActions reference",description:"TabActions is an object containing methods for generating actions specific to tab-based navigators. Its methods expand upon the actions available in NavigationActions.",source:"@site/versioned_docs/version-5.x/tab-actions.md",sourceDirName:".",slug:"/tab-actions",permalink:"/docs/tab-actions",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/tab-actions.md",version:"5.x",sidebar_label:"TabActions",frontMatter:{id:"tab-actions",title:"TabActions reference",sidebar_label:"TabActions"},sidebar:"version-5.x/docs",previous:{title:"DrawerActions reference",permalink:"/docs/drawer-actions"},next:{title:"Custom routers",permalink:"/docs/custom-routers"}},s=[{value:"jumpTo",id:"jumpto",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TabActions")," is an object containing methods for generating actions specific to tab-based navigators. Its methods expand upon the actions available in ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-actions"},(0,o.kt)("inlineCode",{parentName:"a"},"NavigationActions")),"."),(0,o.kt)("p",null,"The following actions are supported:"),(0,o.kt)("h3",{id:"jumpto"},"jumpTo"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"jumpTo")," action can be used to jump to an existing route in the tab navigator."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," - ",(0,o.kt)("em",{parentName:"li"},"string")," - Name of the route to jump to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params")," - ",(0,o.kt)("em",{parentName:"li"},"object")," - Screen params to merge into the destination route (found in the pushed screen through ",(0,o.kt)("inlineCode",{parentName:"li"},"route.params"),").")),(0,o.kt)("samp",{id:"tab-actions"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { TabActions } from '@react-navigation/native';\n\nconst jumpToAction = TabActions.jumpTo('Profile', { user: 'Satya' });\n\nnavigation.dispatch(jumpToAction);\n")))}u.isMDXComponent=!0}}]);