(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[1545],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),g=a,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57961:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=t(74034),a=t(79973),o=(t(67294),t(3905)),i={id:"drawer-based-navigation",title:"Drawer navigation",sidebar_label:"Drawer navigation"},s={unversionedId:"drawer-based-navigation",id:"version-2.x/drawer-based-navigation",isDocsHomePage:!1,title:"Drawer navigation",description:"`js",source:"@site/versioned_docs/version-2.x/drawer-based-navigation.md",sourceDirName:".",slug:"/drawer-based-navigation",permalink:"/docs/2.x/drawer-based-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/drawer-based-navigation.md",version:"2.x",sidebar_label:"Drawer navigation",frontMatter:{id:"drawer-based-navigation",title:"Drawer navigation",sidebar_label:"Drawer navigation"},sidebar:"version-2.x-docs",previous:{title:"Tab navigation",permalink:"/docs/2.x/tab-based-navigation"},next:{title:"Authentication flows",permalink:"/docs/2.x/auth-flow"}},c=[],l={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <TouchableOpacity onPress={this.props.navigation.openDrawer}>\n          <Text>Open Drawer</Text>\n        </TouchableOpacity>\n        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <TouchableOpacity onPress={this.props.navigation.openDrawer}>\n          <Text>Open Drawer</Text>\n        </TouchableOpacity>\n        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Settings</Text>\n      </View>\n    );\n  }\n}\n\nconst DrawerNavigator = createDrawerNavigator(\n  {\n    Home: HomeScreen,\n    Settings: SettingsScreen,\n  },\n  {\n    drawerBackgroundColor: 'rgba(255,255,255,.9)',\n    contentOptions: {\n      activeTintColor: '#fff',\n      activeBackgroundColor: '#6b52ae',\n    },\n  }\n);\n\nexport default createAppContainer(DrawerNavigator);\n")),(0,o.kt)("a",{href:"https://snack.expo.io/@react-navigation/basic-drawer-v2",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,o.kt)("p",null,"To open and close drawer, use the following helpers to open and close the drawer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"this.props.navigation.openDrawer();\nthis.props.navigation.closeDrawer();\n")),(0,o.kt)("p",null,"If you would like to toggle the drawer you call the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"this.props.navigation.toggleDrawer();\n")),(0,o.kt)("p",null,"Each of these functions, behind the scenes, are simply dispatching actions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"this.props.navigation.dispatch(DrawerActions.openDrawer());\nthis.props.navigation.dispatch(DrawerActions.closeDrawer());\nthis.props.navigation.dispatch(DrawerActions.toggleDrawer());\n")))}p.isMDXComponent=!0}}]);