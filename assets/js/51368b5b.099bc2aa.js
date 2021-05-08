(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[6422],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,f=b["".concat(l,".").concat(d)]||b[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},84048:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),o={id:"web-support",title:"React Navigation on the Web",sidebar_label:"Web support"},s={unversionedId:"web-support",id:"version-5.x/web-support",isDocsHomePage:!1,title:"React Navigation on the Web",description:"Note: Support for web is experimental and a work in progress. It has bugs, is missing many features and the API for web integration may change in minor versions. Please help us test it and open bug reports if you encounter a bug.",source:"@site/versioned_docs/version-5.x/web-support.md",sourceDirName:".",slug:"/web-support",permalink:"/docs/web-support",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/web-support.md",version:"5.x",sidebar_label:"Web support",frontMatter:{id:"web-support",title:"React Navigation on the Web",sidebar_label:"Web support"},sidebar:"version-5.x/docs",previous:{title:"Configuring links",permalink:"/docs/configuring-links"},next:{title:"Server rendering",permalink:"/docs/server-rendering"}},l=[],p={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Support for web is experimental and a work in progress. It has bugs, is missing many features and the API for web integration may change in minor versions. Please help us test it and open bug reports if you encounter a bug.")),(0,i.kt)("p",null,"React Navigation's web support currently requires using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/necolas/react-native-web"},"React Native for Web"),". This approach lets us reuse the same code on both React Native and Web."),(0,i.kt)("p",null,"Currently, the following features are available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/configuring-links"},"URL integration in browser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/link"},"Accessible links")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/server-rendering"},"Server rendering"))),(0,i.kt)("p",null,"It's important to use links as the primary way of navigation instead of navigation actions such as ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation.navigate"),". It'll ensure that your links are properly usable on web."),(0,i.kt)("p",null,"Some of the navigators are also configured differently on web or provide additional web specific features:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"/docs/drawer-navigator"},"drawer")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/bottom-tab-navigator"},"bottom tab")," navigators show hyperlinks in the drawer sidebar and tab bar respectively."),(0,i.kt)("li",{parentName:"ol"},"Swipe gestures are not available on ",(0,i.kt)("a",{parentName:"li",href:"/docs/drawer-navigator"},"drawer")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/stack-navigator"},"stack")," navigators when using on the web."),(0,i.kt)("li",{parentName:"ol"},"By default, ",(0,i.kt)("a",{parentName:"li",href:"/docs/stack-navigator"},"stack")," navigator disables page transition animations, but it can be re-enabled by specifying ",(0,i.kt)("inlineCode",{parentName:"li"},"animationEnabled: true"),".")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Unlike React Navigation 4, you don't need to install a separate package to use web integration when using React Native for Web. If you have the ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-navigation/web")," package installed, please uninstall it because it cannot be used with React Navigation 5.")))}u.isMDXComponent=!0}}]);