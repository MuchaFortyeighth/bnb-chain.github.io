"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1998],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=d(a),p=r,f=h["".concat(c,".").concat(p)]||h[p]||u[p]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},59496:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>l,toc:()=>c,default:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_label:"Decentralization Further",sidebar_position:2},i="Decentralization Further",l={unversionedId:"dev-outlook/decentralization",id:"dev-outlook/decentralization",isDocsHomePage:!1,title:"Decentralization Further",description:"Candidate ValidatorSet",source:"@site/docs/dev-outlook/decentralization.md",sourceDirName:"dev-outlook",slug:"/dev-outlook/decentralization",permalink:"/docs/dev-outlook/decentralization",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/dev-outlook/decentralization.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Decentralization Further",sidebar_position:2}},c=[{value:"Candidate ValidatorSet",id:"candidate-validatorset",children:[],level:2},{value:"Temporary Maintenance Mode for Validators",id:"temporary-maintenance-mode-for-validators",children:[],level:2}],d={toc:c};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"decentralization-further"},"Decentralization Further"),(0,r.kt)("h2",{id:"candidate-validatorset"},"Candidate ValidatorSet"),(0,r.kt)("p",null,"In order to decentralize the network further, more validators should be introduced. Besides increasing the anti-censorship, it always increases the robustness and availability of the network. BSC should survive even if more than half of the validator set were censored or taken down in a hostile way."),(0,r.kt)("p",null,"Meanwhile BSC has 21 active validators and many inactive validators. The inactive validators have no reward so the incentive for the runner to ensure the node quality and the delegation from the BNB holders are not enough."),(0,r.kt)("p",null,"BSC will introduce more validators, e.g. another 20 inactive validators, into the validator set as backups, which will be called \u201cCandidates\u201d."),(0,r.kt)("p",null,"Candidates will produce blocks and charge gas fees in BSC mainnet, but in a much less chance than the official validator set of 21 elected. The unavailable candidates will be slashed as well though in a smaller size. A decent motivation is expected to be maintained so that the candidate validators are willing to ensure the quality and help secure BSC."),(0,r.kt)("p",null,"In an extreme case, if a majority of the active 21 validators get attacked and offline, Candidate Validators can report to Beacon Chain about the stale blocking, resume it and eventually propose a re-election of active validator set."),(0,r.kt)("h2",{id:"temporary-maintenance-mode-for-validators"},"Temporary Maintenance Mode for Validators"),(0,r.kt)("p",null,"Due to the design of \u2018Parlia\u2019 consensus, the absence of the validator, even if it is due to scheduled maintenance, will cause instability and capacity of BSC due to the extra waiting time and chain reorganization."),(0,r.kt)("p",null,"Here a \u201cTemporary maintenance\u201d mode should be introduced, which is supposed to last a few minutes to half an hour. The validator can claim to the network about its planned maintenance. Its seat will be temporarily dropped from the block producing rotation, though it will still be slashed."))}s.isMDXComponent=!0}}]);