(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[9302],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){"use strict";var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},41395:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(67294),o=t(80944),r=t(86010),i="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var c=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,p=e.values,d=e.groupId,m=e.className,h=(0,o.Z)(),g=h.tabGroupChoices,f=h.setTabGroupChoices,k=(0,a.useState)(c),v=k[0],y=k[1],b=a.Children.toArray(e.children),x=[];if(null!=d){var N=g[d];null!=N&&N!==v&&p.some((function(e){return e.value===N}))&&y(N)}var w=function(e){var n=e.currentTarget,t=x.indexOf(n),a=p[t].value;y(a),null!=d&&(f(d,a),setTimeout((function(){var e,t,a,o,r,i,l,u;(e=n.getBoundingClientRect(),t=e.top,a=e.left,o=e.bottom,r=e.right,i=window,l=i.innerHeight,u=i.innerWidth,t>=0&&r<=u&&o<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},C=function(e){var n,t;switch(e.keyCode){case u:var a=x.indexOf(e.target)+1;t=x[a]||x[0];break;case l:var o=x.indexOf(e.target)-1;t=x[o]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},m)},p.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":v===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:w,onClick:w},t)}))),n?(0,a.cloneElement)(b.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},79443:function(e,n,t){"use strict";var a=(0,t(67294).createContext)(void 0);n.Z=a},80944:function(e,n,t){"use strict";var a=t(67294),o=t(79443);n.Z=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},73591:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=t(74034),o=t(79973),r=(t(67294),t(3905)),i=t(41395),s=t(58215),l={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},u={unversionedId:"troubleshooting",id:"version-6.x/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation. These issues may or may not be related to React Navigation itself.",source:"@site/versioned_docs/version-6.x/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/6.x/troubleshooting",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/troubleshooting.md",version:"6.x",sidebar_label:"Troubleshooting",frontMatter:{id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},sidebar:"version-6.x/docs",previous:{title:"Glossary of terms",permalink:"/docs/6.x/glossary-of-terms"},next:{title:"Limitations",permalink:"/docs/6.x/limitations"}},c=[{value:"I&#39;m getting an error &quot;Unable to resolve module&quot; after updating to the latest version",id:"im-getting-an-error-unable-to-resolve-module-after-updating-to-the-latest-version",children:[{value:"Stale cache of Metro bundler",id:"stale-cache-of-metro-bundler",children:[]},{value:"Missing peer dependency",id:"missing-peer-dependency",children:[]},{value:"Missing extensions in metro configuration",id:"missing-extensions-in-metro-configuration",children:[]}]},{value:"I&#39;m getting &quot;SyntaxError in @react-navigation/xxx/xxx.tsx&quot; or &quot;SyntaxError: /xxx/@react-navigation/xxx/xxx.tsx: Unexpected token&quot;",id:"im-getting-syntaxerror-in-react-navigationxxxxxxtsx-or-syntaxerror-xxxreact-navigationxxxxxxtsx-unexpected-token",children:[]},{value:"I&#39;m getting &quot;Module &#39;...&#39; has no exported member &#39;xxx&#39; when using TypeScript",id:"im-getting-module--has-no-exported-member-xxx-when-using-typescript",children:[]},{value:"I&#39;m getting an error &quot;null is not an object (evaluating &#39;RNGestureHandlerModule.default.Direction&#39;)&quot;",id:"im-getting-an-error-null-is-not-an-object-evaluating-rngesturehandlermoduledefaultdirection",children:[]},{value:"I&#39;m getting an error &quot;requireNativeComponent: &quot;RNCSafeAreaProvider&quot; was not found in the UIManager&quot;",id:"im-getting-an-error-requirenativecomponent-rncsafeareaprovider-was-not-found-in-the-uimanager",children:[]},{value:"I&#39;m getting an error &quot;Tried to register two views with the same name RNCSafeAreaProvider&quot;",id:"im-getting-an-error-tried-to-register-two-views-with-the-same-name-rncsafeareaprovider",children:[]},{value:"Nothing is visible on the screen after adding a <code>View</code>",id:"nothing-is-visible-on-the-screen-after-adding-a-view",children:[]},{value:"I get the warning &quot;Non-serializable values were found in the navigation state&quot;",id:"i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state",children:[]},{value:"I&#39;m getting &quot;Invalid hook call. Hooks can only be called inside of the body of a function component&quot;",id:"im-getting-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of-a-function-component",children:[]},{value:"Screens are unmounting/remounting during navigation",id:"screens-are-unmountingremounting-during-navigation",children:[]},{value:"App is not working properly when connected to Chrome Debugger",id:"app-is-not-working-properly-when-connected-to-chrome-debugger",children:[]}],p={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation. These issues may or may not be related to React Navigation itself."),(0,r.kt)("p",null,"Before troubleshooting an issue, make sure that you have upgraded to ",(0,r.kt)("strong",{parentName:"p"},"the latest available versions")," of the packages. You can install the latest versions by installing the packages again (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install package-name"),")."),(0,r.kt)("h2",{id:"im-getting-an-error-unable-to-resolve-module-after-updating-to-the-latest-version"},'I\'m getting an error "Unable to resolve module" after updating to the latest version'),(0,r.kt)("p",null,"This might happen for 3 reasons:"),(0,r.kt)("h3",{id:"stale-cache-of-metro-bundler"},"Stale cache of Metro bundler"),(0,r.kt)("p",null,"If the module points to a local file (i.e. the name of the module starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"./"),"), then it's probably due to stale cache. To fix this, try the following solutions."),(0,r.kt)("p",null,"If you're using Expo, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"expo start -c\n")),(0,r.kt)("p",null,"If you're not using Expo, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx react-native start --reset-cache\n")),(0,r.kt)("p",null,"If that doesn't work, you can also try the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf $TMPDIR/metro-bundler-cache-*\n")),(0,r.kt)("h3",{id:"missing-peer-dependency"},"Missing peer dependency"),(0,r.kt)("p",null,"If the module points to an npm package (i.e. the name of the module doesn't with ",(0,r.kt)("inlineCode",{parentName:"p"},"./"),"), then it's probably due to a missing dependency. To fix this, install the dependency in your project:"),(0,r.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install name-of-the-module\n"))),(0,r.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add name-of-the-module\n")))),(0,r.kt)("p",null,"Sometimes it might even be due to a corrupt installation. If clearing cache didn't work, try deleting your ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," folder and run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," again."),(0,r.kt)("h3",{id:"missing-extensions-in-metro-configuration"},"Missing extensions in metro configuration"),(0,r.kt)("p",null,"Sometimes the error may look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'Error: While trying to resolve module "@react-navigation/native" from file "/path/to/src/App.js", the package "/path/to/node_modules/@react-navigation/native/package.json" was successfully found. However, this package itself specifies a "main" module field that could not be resolved ("/path/to/node_modules/@react-navigation/native/src/index.tsx"\n')),(0,r.kt)("p",null,"This can happen if you have a custom configuration for metro and haven't specified ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tsx")," as valid extensions. These extensions are present in the default configuration. To check if this is the issue, look for a ",(0,r.kt)("inlineCode",{parentName:"p"},"metro.config.js")," file in your project and check if you have specified the ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/metro/docs/en/configuration#sourceexts"},(0,r.kt)("inlineCode",{parentName:"a"},"sourceExts"))," option. It should at least have the following configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"sourceExts: ['js', 'json', 'ts', 'tsx'];\n")),(0,r.kt)("p",null,"If it's missing these extensions, add them and then clear metro cache as shown in the section above."),(0,r.kt)("h2",{id:"im-getting-syntaxerror-in-react-navigationxxxxxxtsx-or-syntaxerror-xxxreact-navigationxxxxxxtsx-unexpected-token"},'I\'m getting "SyntaxError in @react-navigation/xxx/xxx.tsx" or "SyntaxError: /xxx/@react-navigation/xxx/xxx.tsx: Unexpected token"'),(0,r.kt)("p",null,"This might happen if you have an old version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"metro-react-native-babel-preset")," package. Try upgrading it to the latest version."),(0,r.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev metro-react-native-babel-preset\n"))),(0,r.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add --save-dev metro-react-native-babel-preset\n")))),(0,r.kt)("p",null,"If you have ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core")," installed, also upgrade it to latest version."),(0,r.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @babel/core\n"))),(0,r.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add --save-dev @babel/core\n")))),(0,r.kt)("p",null,"If upgrading the packages don't help, you can also try deleting your ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," as well as lock the file and reinstall your dependencies."),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf node_modules\nrm package-lock.json\nnpm install\n")),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf node_modules\nrm yarn.lock\nyarn\n")),(0,r.kt)("p",null,"After upgrading or reinstalling the packages, you should also clear Metro bundler's cache following the instructions earlier in the page."),(0,r.kt)("h2",{id:"im-getting-module--has-no-exported-member-xxx-when-using-typescript"},"I'm getting \"Module '","[...]","' has no exported member 'xxx' when using TypeScript"),(0,r.kt)("p",null,"This might happen if you have an old version of TypeScript in your project. You can try upgrading it:"),(0,r.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev typescript\n"))),(0,r.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add --save-dev typescript\n")))),(0,r.kt)("h2",{id:"im-getting-an-error-null-is-not-an-object-evaluating-rngesturehandlermoduledefaultdirection"},"I'm getting an error \"null is not an object (evaluating 'RNGestureHandlerModule.default.Direction')\""),(0,r.kt)("p",null,"This and some similar errors might occur if you have a bare React Native project and the library ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-gesture-handler"))," library isn't linked."),(0,r.kt)("p",null,"Linking is automatic from React Native 0.60, so if you have linked the library manually, first unlink it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"react-native unlink react-native-gesture-handler\n")),(0,r.kt)("p",null,"If you're testing on iOS and use Mac, make sure you have run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ios/")," folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ios\npod install\ncd ..\n")),(0,r.kt)("p",null,"Now rebuild the app and test on your device or simulator."),(0,r.kt)("h2",{id:"im-getting-an-error-requirenativecomponent-rncsafeareaprovider-was-not-found-in-the-uimanager"},'I\'m getting an error "requireNativeComponent: "RNCSafeAreaProvider" was not found in the UIManager"'),(0,r.kt)("p",null,"This and some similar errors might occur if you have a bare React Native project and the library ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/th3rdwave/react-native-safe-area-context"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-safe-area-context"))," library isn't linked."),(0,r.kt)("p",null,"Linking is automatic from React Native 0.60, so if you have linked the library manually, first unlink it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"react-native unlink react-native-safe-area-context\n")),(0,r.kt)("p",null,"If you're testing on iOS and use Mac, make sure you have run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ios/")," folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ios\npod install\ncd ..\n")),(0,r.kt)("p",null,"Now rebuild the app and test on your device or simulator."),(0,r.kt)("h2",{id:"im-getting-an-error-tried-to-register-two-views-with-the-same-name-rncsafeareaprovider"},'I\'m getting an error "Tried to register two views with the same name RNCSafeAreaProvider"'),(0,r.kt)("p",null,"This might occur if you have multiple versions of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/th3rdwave/react-native-safe-area-context"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-safe-area-context"))," installed."),(0,r.kt)("p",null,"If you're using Expo managed workflow, it's likely that you have installed an incompatible version. To install the correct version, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"expo install react-native-safe-area-context\n")),(0,r.kt)("p",null,"If it didn't fix the error or you're not using Expo managed workflow, you'll need to check which package depends on a different version of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-safe-area-context"),"."),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),", run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn why react-native-safe-area-context\n")),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),", run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm ls react-native-safe-area-context\n")),(0,r.kt)("p",null,"This will tell you if a package you use has a dependency on ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-safe-area-context"),". If it's a third-party package, you should open an issue on the relevant repo's issue tracker explaining the problem. Generally for libraries, dependencies containing native code should be defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," to avoid such issues."),(0,r.kt)("p",null,"If it's already in ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies")," and not in ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),", and you use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),", it might be because of incompatible version range defined for the package. The author of the library will need to relax the version range in such cases to allow a wider range of versions to be installed."),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),", you can also temporarily override the version being installed using ",(0,r.kt)("inlineCode",{parentName:"p"},"resolutions"),". Add the following in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"resolutions": {\n  "react-native-safe-area-context": "<version you want to use>"\n}\n')),(0,r.kt)("p",null,"And then run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn\n")),(0,r.kt)("p",null,"If you're on iOS and not using Expo managed workflow, also run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ios\npod install\ncd ..\n")),(0,r.kt)("p",null,"Now rebuild the app and test on your device or simulator."),(0,r.kt)("h2",{id:"nothing-is-visible-on-the-screen-after-adding-a-view"},"Nothing is visible on the screen after adding a ",(0,r.kt)("inlineCode",{parentName:"h2"},"View")),(0,r.kt)("p",null,"If you wrap the container in a ",(0,r.kt)("inlineCode",{parentName:"p"},"View"),", make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," stretches to fill the container using ",(0,r.kt)("inlineCode",{parentName:"p"},"flex: 1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1 }}>\n      <NavigationContainer>{/* ... */}</NavigationContainer>\n    </View>\n  );\n}\n")),(0,r.kt)("h2",{id:"i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state"},'I get the warning "Non-serializable values were found in the navigation state"'),(0,r.kt)("p",null,"This can happen if you are passing non-serializable values such as class instances, functions etc. in params. React Navigation warns you in this case because this can break other functionality such ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.x/state-persistence"},"state persistence"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.x/deep-linking"},"deep linking")," etc."),(0,r.kt)("p",null,"Example of some use cases for passing functions in params are the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To pass a callback to use in a header button. This can be achieved using ",(0,r.kt)("inlineCode",{parentName:"li"},"navigation.setOptions")," instead. See the ",(0,r.kt)("a",{parentName:"li",href:"/docs/6.x/header-buttons#header-interaction-with-its-screen-component"},"guide for header buttons")," for examples."),(0,r.kt)("li",{parentName:"ul"},"To pass a callback to the next screen which it can call to pass some data back. You can usually achieve it using ",(0,r.kt)("inlineCode",{parentName:"li"},"navigate")," instead. See the ",(0,r.kt)("a",{parentName:"li",href:"/docs/6.x/params"},"guide for params")," for examples."),(0,r.kt)("li",{parentName:"ul"},"To pass complex data to another screen. Instead of passing the data ",(0,r.kt)("inlineCode",{parentName:"li"},"params"),", you can store that complex data somewhere else (like a global store), and pass an id instead. Then the screen can get the data from the global store using the id. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/6.x/params#what-should-be-in-params"},"what should be in params"),"."),(0,r.kt)("li",{parentName:"ul"},"Pass data, callbacks etc. from a parent to child screens. You can either use React Context, or pass a children callback to pass these down instead of using params. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/6.x/hello-react-navigation#passing-additional-props"},"passing additional props"),".")),(0,r.kt)("p",null,"If you don't use state persistence or deep link to the screen which accepts functions in params, then the warning doesn't affect you and you can safely ignore it. To ignore the warning, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"YellowBox.ignoreWarnings"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { YellowBox } from 'react-native';\n\nYellowBox.ignoreWarnings([\n  'Non-serializable values were found in the navigation state',\n]);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: As of React Native 0.63 YellowBox has been deprecated in favor of LogBox, so the previous\ncode would be written as follows:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { LogBox } from 'react-native';\n\nLogBox.ignoreLogs([\n 'Non-serializable values were found in the navigation state',\n]);\n"))),(0,r.kt)("h2",{id:"im-getting-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of-a-function-component"},'I\'m getting "Invalid hook call. Hooks can only be called inside of the body of a function component"'),(0,r.kt)("p",null,"This can happen when you pass a React component to an option that accepts a function returning a react element. For example, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.x/stack-navigator#header"},(0,r.kt)("inlineCode",{parentName:"a"},"header")," option in stack navigator")," expects a function returning a react element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen\n  name="Home"\n  component={Home}\n  option={{ header: (props) => <MyHeader {...props} /> }}\n/>\n')),(0,r.kt)("p",null,"If you directly pass a function here, you'll get this error when using hooks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen\n  name="Home"\n  component={Home}\n  option={{\n    // This is not correct\n    header: MyHeader,\n  }}\n/>\n')),(0,r.kt)("p",null,"The same applies to other options like ",(0,r.kt)("inlineCode",{parentName:"p"},"headerLeft"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headerRight"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarIcon")," etc. as well as props such as ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBar"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"drawerContent")," etc."),(0,r.kt)("h2",{id:"screens-are-unmountingremounting-during-navigation"},"Screens are unmounting/remounting during navigation"),(0,r.kt)("p",null,"Sometimes you might have noticed that your screens unmount/remount, or your local component state or the navigation state resets when you navigate. This might happen if you are creating React components during render."),(0,r.kt)("p",null,"The simplest example is something like following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen\n        name="Home"\n        component={() => {\n          return <SomeComponent />;\n        }}\n      />\n    </Stack.Navigator>\n  );\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"component")," prop expects a React Component, but in the example, it's getting a function returning an React Element. While superficially a component and a function returning a React Element look the exact same, they don't behave the same way when used."),(0,r.kt)("p",null,"Here, every time the component re-renders, a new function will be created and passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"component")," prop. React will see a new component and unmount the previous component before rendering the new one. This will cause any local state in the old component to be lost. React Navigation will detect and warn for this specific case but there can be other ways you might be creating components during render which it can't detect."),(0,r.kt)("p",null,"Another easy to identify example of this is when you create a component inside another component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function App() {\n  const Home = () => {\n    return <SomeComponent />;\n  };\n\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={Home} />\n    </Stack.Navigator>\n  );\n}\n')),(0,r.kt)("p",null,"Or when you use a higher order component (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," from Redux, or ",(0,r.kt)("inlineCode",{parentName:"p"},"withX")," functions that accept a component) inside another component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={withSomeData(Home)} />\n    </Stack.Navigator>\n  );\n}\n')),(0,r.kt)("p",null,"If you're unsure, it's always best to make sure that the components you are using as screens are defined outside of a React component. They could be defined in another file and imported, or defined at the top level scope in the same file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const Home = () => {\n  return <SomeComponent />;\n};\n\nfunction App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={Home} />\n    </Stack.Navigator>\n  );\n}\n')),(0,r.kt)("p",null,"This is not React Navigation specific, but related to React in general. You should always avoid creating components during render, whether you are using React Navigation or not."),(0,r.kt)("h2",{id:"app-is-not-working-properly-when-connected-to-chrome-debugger"},"App is not working properly when connected to Chrome Debugger"),(0,r.kt)("p",null,"When the app is connected to Chrome Debugger (or other tools that use Chrome Debugger such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jhen0409/react-native-debugger"},"React Native Debugger"),") you might encounter various issues related to timing."),(0,r.kt)("p",null,"This can result in issues such as button presses taking a long time to register or not working at all, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/2367"},"gestures and animations being slow and buggy")," etc. There can be other functional issues such as promises not resolving, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/4470"},"timeouts and intervals not working correctly")," etc. as well."),(0,r.kt)("p",null,"The issues are not related to React Navigation, but due to the nature of how the Chrome Debugger works. When connected to Chrome Debugger, your whole app runs on Chrome and communicates with the native app via sockets over the network, which can introduce latency and timing related issues."),(0,r.kt)("p",null,"So, unless you are trying to debug something, it's better to test the app without being connected to the Chrome Debugger. If you are using iOS, you can alternatively use ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/debugging#safari-developer-tools"},"Safari to debug your app")," which debugs the app on the device directly and does not have these issues, though it has other downsides."))}d.isMDXComponent=!0},86010:function(e,n,t){"use strict";function a(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})}}]);