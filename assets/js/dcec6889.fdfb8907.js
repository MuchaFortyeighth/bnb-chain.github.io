"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3231],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),m=o,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return a?n.createElement(d,r(r({ref:t},u),{},{components:a})):n.createElement(d,r({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},92310:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>r,metadata:()=>s,toc:()=>l,default:()=>u});var n=a(87462),o=(a(67294),a(3905));const i={sidebar_label:"Using Black IDE",hide_table_of_contents:!1,sidebar_position:2},r="Using Black IDE to Deploy NFTs on BSC",s={unversionedId:"nft_blackide",id:"nft_blackide",isDocsHomePage:!1,title:"Using Black IDE to Deploy NFTs on BSC",description:"In this tutorial, we provide a step-by-step guide to the readers on how to issue Non-fungible tokens (NFTs) (ERC721/1155) on the BNB Smart Chain (BSC) Testnet using the Black IDE. This is a detailed guide to learning how to issue, mint and transfer NFTs on the BSC Testnet. The technology stack used in this tutorial includes Solidity , Truffle, MetaMask, and BlackIDE.",source:"@site/docs/nft_blackide.md",sourceDirName:".",slug:"/nft_blackide",permalink:"/docs/nft_blackide",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/nft_blackide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Using Black IDE",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Using Truffle",permalink:"/docs/ERC721"},next:{title:"Introduction",permalink:"/docs/BEP20"}},l=[{value:"Learning Takeaways:",id:"learning-takeaways",children:[],level:2},{value:"Technology Stack Details",id:"technology-stack-details",children:[],level:2},{value:"Brief Introduction Tech Stack",id:"brief-introduction-tech-stack",children:[],level:2},{value:"Setting up the Environment",id:"setting-up-the-environment",children:[],level:2},{value:"Login into Black IDE",id:"login-into-black-ide",children:[],level:2},{value:"Create New Project",id:"create-new-project",children:[],level:2},{value:"Smart Contract Creation",id:"smart-contract-creation",children:[],level:2},{value:"Write your smart contract code",id:"write-your-smart-contract-code",children:[],level:2},{value:"Edit default project settings",id:"edit-default-project-settings",children:[],level:2},{value:"Connect the Black IDE to the BSC Testnet",id:"connect-the-black-ide-to-the-bsc-testnet",children:[],level:2},{value:"Acquire BNB Test Tokens",id:"acquire-bnb-test-tokens",children:[],level:2},{value:"Deploy Smart Contract on BSC Testnet",id:"deploy-smart-contract-on-bsc-testnet",children:[],level:2},{value:"Interact with deployed smart contract and Mint NFTs",id:"interact-with-deployed-smart-contract-and-mint-nfts",children:[],level:2},{value:"Mint NFTs",id:"mint-nfts",children:[],level:2},{value:"View Your NFTs in Metamask Wallet",id:"view-your-nfts-in-metamask-wallet",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-black-ide-to-deploy-nfts-on-bsc"},"Using Black IDE to Deploy NFTs on BSC"),(0,o.kt)("p",null,"In this tutorial, we provide a step-by-step guide to the readers on how to issue Non-fungible tokens (NFTs) (ERC721/1155) on the BNB Smart Chain (BSC) Testnet using the Black IDE. This is a detailed guide to learning how to issue, mint and transfer NFTs on the BSC Testnet. The technology stack used in this tutorial includes Solidity , Truffle, MetaMask, and BlackIDE. "),(0,o.kt)("h2",{id:"learning-takeaways"},"Learning Takeaways:"),(0,o.kt)("p",null,"This tutorial will help you gain knowledge on the following learning points:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using BlackIDE for smart contract development;"),(0,o.kt)("li",{parentName:"ul"},"Managing Keypairs and Funding BNB Tokens to your account on BlackIDE;"),(0,o.kt)("li",{parentName:"ul"},"MetaMask Wallet connectivity to BSC Testnet;"),(0,o.kt)("li",{parentName:"ul"},"Smart-contract development;"),(0,o.kt)("li",{parentName:"ul"},"Issuing, minting, and transferring NFTs;")),(0,o.kt)("h2",{id:"technology-stack-details"},"Technology Stack Details"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"BlackIDE v0.15.4"),(0,o.kt)("li",{parentName:"ul"},"Truffle v5.5.19 (core: 5.5.19)"),(0,o.kt)("li",{parentName:"ul"},"MetaMask Wallet v10.16.1"),(0,o.kt)("li",{parentName:"ul"},"Docker v20.10.14")),(0,o.kt)("h2",{id:"brief-introduction-tech-stack"},"Brief Introduction Tech Stack"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Solidity:")," one of the most popular object-oriented high-level smart contract programming languages. For more details on Solidity, refer here."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"MetaMask Wallet Browser Extension:")," we recommend using the Metamask Chrome extension. It is a web wallet that allows connecting the chrome browser to any valid blockchain network."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Black IDE:")," Black IDE is an integrated development environment (IDE), making developing EVM-compatible smart contracts faster and easier. Black IDE offers both desktop and web (Black IDE Web) applications.")),(0,o.kt)("h2",{id:"setting-up-the-environment"},"Setting up the Environment"),(0,o.kt)("p",null,"We aim to keep this tutorial as simple as possible and hence tend to use as minimal resources as possible and have used the following tools in this tutorial."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Metamask Wallet"),(0,o.kt)("li",{parentName:"ul"},"Ensure that you have the Metamask Wallet extension installed and running on our browser."),(0,o.kt)("li",{parentName:"ul"},"Configure the Metamask wallet for use with the BSC Testnet. Use the following details to add the BSC Testnet. For further details, refer here."),(0,o.kt)("li",{parentName:"ul"},"Network Name: BSC Testnet"),(0,o.kt)("li",{parentName:"ul"},"RPC URL: ",(0,o.kt)("a",{parentName:"li",href:"https://data-seed-prebsc-1-s1.binance.org:8545/"},"https://data-seed-prebsc-1-s1.binance.org:8545/")),(0,o.kt)("li",{parentName:"ul"},"Chain ID: 97"),(0,o.kt)("li",{parentName:"ul"},"Currency Symbol: BNB"),(0,o.kt)("li",{parentName:"ul"},"Block Explorer URL: ",(0,o.kt)("a",{parentName:"li",href:"https://testnet.bscscan.com"},"https://testnet.bscscan.com")," "),(0,o.kt)("li",{parentName:"ul"},"Black IDE: both desktop app and web app are available and it is up to your convenience to choose from. For this tutorial, we used the desktop app as the web app lacks support for importing OpenZeppelin Contracts. "),(0,o.kt)("li",{parentName:"ul"},"Download/Install any dependencies required by BlackIDE")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177942609-e2c942a6-342c-46cd-b794-92fc8e72bdc0.png",alt:"image"})),(0,o.kt)("h2",{id:"login-into-black-ide"},"Login into Black IDE"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the Black IDE desktop application. We will be using it for compiling and deploying our smart contract for NFTs on the BSC Testnet."),(0,o.kt)("li",{parentName:"ol"},"Click on the Login button and authorize using your GitHub account.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177942736-d3d79717-8952-4fc7-b7c2-b28dc978f277.png",alt:"image"})),(0,o.kt)("h2",{id:"create-new-project"},"Create New Project"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Click on the New button next to the projects to create a new project. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177942931-510837df-ed97-4a8e-a4df-cc4aeca24294.png",alt:"image"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Specify the location where you want to save your project on your device, the project name, e.g. \u201cBSC-NFT\u201d, and select the project type from the dropdown list as \u201cBasics- ERC20, ERC721, & ERC1155 (v31+)\u201d. Then click the Create button to create the project.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177942969-a1e8170f-e806-44d5-9e9f-99e5cc2914f8.png",alt:"image"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Remember the smart contract in this tutorial is just a sample, you can always modify and be innovative.")),(0,o.kt)("h2",{id:"smart-contract-creation"},"Smart Contract Creation"),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Expand the contracts menu and delete the default files. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177948005-436776e5-07b4-4109-8b19-897925e623e4.png",alt:"image"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Right-click on the contracts menu and select New File. Specify a name for your file, e.g., BSC-NFT.sol, and then click Create button.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177943065-cc591abd-d856-4c9c-bbef-94b2e826af7f.png",alt:"image"})),(0,o.kt)("h2",{id:"write-your-smart-contract-code"},"Write your smart contract code"),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Copy the following code into your smart contract file. We have used the contract code from this ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/RumeelHussainbnb/ERC721_NFT/blob/main/BSC-NFT.sol"},"repo"),"."),(0,o.kt)("li",{parentName:"ol"},"Remember to change the ",(0,o.kt)("inlineCode",{parentName:"li"},"MINT_PRICE"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"MAX_SUPPLY"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"name"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"symbol")," of the token as per your need. Also, remember to change the ",(0,o.kt)("inlineCode",{parentName:"li"},"_baseURI")," as per your token."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/93580180/177949895-a095fdb5-f770-4530-84f6-8854a0d7a5eb.png",alt:"image"}))),(0,o.kt)("h2",{id:"edit-default-project-settings"},"Edit default project settings"),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"Click on the config.json file to change the default setting. Change the main file name to the name of your contract, BSC-NFT.sol in our case. Similarly, change the name of the smart contract to deploy, BSCNFT.json in our case. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177948095-b6a905da-792c-47da-86d6-8a5d5db6a40b.png",alt:"image"})),(0,o.kt)("h2",{id:"connect-the-black-ide-to-the-bsc-testnet"},"Connect the Black IDE to the BSC Testnet"),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},"In order to connect the Black IDE to the BSC Testnet, click on the dropdown icon on the network menu in the top right corner and then select Testnet under the BNB Chain label.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177948186-e052e522-7069-4072-abae-fd0e6c819ee6.png",alt:"image"})),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/93580180/177943789-3557fde5-8805-4b03-ace8-05d2ace216c0.png",alt:"image"})," icon in the bottom left corner of the IDE to generate new keypair to perform transactions. You can skip this step if you already have generated a keypair. On the Keypair Manager, click on the CREATE button to generate new keypair.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177944146-eb6e2f1e-95f0-4b00-8458-c8145b008d15.png",alt:"image"})),(0,o.kt)("ol",{start:13},(0,o.kt)("li",{parentName:"ol"},"Specify your desired name for the keypair, in our case BSC-Testnet-Key. Then click on the CREATE button. Remember to keep your private keys securely and not share them with anyone.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177944170-fa9ed3bc-53d9-41f3-8a46-a07f56fee1d7.png",alt:"image"})),(0,o.kt)("h2",{id:"acquire-bnb-test-tokens"},"Acquire BNB Test Tokens"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Initially, the balance of a newly created key pair is 0.0 ETH. To get BNB test tokens, you can use the ",(0,o.kt)("a",{parentName:"li",href:"https://testnet.binance.org/faucet-smart/"},"BSC Testnet Faucet"),"."),(0,o.kt)("li",{parentName:"ul"},"Copy your public address from the keypair manager")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177944290-d06f2f06-e256-4110-8936-809c0f78e0fa.png",alt:"image"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Paste this on the facet and acquire test tokens as required, as shown below. A green pop-up is displayed on the successful transfer of test tokens.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177944333-ca8aefed-fec2-4271-aa3e-d2ccc301eb6c.png",alt:"image"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"}," Close and re-open keypair manager to verify that the balance has been updated. Wait for approx. 1-2 mins for balance to get updated.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177944370-3aa70613-be45-4558-8c83-aca1a00557c3.png",alt:"image"})),(0,o.kt)("h2",{id:"deploy-smart-contract-on-bsc-testnet"},"Deploy Smart Contract on BSC Testnet"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the appropriate Solidity compiler version from the bottom right corner of the IDE, Solc (0.8.4), ",(0,o.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/93580180/177944415-e733562a-54ad-4ed8-85a5-f17c79edfeac.png",alt:"image"}),"\nin our case. "),(0,o.kt)("li",{parentName:"ol"},"Click on the Build icon ",(0,o.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/93580180/177944483-ff523eed-017d-4265-b722-78ded06fe826.png",alt:"image"})," to build your smart contract. Upon successful build, the project navigation pane reflects a new folder named build. This folder contains contracts folder that has json files of the contracts built. All of the contracts imported in our BSCNFT contract are also built and imported as json files. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177948331-ece850ae-01fd-479b-b25f-d1f28c3400f6.png",alt:"image"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"After successfully building your contract, it\u2019s time to deploy the contract. Click on the Deploy icon ",(0,o.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/93580180/177944540-10d86198-03f2-40d8-8ac0-c013483c6458.png",alt:"image"})," for deploying your smart contract. Specify the details for your contract, as shown below, then click on the Estimate & Deploy button. The wizard will auto-estimate and fill the gas limit for your contract. Then click the Deploy button. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177944618-47b0fb1d-0ce3-4512-9b29-66f7a3416325.png",alt:"image"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177944632-839f7ac5-c9d5-4d80-b6fe-0b6be2e6c3fb.png",alt:"image"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Deployment details will pop-up, as shown in the figure below.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177944726-41c20038-1fc5-434a-b61f-be54f36f3ac6.png",alt:"image"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"The status of the transaction will be updated to confirmed after the transaction is confirmed as shown in the figure below")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177944768-dc622464-832f-4afd-8ccd-0529c675d46d.png",alt:"image"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"You can also view this transaction by clicking on the transaction icon in the bottom left on the IDE.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177944786-8b7f3e34-e562-406b-890e-dcc22d48313f.png",alt:"image"})),(0,o.kt)("h2",{id:"interact-with-deployed-smart-contract-and-mint-nfts"},"Interact with deployed smart contract and Mint NFTs"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can also interact with the contract using the different functions. Click on the Transactions Icon on the bottom-left corner of the IDE and then transaction of deployment of your smart contract. On the transaction details, click on the contract address to access the functions to interact with the smart contract. The left most column has all the Write Functions. The middle column has the View Functions and the right most column has the Events details.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177948835-197860e5-8f25-4692-bc34-467a997f98a1.png",alt:"image"})),(0,o.kt)("h2",{id:"mint-nfts"},"Mint NFTs"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"As per our smart contract, when the contract is deployed, unless the NFTs are minted they won\u2019t be visible in the wallet. "),(0,o.kt)("li",{parentName:"ol"},"Create another keypair as defined previously. We will be issuing i.e. minting NFTs to the public address of this new keypair."),(0,o.kt)("li",{parentName:"ol"},"To mint i.e. issue an NFT to a specific user we use the \u201csafeMint\u201d function of the deployed smart contract. As shown in Steps 1 and 2 in the figure below, navigate to the deployed contracts, then in the left-most column click the drop-down menu to view the list of write functions available for use with the deployed contract. Select the \u201csafeMint\u201d function. "),(0,o.kt)("li",{parentName:"ol"},"Use the safeMint function to mint new NFTs to a specific user address. As shown in figure above, steps 3 to 6, enter the \u201cETH to send\u201d as the minting price of NFT, as per our smart contract the minting price is 50000000000000000 Wei, i.e., 0.05 ETH. We entered 0.06 ETH to cover the transaction charges as well. Then select the address to whom you want to issue (mint) an NFT to. Here, for the To address use the newly generated keypair in the section above. After this, click the transact button  to execute the safeMint function. For the Signer, ensure that you are using the account that was used to deploy the smart contract. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177949113-3de5d538-852f-4a21-aa75-47d0231b6521.png",alt:"image"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"To confirm what transfers have occurred, execute the Transfer event from the right most column. This will display the list of NFT transfers along with NFT token id, as shown in the figure below.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177945187-4e426ba2-a63f-4648-a259-fc9506ab5cb1.png",alt:"image"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"To confirm owner of an NFT, use the ownerOf function. Pass the token id as input to the function, as illustrated in the figure below.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177945228-3a984146-dfa5-4a7b-9306-6258e9990f2a.png",alt:"image"})),(0,o.kt)("h2",{id:"view-your-nfts-in-metamask-wallet"},"View Your NFTs in Metamask Wallet"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the receiving end, the user can import the NFT token details into their Metamask wallet to view the assets. Please note that currently, Metamask Web Extension does not support the use of NFTs however, the mobile app version does support it. For the next steps to view the owned NFTs in your Metamask wallet, we will be using the Metamask Mobile Application."),(0,o.kt)("li",{parentName:"ol"},"Open Keypair manager on the Black IDE and copy the private key of the keypair that you minted i.e., transfer NFT.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177945281-060b95ce-2912-49a2-aa5d-bbf848ba9688.png",alt:"image"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"On the Metamask wallet mobile app, import an account using this key pair. Enter the private key copied in the previous step and click import.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177954799-b86dae87-5274-4408-9d0b-5b52682549d1.png",alt:"image"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"After importing account, the next step is to add the BSC Testnet configuration to the wallet. Ensure that you are using the same account whose pubic address was issued the NFT.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177950571-4674930b-c8c6-4480-8808-ea587af2bb2d.png",alt:"image"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Ensure that your account is connected to the BSC Testnet. Also, ensure that you have enough BNB test tokens in your account. If not, you can use the BSC Testnet Faucet to acquire some, as mentioned earlier.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177945438-84033dff-6d51-4fe6-875b-3b12bfe815c1.png",alt:"image"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"To view the owned NFT assets your Metamask Mobile Wallet, click on the NFTs tab and then on the Import Tokens. Fill in the NFT details. In the address field, pass the address of the deployed contract and in the Id field pass the tokenID. Then click the Import button.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/177949365-52efd22c-25ac-4eac-b47e-82349d6b0a5c.png",alt:"image"})),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this tutorial, we provided a step-to-step guide on how to issue, mint and transfer NFTs on the BSC Testnet using the BlackIDE from Obsidian Labs.. The technology stack used in this tutorial includes Solidity, Truffle, MetaMask, and BlackIDE. Check out our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bnb-chain-tutorial"},"GitHub")," for more tutorials on how to develop on BSC. If you have any questions or are stuck, reach out to us on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/channels/789402563035660308/912296662834241597"},"Discord Channel"),"."))}u.isMDXComponent=!0}}]);