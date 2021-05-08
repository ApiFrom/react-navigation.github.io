(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[6590],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23633:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=n(74034),o=n(79973),i=(n(67294),n(3905)),r={id:"modal",title:"Opening a full-screen modal",sidebar_label:"Opening a full-screen modal"},s={unversionedId:"modal",id:"version-2.x/modal",isDocsHomePage:!1,title:"Opening a full-screen modal",description:"Dictionary.com provides no satisfactory definition of modal as it relates to user interfaces, but semantic UI describes it as follows:",source:"@site/versioned_docs/version-2.x/modal.md",sourceDirName:".",slug:"/modal",permalink:"/docs/2.x/modal",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/modal.md",version:"2.x",sidebar_label:"Opening a full-screen modal",frontMatter:{id:"modal",title:"Opening a full-screen modal",sidebar_label:"Opening a full-screen modal"},sidebar:"version-2.x-docs",previous:{title:"Header buttons",permalink:"/docs/2.x/header-buttons"},next:{title:"Next steps",permalink:"/docs/2.x/next-steps"}},l=[{value:"Creating a modal stack",id:"creating-a-modal-stack",children:[]}],c={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dictionary.com provides no satisfactory definition of modal as it relates to user interfaces, but semantic UI describes it as follows:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A modal displays content that temporarily blocks interactions with the main view")),(0,i.kt)("p",null,"This sounds about right. A modal is like a popup ","\u2014"," it's not part of your primary navigation flow ","\u2014"," it usually has a different transition, a different way to dismiss it, and is intended to focus on one particular piece of content or interaction."),(0,i.kt)("p",null,"The purpose of explaining this as part of the React Navigation fundamentals is not only because this is a common use case, but also because the implementation requires knowledge of ",(0,i.kt)("em",{parentName:"p"},"nesting navigators"),", which is an important part of React Navigation."),(0,i.kt)("h2",{id:"creating-a-modal-stack"},"Creating a modal stack"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class HomeScreen extends React.Component {\n  static navigationOptions = ({ navigation }) => {\n    const params = navigation.state.params || {};\n\n    return {\n      headerLeft: (\n        <Button\n          onPress={() => navigation.navigate('MyModal')}\n          title=\"Info\"\n          color=\"#fff\"\n        />\n      ),\n      /* the rest of this config is unchanged */\n    };\n  };\n\n  /* render function, etc */\n}\n\nclass ModalScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text style={{ fontSize: 30 }}>This is a modal!</Text>\n        <Button\n          onPress={() => this.props.navigation.goBack()}\n          title=\"Dismiss\"\n        />\n      </View>\n    );\n  }\n}\n\nconst MainStack = createStackNavigator(\n  {\n    Home: {\n      screen: HomeScreen,\n    },\n    Details: {\n      screen: DetailsScreen,\n    },\n  },\n  {\n    /* Same configuration as before */\n  }\n);\n\nconst RootStack = createStackNavigator(\n  {\n    Main: {\n      screen: MainStack,\n    },\n    MyModal: {\n      screen: ModalScreen,\n    },\n  },\n  {\n    mode: 'modal',\n    headerMode: 'none',\n  }\n);\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/full-screen-modal",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("p",null,"There are some important things to notice here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As we know, the stack navigator function returns a React component (remember we render ",(0,i.kt)("inlineCode",{parentName:"p"},"<RootStack />")," in our ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," component). This same component can be used as a screen component! By doing this, we are nesting a stack navigator inside of another stack navigator. In this case, this is useful for us because we want to use a different transition style for the modal, and we want to disable the header across the entire stack. In the future this will be important because for tab navigation, for example, each tab will likely have its own stack! Intuitively, this is what you expect: when you are on tab A and switch to tab B, you would like tab A to maintain its navigation state as you continue to explore tab B. Look at this diagram to visualize the structure of navigation in this example:\n",(0,i.kt)("img",{alt:"tree diagram",src:n(21051).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mode")," configuration for stack navigator can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"card")," (default) or ",(0,i.kt)("inlineCode",{parentName:"p"},"modal"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"modal")," behavior slides the screen in from the bottom on iOS and allows the user to swipe down from the top to dismiss it. The ",(0,i.kt)("inlineCode",{parentName:"p"},"modal")," configuration has no effect on Android because full-screen modals don't have any different transition behavior on the platform.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When we call ",(0,i.kt)("inlineCode",{parentName:"p"},"navigate")," we don't have to specify anything except the route that we'd like to navigate to. There is no need to qualify which stack it belongs to (the arbitrarily named 'root' or the 'main' stack) ","\u2014"," React Navigation attempts to find the route on the closest navigator and then performs the action there. To visualize this, look again at ",(0,i.kt)("a",{target:"_blank",href:n(57169).Z},"this diagram")," and imagine the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigate")," action flowing up from ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeScreen")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"MainStack"),", we know that ",(0,i.kt)("inlineCode",{parentName:"p"},"MainStack")," can't handle the route ",(0,i.kt)("inlineCode",{parentName:"p"},"MyModal"),", so it then flows it up to ",(0,i.kt)("inlineCode",{parentName:"p"},"RootStack"),", which can handle that route and so it does."),(0,i.kt)("h2",{parentName:"li",id:"summary"},"Summary"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To change the type of transition on a stack navigator you can use the ",(0,i.kt)("inlineCode",{parentName:"li"},"mode")," configuration. When set to ",(0,i.kt)("inlineCode",{parentName:"li"},"modal"),", all screens animate-in from bottom to top rather than right to left. This applies to that entire stack navigator, so to use right to left transitions on other screens, we add another navigation stack with the default configuration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"this.props.navigation.navigate")," traverses up the navigator tree to find a navigator that can handle the ",(0,i.kt)("inlineCode",{parentName:"li"},"navigate")," action."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://snack.expo.io/@react-navigation/full-screen-modal"},"Full source of what we have built so far"))))}p.isMDXComponent=!0},57169:function(e,t,n){"use strict";t.Z=n.p+"assets/files/tree-c522585f78ec7e8aeaa7d09d3568012a.png"},21051:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tree-c522585f78ec7e8aeaa7d09d3568012a.png"}}]);