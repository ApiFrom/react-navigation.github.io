(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[5590],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),f=i,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},63346:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=t(74034),i=t(79973),o=(t(67294),t(3905)),a={id:"link",title:"Link",sidebar_label:"Link"},l={unversionedId:"link",id:"version-5.x/link",isDocsHomePage:!1,title:"Link",description:"Note: This API is experimental and might change in a minor version.",source:"@site/versioned_docs/version-5.x/link.md",sourceDirName:".",slug:"/link",permalink:"/docs/link",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/link.md",version:"5.x",sidebar_label:"Link",frontMatter:{id:"link",title:"Link",sidebar_label:"Link"},sidebar:"version-5.x/docs",previous:{title:"Navigation state reference",permalink:"/docs/navigation-state"},next:{title:"Developer tools",permalink:"/docs/devtools"}},c=[],p={toc:c};function s(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: This API is experimental and might change in a minor version.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," component lets us navigate to a screen using a path instead of a screen name based on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-container#linking"},(0,o.kt)("inlineCode",{parentName:"a"},"linking")," options"),". It preserves the default behavior of anchor tags in the browser such as ",(0,o.kt)("inlineCode",{parentName:"p"},'Right click -> Open link in new tab"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+Click"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"\u2318+Click")," etc."),(0,o.kt)("p",null,"It uses a ",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," component under the hood."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Link } from '@react-navigation/native';\n\n// ...\n\nfunction Home() {\n  return <Link to=\"/profile/jane\">Go to Jane's profile</Link>;\n}\n")),(0,o.kt)("p",null,"If you want to use your own custom touchable, you can use ",(0,o.kt)("a",{parentName:"p",href:"/docs/use-link-props"},(0,o.kt)("inlineCode",{parentName:"a"},"useLinkProps"))," instead"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," component accepts the ",(0,o.kt)("a",{parentName:"p",href:"/docs/use-link-props#options"},"same props as ",(0,o.kt)("inlineCode",{parentName:"a"},"useLinkProps"))))}s.isMDXComponent=!0}}]);