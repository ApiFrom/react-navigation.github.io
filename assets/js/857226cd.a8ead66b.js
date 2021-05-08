(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[216],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||v[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},32898:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),i={id:"custom-navigator-overview",title:"Overview",sidebar_label:"Overview"},s={unversionedId:"custom-navigator-overview",id:"version-4.x/custom-navigator-overview",isDocsHomePage:!1,title:"Overview",description:"Navigators allow you to define your application's navigation structure. Navigators also render common elements such as headers and tab bars which you can configure.",source:"@site/versioned_docs/version-4.x/custom-navigator-overview.md",sourceDirName:".",slug:"/custom-navigator-overview",permalink:"/docs/4.x/custom-navigator-overview",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/custom-navigator-overview.md",version:"4.x",sidebar_label:"Overview",frontMatter:{id:"custom-navigator-overview",title:"Overview",sidebar_label:"Overview"},sidebar:"version-4.x-docs",previous:{title:"Scrollables",permalink:"/docs/4.x/scrollables"},next:{title:"Routers",permalink:"/docs/4.x/routers"}},c=[{value:"Built-in Navigators",id:"built-in-navigators",children:[]},{value:"Rendering screens with Navigators",id:"rendering-screens-with-navigators",children:[]}],l={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Navigators allow you to define your application's navigation structure. Navigators also render common elements such as headers and tab bars which you can configure."),(0,o.kt)("p",null,"Under the hood, navigators are plain React components."),(0,o.kt)("h2",{id:"built-in-navigators"},"Built-in Navigators"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"react-navigation")," includes some commonly needed navigators such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/4.x/stack-navigator"},"createStackNavigator")," - Renders one screen at a time and provides transitions between screens. When a new screen is opened it is placed on top of the stack."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/4.x/bottom-tab-navigator"},(0,o.kt)("inlineCode",{parentName:"a"},"createBottomTabNavigator"))," - Renders a tab bar that lets the user switch between several screens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/4.x/switch-navigator"},"createSwitchNavigator")," - Switch between one screen and another with no UI on top of it, unmount screens when they become inactive."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/4.x/drawer-navigator"},"createDrawerNavigator")," - Provides a drawer that slides in from the left of the screen.")),(0,o.kt)("h2",{id:"rendering-screens-with-navigators"},"Rendering screens with Navigators"),(0,o.kt)("p",null,"The navigators render application screens which are just React components."),(0,o.kt)("p",null,"To learn how to create screens, read about:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/4.x/navigation-prop"},"Screen ",(0,o.kt)("inlineCode",{parentName:"a"},"navigation")," prop")," to allow the screen to dispatch navigation actions, such as opening another screen"),(0,o.kt)("li",{parentName:"ul"},"Screen ",(0,o.kt)("inlineCode",{parentName:"li"},"navigationOptions")," to customize how the screen gets presented by the navigator (e.g. ",(0,o.kt)("a",{parentName:"li",href:"/docs/4.x/stack-navigator#navigationoptions-used-by-stacknavigator"},"header title"),", tab label)")))}u.isMDXComponent=!0}}]);