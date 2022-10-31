"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[7055],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=s(n),g=r,k=u["".concat(d,".").concat(g)]||u[g]||o[g]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95764:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>p,toc:()=>d,default:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={},i="Transaction Data",p={unversionedId:"beaconchain/develop/api-reference/transactions",id:"beaconchain/develop/api-reference/transactions",isDocsHomePage:!1,title:"Transaction Data",description:"A transaction in tendermint is any sequence of bytes. It's up to the ABCI application to accept or reject the transactions.",source:"@site/docs/beaconchain/develop/api-reference/transactions.md",sourceDirName:"beaconchain/develop/api-reference",slug:"/beaconchain/develop/api-reference/transactions",permalink:"/docs/beaconchain/develop/api-reference/transactions",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/develop/api-reference/transactions.md",tags:[],version:"current",frontMatter:{}},d=[{value:"Order",id:"order",children:[],level:3},{value:"Issue Msg",id:"issue-msg",children:[],level:3},{value:"Burn/Freeze/Unfreeze Msg",id:"burnfreezeunfreeze-msg",children:[],level:3},{value:"IssueTiny/IssueMini Msg",id:"issuetinyissuemini-msg",children:[],level:3},{value:"SetURI Msg",id:"seturi-msg",children:[],level:3},{value:"ListMini Msg",id:"listmini-msg",children:[],level:3},{value:"Amino Types",id:"amino-types",children:[],level:2}],s={toc:d};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transaction-data"},"Transaction Data"),(0,r.kt)("p",null,"A transaction in tendermint is any sequence of bytes. It's up to the ABCI application to accept or reject the transactions."),(0,r.kt)("p",null,"On Binance Chain, all kinds of transactions are wrapped in type ",(0,r.kt)("inlineCode",{parentName:"p"},"StdTx")," before marshalling by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tendermint/go-amino"},"Amino"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type StdTx struct {\n    Msg                       `json:"msg"`\n    Fee        StdFee         `json:"fee"`\n    Signatures []StdSignature `json:"signatures"`\n}\n')),(0,r.kt)("p",null,"All kinds of transactions have the same type of Fee and Signatures, the difference is the ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," part."),(0,r.kt)("p",null,"Adding new transaction types would not require fork of blockchain, while upgrading transaction would be done via adding new transaction type: e.g. Burn2 vs. Burn."),(0,r.kt)("h3",{id:"order"},"Order"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Msg struct {\n    From   sdk.Address `json:"from"`\n    Id     string `json:"id"`\n    Pair   string `json:"pair"`\n    Type   int8   `json:"type"`\n    Side   int8   `json:"side"`\n    Price  int64  `json:price`\n    Quantity int64 `json:"quantity"`\n    TimeInForce int8 `json:"tif"\n}\n')),(0,r.kt)("h3",{id:"issue-msg"},"Issue Msg"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Msg struct {\n  From     sdk.Address `json:"from"`\n  Name     string      `json:"name"`\n  Symbol   string      `json:"symbol"`\n  Supply   int64       `json:"supply"`\n  Decimals int8        `json:"decimals"`\n}\n')),(0,r.kt)("h3",{id:"burnfreezeunfreeze-msg"},"Burn/Freeze/Unfreeze Msg"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Msg struct {\n  From   sdk.Address `json:"from"`\n  Symbol string      `json:"symbol"`\n  Amount int64       `json:"amount"`\n}\n')),(0,r.kt)("h3",{id:"issuetinyissuemini-msg"},"IssueTiny/IssueMini Msg"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Msg struct {\n  From        sdk.AccAddress `json:"from"`\n  Name        string         `json:"name"`\n  Symbol      string         `json:"symbol"`\n  TotalSupply int64          `json:"total_supply"`\n  Mintable    bool           `json:"mintable"`\n  TokenURI    string         `json:"token_uri"`\n}\n')),(0,r.kt)("h3",{id:"seturi-msg"},"SetURI Msg"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Msg struct {\n  From     sdk.AccAddress `json:"from"`\n  Symbol   string         `json:"symbol"`\n  TokenURI string         `json:"token_uri"`\n}\n')),(0,r.kt)("h3",{id:"listmini-msg"},"ListMini Msg"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Msg struct {\n  From             sdk.AccAddress `json:"from"`\n  BaseAssetSymbol  string         `json:"base_asset_symbol"`\n  QuoteAssetSymbol string         `json:"quote_asset_symbol"`\n  InitPrice        int64          `json:"init_price"`\n}\n')),(0,r.kt)("h2",{id:"amino-types"},"Amino Types"),(0,r.kt)("p",null,"Amino uses 4-byte type prefixes to encode type information. This list was obtained through ",(0,r.kt)("inlineCode",{parentName:"p"},"cdc.PrintTypes(os.Stdout)"),"."),(0,r.kt)("p",null,"There is an example on how this prefix is used in JavaScript ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mappum/js-tendermint/blob/51f4a8601e5e1a697c905bb0612be21ad46ec484/src/types.js#L87"},"here"),". We should use ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/varstruct"},"varstruct")," to encode binary structures."),(0,r.kt)("p",null,"More documentation is available ",(0,r.kt)("a",{parentName:"p",href:"/docs/beaconchain/learn/encoding/encoding"},"here")),(0,r.kt)("p",null,"Binance Chain JavaScript SDK Amino API ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/javascript-sdk/wiki/API-Examples#amino-js-amino"},"example")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Length"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PubKeyEd25519"),(0,r.kt)("td",{parentName:"tr",align:null},"tendermint/PubKeyEd25519"),(0,r.kt)("td",{parentName:"tr",align:null},"0x1624DE64"),(0,r.kt)("td",{parentName:"tr",align:null},"0x20"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PubKeySecp256k1"),(0,r.kt)("td",{parentName:"tr",align:null},"tendermint/PubKeySecp256k1"),(0,r.kt)("td",{parentName:"tr",align:null},"0xEB5AE987"),(0,r.kt)("td",{parentName:"tr",align:null},"0x21"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PubKeyMultisigThreshold"),(0,r.kt)("td",{parentName:"tr",align:null},"tendermint/PubKeyMultisigThreshold"),(0,r.kt)("td",{parentName:"tr",align:null},"0x22C1F7E2"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PrivKeyEd25519"),(0,r.kt)("td",{parentName:"tr",align:null},"tendermint/PrivKeyEd25519"),(0,r.kt)("td",{parentName:"tr",align:null},"0xA3288910"),(0,r.kt)("td",{parentName:"tr",align:null},"0x40"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PrivKeySecp256k1"),(0,r.kt)("td",{parentName:"tr",align:null},"tendermint/PrivKeySecp256k1"),(0,r.kt)("td",{parentName:"tr",align:null},"0xE1B0F79B"),(0,r.kt)("td",{parentName:"tr",align:null},"0x20"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MsgSend"),(0,r.kt)("td",{parentName:"tr",align:null},"cosmos-sdk/Send"),(0,r.kt)("td",{parentName:"tr",align:null},"0x2A2C87FA"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Genesis"),(0,r.kt)("td",{parentName:"tr",align:null},"dex/Genesis"),(0,r.kt)("td",{parentName:"tr",align:null},"0xDE082972"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NewOrderMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"dex/NewOrder"),(0,r.kt)("td",{parentName:"tr",align:null},"0xCE6DC043"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CancelOrderMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"dex/CancelOrder"),(0,r.kt)("td",{parentName:"tr",align:null},"0x166E681B"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ListMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"dex/ListMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"0xB41DE13F"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TradingPair"),(0,r.kt)("td",{parentName:"tr",align:null},"dex/TradingPair"),(0,r.kt)("td",{parentName:"tr",align:null},"0x4F88DF56"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FeeConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"dex/FeeConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"0xF7DB5159"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OrderBookSnapshot"),(0,r.kt)("td",{parentName:"tr",align:null},"dex/OrderBookSnapshot"),(0,r.kt)("td",{parentName:"tr",align:null},"0x48C09C8E"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ActiveOrders"),(0,r.kt)("td",{parentName:"tr",align:null},"dex/ActiveOrders"),(0,r.kt)("td",{parentName:"tr",align:null},"0xBB70A053"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RecentPrice"),(0,r.kt)("td",{parentName:"tr",align:null},"dex/RecentPrice"),(0,r.kt)("td",{parentName:"tr",align:null},"0x278FAD64"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IssueMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"tokens/IssueMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"0x17EFAB80"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MintMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"tokens/MintMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"0x467E0829"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BurnMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"tokens/BurnMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"0x7ED2D2A0"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FreezeMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"tokens/FreezeMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"0xE774B32D"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UnfreezeMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"tokens/UnfreezeMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"0x6515FF0D"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AppAccount"),(0,r.kt)("td",{parentName:"tr",align:null},"bnbchain/Account"),(0,r.kt)("td",{parentName:"tr",align:null},"0x4BDC4C27"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Token"),(0,r.kt)("td",{parentName:"tr",align:null},"bnbchain/Token"),(0,r.kt)("td",{parentName:"tr",align:null},"0x140364E6"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StdTx"),(0,r.kt)("td",{parentName:"tr",align:null},"auth/StdTx"),(0,r.kt)("td",{parentName:"tr",align:null},"0xF0625DEE"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MsgCreateValidator"),(0,r.kt)("td",{parentName:"tr",align:null},"cosmos-sdk/MsgCreateValidator"),(0,r.kt)("td",{parentName:"tr",align:null},"0xEB361D01"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MsgCreateValidatorProposal"),(0,r.kt)("td",{parentName:"tr",align:null},"cosmos-sdk/MsgCreateValidatorProposal"),(0,r.kt)("td",{parentName:"tr",align:null},"0xDB6A19FD"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MsgEditValidator"),(0,r.kt)("td",{parentName:"tr",align:null},"cosmos-sdk/MsgEditValidator"),(0,r.kt)("td",{parentName:"tr",align:null},"0xC2E8BCCD"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MsgDelegate"),(0,r.kt)("td",{parentName:"tr",align:null},"cosmos-sdk/MsgDelegate"),(0,r.kt)("td",{parentName:"tr",align:null},"0x921D2E4E"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MsgBeginUnbonding"),(0,r.kt)("td",{parentName:"tr",align:null},"cosmos-sdk/BeginUnbonding"),(0,r.kt)("td",{parentName:"tr",align:null},"0xA3823C9A"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MsgBeginRedelegate"),(0,r.kt)("td",{parentName:"tr",align:null},"cosmos-sdk/BeginRedelegate"),(0,r.kt)("td",{parentName:"tr",align:null},"0x267996D2"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MsgSubmitProposal"),(0,r.kt)("td",{parentName:"tr",align:null},"cosmos-sdk/MsgSubmitProposal"),(0,r.kt)("td",{parentName:"tr",align:null},"0xB42D614E"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MsgDeposit"),(0,r.kt)("td",{parentName:"tr",align:null},"cosmos-sdk/MsgDeposit"),(0,r.kt)("td",{parentName:"tr",align:null},"0xA18A56E5"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MsgVote"),(0,r.kt)("td",{parentName:"tr",align:null},"cosmos-sdk/MsgVote"),(0,r.kt)("td",{parentName:"tr",align:null},"0xA1CADD36"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TextProposal"),(0,r.kt)("td",{parentName:"tr",align:null},"gov/TextProposal"),(0,r.kt)("td",{parentName:"tr",align:null},"0xACCBA2DE"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FixedFeeParams"),(0,r.kt)("td",{parentName:"tr",align:null},"params/FixedFeeParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0xC2A96FA3"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TransferFeeParam"),(0,r.kt)("td",{parentName:"tr",align:null},"params/TransferFeeParams"),(0,r.kt)("td",{parentName:"tr",align:null},"0x9A3D2769"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DexFeeParam"),(0,r.kt)("td",{parentName:"tr",align:null},"params/DexFeeParam"),(0,r.kt)("td",{parentName:"tr",align:null},"0x495A5044"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MiniToken"),(0,r.kt)("td",{parentName:"tr",align:null},"bnbchain/MiniToken"),(0,r.kt)("td",{parentName:"tr",align:null},"0xE0051C20"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ListMiniMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"dex/ListMiniMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"0x4C264019"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IssueMiniMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"tokens/IssueMiniMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"0xA3F16C41"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IssueTinyMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"tokens/IssueTinyMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"0xED2832D4"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SetURIMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"tokens/SetURIMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"0x7B1D34E7"),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);