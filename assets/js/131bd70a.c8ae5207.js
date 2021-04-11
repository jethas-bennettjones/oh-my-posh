(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||u[b]||a;return n?o.a.createElement(f,s(s({ref:t},l),{},{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(117)),i={id:"fonts",title:"Fonts",sidebar_label:"\ud83c\udd8e Fonts"},s={unversionedId:"fonts",id:"fonts",isDocsHomePage:!1,title:"Fonts",description:"Nerd Fonts",source:"@site/docs/fonts.md",slug:"/fonts",permalink:"/docs/fonts",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/fonts.md",version:"current",sidebar_label:"\ud83c\udd8e Fonts",sidebar:"docs",previous:{title:"Share",permalink:"/docs/share"},next:{title:"AWS Context",permalink:"/docs/aws"}},c=[{value:"Nerd Fonts",id:"nerd-fonts",children:[]},{value:"Other Fonts",id:"other-fonts",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"nerd-fonts"},"Nerd Fonts"),Object(a.b)("p",null,"Oh my Posh was designed to use ",Object(a.b)("a",{parentName:"p",href:"https://www.nerdfonts.com/"},"Nerd Fonts"),". Nerd Fonts are popular fonts that are patched to include icons.\nWe recommend ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/Meslo.zip"},"Meslo LGM NF"),", but any Nerd Font should be compatible with the standard ",Object(a.b)("a",{parentName:"p",href:"https://github.com/JanDeDobbeleer/oh-my-posh/tree/main/themes"},"themes"),"."),Object(a.b)("p",null,"To see the icons displayed in Oh my Posh, ",Object(a.b)("strong",{parentName:"p"},"install")," a ",Object(a.b)("a",{parentName:"p",href:"https://www.nerdfonts.com/"},"Nerd Font"),", and ",Object(a.b)("strong",{parentName:"p"},"configure")," your terminal to use it."),Object(a.b)("h4",{id:"windows"},"Windows"),Object(a.b)("p",null,"Download your chosen Nerd Font, and install the font system-wide. See this ",Object(a.b)("a",{parentName:"p",href:"https://github.com/JanDeDobbeleer/oh-my-posh/issues/145#issuecomment-730162622"},"thread")," for more context."),Object(a.b)("h4",{id:"windows-terminal"},"Windows Terminal"),Object(a.b)("p",null,"Once you have installed a Nerd Font, you will need to configure the Windows Terminal to use it. This can be easily done\nby modifying the Windows Terminal settings (default shortcut: ",Object(a.b)("inlineCode",{parentName:"p"},"CTRL + ,"),"). In your ",Object(a.b)("inlineCode",{parentName:"p"},"settings.json")," file, add the\n",Object(a.b)("inlineCode",{parentName:"p"},"fontFace")," attribute under the ",Object(a.b)("inlineCode",{parentName:"p"},"defaults")," attribute in ",Object(a.b)("inlineCode",{parentName:"p"},"profiles"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "profiles":\n    {\n        "defaults":\n        {\n            "fontFace": "MesloLGM NF"\n        }\n    }\n}\n')),Object(a.b)("h3",{id:"other-fonts"},"Other Fonts"),Object(a.b)("p",null,"If you are not interested in using a Nerd Font, you will want to use a theme which doesn't include any Nerd Font icons.\nThe ",Object(a.b)("inlineCode",{parentName:"p"},"minimal")," themes do not make use of Nerd Font icons."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/configure"},"Creating your own theme")," is always an option too \ud83d\ude0a"))}d.isMDXComponent=!0}}]);