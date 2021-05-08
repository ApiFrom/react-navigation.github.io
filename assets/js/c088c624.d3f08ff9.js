(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[4840],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55599:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=n(74034),i=n(79973),r=(n(67294),n(3905)),o={id:"state-persistence",title:"State persistence",sidebar_label:"State persistence"},s={unversionedId:"state-persistence",id:"version-3.x/state-persistence",isDocsHomePage:!1,title:"State persistence",description:"You may want to save the user's location in the app, so that they are immediately returned to the same location after the app is restarted.",source:"@site/versioned_docs/version-3.x/state-persistence.md",sourceDirName:".",slug:"/state-persistence",permalink:"/docs/3.x/state-persistence",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/state-persistence.md",version:"3.x",sidebar_label:"State persistence",frontMatter:{id:"state-persistence",title:"State persistence",sidebar_label:"State persistence"},sidebar:"version-3.x-docs",previous:{title:"Themes",permalink:"/docs/3.x/themes"},next:{title:"Redux integration",permalink:"/docs/3.x/redux-integration"}},l=[{value:"Usage",id:"usage",children:[{value:"Development Mode",id:"development-mode",children:[]},{value:"Loading View",id:"loading-view",children:[]}]},{value:"Warning: Serializable State",id:"warning-serializable-state",children:[]},{value:"Warning: Route/Router definition changes",id:"warning-routerouter-definition-changes",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You may want to save the user's location in the app, so that they are immediately returned to the same location after the app is restarted."),(0,r.kt)("p",null,"This is especially valuable during development because it allows the developer to stay on the same screen when they refresh the app."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: This feature is currently considered experimental, because of the warnings listed at the end of this page. Use with caution!")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"You can enable persistence for your top-level navigator by rendering it with ",(0,r.kt)("inlineCode",{parentName:"p"},"persistNavigationState")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"loadNavigationState")," props:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"persistNavigationState")," is an async function that receives single argument - the navigation state object. The function should persist it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loadNavigationState")," is an async function that does the inverse - it should load the persisted navigation state and return a Promise that resolves with the navigation state object. If the function rejects, React Navigation will start as if no state was provided.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const AppNavigator = createStackNavigator({...});\nconst persistenceKey = "persistenceKey"\nconst persistNavigationState = async (navState) => {\n  try {\n    await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState))\n  } catch(err) {\n    // handle the error according to your needs\n  }\n}\nconst loadNavigationState = async () => {\n  const jsonString = await AsyncStorage.getItem(persistenceKey)\n  return JSON.parse(jsonString)\n}\n\nconst App = () => <AppNavigator persistNavigationState={persistNavigationState} loadNavigationState={loadNavigationState} />;\n')),(0,r.kt)("h3",{id:"development-mode"},"Development Mode"),(0,r.kt)("p",null,"This feature is particularly useful in development mode. You can enable it selectively using the following approach:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const AppNavigator = createStackNavigator({...});\nfunction getPersistenceFunctions() {\n  return __DEV__ ? {\n    persistNavigationState: ...,\n    loadNavigationState: ...,\n  } : undefined;\n}\nconst App = () => <AppNavigator {...getPersistenceFunctions()} />;\n")),(0,r.kt)("h3",{id:"loading-view"},"Loading View"),(0,r.kt)("p",null,"Because the state is loaded asynchronously, the app must render an empty/loading view for a moment before the ",(0,r.kt)("inlineCode",{parentName:"p"},"loadNavigationState")," function returns. To customize the loading view that is rendered during this time, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"renderLoadingExperimental")," prop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<AppNavigator\n  persistNavigationState={...}\n  loadNavigationState={...}\n  renderLoadingExperimental={() => <ActivityIndicator />}\n/>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: This API may change in the future, which is why it is labeled experimental")),(0,r.kt)("h2",{id:"warning-serializable-state"},"Warning: Serializable State"),(0,r.kt)("p",null,"Each param, route, and navigation state must be fully serializable for this feature to work. Typically, you would serialize the state as a JSON string. This means that your routes and params must contain no functions, class instances, or recursive data structures."),(0,r.kt)("p",null,"If you need to modify the nav state object, you may do so in the ",(0,r.kt)("inlineCode",{parentName:"p"},"loadNavigationState")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"persistNavigationState")," functions, but note that if your ",(0,r.kt)("inlineCode",{parentName:"p"},"loadNavigationState")," provides an invalid object (an object from which the navigation state cannot be recovered), React Navigation may not be able to handle the situation gracefully."),(0,r.kt)("h2",{id:"warning-routerouter-definition-changes"},"Warning: Route/Router definition changes"),(0,r.kt)("p",null,"When your application code changes to support new routes or different routers for a given route in your navigation state, the app may break when presented with the old navigation state."),(0,r.kt)("p",null,"This may happen regularly during development as you re-configure your routes and navigator hierarchy. But it also may happen in production when you release a new version of your app!"),(0,r.kt)("p",null,"The conservative behavior is to wipe the navigation state when the app has been updated. The easiest way to do this is to refer to a different persistence key for each version that you release to users."),(0,r.kt)("p",null,"React Navigation uses React's ",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidCatch")," functionality to attempt to mitigate crashes caused by route definition changes, but this is considered experimental and may not catch all errors."))}p.isMDXComponent=!0}}]);