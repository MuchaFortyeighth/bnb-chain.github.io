"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[8478],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),b=r,m=d["".concat(l,".").concat(b)]||d[b]||u[b]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52253:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>s,toc:()=>l,default:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},o="List Transaction",s={unversionedId:"beaconchain/list",id:"beaconchain/list",isDocsHomePage:!1,title:"List Transaction",description:"Only BEP2 tokens issued on Beacon Chain  can be listed. Learn how to issue BEP2 tokens here. If a token's listing proposal has been passed by valdiators, then a list transaction must be sent before expire-time.",source:"@site/docs/beaconchain/list.md",sourceDirName:"beaconchain",slug:"/beaconchain/list",permalink:"/docs/beaconchain/list",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/list.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"List Instructions",permalink:"/docs/beaconchain/list_instruction"},next:{title:"Binance DEX Trading Specification",permalink:"/docs/beaconchain/trading-spec"}},l=[{value:"List Fee",id:"list-fee",children:[],level:2},{value:"List Transaction",id:"list-transaction-1",children:[{value:"Proposal Parameters",id:"proposal-parameters",children:[],level:3}],level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"list-transaction"},"List Transaction"),(0,r.kt)("p",null,"Only ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEP2.md"},"BEP2")," tokens issued on Beacon Chain  can be listed. Learn how to issue BEP2 tokens ",(0,r.kt)("a",{parentName:"p",href:"/docs/beaconchain/tokens"},"here"),". If a token's listing proposal has been passed by valdiators, then a ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," transaction must be sent before ",(0,r.kt)("inlineCode",{parentName:"p"},"expire-time"),"."),(0,r.kt)("h2",{id:"list-fee"},"List Fee"),(0,r.kt)("p",null,"Fees will be charge when issuing a token, creating a proposal, depositing and listing. You can refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/beaconchain/trading-spec"},"fee table in trading spec"),"."),(0,r.kt)("h2",{id:"list-transaction-1"},"List Transaction"),(0,r.kt)("h3",{id:"proposal-parameters"},"Proposal Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quote-asset-symbol"),": For now, only support BNB as quote asset."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"init-price"),": the initial price for your asset, it is boosted by ",(0,r.kt)("strong",{parentName:"li"},"1e8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"proposal-id"),": this corresponds to the listing proposal that is passed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from"),": this address should be the issuer of base asset")),(0,r.kt)("p",null,"Example on ",(0,r.kt)("strong",{parentName:"p"},"mainnet"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n$  ./bnbcli dex list -s AAA-254 --quote-asset-symbol BNB --from test \\\n--init-price 100000000 --proposal-id 15 --chain-id Binance-Chain-Tigris   --node  https://dataseed5.defibit.io:443  --json\n{\n   "Height":"282409",\n   "TxHash":"77AE3D190F430FE6E4B1A9659BEBB3F022CF7631",\n   "Response":{\n      "log":"Msg 0: ",\n      "tags":[\n         {\n            "key":"YWN0aW9u",\n            "value":"ZGV4TGlzdA=="\n         }\n      ]\n   }\n}\n')),(0,r.kt)("p",null,"Example on ",(0,r.kt)("strong",{parentName:"p"},"testnet"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$  ./tbnbcli dex list -s AAA-254 --quote-asset-symbol BNB --from test \\\n--init-price 100000000 --proposal-id 15 --chain-id=Binance-Chain-Ganges --node=data-seed-pre-2-s1.binance.org:80 --json\n{\n   "Height":"282409",\n   "TxHash":"77AE3D190F430FE6E4B1A9659BEBB3F022CF7631",\n   "Response":{\n      "log":"Msg 0: ",\n      "tags":[\n         {\n            "key":"YWN0aW9u",\n            "value":"ZGV4TGlzdA=="\n         }\n      ]\n   }\n}\n')),(0,r.kt)("p",null,"After the transaction is executed, you could see the newly added trading pair from Explorer and maket API."))}p.isMDXComponent=!0}}]);