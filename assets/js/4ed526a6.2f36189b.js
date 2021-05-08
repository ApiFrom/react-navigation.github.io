(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[18],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),h=i,d=f["".concat(l,".").concat(h)]||f[h]||p[h]||r;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30284:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var a=n(74034),i=n(79973),r=(n(67294),n(3905)),o={id:"switch-navigator",title:"createSwitchNavigator",sidebar_label:"createSwitchNavigator"},c={unversionedId:"switch-navigator",id:"version-4.x/switch-navigator",isDocsHomePage:!1,title:"createSwitchNavigator",description:"The purpose of SwitchNavigator is to only ever show one screen at a time. By default, it does not handle back actions and it resets routes to their default state when you switch away.",source:"@site/versioned_docs/version-4.x/switch-navigator.md",sourceDirName:".",slug:"/switch-navigator",permalink:"/docs/4.x/switch-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/switch-navigator.md",version:"4.x",sidebar_label:"createSwitchNavigator",frontMatter:{id:"switch-navigator",title:"createSwitchNavigator",sidebar_label:"createSwitchNavigator"},sidebar:"version-4.x-docs",previous:{title:"createStackNavigator (1.x)",permalink:"/docs/4.x/stack-navigator-1.0"},next:{title:"createAnimatedSwitchNavigator",permalink:"/docs/4.x/animated-switch-navigator"}},l=[{value:"API Definition",id:"api-definition",children:[]},{value:"RouteConfigs",id:"routeconfigs",children:[]},{value:"SwitchNavigatorConfig",id:"switchnavigatorconfig",children:[]},{value:"Example",id:"example",children:[]}],s={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The purpose of SwitchNavigator is to only ever show one screen at a time. By default, it does not handle back actions and it resets routes to their default state when you switch away.\nThis is the exact behavior that we want from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.x/auth-flow"},"authentication flow"),"."),(0,r.kt)("h2",{id:"api-definition"},"API Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);\n")),(0,r.kt)("h2",{id:"routeconfigs"},"RouteConfigs"),(0,r.kt)("p",null,"The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.x/stack-navigator#routeconfigs"},"example")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"createStackNavigator"),"."),(0,r.kt)("h2",{id:"switchnavigatorconfig"},"SwitchNavigatorConfig"),(0,r.kt)("p",null,"Several options get passed to the underlying router to modify navigation logic:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initialRouteName")," - The routeName for the initial tab route when first loading."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navigationOptions")," - Navigation options for the navigator itself, to configure a parent navigator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultNavigationOptions")," - Default navigation options to use for screens"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resetOnBlur")," - Reset the state of any nested navigators when switching away from a screen. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paths")," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"backBehavior")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"initialRoute")," to return to initial route, ",(0,r.kt)("inlineCode",{parentName:"li"},"order")," to return to previous route, ",(0,r.kt)("inlineCode",{parentName:"li"},"history")," to return to last visited route, or ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"See an example of this ",(0,r.kt)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/auth-flow-v3"},"on Snack"),"."))}u.isMDXComponent=!0}}]);