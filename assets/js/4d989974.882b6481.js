(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[1092],{3905:function(n,t,e){"use strict";e.d(t,{Zo:function(){return u},kt:function(){return l}});var a=e(67294);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function r(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function p(n,t){if(null==n)return{};var e,a,i=function(n,t){if(null==n)return{};var e,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)e=o[a],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)e=o[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var c=a.createContext({}),s=function(n){var t=a.useContext(c),e=t;return n&&(e="function"==typeof n?n(t):r(r({},t),n)),e},u=function(n){var t=s(n.components);return a.createElement(c.Provider,{value:t},n.children)},g={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(n,t){var e=n.components,i=n.mdxType,o=n.originalType,c=n.parentName,u=p(n,["components","mdxType","originalType","parentName"]),v=s(e),l=i,h=v["".concat(c,".").concat(l)]||v[l]||g[l]||o;return e?a.createElement(h,r(r({ref:t},u),{},{components:e})):a.createElement(h,r({ref:t},u))}));function l(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var o=e.length,r=new Array(o);r[0]=v;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=n,p.mdxType="string"==typeof n?n:i,r[1]=p;for(var s=2;s<o;s++)r[s]=e[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,e)}v.displayName="MDXCreateElement"},61674:function(n,t,e){"use strict";e.r(t),e.d(t,{frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=e(74034),i=e(79973),o=(e(67294),e(3905)),r={id:"navigating-without-navigation-prop",title:"Navigating without the navigation prop",sidebar_label:"Navigating without the navigation prop"},p={unversionedId:"navigating-without-navigation-prop",id:"version-1.x/navigating-without-navigation-prop",isDocsHomePage:!1,title:"Navigating without the navigation prop",description:"Calling functions such as navigate or popToTop on the navigation prop is not the only way to navigate around your app. As an alternative, you can dispatch navigation actions on your top-level navigator, provided you aren't passing your own navigation prop as you would with a redux integration. The presented approach is useful in situations when you want to trigger a navigation action from places where you do not have access to the navigation prop, or if you're looking for an alternative to using the navigation prop.",source:"@site/versioned_docs/version-1.x/navigating-without-navigation-prop.md",sourceDirName:".",slug:"/navigating-without-navigation-prop",permalink:"/docs/1.x/navigating-without-navigation-prop",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/navigating-without-navigation-prop.md",version:"1.x",sidebar_label:"Navigating without the navigation prop",frontMatter:{id:"navigating-without-navigation-prop",title:"Navigating without the navigation prop",sidebar_label:"Navigating without the navigation prop"},sidebar:"version-1.x/docs",previous:{title:"Access the navigation prop from any component",permalink:"/docs/1.x/connecting-navigation-prop"},next:{title:"Deep linking",permalink:"/docs/1.x/deep-linking"}},c=[],s={toc:c};function u(n){var t=n.components,e=(0,i.Z)(n,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Calling functions such as ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"popToTop")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop is not the only way to navigate around your app. As an alternative, you can dispatch navigation actions on your top-level navigator, provided you aren't passing your own ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop as you would with a redux integration. The presented approach is useful in situations when you want to trigger a navigation action from places where you do not have access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop, or if you're looking for an alternative to using the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop."),(0,o.kt)("p",null,"You can get access to a navigator through a ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," and pass it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"NavigationService")," which we will later use to navigate. Use this only with the top-level (root) navigator of your app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// App.js\n\nimport NavigationService from './NavigationService';\n\nconst TopLevelNavigator = StackNavigator({ /* ... */ })\n\nclass App extends React.Component {\n  // ...\n\n  render(): {\n    return (\n      <TopLevelNavigator\n        ref={navigatorRef => {\n          NavigationService.setTopLevelNavigator(navigatorRef);\n        }}\n      />\n    );\n  }\n}\n")),(0,o.kt)("p",null,"In the next step, we define ",(0,o.kt)("inlineCode",{parentName:"p"},"NavigationService")," which is a simple module with functions that dispatch user-defined navigation actions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// NavigationService.js\n\nimport { NavigationActions } from 'react-navigation';\n\nlet _navigator;\n\nfunction setTopLevelNavigator(navigatorRef) {\n  _navigator = navigatorRef;\n}\n\nfunction navigate(routeName, params) {\n  _navigator.dispatch(\n    NavigationActions.navigate({\n      type: NavigationActions.NAVIGATE,\n      routeName,\n      params,\n    })\n  );\n}\n\n// add other navigation functions that you need and export them\n\nexport default {\n  navigate,\n  setTopLevelNavigator,\n};\n")),(0,o.kt)("p",null,"Then, in any of your javascript modules, just import the ",(0,o.kt)("inlineCode",{parentName:"p"},"NavigationService")," and call functions which you exported from it. You may use this approach outside of your React components and, in fact, it works just as well when used from within them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// any js module\nimport NavigationService from 'path-to-NavigationService.js';\n\n// ...\n\nNavigationService.navigate('ChatScreen', { userName: 'Lucy' });\n")),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"NavigationService"),", you can create your own navigation actions, or compose multiple navigation actions into one, and then easily reuse them throughout your application. When writing tests, you may mock the navigation functions, and make assertions on whether the correct functions are called, with the correct parameters."))}u.isMDXComponent=!0}}]);