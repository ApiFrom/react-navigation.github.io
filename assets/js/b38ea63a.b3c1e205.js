(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[1516],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94471:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var a=n(74034),o=n(79973),r=(n(67294),n(3905)),i={id:"header-buttons",title:"Header buttons",sidebar_label:"Header buttons"},s={unversionedId:"header-buttons",id:"version-4.x/header-buttons",isDocsHomePage:!1,title:"Header buttons",description:"Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways.",source:"@site/versioned_docs/version-4.x/header-buttons.md",sourceDirName:".",slug:"/header-buttons",permalink:"/docs/4.x/header-buttons",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/header-buttons.md",version:"4.x",sidebar_label:"Header buttons",frontMatter:{id:"header-buttons",title:"Header buttons",sidebar_label:"Header buttons"},sidebar:"version-4.x-docs",previous:{title:"Configuring the header bar",permalink:"/docs/4.x/headers"},next:{title:"App containers",permalink:"/docs/4.x/app-containers"}},l=[{value:"Adding a button to the header",id:"adding-a-button-to-the-header",children:[]},{value:"Header interaction with its screen component",id:"header-interaction-with-its-screen-component",children:[]},{value:"Customizing the back button",id:"customizing-the-back-button",children:[]},{value:"Overriding the back button",id:"overriding-the-back-button",children:[]},{value:"Summary",id:"summary",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways."),(0,r.kt)("h2",{id:"adding-a-button-to-the-header"},"Adding a button to the header"),(0,r.kt)("p",null,"The most common way to interact with a header is by tapping on a button either to the left or the right of the title. Let's add a button to the right side of the header (one of the most difficult places to touch on your entire screen, depending on finger and phone size, but also a normal place to put buttons)."),(0,r.kt)("samp",{id:"simple-header-button"},"header button"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'class HomeScreen extends React.Component {\n  static navigationOptions = {\n    headerTitle: () => <LogoTitle />,\n    headerRight: () => (\n      <Button\n        onPress={() => alert(\'This is a button!\')}\n        title="Info"\n        color="#fff"\n      />\n    ),\n  };\n}\n')),(0,r.kt)("p",null,"The binding of ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," is ",(0,r.kt)("em",{parentName:"p"},"not")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeScreen")," instance, so you can't call ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," or any instance methods on it. This is pretty important because it's extremely common to want the buttons in your header to interact with the screen that the header belongs to. So, we will look how to do this next."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please note that a community-developed library for rendering buttons in the header with the correct styling is available: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vonovak/react-navigation-header-buttons"},"react-navigation-header-buttons"),".")),(0,r.kt)("h2",{id:"header-interaction-with-its-screen-component"},"Header interaction with its screen component"),(0,r.kt)("p",null,"The most commonly used pattern for giving a header button access to a function on the component instance is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"params"),". We'll demonstrate this with a classic example, the counter."),(0,r.kt)("samp",{id:"header-interaction"},"header interaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'class HomeScreen extends React.Component {\n  static navigationOptions = ({ navigation }) => {\n    return {\n      headerTitle: () => <LogoTitle />,\n      headerRight: () => (\n        <Button\n          onPress={navigation.getParam(\'increaseCount\')}\n          title="+1"\n          color="#fff"\n        />\n      ),\n    };\n  };\n\n  componentDidMount() {\n    this.props.navigation.setParams({ increaseCount: this._increaseCount });\n  }\n\n  state = {\n    count: 0,\n  };\n\n  _increaseCount = () => {\n    this.setState({ count: this.state.count + 1 });\n  };\n\n  /* later in the render function we display the count */\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"React Navigation doesn't guarantee that your screen component will be mounted before the header. Because the ",(0,r.kt)("inlineCode",{parentName:"p"},"increaseCount")," param is set in ",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidMount"),", we may not have it available to us in ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions"),". This usually will not be a problem because ",(0,r.kt)("inlineCode",{parentName:"p"},"onPress")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Touchable")," components will do nothing if the callback is null. If you have your own custom component here, you should make sure it behaves as expected with ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," for its press handler prop.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As an alternative to ",(0,r.kt)("inlineCode",{parentName:"p"},"setParams"),", you could use a state management library (such as Redux or MobX) and communicate between the header and the screen in the same way you would with two distinct components.")),(0,r.kt)("h2",{id:"customizing-the-back-button"},"Customizing the back button"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createStackNavigator"),' provides the platform-specific defaults for the back button. On iOS this includes a label next to the button, which shows the title of the previous screen when the title fits in the available space, otherwise it says "Back".'),(0,r.kt)("p",null,"You can change the label behavior with ",(0,r.kt)("inlineCode",{parentName:"p"},"headerBackTitle")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTruncatedBackTitle")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/4.x/stack-navigator#headerbacktitle"},"read more"),")."),(0,r.kt)("p",null,"To customize the back button image, you can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.x/stack-navigator#headerbackimage"},"headerBackImage"),"."),(0,r.kt)("h2",{id:"overriding-the-back-button"},"Overriding the back button"),(0,r.kt)("p",null,"The back button will be rendered automatically in a stack navigator whenever it is possible for the user to go back from their current screen ","\u2014"," in other words, the back button will be rendered whenever there is more than one screen in the stack."),(0,r.kt)("p",null,"Generally, this is what you want. But it's possible that in some circumstances that you want to customize the back button more than you can through the options mentioned above, in which case you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerLeft")," option to a React Element that will be rendered, just as we did with ",(0,r.kt)("inlineCode",{parentName:"p"},"headerRight"),". Alternatively, the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerLeft")," option also accepts a React Component, which can be used, for example, for overriding the onPress behavior of the back button. Read more about this in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.x/stack-navigator#headerleft"},"api reference"),"."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can set buttons in the header through the ",(0,r.kt)("inlineCode",{parentName:"li"},"headerLeft")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"headerRight")," properties in ",(0,r.kt)("inlineCode",{parentName:"li"},"navigationOptions"),"."),(0,r.kt)("li",{parentName:"ul"},"The back button is fully customizable with ",(0,r.kt)("inlineCode",{parentName:"li"},"headerLeft"),", but if you just want to change the title or image, there are other ",(0,r.kt)("inlineCode",{parentName:"li"},"navigationOptions")," for that ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"headerBackTitle"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"headerTruncatedBackTitle"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"headerBackImage"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#example/header-interaction"},"Full source of what we have built so far"),".")))}u.isMDXComponent=!0}}]);