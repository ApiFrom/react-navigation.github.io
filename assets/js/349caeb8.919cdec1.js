(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[8041],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11775:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(74034),o=n(79973),i=(n(67294),n(3905)),r={id:"header-buttons",title:"Header buttons",sidebar_label:"Header buttons"},s={unversionedId:"header-buttons",id:"version-1.x/header-buttons",isDocsHomePage:!1,title:"Header buttons",description:"Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways.",source:"@site/versioned_docs/version-1.x/header-buttons.md",sourceDirName:".",slug:"/header-buttons",permalink:"/docs/1.x/header-buttons",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/header-buttons.md",version:"1.x",sidebar_label:"Header buttons",frontMatter:{id:"header-buttons",title:"Header buttons",sidebar_label:"Header buttons"},sidebar:"version-1.x/docs",previous:{title:"Configuring the header bar",permalink:"/docs/1.x/headers"},next:{title:"Opening a full-screen modal",permalink:"/docs/1.x/modal"}},c=[{value:"Adding a button to the header",id:"adding-a-button-to-the-header",children:[]},{value:"Header interaction with its screen component",id:"header-interaction-with-its-screen-component",children:[]},{value:"Customizing the back button",id:"customizing-the-back-button",children:[]},{value:"Overriding the back button",id:"overriding-the-back-button",children:[]},{value:"Summary",id:"summary",children:[]}],l={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways."),(0,i.kt)("h2",{id:"adding-a-button-to-the-header"},"Adding a button to the header"),(0,i.kt)("p",null,"The most common way to interact with a header is by tapping on a button either to the left or the right of the title. Let's add a button to the right side of the header (one of the most difficult places to touch on your entire screen, depending on finger and phone size, but also a normal place to put buttons)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'class HomeScreen extends React.Component {\n  static navigationOptions = {\n    headerTitle: <LogoTitle />,\n    headerRight: (\n      <Button\n        onPress={() => alert(\'This is a button!\')}\n        title="Info"\n        color="#fff"\n      />\n    ),\n  };\n}\n')),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/simple-header-button",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("p",null,"The binding of ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," is ",(0,i.kt)("em",{parentName:"p"},"not")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeScreen")," instance, so you can't call ",(0,i.kt)("inlineCode",{parentName:"p"},"setState")," or any instance methods on it. This is pretty important because it's extremely common to want the buttons in your header to interact with the screen that the header belongs to. So, we will look how to do this next."),(0,i.kt)("p",null,"There is a community-developed package for rendering buttons in the header with the correct styling available ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vonovak/react-navigation-header-buttons"},"react-navigation-header-buttons"),"."),(0,i.kt)("h2",{id:"header-interaction-with-its-screen-component"},"Header interaction with its screen component"),(0,i.kt)("p",null,"The most commonly used pattern for giving a header button access to a function on the component instance is to use ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),". We'll demonstrate this with a classic example, the counter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'class HomeScreen extends React.Component {\n  static navigationOptions = ({ navigation }) => {\n    const params = navigation.state.params || {};\n\n    return {\n      headerTitle: <LogoTitle />,\n      headerRight: (\n        <Button onPress={params.increaseCount} title="+1" color="#fff" />\n      ),\n    };\n  };\n\n  componentWillMount() {\n    this.props.navigation.setParams({ increaseCount: this._increaseCount });\n  }\n\n  state = {\n    count: 0,\n  };\n\n  _increaseCount = () => {\n    this.setState({ count: this.state.count + 1 });\n  };\n\n  /* later in the render function we display the count */\n}\n')),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/header-interacting-with-component-instance",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"React Navigation doesn't guarantee that your screen component will begin mounting before the header for the screen is rendered, and because the ",(0,i.kt)("inlineCode",{parentName:"p"},"increaseCount")," param is set in ",(0,i.kt)("inlineCode",{parentName:"p"},"componentWillMount"),", we may not have it available to us in ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions"),", which is why we include the ",(0,i.kt)("inlineCode",{parentName:"p"},"|| {}")," when grabbing the params (there may not be any). We know this is an awkward API and we do plan on improving it!")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"As an alternative to ",(0,i.kt)("inlineCode",{parentName:"p"},"setParams"),", you could use a state management library (such as Redux or MobX) and communicate between the header and the screen in the same way you would with two distinct components.")),(0,i.kt)("h2",{id:"customizing-the-back-button"},"Customizing the back button"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"StackNavigator"),' provides the platform-specific defaults for the back button. On iOS this includes a label next to the button, which shows the title of the previous screen when the title fits in the available space, otherwise it says "Back".'),(0,i.kt)("p",null,"You can change the label behavior with ",(0,i.kt)("inlineCode",{parentName:"p"},"headerBackTitle")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTruncatedBackTitle")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/1.x/stack-navigator#headerbacktitle"},"read more"),")."),(0,i.kt)("p",null,"To customize the back button image, you can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.x/stack-navigator#headerbackimage"},"headerBackImage"),"."),(0,i.kt)("h2",{id:"overriding-the-back-button"},"Overriding the back button"),(0,i.kt)("p",null,"The back button will be rendered automatically in a ",(0,i.kt)("inlineCode",{parentName:"p"},"StackNavigator")," whenever it is possible for the user to go back from their current screen ","\u2014"," in other words, the back button will be rendered whenever there is more than one screen in the stack."),(0,i.kt)("p",null,"Generally, this is what you want. But it's possible that in some circumstances that you want to customize the back button more than you can through the options mentioned above, in which case you can specify a ",(0,i.kt)("inlineCode",{parentName:"p"},"headerLeft"),", just as we did with ",(0,i.kt)("inlineCode",{parentName:"p"},"headerRight"),", and completely override the back button."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can set buttons in the header through the ",(0,i.kt)("inlineCode",{parentName:"li"},"headerLeft")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"headerRight")," properties in ",(0,i.kt)("inlineCode",{parentName:"li"},"navigationOptions"),"."),(0,i.kt)("li",{parentName:"ul"},"The back button is fully customizable with ",(0,i.kt)("inlineCode",{parentName:"li"},"headerLeft"),", but if you just want to change the title or image, there are other ",(0,i.kt)("inlineCode",{parentName:"li"},"navigationOptions")," for that ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"headerBackTitle"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"headerTruncatedBackTitle"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"headerBackImage"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://snack.expo.io/@react-navigation/header-interacting-with-component-instance"},"Full source of what we have built so far"),".")))}u.isMDXComponent=!0}}]);