(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[2277],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,v=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(v,r(r({ref:t},p),{},{components:n})):a.createElement(v,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44343:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(74034),i=n(79973),o=(n(67294),n(3905)),r={id:"navigation-lifecycle",title:"Navigation lifecycle",sidebar_label:"Navigation lifecycle"},l={unversionedId:"navigation-lifecycle",id:"version-3.x/navigation-lifecycle",isDocsHomePage:!1,title:"Navigation lifecycle",description:"In the previous section, we worked with a stack navigator that has two screens (Home and Details) and learned how to use this.props.navigation.navigate('RouteName') to navigate between the routes.",source:"@site/versioned_docs/version-3.x/navigation-lifecycle.md",sourceDirName:".",slug:"/navigation-lifecycle",permalink:"/docs/3.x/navigation-lifecycle",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/navigation-lifecycle.md",version:"3.x",sidebar_label:"Navigation lifecycle",frontMatter:{id:"navigation-lifecycle",title:"Navigation lifecycle",sidebar_label:"Navigation lifecycle"},sidebar:"version-3.x-docs",previous:{title:"Moving between screens",permalink:"/docs/3.x/navigating"},next:{title:"Passing parameters to routes",permalink:"/docs/3.x/params"}},c=[{value:"Example scenario",id:"example-scenario",children:[]},{value:"React Navigation lifecycle events",id:"react-navigation-lifecycle-events",children:[]},{value:"Summary",id:"summary",children:[]}],s={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the previous section, we worked with a stack navigator that has two screens (",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Details"),") and learned how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.navigation.navigate('RouteName')")," to navigate between the routes."),(0,o.kt)("p",null,"An important question in this context is: what happens with ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," when we navigate away from it, or when we come back to it? How does a route find out that a user is leaving it or coming back to it?"),(0,o.kt)("p",null,"Coming to react-navigation from the web, you may assume that when user navigates from route A to route B, A will unmount (its ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillUnmount")," is called) and A will mount again when user comes back to it. While these React lifecycle methods are still valid and are used in react-navigation, their usage differs from the web. This is driven by more complex needs of mobile navigation."),(0,o.kt)("h2",{id:"example-scenario"},"Example scenario"),(0,o.kt)("p",null,"Consider a stack navigator with screens A and B. After navigating to A, its ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount")," is called. When pushing B, its ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount")," is also called, but A remains mounted on the stack and its ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillUnmount")," is therefore not called."),(0,o.kt)("p",null,"When going back from B to A, ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillUnmount")," of B is called, but ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount")," of A is not because A remained mounted the whole time."),(0,o.kt)("p",null,"Similar results can be observed (in combination) with other navigators as well. Consider a tab navigator with two tabs, where each tab is a stack navigator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const HomeStack = createStackNavigator({\n  Home: HomeScreen,\n  Details: DetailsScreen,\n});\n\nconst SettingsStack = createStackNavigator({\n  Settings: SettingsScreen,\n  Profile: ProfileScreen,\n});\n\nconst TabNavigator = createBottomTabNavigator(\n  {\n    Home: HomeStack,\n    Settings: SettingsStack,\n  }\n);\n")),(0,o.kt)("p",null,"We start on the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeScreen")," and navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"DetailsScreen"),". Then we use the tab bar to switch to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SettingsScreen")," and navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"ProfileScreen"),". After this sequence of operations is done, all 4 of the screens are mounted! If you use the tab bar to switch back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeStack"),", you'll notice you'll be presented with the ",(0,o.kt)("inlineCode",{parentName:"p"},"DetailsScreen")," - the navigation state of the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeStack")," has been preserved!"),(0,o.kt)("h2",{id:"react-navigation-lifecycle-events"},"React Navigation lifecycle events"),(0,o.kt)("p",null,'Now that we understand how React lifecycle methods work in React Navigation, let\'s answer the question we asked at the beginning: "How do we find out that a user is leaving it or coming back to it?"'),(0,o.kt)("p",null,"React Navigation emits events to screen components that subscribe to them. There are four different events that you can subscribe to: ",(0,o.kt)("inlineCode",{parentName:"p"},"willFocus"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"willBlur"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"didFocus")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"didBlur"),". Read more about them in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.x/navigation-prop#addlistener-subscribe-to-updates-to-navigation-lifecycle"},"API reference"),"."),(0,o.kt)("p",null,"Many of your use cases may be covered with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.x/with-navigation-focus"},(0,o.kt)("inlineCode",{parentName:"a"},"withNavigationFocus")," HOC")," or the ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.x/navigation-events"},(0,o.kt)("inlineCode",{parentName:"a"},"<NavigationEvents />")," component")," which are a little more straightforward to use."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"while React's lifecycle methods are still valid, React Navigation adds more lifecycle events that you can subscribe to through the ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation")," prop."),(0,o.kt)("li",{parentName:"ul"},"you may also use the ",(0,o.kt)("inlineCode",{parentName:"li"},"withNavigationFocus")," HOC or ",(0,o.kt)("inlineCode",{parentName:"li"},"<NavigationEvents />")," component to react to lifecycle changes")))}p.isMDXComponent=!0}}]);