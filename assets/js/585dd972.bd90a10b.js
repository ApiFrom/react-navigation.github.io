(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[2081],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),g=o,d=h["".concat(l,".").concat(g)]||h[g]||u[g]||i;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},66847:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=n(74034),o=n(79973),i=(n(67294),n(3905)),r={id:"navigating",title:"Moving between screens",sidebar_label:"Moving between screens"},s={unversionedId:"navigating",id:"version-3.x/navigating",isDocsHomePage:!1,title:"Moving between screens",description:'In the previous section, "Hello React Navigation", we defined a stack navigator with two routes (Home and Details), but we didn\'t learn how to let a user navigate from Home to Details (although we did learn how to change the initial route in our code, but forcing our users to clone our repository and change the route in our code in order to see another screen is arguably among the worst user experiences one could imagine).',source:"@site/versioned_docs/version-3.x/navigating.md",sourceDirName:".",slug:"/navigating",permalink:"/docs/3.x/navigating",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/navigating.md",version:"3.x",sidebar_label:"Moving between screens",frontMatter:{id:"navigating",title:"Moving between screens",sidebar_label:"Moving between screens"},sidebar:"version-3.x-docs",previous:{title:"Supported React Native versions",permalink:"/docs/3.x/supported-react-native-versions"},next:{title:"Navigation lifecycle",permalink:"/docs/3.x/navigation-lifecycle"}},l=[{value:"Navigating to a new screen",id:"navigating-to-a-new-screen",children:[]},{value:"Navigate to a route multiple times",id:"navigate-to-a-route-multiple-times",children:[]},{value:"Going back",id:"going-back",children:[]},{value:"Summary",id:"summary",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the previous section, ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.x/hello-react-navigation"},'"Hello React Navigation"'),", we defined a stack navigator with two routes (",(0,i.kt)("inlineCode",{parentName:"p"},"Home")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Details"),"), but we didn't learn how to let a user navigate from ",(0,i.kt)("inlineCode",{parentName:"p"},"Home")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Details")," (although we did learn how to change the ",(0,i.kt)("em",{parentName:"p"},"initial")," route in our code, but forcing our users to clone our repository and change the route in our code in order to see another screen is arguably among the worst user experiences one could imagine)."),(0,i.kt)("p",null,"If this was a web browser, we'd be able to write something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<a href="details.html">Go to Details</a>\n')),(0,i.kt)("p",null,"Another way to write this would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<a onClick={() => { document.location.href = "details.html"; }}>Go to Details</a>\n')),(0,i.kt)("p",null,"We'll do something similar to the latter, but rather than using a ",(0,i.kt)("inlineCode",{parentName:"p"},"document")," global we'll use the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop that is passed down to our screen components."),(0,i.kt)("h2",{id:"navigating-to-a-new-screen"},"Navigating to a new screen"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Button, View, Text } from 'react-native';\nimport { createStackNavigator, createAppContainer } from 'react-navigation';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Home Screen</Text>\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n\n// ... other code from the previous section\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/our-first-navigate-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("p",null,"Let's break this down:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"this.props.navigation"),": the ",(0,i.kt)("inlineCode",{parentName:"li"},"navigation")," prop is passed in to every ",(0,i.kt)("strong",{parentName:"li"},"screen component")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/3.x/glossary-of-terms#screen-component"},"definition"),") in stack navigator (more about this later in ",(0,i.kt)("a",{parentName:"li",href:"/docs/3.x/navigation-prop"},'"The navigation prop in depth"'),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"navigate('Details')"),": we call the ",(0,i.kt)("inlineCode",{parentName:"li"},"navigate")," function (on the ",(0,i.kt)("inlineCode",{parentName:"li"},"navigation")," prop ","\u2014"," naming is hard!) with the name of the route that we'd like to move the user to.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If we call ",(0,i.kt)("inlineCode",{parentName:"p"},"this.props.navigation.navigate")," with a route name that we haven't defined on a stack navigator, nothing will happen. Said another way, we can only navigate to routes that have been defined on our stack navigator ","\u2014"," we cannot navigate to an arbitrary component.")),(0,i.kt)("p",null,"So we now have a stack with two routes: 1) the Home route 2) the Details route. What would happen if we navigated to the Details route again, from the Details screen?"),(0,i.kt)("h2",{id:"navigate-to-a-route-multiple-times"},"Navigate to a route multiple times"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class DetailsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Details Screen</Text>\n        <Button\n          title=\"Go to Details... again\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/navigating-to-details-again-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("p",null,"If you run this code, you'll notice that when you tap \"Go to Details... again\" that it doesn't do anything! This is because we are already on the Details route. The ",(0,i.kt)("inlineCode",{parentName:"p"},"navigate"),' function roughly means "go to this screen", and if you are already on that screen then it makes sense that it would do nothing.'),(0,i.kt)("p",null,"Let's suppose that we actually ",(0,i.kt)("em",{parentName:"p"},"want")," to add another details screen. This is pretty common in cases where you pass in some unique data to each route (more on that later when we talk about ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),"!). To do this, we can change ",(0,i.kt)("inlineCode",{parentName:"p"},"navigate")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"push"),". This allows us to express the intent to add another route regardless of the existing navigation history."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<Button\n  title=\"Go to Details... again\"\n  onPress={() => this.props.navigation.push('Details')}\n/>\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/pushing-details-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("p",null,"Each time you call ",(0,i.kt)("inlineCode",{parentName:"p"},"push")," we add a new route to the navigation stack. When you call ",(0,i.kt)("inlineCode",{parentName:"p"},"navigate")," it first tries to find an existing route with that name, and only pushes a new route if there isn't yet one on the stack."),(0,i.kt)("h2",{id:"going-back"},"Going back"),(0,i.kt)("p",null,"The header provided by stack navigator will automatically include a back button when it is possible to go back from the active screen (if there is only one screen in the navigation stack, there is nothing that you can go back to, and so there is no back button)."),(0,i.kt)("p",null,"Sometimes you'll want to be able to programmatically trigger this behavior, and for that you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"this.props.navigation.goBack();"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class DetailsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Details Screen</Text>\n        <Button\n          title=\"Go to Details... again\"\n          onPress={() => this.props.navigation.push('Details')}\n        />\n        <Button\n          title=\"Go to Home\"\n          onPress={() => this.props.navigation.navigate('Home')}\n        />\n        <Button\n          title=\"Go back\"\n          onPress={() => this.props.navigation.goBack()}\n        />\n      </View>\n    );\n  }\n}\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/going-back-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"On Android, React Navigation hooks in to the hardware back button and fires the ",(0,i.kt)("inlineCode",{parentName:"p"},"goBack()")," function for you when the user presses it, so it behaves as the user would expect.")),(0,i.kt)("p",null,"Another common requirement is to be able to go back ",(0,i.kt)("em",{parentName:"p"},"multiple")," screens -- for example, if you are several screens deep in a stack and want to dismiss all of them to go back to the first screen. In this case, we know that we want to go back to ",(0,i.kt)("inlineCode",{parentName:"p"},"Home")," so we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"navigate('Home')")," (not ",(0,i.kt)("inlineCode",{parentName:"p"},"push"),"! try that out and see the difference). Another alternative would be ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation.popToTop()"),", which goes back to the first screen in the stack."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"this.props.navigation.navigate('RouteName')")," pushes a new route to the stack navigator if it's not already in the stack, otherwise it jumps to that screen."),(0,i.kt)("li",{parentName:"ul"},"We can call ",(0,i.kt)("inlineCode",{parentName:"li"},"this.props.navigation.push('RouteName')")," as many times as we like and it will continue pushing routes."),(0,i.kt)("li",{parentName:"ul"},"The header bar will automatically show a back button, but you can programmatically go back by calling ",(0,i.kt)("inlineCode",{parentName:"li"},"this.props.navigation.goBack()"),". On Android, the hardware back button just works as expected."),(0,i.kt)("li",{parentName:"ul"},"You can go back to an existing screen in the stack with ",(0,i.kt)("inlineCode",{parentName:"li"},"this.props.navigation.navigate('RouteName')"),", and you can go back to the first screen in the stack with ",(0,i.kt)("inlineCode",{parentName:"li"},"this.props.navigation.popToTop()"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"navigation")," prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://snack.expo.io/@react-navigation/going-back-v3"},"Full source of what we have built so far"),".")))}p.isMDXComponent=!0}}]);