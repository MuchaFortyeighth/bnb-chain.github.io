"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6798],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=r,m=u["".concat(o,".").concat(h)]||u[h]||p[h]||l;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},66269:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>s,toc:()=>o,default:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_label:"Genesis File",sidebar_position:2,hide_table_of_contents:!1},i="Genesis File",s={unversionedId:"learn/genesis",id:"learn/genesis",isDocsHomePage:!1,title:"Genesis File",description:"In this section, we explain how the genesis file of the BNB Smart Chain is structured.",source:"@site/docs/learn/genesis.md",sourceDirName:"learn",slug:"/learn/genesis",permalink:"/docs/learn/genesis",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/learn/genesis.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Genesis File",sidebar_position:2,hide_table_of_contents:!1}},o=[{value:"What is a Genesis File",id:"what-is-a-genesis-file",children:[],level:2},{value:"Explaination",id:"explaination",children:[],level:2},{value:"BNB Smart Chain Initialization",id:"bnb-smart-chain-initialization",children:[],level:2},{value:"Account and Address",id:"account-and-address",children:[],level:2}],d={toc:o};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"genesis-file"},"Genesis File"),(0,r.kt)("p",null,"In this section, we explain how the genesis file of the BNB Smart Chain is structured."),(0,r.kt)("h2",{id:"what-is-a-genesis-file"},"What is a Genesis File"),(0,r.kt)("p",null,"A genesis file is a JSON file which defines the initial state of your blockchain. It can be seen as height ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," of your blockchain. The first block, at height ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", will reference the genesis file as its parent."),(0,r.kt)("p",null,"The state defined in the genesis file contains all the necessary information, like initial token allocation, genesis time, default parameters, and more. Let us break down these information."),(0,r.kt)("p",null,"Genesis Link for Mainnet:  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc/releases/download/v1.0.2/mainnet.zip"},"https://github.com/bnb-chain/bsc/releases/download/v1.0.2/mainnet.zip"),"\nGenesis Link for Chapel Testnet: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc/releases/download/v1.0.2/testnet.zip"},"https://github.com/bnb-chain/bsc/releases/download/v1.0.2/testnet.zip")),(0,r.kt)("h2",{id:"explaination"},"Explaination"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chainId"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"66")," for main-net and ",(0,r.kt)("strong",{parentName:"p"},"96")," for test-net.  To compatible with third part service that already supports Ethereum, we\u2019d better not use network id that Ethereum ecology that already used.  The network id of test-net should be distinct from main-net."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"period"))),(0,r.kt)("p",null,"Minimum difference between two consecutive block\u2019s timestamps. Suggested 3s for the testnet ."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"epoch"))),(0,r.kt)("p",null,"Number of blocks after which to checkpoint and reset the pending votes. Suggested 100 for testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nonce"))),(0,r.kt)("p",null,"The nonce is the cryptographically secure mining proof-of-work that proves beyond reasonable doubt that a particular amount of computation has been expended in the determination of this token value."),(0,r.kt)("p",null,"In BNB Smart Chain, this value is always set to 0x0."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"timestamp"))),(0,r.kt)("p",null,"Must be at least the parent timestamp + BLOCK_PERIOD."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"extraData")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"EXTRA_VANITY: Fixed number of extra-data prefix bytes reserved for signer vanity. Suggested 32 bytes"),(0,r.kt)("li",{parentName:"ul"},"Signer Info: validator address"),(0,r.kt)("li",{parentName:"ul"},"EXTRA_SEAL bytes (fixed) is the signer\u2019s signature sealing the header."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"gasLimit")))),(0,r.kt)("p",null,"A scalar value equal to the current chain-wide limit of Gas expenditure per block. High in our case to avoid being limited by this threshold during tests. Note: this does not indicate that we should not pay attention to the Gas consumption of our Contracts."),(0,r.kt)("p",null,"GasCeil is 40000000 for testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"difficulty"))),(0,r.kt)("p",null,"A scalar value corresponding to the difficulty level applied during the nonce discovering of this block.\nSuggested 0x1 for testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mixHash"))),(0,r.kt)("p",null,"Reserved for fork protection logic, similar to the extra-data during the DAO.\nMust be filled with zeroes during normal operation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"coinbase"))),(0,r.kt)("p",null,"System controled address for collecting block rewards"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"alloc"))),(0,r.kt)("p",null,"Allows to define a list of pre-filled wallets."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Contract Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Address"),(0,r.kt)("th",{parentName:"tr",align:null},"ABI file"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BSCValidatorSet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001000#code"},"0x0000000000000000000000000000000000001000")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(99438).Z},"bscvalidatorset"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SlashIndicator"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001001#code"},"0x0000000000000000000000000000000000001001")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(65630).Z},"slashindicator"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SystemReward"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001002#code"},"0x0000000000000000000000000000000000001002")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(25920).Z},"systemreward"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TendermintLightClient"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001003#code"},"0x0000000000000000000000000000000000001003")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(88839).Z},"tendermintlightclient"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TokenHub"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001004#code"},"0x0000000000000000000000000000000000001004")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(42533).Z},"tokenhub"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RelayerIncentivize"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001005#code"},"0x0000000000000000000000000000000000001005")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(22193).Z},"relayerincentivize"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RelayerHub"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001006#code"},"0x0000000000000000000000000000000000001006")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(13179).Z},"relayerhub"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GovHub"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001007#code"},"0x0000000000000000000000000000000000001007")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(91561).Z},"govhub"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TokenManager"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001008#code"},"0x0000000000000000000000000000000000001008")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(66166).Z},"tokenmanager"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CrossChain"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x0000000000000000000000000000000000002000#code"},"0x0000000000000000000000000000000000002000")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(24307).Z},"crosschain"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"number"))),(0,r.kt)("p",null,"Block height in the chain, where the height of the genesis is block 0."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"parentHash"))),(0,r.kt)("p",null,"The Keccak 256-bit hash of the entire parent block\u2019s header (including its nonce and mixhash). Pointer to the parent block, thus effectively building the chain of blocks. In the case of the Genesis block, and only in this case, it's 0."),(0,r.kt)("h2",{id:"bnb-smart-chain-initialization"},"BNB Smart Chain Initialization"),(0,r.kt)("p",null,"There are two requirements we need to meet:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"There are already some BNBs in the BC network when it starts up."),(0,r.kt)("li",{parentName:"ol"},"All the initial validators of BNB Smart Chain should be recorded in the BC.")),(0,r.kt)("p",null,"The first one is a must, because if we want to transfer some BNB to BSC, we will consume some gas in BSC. So we must ensure there are already some BNBs in BSC. That means the first interchain transfer should be done in the genesis block of side chain."),(0,r.kt)("p",null,"For the second one, we should have that to ensure all the validators info and changes are tracked in the main chain."),(0,r.kt)("p",null,"So the solution is we enable the staking functionality of BSC first on BC. So people can apply to be a validator or delegate to these candidates. We can have a time limit. After that, we collect all the elected validators and write them to the genesis of BSC."),(0,r.kt)("h2",{id:"account-and-address"},"Account and Address"),(0,r.kt)("p",null,"For normal users, all the keys and addresses can be generated via ",(0,r.kt)("a",{parentName:"p",href:"/docs/binance"},"Binance Extension Wallet"),"."),(0,r.kt)("p",null,"This default wallet would use a similar way to generate keys as Ethereum, i.e. use 256 bits entropy to generate a 24-word mnemonic based on BIP39, and then use the mnemonic and an empty passphrase to generate a seed; finally use the seed to generate a master key, and derive the private key using BIP32/BIP44 with HD prefix as \"44'/60'/\", which is the same as Ethereum's derivation path."))}c.isMDXComponent=!0},99438:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/bscvalidatorset-e93af3ed11dcc8b8f5a0e31cf43e8683.abi"},24307:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/crosschain-6c943df2b1a8e3b8393b22843d377d3a.abi"},91561:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/govhub-ebb0b1dd9adfd7853efb6998525fcfd2.abi"},13179:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/relayerhub-1922b1e0cba6061932ff2d4213266998.abi"},22193:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/relayerincentivize-13feec12cd9c3b44a7bfd4dcfd371a8b.abi"},65630:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/slashindicator-0f5d34f574de68095e3b82cdbbad1e5c.abi"},25920:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/systemreward-f70b7f8c7fd637c0d83ef49226f7ad67.abi"},88839:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/tendermintlightclient-4874bd41584670e92156af58e6308c7d.abi"},42533:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/tokenhub-f4db6c171d894cbbb74fafe6a0c744cc.abi"},66166:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/tokenmanager-479524181e732b33de075eacca6d6820.abi"}}]);