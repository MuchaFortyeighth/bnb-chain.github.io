"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[4581],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(t),h=i,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},14002:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>r,toc:()=>s,default:()=>c});var a=t(87462),i=(t(67294),t(3905));const o={},l="Install Binaries",r={unversionedId:"beaconchain/develop/node/install",id:"beaconchain/develop/node/install",isDocsHomePage:!1,title:"Install Binaries",description:"This guide will explain how to install the binaries: bnbchaind  and bnbcli, onto your server. With these installed on a server, you can participate in the mainnet or testnet as a Full Node. Full Nodes of Beacon Chain  also help the network by accepting transactions from other nodes and then relaying them to the core Binance network.",source:"@site/docs/beaconchain/develop/node/install.md",sourceDirName:"beaconchain/develop/node",slug:"/beaconchain/develop/node/install",permalink:"/docs/beaconchain/develop/node/install",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/develop/node/install.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Encoding Examples",permalink:"/docs/beaconchain/learn/encoding/amino-example"},next:{title:"Join Mainnet",permalink:"/docs/beaconchain/develop/node/join-mainnet"}},s=[{value:"Supported Platforms",id:"supported-platforms",children:[{value:"Option One: Installation Script",id:"option-one-installation-script",children:[],level:3},{value:"Option Two: Manual Installation",id:"option-two-manual-installation",children:[],level:3}],level:2},{value:"Next",id:"next",children:[],level:2}],p={toc:s};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install-binaries"},"Install Binaries"),(0,i.kt)("p",null,"This guide will explain how to install the binaries: ",(0,i.kt)("inlineCode",{parentName:"p"},"bnbchaind"),"  and ",(0,i.kt)("inlineCode",{parentName:"p"},"bnbcli"),", onto your server. With these installed on a server, you can participate in the mainnet or testnet as a Full Node. Full Nodes of Beacon Chain  also help the network by accepting transactions from other nodes and then relaying them to the core Binance network."),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("p",null,"We support running a full node on ",(0,i.kt)("inlineCode",{parentName:"p"},"Mac OS"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Windows")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Linux"),"."),(0,i.kt)("h3",{id:"option-one-installation-script"},"Option One: Installation Script"),(0,i.kt)("p",null,"We have a community-maintained installer script (",(0,i.kt)("inlineCode",{parentName:"p"},"install.sh"),") that takes care of chain directory setup. This uses the following defaults:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Home folder in ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.bnbchaind")),(0,i.kt)("li",{parentName:"ul"},"Client executables stored in ",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"lightd")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"bnbchaind"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# One-line install\nsh <(wget -qO- https://raw.githubusercontent.com/bnb-chain/node-binary/master/install.sh)\n")),(0,i.kt)("p",null,"The script will install the ",(0,i.kt)("inlineCode",{parentName:"p"},"bnbchain"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"bnbcli")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tbnbcli")," binaries. Verify that everything is OK:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ bnbchaind version\n$ bnbcli version\n")),(0,i.kt)("h3",{id:"option-two-manual-installation"},"Option Two: Manual Installation"),(0,i.kt)("p",null,"We currently use this repo to store historical versions of the compiled ",(0,i.kt)("inlineCode",{parentName:"p"},"node-binaries"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install Git LFS")),(0,i.kt)("p",null,"Git Large File Storage (LFS) replaces large files such as audio samples, videos, datasets, and graphics with text pointers inside Git, while storing the file contents on a remote server like GitHub.com or GitHub Enterprise."),(0,i.kt)("p",null,"Please go to ",(0,i.kt)("a",{parentName:"p",href:"https://git-lfs.github.com/"},"https://git-lfs.github.com/")," and install ",(0,i.kt)("inlineCode",{parentName:"p"},"git lfs"),"."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Download Binary with Git LFS:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git lfs clone https://github.com/bnb-chain/node-binary.git\n")),(0,i.kt)("p",null,"Please go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/node-binary/blob/master/fullnode/Changelog.md"},"changelog")," to get the information about the latest release of full node version."),(0,i.kt)("p",null,"Go to directory according to the network you want to join in."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Replace the ",(0,i.kt)("inlineCode",{parentName:"li"},"network")," variable with ",(0,i.kt)("inlineCode",{parentName:"li"},"testnet")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"prod")," in the following command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd node-binary/fullnode/{network}/{version}\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Copy the executables (i.e.bnbchaind or bnbcli) to /usr/local/bin")),(0,i.kt)("h2",{id:"next"},"Next"),(0,i.kt)("p",null,"Now you can join the ",(0,i.kt)("a",{parentName:"p",href:"/docs/beaconchain/develop/node/join-mainnet"},"mainnet"),", the public testnet or create you own testnet"))}c.isMDXComponent=!0}}]);