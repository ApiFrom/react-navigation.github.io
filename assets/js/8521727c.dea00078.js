(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[504],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,g=d["".concat(c,".").concat(p)]||d[p]||f[p]||o;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25121:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var a=n(74034),r=n(79973),o=(n(67294),n(3905)),i={id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Different status bar configuration based on route"},s={unversionedId:"status-bar",id:"version-5.x/status-bar",isDocsHomePage:!1,title:"Different status bar configuration based on route",description:"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content.",source:"@site/versioned_docs/version-5.x/status-bar.md",sourceDirName:".",slug:"/status-bar",permalink:"/docs/status-bar",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/status-bar.md",version:"5.x",sidebar_label:"Different status bar configuration based on route",frontMatter:{id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Different status bar configuration based on route"},sidebar:"version-5.x/docs",previous:{title:"Hiding tab bar in specific screens",permalink:"/docs/hiding-tabbar-in-screens"},next:{title:"Screen options with nested navigators",permalink:"/docs/screen-options-resolution"}},c=[{value:"Stack",id:"stack",children:[]},{value:"Tabs and Drawer",id:"tabs-and-drawer",children:[]}],u={toc:c};function l(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content."),(0,o.kt)("h2",{id:"stack"},"Stack"),(0,o.kt)("p",null,"This is a simple task when using a stack. You can render the ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," component, which is exposed by React Native, and set your config."),(0,o.kt)("samp",{id:"status-bar"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Text, StatusBar, Button, StyleSheet } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\nimport { SafeAreaProvider } from 'react-native-safe-area-context';\nimport SafeAreaView from 'react-native-safe-area-view';\n\nfunction Screen1({ navigation }) {\n  return (\n    <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>\n      <StatusBar barStyle=\"light-content\" backgroundColor=\"#6a51ae\" />\n      <Text style={{ color: '#fff' }}>Light Screen</Text>\n      <Button\n        title=\"Next screen\"\n        onPress={() => navigation.navigate('Screen2')}\n        color=\"#fff\"\n      />\n    </SafeAreaView>\n  );\n}\n\nfunction Screen2({ navigation }) {\n  return (\n    <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>\n      <StatusBar barStyle=\"dark-content\" backgroundColor=\"#ecf0f1\" />\n      <Text>Dark Screen</Text>\n      <Button\n        title=\"Next screen\"\n        onPress={() => navigation.navigate('Screen1')}\n      />\n    </SafeAreaView>\n  );\n}\n\nconst Stack = createStackNavigator();\n\nexport default function App() {\n  return (\n    <SafeAreaProvider>\n      <NavigationContainer>\n        <Stack.Navigator headerMode=\"none\">\n          <Stack.Screen name=\"Screen1\" component={Screen1} />\n          <Stack.Screen name=\"Screen2\" component={Screen2} />\n        </Stack.Navigator>\n      </NavigationContainer>\n    </SafeAreaProvider>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },\n});\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"StackNavigator with different StatusBar configs",src:n(90720).Z})),(0,o.kt)("h2",{id:"tabs-and-drawer"},"Tabs and Drawer"),(0,o.kt)("p",null,"If you're using a tab or drawer navigator, it's a bit more complex because all of the screens in the navigator might be rendered at once and kept rendered - that means that the last ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," config you set will be used (likely on the final tab of your tab navigator, not what the user is seeing)."),(0,o.kt)("p",null,"To fix this, we'll have to do make the status bar component aware of screen focus and render it only when the screen is focused. We can achieve this by using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/use-is-focused"},(0,o.kt)("inlineCode",{parentName:"a"},"useIsFocused")," hook")," and creating a wrapper component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { StatusBar } from 'react-native';\nimport { useIsFocused } from '@react-navigation/native';\n\nfunction FocusAwareStatusBar(props) {\n  const isFocused = useIsFocused();\n\n  return isFocused ? <StatusBar {...props} /> : null;\n}\n")),(0,o.kt)("p",null,"Now, our screens (both ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen1.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen2.js"),") will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"FocusAwareStatusBar")," component instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," component from React Native:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function Screen1({ navigation }) {\n  return (\n    <SafeAreaView style={[styles.container, { backgroundColor: \'#6a51ae\' }]}>\n      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />\n      <Text style={{ color: \'#fff\' }}>Light Screen</Text>\n      <Button\n        title="Next screen"\n        onPress={() => navigation.navigate(\'Screen2\')}\n        color="#fff"\n      />\n    </SafeAreaView>\n  );\n}\n\nfunction Screen2({ navigation }) {\n  return (\n    <SafeAreaView style={[styles.container, { backgroundColor: \'#ecf0f1\' }]}>\n      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />\n      <Text>Dark Screen</Text>\n      <Button\n        title="Next screen"\n        onPress={() => navigation.navigate(\'Screen1\')}\n      />\n    </SafeAreaView>\n  );\n}\n')),(0,o.kt)("p",null,"Although not necessary, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"FocusAwareStatusBar")," component in the screens of the stack navigator as well."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DrawerNavigator with different StatusBar configs",src:n(82973).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TabNavigator with different StatusBar configs",src:n(761).Z})))}l.isMDXComponent=!0},82973:function(e,t,n){"use strict";t.Z=n.p+"assets/images/statusbar-drawer-demo-3f6ce5c56a2086d8aba8ab2f1f3f513e.gif"},90720:function(e,t,n){"use strict";t.Z=n.p+"assets/images/statusbar-stack-demo-695c18cfc1489cd5c4c18827bc66befb.gif"},761:function(e,t,n){"use strict";t.Z=n.p+"assets/images/statusbar-tab-demo-c5f932fea901d54665ed07f921ad8322.gif"}}]);