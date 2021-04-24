(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),o=(n(0),n(123)),a={id:"dotnet",title:"Dotnet",sidebar_label:"Dotnet"},l={unversionedId:"dotnet",id:"dotnet",isDocsHomePage:!1,title:"Dotnet",description:"What",source:"@site/docs/segment-dotnet.md",slug:"/dotnet",permalink:"/docs/dotnet",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/segment-dotnet.md",version:"current",sidebar_label:"Dotnet",sidebar:"docs",previous:{title:"Command",permalink:"/docs/command"},next:{title:"Environment Variable",permalink:"/docs/environment"}},c=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what"},"What"),Object(o.b)("p",null,"Display the currently active .NET SDK version."),Object(o.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "dotnet",\n  "style": "powerline",\n  "powerline_symbol": "\ue0b0",\n  "foreground": "#000000",\n  "background": "#00ffff",\n  "properties": {\n    "prefix": " \\uE77F "\n  }\n}\n')),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"display_version: ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")," - display the active version or not; useful if all you need is an icon indicating ",Object(o.b)("inlineCode",{parentName:"li"},"dotnet"),"\nis present - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"display_error: ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")," - show the error context when failing to retrieve the version information - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"missing_command_text: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - text to display when the command is missing - defaults to empty"),Object(o.b)("li",{parentName:"ul"},"display_mode: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - determines when the segment is displayed",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"always"),": the segment is always displayed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"files"),": the segment is only displayed when ",Object(o.b)("inlineCode",{parentName:"li"},"*.cs"),", ",Object(o.b)("inlineCode",{parentName:"li"},"*.vb"),", ",Object(o.b)("inlineCode",{parentName:"li"},"*.sln"),", ",Object(o.b)("inlineCode",{parentName:"li"},"*.csproj"),", or ",Object(o.b)("inlineCode",{parentName:"li"},"*.vbproj")," files are present (default)"))),Object(o.b)("li",{parentName:"ul"},"unsupported_version_icon: ",Object(o.b)("inlineCode",{parentName:"li"},"string")," - text/icon that is displayed when the active .NET SDK version (e.g., one specified\nby ",Object(o.b)("inlineCode",{parentName:"li"},"global.json"),") is not installed/supported - defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"\\uf071")," (X in a rectangle box)")))}s.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,m=d["".concat(a,".").concat(u)]||d[u]||b[u]||o;return n?i.a.createElement(m,l(l({ref:t},p),{},{components:n})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);