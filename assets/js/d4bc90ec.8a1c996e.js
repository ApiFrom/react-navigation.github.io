(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[302],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),v=s(n),f=i,d=v["".concat(l,".").concat(f)]||v[f]||p[f]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},95265:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(74034),i=n(79973),a=(n(67294),n(3905)),o={id:"alternatives",title:"Alternative libraries",sidebar_label:"Alternative libraries"},c={unversionedId:"alternatives",id:"version-1.x/alternatives",isDocsHomePage:!1,title:"Alternative libraries",description:"React Navigation isn't your only option for routing and navigation in React Native. If the pitch & anti-pitch or the API design leave you wanting to explore other options, here are a few to consider.",source:"@site/versioned_docs/version-1.x/alternatives.md",sourceDirName:".",slug:"/alternatives",permalink:"/docs/1.x/alternatives",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/alternatives.md",version:"1.x",sidebar_label:"Alternative libraries",frontMatter:{id:"alternatives",title:"Alternative libraries",sidebar_label:"Alternative libraries"},sidebar:"version-1.x/docs",previous:{title:"Pitch & anti-pitch",permalink:"/docs/1.x/pitch"},next:{title:"React Navigation contributor guide",permalink:"/docs/1.x/contributing"}},l=[],s={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"React Navigation isn't your only option for routing and navigation in React Native. If the ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.x/pitch"},"pitch & anti-pitch")," or the API design leave you wanting to explore other options, here are a few to consider."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/aksonov/react-native-router-flux"},"react-native-router-flux"),": this library is based on React Navigation but provides you with a different API to interact with it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/wix/react-native-navigation"},"react-native-navigation"),": uses the underlying native APIs on iOS and Android, this is a popular alternative to React Navigation and worth considering if you value adhering to the platform conventions exactly and do not care as much about customization.")))}u.isMDXComponent=!0}}]);