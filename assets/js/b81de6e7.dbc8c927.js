(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[8327],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),k=i,d=m["".concat(l,".").concat(k)]||m[k]||u[k]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52515:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var a=n(74034),i=n(79973),r=(n(67294),n(3905)),o={id:"stack-actions",title:"StackActions reference",sidebar_label:"StackActions"},p={unversionedId:"stack-actions",id:"version-2.x/stack-actions",isDocsHomePage:!1,title:"StackActions reference",description:"StackActions is an object containing methods for generating actions specific to stack-based navigators. Its methods expand upon the actions available in NavigationActions.",source:"@site/versioned_docs/version-2.x/stack-actions.md",sourceDirName:".",slug:"/stack-actions",permalink:"/docs/2.x/stack-actions",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/stack-actions.md",version:"2.x",sidebar_label:"StackActions",frontMatter:{id:"stack-actions",title:"StackActions reference",sidebar_label:"StackActions"},sidebar:"version-2.x-api",previous:{title:"NavigationActions reference",permalink:"/docs/2.x/navigation-actions"},next:{title:"DrawerActions reference",permalink:"/docs/2.x/drawer-actions"}},l=[{value:"reset",id:"reset",children:[]},{value:"replace",id:"replace",children:[]},{value:"push",id:"push",children:[]},{value:"pop",id:"pop",children:[]},{value:"popToTop",id:"poptotop",children:[]}],s={toc:l};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"StackActions")," is an object containing methods for generating actions specific to stack-based navigators. Its methods expand upon the actions available in ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.x/navigation-actions"},(0,r.kt)("inlineCode",{parentName:"a"},"NavigationActions")),"."),(0,r.kt)("p",null,"The following actions are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#reset"},"Reset")," - Replace current state with a new state"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#replace"},"Replace")," - Replace a route at a given key with another route"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#push"},"Push")," - Add a route on the top of the stack, and navigate forward to it"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pop"},"Pop")," - Navigate back to previous routes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#poptotop"},"PopToTop")," - Navigate to the top route of the stack, dismissing all other routes")),(0,r.kt)("h3",{id:"reset"},"reset"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"reset")," action wipes the whole navigation state and replaces it with the result of several actions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"index")," - ",(0,r.kt)("em",{parentName:"li"},"number")," - required - Index of the active route on ",(0,r.kt)("inlineCode",{parentName:"li"},"routes")," array in navigation ",(0,r.kt)("inlineCode",{parentName:"li"},"state"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"actions")," - ",(0,r.kt)("em",{parentName:"li"},"array")," - required - Array of Navigation Actions that will replace the navigation state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - ",(0,r.kt)("em",{parentName:"li"},"string or null")," - optional - If set, the navigator with the given key will reset. If null, the root navigator will reset.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { StackActions, NavigationActions } from 'react-navigation';\n\nconst resetAction = StackActions.reset({\n  index: 0,\n  actions: [NavigationActions.navigate({ routeName: 'Profile' })],\n});\nthis.props.navigation.dispatch(resetAction);\n")),(0,r.kt)("h4",{id:"how-to-use-the-index-parameter"},"How to use the ",(0,r.kt)("inlineCode",{parentName:"h4"},"index")," parameter"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," param is used to specify the current active route."),(0,r.kt)("p",null,"eg: given a basic stack navigation with two routes ",(0,r.kt)("inlineCode",{parentName:"p"},"Profile")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings"),".\nTo reset the state to a point where the active screen was ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," but have it stacked on top of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Profile")," screen, you would do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { StackActions, NavigationActions } from 'react-navigation';\n\nconst resetAction = StackActions.reset({\n  index: 1,\n  actions: [\n    NavigationActions.navigate({ routeName: 'Profile' }),\n    NavigationActions.navigate({ routeName: 'Settings' }),\n  ],\n});\nthis.props.navigation.dispatch(resetAction);\n")),(0,r.kt)("h3",{id:"replace"},"replace"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," action replaces the route at the given key with another route."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - ",(0,r.kt)("em",{parentName:"li"},"string")," - Key of the route to replace. If this is not defined, the most recent route will be replaced."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"newKey")," - ",(0,r.kt)("em",{parentName:"li"},"string")," - Key to use for the replacement route. Generated automatically if not provided."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"routeName")," - ",(0,r.kt)("em",{parentName:"li"},"string")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"routeName")," to use for replacement route."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")," - ",(0,r.kt)("em",{parentName:"li"},"object")," - Parameters to pass in to the replacement route."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"action")," - ",(0,r.kt)("em",{parentName:"li"},"object")," - Optional sub-action."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"immediate"),(0,r.kt)("em",{parentName:"li"}," - ",(0,r.kt)("em",{parentName:"em"},"boolean")," - "),"Currently has no effect, this is a placeholder for when stack navigator supports animated replace (it currently does not).")),(0,r.kt)("h3",{id:"push"},"push"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"push")," action adds a route on top of the stack and navigates forward to it. This differs from ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate")," in that ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate")," will pop back to earlier in the stack if a route of the given name is already present there. ",(0,r.kt)("inlineCode",{parentName:"p"},"push")," will always add on top, so a route can be present multiple times."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"routeName")," - ",(0,r.kt)("em",{parentName:"li"},"string")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"routeName")," to push onto the stack."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")," - ",(0,r.kt)("em",{parentName:"li"},"object")," - Screen params to merge into the destination route (found in the pushed screen through ",(0,r.kt)("inlineCode",{parentName:"li"},"this.props.navigation.state.params"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"action")," - (advanced) The sub-action to run in the child router, if the screen is a navigator.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { StackActions } from 'react-navigation';\n\nconst pushAction = StackActions.push({\n  routeName: 'Profile',\n  params: {\n    myUserId: 9,\n  },\n});\n\nthis.props.navigation.dispatch(pushAction);\n")),(0,r.kt)("h3",{id:"pop"},"pop"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pop")," action takes you back to a previous screen in the stack. The ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," param allows you to specify how many screens to pop back by."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n")," - ",(0,r.kt)("em",{parentName:"li"},"number")," - The number of screens to pop back by.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { StackActions } from 'react-navigation';\n\nconst popAction = StackActions.pop({\n  n: 1,\n});\n\nthis.props.navigation.dispatch(popAction);\n")),(0,r.kt)("h3",{id:"poptotop"},"popToTop"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"popToTop")," action takes you back to the first screen in the stack, dismissing all the others. It's functionally identical to ",(0,r.kt)("inlineCode",{parentName:"p"},"StackActions.pop({n: currentIndex})"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { StackActions } from 'react-navigation';\n\nthis.props.navigation.dispatch(StackActions.popToTop());\n")))}c.isMDXComponent=!0}}]);