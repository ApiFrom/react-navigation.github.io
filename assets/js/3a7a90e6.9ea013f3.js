(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[2190],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),v=s(r),f=i,d=v["".concat(l,".").concat(f)]||v[f]||p[f]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},66994:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=r(74034),i=r(79973),a=(r(67294),r(3905)),o={id:"alternatives",title:"Alternative libraries",sidebar_label:"Alternative libraries"},c={unversionedId:"alternatives",id:"version-5.x/alternatives",isDocsHomePage:!1,title:"Alternative libraries",description:"React Navigation isn't your only option for routing and navigation in React Native. If the pitch & anti-pitch or the API design leave you wanting to explore other options, here are a couple to consider.",source:"@site/versioned_docs/version-5.x/alternatives.md",sourceDirName:".",slug:"/alternatives",permalink:"/docs/alternatives",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/alternatives.md",version:"5.x",sidebar_label:"Alternative libraries",frontMatter:{id:"alternatives",title:"Alternative libraries",sidebar_label:"Alternative libraries"},sidebar:"version-5.x/docs",previous:{title:"Pitch & anti-pitch",permalink:"/docs/pitch"},next:{title:"Apps using React Navigation",permalink:"/docs/used-by"}},l=[],s={toc:l};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"React Navigation isn't your only option for routing and navigation in React Native. If the ",(0,a.kt)("a",{parentName:"p",href:"/docs/pitch"},"pitch & anti-pitch")," or the API design leave you wanting to explore other options, here are a couple to consider."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/aksonov/react-native-router-flux"},"react-native-router-flux"),": this library is based on React Navigation but provides you with a different API to interact with it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/wix/react-native-navigation"},"react-native-navigation"),": uses the underlying native APIs on iOS and Android, similar to ",(0,a.kt)("a",{parentName:"li",href:"/docs/native-stack-navigator"},"createNativeStackNavigator"),". This is a popular alternative to React Navigation and may be a better fit for you if you are trying to integrate React Native into an existing large native app.")))}u.isMDXComponent=!0}}]);