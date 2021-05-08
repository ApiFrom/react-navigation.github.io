(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[2110],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||l[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41218:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var o=n(74034),a=n(79973),r=(n(67294),n(3905)),i={id:"custom-routers",title:"Custom routers",sidebar_label:"Custom routers"},s={unversionedId:"custom-routers",id:"version-3.x/custom-routers",isDocsHomePage:!1,title:"Custom routers",description:"You can make your own router by building an object with the following functions:",source:"@site/versioned_docs/version-3.x/custom-routers.md",sourceDirName:".",slug:"/custom-routers",permalink:"/docs/3.x/custom-routers",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/custom-routers.md",version:"3.x",sidebar_label:"Custom routers",frontMatter:{id:"custom-routers",title:"Custom routers",sidebar_label:"Custom routers"},sidebar:"version-3.x-docs",previous:{title:"Custom navigators",permalink:"/docs/3.x/custom-navigators"},next:{title:"Navigation views",permalink:"/docs/3.x/navigation-views"}},u=[{value:"<code>getStateForAction(action, state)</code>",id:"getstateforactionaction-state",children:[]},{value:"<code>getComponentForRouteName(routeName)</code>",id:"getcomponentforroutenameroutename",children:[]},{value:"<code>getComponentForState(state)</code>",id:"getcomponentforstatestate",children:[]},{value:"<code>getActionForPathAndParams(path, params)</code>",id:"getactionforpathandparamspath-params",children:[]},{value:"<code>getPathAndParamsForState(state)</code>",id:"getpathandparamsforstatestate",children:[]},{value:"<code>getScreenOptions(navigation, screenProps)</code>",id:"getscreenoptionsnavigation-screenprops",children:[]}],c={toc:u};function p(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can make your own router by building an object with the following functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const MyRouter = {\n  getStateForAction: (action, state) => ({}),\n  getActionForPathAndParams: (path, params) => null,\n  getPathAndParamsForState: (state) => null,\n  getComponentForState: (state) => MyScreen,\n  getComponentForRouteName: (routeName) => MyScreen,\n};\n\n// Now, you can make a navigator by putting the router on it:\nclass MyNavigator extends React.Component {\n  static router = MyRouter;\n  render() {\n    ...\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Routers manage the relationship between URIs, actions, and navigation state",src:n(5813).Z})),(0,r.kt)("h3",{id:"getstateforactionaction-state"},(0,r.kt)("inlineCode",{parentName:"h3"},"getStateForAction(action, state)")),(0,r.kt)("p",null,"Defines the navigation state in response to a given action. This function will be run when an action gets passed into ",(0,r.kt)("inlineCode",{parentName:"p"},"props.navigation.dispatch("),", or when any of the helper functions are called, like ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation.navigate("),"."),(0,r.kt)("p",null,"Typically this should return a navigation state, with the following form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n  index: 1, // identifies which route in the routes array is active\n  routes: [\n    {\n      // Each route needs a name to identify the type.\n      routeName: 'MyRouteName',\n\n      // A unique identifier for this route in the routes array:\n      key: 'myroute-123',\n      // (used to specify the re-ordering of routes)\n\n      // Routes can have any data, as long as key and routeName are correct\n      ...randomRouteData,\n    },\n    ...moreRoutes,\n  ]\n}\n")),(0,r.kt)("p",null,"If the router has handled the action externally, or wants to swallow it without changing the navigation state, this function will return ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("h3",{id:"getcomponentforroutenameroutename"},(0,r.kt)("inlineCode",{parentName:"h3"},"getComponentForRouteName(routeName)")),(0,r.kt)("p",null,"Returns the child component or navigator for the given route name."),(0,r.kt)("p",null,"Say a router ",(0,r.kt)("inlineCode",{parentName:"p"},"getStateForAction")," outputs a state like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  index: 1,\n  routes: [\n    { key: 'A', routeName: 'Foo' },\n    { key: 'B', routeName: 'Bar' },\n  ],\n}\n")),(0,r.kt)("p",null,"Based on the routeNames in the state, the router is responsible for returning valid components when calling ",(0,r.kt)("inlineCode",{parentName:"p"},"router.getComponentForRouteName('Foo')")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"router.getComponentForRouteName('Bar')"),"."),(0,r.kt)("h3",{id:"getcomponentforstatestate"},(0,r.kt)("inlineCode",{parentName:"h3"},"getComponentForState(state)")),(0,r.kt)("p",null,"Returns the active component for a deep navigation state."),(0,r.kt)("h3",{id:"getactionforpathandparamspath-params"},(0,r.kt)("inlineCode",{parentName:"h3"},"getActionForPathAndParams(path, params)")),(0,r.kt)("p",null,"Returns an optional navigation action that should be used when the user navigates to this path and provides optional query parameters."),(0,r.kt)("h3",{id:"getpathandparamsforstatestate"},(0,r.kt)("inlineCode",{parentName:"h3"},"getPathAndParamsForState(state)")),(0,r.kt)("p",null,"Returns the path and params that can be put into the URL to link the user back to the same spot in the app."),(0,r.kt)("p",null,"The path/params that are output from this should form an action when passed back into the router's ",(0,r.kt)("inlineCode",{parentName:"p"},"getActionForPathAndParams"),". That action should take you to a similar state once passed through ",(0,r.kt)("inlineCode",{parentName:"p"},"getStateForAction"),"."),(0,r.kt)("h3",{id:"getscreenoptionsnavigation-screenprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"getScreenOptions(navigation, screenProps)")),(0,r.kt)("p",null,"Used to retrieve the navigation options for a screen. Must provide the screen's current navigation prop and optionally, other props that your navigation options may need to consume."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navigation")," - This is the navigation prop that the screen will use, where the state refers to the screen's route/state. Dispatch will trigger actions in the context of that screen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"screenProps")," - Other props that your navigation options may need to consume"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navigationOptions")," - The previous set of options that are default or provided by the previous configurer")),(0,r.kt)("p",null,"Inside an example view, perhaps you need to fetch the configured title:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// First, prepare a navigation prop for your child, or re-use one if already available.\nconst screenNavigation = addNavigationHelpers({\n  // In this case we use navigation.state.index because we want the title for the active route.\n  state: navigation.state.routes[navigation.state.index],\n  dispatch: navigation.dispatch,\n});\nconst options = this.props.router.getScreenOptions(screenNavigation, {});\nconst title = options.title;\n")))}p.isMDXComponent=!0},5813:function(e,t,n){"use strict";t.Z=n.p+"assets/images/routers-concept-map-02d38b1cb8eceb18662323ecf39b042d.png"}}]);