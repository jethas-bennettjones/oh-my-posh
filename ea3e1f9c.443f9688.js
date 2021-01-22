(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var r=t(2),i=t(6),a=(t(0),t(99)),o={id:"python",title:"Python",sidebar_label:"Python"},l={unversionedId:"python",id:"python",isDocsHomePage:!1,title:"Python",description:"What",source:"@site/docs/segment-python.md",slug:"/python",permalink:"/docs/python",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/segment-python.md",version:"current",sidebar_label:"Python",sidebar:"docs",previous:{title:"Path",permalink:"/docs/path"},next:{title:"Root",permalink:"/docs/root"}},p=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]}],c={rightToc:p};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what"},"What"),Object(a.b)("p",null,"Display the currently active python version and virtualenv.\nSupports conda, virtualenv and pyenv."),Object(a.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "python",\n  "style": "powerline",\n  "powerline_symbol": "\\uE0B0",\n  "foreground": "#100e23",\n  "background": "#906cff",\n  "properties": {\n    "prefix": " \\uE235 "\n  }\n}\n')),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"display_virtual_env: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - show the name of the virtualenv or not - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"true")),Object(a.b)("li",{parentName:"ul"},"display_default_env: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - show the name of the virtualenv when it's default (",Object(a.b)("inlineCode",{parentName:"li"},"system"),", ",Object(a.b)("inlineCode",{parentName:"li"},"base"),")\nor not - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"true")),Object(a.b)("li",{parentName:"ul"},"display_version: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - display the python version - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"true")),Object(a.b)("li",{parentName:"ul"},"missing_command_text: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - text to display when the command is missing - defaults to empty"),Object(a.b)("li",{parentName:"ul"},"display_mode: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - determines when the segment is displayed",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"always"),": The segment is always displayed"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"files"),": The segment is only displayed when ",Object(a.b)("inlineCode",{parentName:"li"},"*.py"),", ",Object(a.b)("inlineCode",{parentName:"li"},"*.ipynb"),", ",Object(a.b)("inlineCode",{parentName:"li"},"pyproject.toml"),", ",Object(a.b)("inlineCode",{parentName:"li"},"venv.bak"),", ",Object(a.b)("inlineCode",{parentName:"li"},"venv"),", or ",Object(a.b)("inlineCode",{parentName:"li"},".venv"),"\nfiles are present (default)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"environment"),": The segment is only displayed when a virtual env is present"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"context"),": The segment is only displayed when either ",Object(a.b)("inlineCode",{parentName:"li"},"environment")," or ",Object(a.b)("inlineCode",{parentName:"li"},"files")," is active")))))}b.isMDXComponent=!0},99:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),b=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=b(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(t),u=r,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||a;return t?i.a.createElement(m,l(l({ref:n},c),{},{components:t})):i.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);