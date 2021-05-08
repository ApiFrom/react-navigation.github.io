(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[5831],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89601:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(74034),o=n(79973),i=(n(67294),n(3905)),a={id:"route-prop",title:"Route prop reference",sidebar_label:"Route prop"},p={unversionedId:"route-prop",id:"version-6.x/route-prop",isDocsHomePage:!1,title:"Route prop reference",description:"Each screen component in your app is provided with the route prop automatically. The prop contains various information regarding current route (place in navigation hierarchy component lives).",source:"@site/versioned_docs/version-6.x/route-prop.md",sourceDirName:".",slug:"/route-prop",permalink:"/docs/6.x/route-prop",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/route-prop.md",version:"6.x",sidebar_label:"Route prop",frontMatter:{id:"route-prop",title:"Route prop reference",sidebar_label:"Route prop"},sidebar:"version-6.x/docs",previous:{title:"Options for screens",permalink:"/docs/6.x/screen-options"},next:{title:"Navigation prop reference",permalink:"/docs/6.x/navigation-prop"}},c=[],l={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"screen")," component in your app is provided with the ",(0,i.kt)("inlineCode",{parentName:"p"},"route")," prop automatically. The prop contains various information regarding current route (place in navigation hierarchy component lives)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"route"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - Unique key of the screen. Created automatically or added while navigating to this screen."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," - Name of the screen. Defined in navigator component hierarchy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," - An optional string containing the path that opened the screen, exists when the screen was opened via a deep link."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params")," - An optional object containing params which is defined while navigating e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"navigate('Twitter', { user: 'Dan Abramov' })"),".")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function ProfileScreen({ route }) {\n  return (\n    <View>\n      <Text>This is the profile screen of the app</Text>\n      <Text>{route.name}</Text>\n    </View>\n  );\n}\n")))}u.isMDXComponent=!0}}]);