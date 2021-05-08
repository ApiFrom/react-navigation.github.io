(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[3621],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19356:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return l}});var a=n(74034),r=n(79973),o=(n(67294),n(3905)),i={id:"app-containers",title:"App containers",sidebar_label:"App containers"},p={unversionedId:"app-containers",id:"version-4.x/app-containers",isDocsHomePage:!1,title:"App containers",description:"We've been taking createAppContainer for granted so far, so let's explain them quickly. Containers are responsible for managing your app state and linking your top-level navigator to the app environment. On Android, the app container uses the Linking API to handle the back button. The container can also be configured to persist your navigation state. On web, you'd use different containers than React Native. As we've seen already, app container usage looks like this:",source:"@site/versioned_docs/version-4.x/app-containers.md",sourceDirName:".",slug:"/app-containers",permalink:"/docs/4.x/app-containers",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/app-containers.md",version:"4.x",sidebar_label:"App containers",frontMatter:{id:"app-containers",title:"App containers",sidebar_label:"App containers"},sidebar:"version-4.x-docs",previous:{title:"Header buttons",permalink:"/docs/4.x/header-buttons"},next:{title:"Opening a full-screen modal",permalink:"/docs/4.x/modal"}},c=[{value:"Props of <code>createAppContainer</code> on React Native",id:"props-of-createappcontainer-on-react-native",children:[{value:"<code>onNavigationStateChange(prevState, newState, action)</code>",id:"onnavigationstatechangeprevstate-newstate-action",children:[]},{value:"<code>uriPrefix</code>",id:"uriprefix",children:[]}]},{value:"Calling <code>dispatch</code> or <code>navigate</code> on a container ref",id:"calling-dispatch-or-navigate-on-a-container-ref",children:[]},{value:"On the web",id:"on-the-web",children:[]}],s={toc:c};function l(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We've been taking ",(0,o.kt)("inlineCode",{parentName:"p"},"createAppContainer")," for granted so far, so let's explain them quickly. Containers are responsible for managing your app state and linking your top-level navigator to the app environment. On Android, the app container uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"Linking")," API to handle the back button. The container can also be configured to persist your navigation state. On web, you'd use different containers than React Native. As we've seen already, app container usage looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { createAppContainer } from 'react-navigation';\nimport { createStackNavigator } from 'react-navigation-stack';\n\nconst RootStack = createStackNavigator({ /* your routes here */ });\nconst AppContainer = createAppContainer(RootStack);\n\n// Now AppContainer is the main component for React to render\nexport default AppContainer;\n")),(0,o.kt)("h2",{id:"props-of-createappcontainer-on-react-native"},"Props of ",(0,o.kt)("inlineCode",{parentName:"h2"},"createAppContainer")," on React Native"),(0,o.kt)("p",null,"There are a couple of props worth knowing about on the app container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<AppContainer\n  onNavigationStateChange={handleNavigationChange}\n  uriPrefix="/app"\n/>\n')),(0,o.kt)("h3",{id:"onnavigationstatechangeprevstate-newstate-action"},(0,o.kt)("inlineCode",{parentName:"h3"},"onNavigationStateChange(prevState, newState, action)")),(0,o.kt)("p",null,"Function that gets called every time navigation state managed by the navigator changes. It receives the previous state, the new state of the navigation and the action that issued state change. By default it prints state changes to the console."),(0,o.kt)("h3",{id:"uriprefix"},(0,o.kt)("inlineCode",{parentName:"h3"},"uriPrefix")),(0,o.kt)("p",null,"The prefix of the URIs that the app might handle. This will be used when handling a ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.x/deep-linking"},"deep link")," to extract the path passed to the router."),(0,o.kt)("h2",{id:"calling-dispatch-or-navigate-on-a-container-ref"},"Calling ",(0,o.kt)("inlineCode",{parentName:"h2"},"dispatch")," or ",(0,o.kt)("inlineCode",{parentName:"h2"},"navigate")," on a container ref"),(0,o.kt)("p",null,"In some cases you may want to perform navigation actions from the root of your app, outside of any of the screens. To do this you can use a React ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute"},(0,o.kt)("inlineCode",{parentName:"a"},"ref"))," to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," method on it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const AppContainer = createAppContainer(AppNavigator);\n\nclass App extends React.Component {\n  someEvent() {\n    // call navigate for AppNavigator here:\n    this.navigator &&\n      this.navigator.dispatch(\n        NavigationActions.navigate({ routeName: someRouteName })\n      );\n  }\n  render() {\n    return (\n      <AppContainer\n        ref={nav => {\n          this.navigator = nav;\n        }}\n      />\n    );\n  }\n}\n")),(0,o.kt)("h2",{id:"on-the-web"},"On the web"),(0,o.kt)("p",null,"To learn about how to use React Navigation the web (still very experimental), see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.x/web-support"},"web support")," guide."))}l.isMDXComponent=!0}}]);