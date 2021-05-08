(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[8963],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||r;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76351:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=n(74034),o=n(79973),r=(n(67294),n(3905)),i={id:"localization",title:"Localization",sidebar_label:"Localization"},l={unversionedId:"localization",id:"version-3.x/localization",isDocsHomePage:!1,title:"Localization",description:"English is only one of many languages people speak around the world (thanks a lot, Tower of Babel) and it's polite and sometimes even necessary to translate our app to the languages our users speak. Let's look at one way we can do this in React Navigation - it's not the only way but it'll do the trick. Similar to themes, we will use screenProps. You may also want to use React's context API as demonstrated in the themes guide in order to make it easier to access the translate function from a variety of components.",source:"@site/versioned_docs/version-3.x/localization.md",sourceDirName:".",slug:"/localization",permalink:"/docs/3.x/localization",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/localization.md",version:"3.x",sidebar_label:"Localization",frontMatter:{id:"localization",title:"Localization",sidebar_label:"Localization"},sidebar:"version-3.x-docs",previous:{title:"Integrating with MobX State Tree",permalink:"/docs/3.x/MST-integration"},next:{title:"React Navigation on the Web",permalink:"/docs/3.x/web-support"}},s=[{value:"Setting up a localization library",id:"setting-up-a-localization-library",children:[]},{value:"Wiring up your localization library to navigation",id:"wiring-up-your-localization-library-to-navigation",children:[]}],c={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"English is only one of many languages people speak around the world (thanks a lot, ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tower_of_Babel"},"Tower of Babel"),") and it's polite and sometimes even necessary to translate our app to the languages our users speak. Let's look at one way we can do this in React Navigation - it's not the only way but it'll do the trick. Similar to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.x/themes"},"themes"),", we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"screenProps"),". You may also want to use React's context API as demonstrated in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.x/themes"},"themes")," guide in order to make it easier to access the translate function from a variety of components."),(0,r.kt)("h2",{id:"setting-up-a-localization-library"},"Setting up a localization library"),(0,r.kt)("p",null,"We'll need to use some kind of library to store our translations and provide a function that gives us access to them, along with handling fallbacks when we don't have a particular language defined. Localization and internationalization (i18n) are often used interchangeably, as in the example below where we get the current ",(0,r.kt)("inlineCode",{parentName:"p"},"locale")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"expo-localization")," and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n-js")," library for managing translations, for no particular reason other than it was available - use whatever you like."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import  * as Localization from 'expo-localization'; // or whatever library you want\nimport i18n from 'i18n-js'; // or whatever library you want\n\nconst en = {\n  foo: 'Foo',\n  bar: 'Bar {{someValue}}',\n};\n\nconst fr = {\n  foo: 'Fou',\n  bar: 'B\xe1r {{someValue}}',\n};\n\ni18n.fallbacks = true;\ni18n.translations = { fr, en };\n\n// This will log 'en' for me, as I'm an English speaker\nconsole.log(Localization.locale);\n")),(0,r.kt)("h2",{id:"wiring-up-your-localization-library-to-navigation"},"Wiring up your localization library to navigation"),(0,r.kt)("p",null,"Next let's store our ",(0,r.kt)("inlineCode",{parentName:"p"},"locale")," in the state of our root app component and then thread it through ",(0,r.kt)("inlineCode",{parentName:"p"},"screenProps")," to make it available throughout React Navigation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export default class App extends React.Component {\n  state = {\n    locale: Localization.locale,\n  };\n\n  setLocale = locale => {\n    this.setState({ locale });\n  };\n\n  t = (scope, options) => {\n    return i18n.t(scope, { locale: this.state.locale, ...options });\n  };\n\n  render() {\n    return (\n      <AppContainer\n        screenProps={{\n          t: this.t,\n          locale: this.state.locale,\n          setLocale: this.setLocale,\n        }}\n      />\n    );\n  }\n}\n")),(0,r.kt)("p",null,"Now in our screens we can use these ",(0,r.kt)("inlineCode",{parentName:"p"},"screenProps")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"class Screen extends React.Component {\n  static navigationOptions = ({ screenProps: { t } }) => ({\n    title: t('foo'),\n  });\n\n  render() {\n    let { t, locale } = this.props.screenProps;\n\n    return (\n      <View style={styles.container}>\n        <Text style={styles.text}>\n          Current locale: {locale}.{' '}\n          {locale !== 'en' && locale !== 'fr'\n            ? 'Translations will fall back to \"en\" because none available'\n            : null}\n        </Text>\n        <Text>{t('bar', { someValue: Date.now() })}</Text>\n        {locale === 'en' ? (\n          <Button\n            title=\"Switch to French\"\n            onPress={() => this.props.screenProps.setLocale('fr')}\n          />\n        ) : (\n          <Button\n            title=\"Switch to English\"\n            onPress={() => this.props.screenProps.setLocale('en')}\n          />\n        )}\n      </View>\n    );\n  }\n}\n")),(0,r.kt)("p",null,"You can run this example in ",(0,r.kt)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/localization-example"},"this Snack"),". Again, you may want to go further than just passing this through ",(0,r.kt)("inlineCode",{parentName:"p"},"screenProps")," if you want to make it easier to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"t")," function or the other ",(0,r.kt)("inlineCode",{parentName:"p"},"screenProps")," from any React component (and not just screen components that are rendered by React Navigation). Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.x/themes"},"themes")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React documentation on context")," for help with that."))}p.isMDXComponent=!0}}]);