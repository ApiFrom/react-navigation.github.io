(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[4675],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7712:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var r=t(74034),a=t(79973),i=(t(67294),t(3905)),o={id:"react-native-screens",title:"Optimize memory usage and performance",sidebar_label:"Optimize memory usage and performance"},s={unversionedId:"react-native-screens",id:"version-3.x/react-native-screens",isDocsHomePage:!1,title:"Optimize memory usage and performance",description:"Prior to react-navigation@2.14.0, all screens are essentially regular native View in each platform, which will increase memory usage and make the render tree deep in a heavy-stacked application. This is one of the reason your app is slowing down comparing to native navigation solution.",source:"@site/versioned_docs/version-3.x/react-native-screens.md",sourceDirName:".",slug:"/react-native-screens",permalink:"/docs/3.x/react-native-screens",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/react-native-screens.md",version:"3.x",sidebar_label:"Optimize memory usage and performance",frontMatter:{id:"react-native-screens",title:"Optimize memory usage and performance",sidebar_label:"Optimize memory usage and performance"},sidebar:"version-3.x-docs",previous:{title:"Common mistakes",permalink:"/docs/3.x/common-mistakes"},next:{title:"Limitations",permalink:"/docs/3.x/limitations"}},c=[{value:"Setup when you are using Expo",id:"setup-when-you-are-using-expo",children:[]},{value:"Setup in normal react-native applications",id:"setup-in-normal-react-native-applications",children:[]}],p={toc:c};function l(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Prior to ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation@2.14.0"),", all screens are essentially regular native ",(0,i.kt)("inlineCode",{parentName:"p"},"View")," in each platform, which will increase memory usage and make the render tree deep in a heavy-stacked application. This is one of the reason your app is slowing down comparing to native navigation solution."),(0,i.kt)("p",null,"With the advent of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-screens"),", the native screen optimization is brought possible to ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation")," by bringing the native navigation component (",(0,i.kt)("inlineCode",{parentName:"p"},"UIViewController")," for iOS, and ",(0,i.kt)("inlineCode",{parentName:"p"},"FragmentActivity")," for Android). By using ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-screens"),", it is possible for each native platform to optimize the memory usage for screens that are under the view stack and also simplify the native node hierarchy. You can take a look at the comparison ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/janicduplessis/status/1039979591815897088?s=21"},"here")," to see the performance gain."),(0,i.kt)("h2",{id:"setup-when-you-are-using-expo"},"Setup when you are using Expo"),(0,i.kt)("p",null,"By default expo already included ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-screens"),", all you need to do is pasting the following snippet before your navigation stacks are rendered (typically in an ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"App.js")," file):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Before rendering any navigation stack\nimport { useScreens } from 'react-native-screens';\nuseScreens();\n")),(0,i.kt)("h2",{id:"setup-in-normal-react-native-applications"},"Setup in normal react-native applications"),(0,i.kt)("p",null,"You will need to follow the installation instruction from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-screens"},"react-native-screens")," first. After that, you can import the library like mentioned above and enjoy the optimization."))}l.isMDXComponent=!0}}]);