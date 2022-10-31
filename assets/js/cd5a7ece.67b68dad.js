"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60235:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>i,toc:()=>s,default:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_label:"Upgradable BEP20 Contracts on BSC",hide_table_of_contents:!1,sidebar_position:2},l="Upgradeable BEP20 Contracts on BSC",i={unversionedId:"proxy",id:"proxy",isDocsHomePage:!1,title:"Upgradeable BEP20 Contracts on BSC",description:"What are Upgradeable Contracts?",source:"@site/docs/proxy.md",sourceDirName:".",slug:"/proxy",permalink:"/docs/proxy",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/proxy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Upgradable BEP20 Contracts on BSC",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Cross Chain Transfer",permalink:"/docs/cross-chain-transfer"},next:{title:"Verify Proxy Contracts",permalink:"/docs/verify-proxy"}},s=[{value:"What are Upgradeable Contracts?",id:"what-are-upgradeable-contracts",children:[],level:2},{value:"Writing Upgradeable BEP20 Contracts",id:"writing-upgradeable-bep20-contracts",children:[{value:"Initializers",id:"initializers",children:[],level:3}],level:2},{value:"Using  Truffle",id:"using--truffle",children:[{value:"Setting up the Environment",id:"setting-up-the-environment",children:[],level:3},{value:"Installation",id:"installation",children:[],level:3},{value:"Create upgradeable contract",id:"create-upgradeable-contract",children:[],level:3},{value:"Test the contract locally",id:"test-the-contract-locally",children:[],level:3},{value:"Transfer Control",id:"transfer-control",children:[],level:3},{value:"Transfer Owner",id:"transfer-owner",children:[],level:3},{value:"Deploy on Testnet",id:"deploy-on-testnet",children:[],level:3},{value:"Create a new version of our implementation",id:"create-a-new-version-of-our-implementation",children:[],level:3},{value:"Test the upgrade locally",id:"test-the-upgrade-locally",children:[],level:3}],level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgradeable-bep20-contracts-on-bsc"},"Upgradeable BEP20 Contracts on BSC"),(0,r.kt)("h2",{id:"what-are-upgradeable-contracts"},"What are Upgradeable Contracts?"),(0,r.kt)("p",null,"Smart contracts in EVM are designed to be immutable. Once you create them there is no way to modify them, effectively acting as an unbreakable contract among participants. What do I do if I want to expand the functionality of my contracts? What if there is a bug in the contract that leads to a loss of funds? What if a vulnerability in the Solidity compiler is discovered?\nHere\u2019s what you\u2019d need to do to fix a bug in a contract you cannot upgrade:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploy a new version of the contract"),(0,r.kt)("li",{parentName:"ul"},"Manually migrate all the states from the old one contract to the new one (which can be very expensive in terms of gas fees!)"),(0,r.kt)("li",{parentName:"ul"},"Update all contracts that interacted with the old contract to use the address of the new one"),(0,r.kt)("li",{parentName:"ul"},"Reach out to all your users and convince them to start using the new deployment (and handle both contracts being used simultaneously, as users are slow to migrate)")),(0,r.kt)("p",null,"There are several approaches that allow us to make some changes to smart contracts."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Separate logic and data")),(0,r.kt)("p",null,"By using this approach, data will be read from a designated data contract directly. This is a relatively common approach that is also used outside of Solidity. One of the main disadvantages of this approach is that you cannot change the interface of contracts external to the entire system, and you cannot add or remove functions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delegatecall Proxy")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"delegatecall")," opcode was implemented in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-7.md"},"EIP-7"),". It is possible to delegate execution to other contract, but execution context stays the same. As with delegatecall, the msg.sender will remain that of the caller of the proxy contract. One of the main disadvantages of this approach is that contract code of the proxy will not reflect the state that it stores."),(0,r.kt)("h2",{id:"writing-upgradeable-bep20-contracts"},"Writing Upgradeable BEP20 Contracts"),(0,r.kt)("p",null,"It\u2019s worth mentioning that these restrictions have their roots in how the Ethereum VM works, and apply to all projects that work with upgradeable contracts, not just OpenZeppelin Upgrades."),(0,r.kt)("h3",{id:"initializers"},"Initializers"),(0,r.kt)("p",null,"You can use your Solidity contracts in the OpenZeppelin Upgrades without any modifications, except for their constructors. Due to a requirement of the proxy-based upgradeability system, no constructors can be used in upgradeable contracts. To learn about the reasons behind this restriction, head to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies#the-constructor-caveat"},"Proxies"),"."),(0,r.kt)("p",null,"This means that, when using a contract with the OpenZeppelin Upgrades, you need to change its constructor into a regular function, typically named initialize, where you run all the setup logic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'pragma solidity ^0.6.0;\n  import "@openzeppelin/contracts/proxy/TransparentUpgradeableProxy.sol";\n  contract BEP20UpgradeableProxy is TransparentUpgradeableProxy {\n    constructor(address logic, address admin, bytes memory data) TransparentUpgradeableProxy(logic, admin, data) public {\n    }}\n\n')),(0,r.kt)("p",null,"OpenZeppelin Upgrades provides an Initializable base contract that has an initializer modifier to prevent a contract from being ",(0,r.kt)("em",{parentName:"p"},"initialized")," multiple times:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/canonical-upgradeable-bep20/blob/47ed7a710e6e86bdc85f2118bf63fc892e3b7716/contracts/BEP20TokenImplementation.sol#L37"},"https://github.com/bnb-chain/canonical-upgradeable-bep20/blob/47ed7a710e6e86bdc85f2118bf63fc892e3b7716/contracts/BEP20TokenImplementation.sol#L37")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"}," /**\n     * @dev sets initials supply and the owner\n     */\nfunction initialize(string memory name, string memory symbol, uint8 decimals, uint256 amount, bool mintable, address owner) public initializer {\n        _owner = owner;\n        _name = name;\n        _symbol = symbol;\n        _decimals = decimals;\n        _mintable = mintable;\n        _mint(owner, amount);\n    }\n\n")),(0,r.kt)("p",null,"BEP20 contract initializes the token\u2019s name, symbol, and decimals in its constructor. You should not use these contracts in your BEP20 Upgrades contract. , make sure to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"upgradableBEP20implementation")," that has been modified to use initializers instead of constructors.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-genesis-contract/blob/42922472b43397fbca9d0c84c7f72fbfaf39efc3/contracts/bep20_template/BEP20Token.template#L351"},"https://github.com/bnb-chain/bsc-genesis-contract/blob/42922472b43397fbca9d0c84c7f72fbfaf39efc3/contracts/bep20_template/BEP20Token.template#L351")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"constructor() public {\n    _name = {{TOKEN_NAME}};\n    _symbol = {{TOKEN_SYMBOL}};\n    _decimals = {{DECIMALS}};\n    _totalSupply = {{TOTAL_SUPPLY}};\n    _balances[msg.sender] = _totalSupply;\n\n  }\n\n")),(0,r.kt)("h2",{id:"using--truffle"},"Using  Truffle"),(0,r.kt)("h3",{id:"setting-up-the-environment"},"Setting up the Environment"),(0,r.kt)("p",null,"We will begin by creating a new npm project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir mycontract && cd mycontract\n")),(0,r.kt)("p",null,"Then,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm init -y\n")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"We will install Truffle."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install --save-dev truffle\nnpm install --save-dev @openzeppelin/contracts\nnpm install --save-dev zeppelin-solidity\n")),(0,r.kt)("p",null,"When running Truffle select the option to \u201cCreate a truffle-config.js\u201d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx truffle init\n")),(0,r.kt)("h3",{id:"create-upgradeable-contract"},"Create upgradeable contract"),(0,r.kt)("p",null,"This example token has a fixed supply that is minted to the deployer of the contract."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/canonical-upgradeable-bep20/blob/master/contracts/BEP20TokenImplementation.sol"},"https://github.com/bnb-chain/canonical-upgradeable-bep20/blob/master/contracts/BEP20TokenImplementation.sol")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const BEP20TokenImplementation = artifacts.require(\"BEP20TokenImplementation\");const BEP20TokenFactory = artifacts.require(\"BEP20TokenFactory\");\nconst Web3 = require('web3');const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));\nconst fs = require('fs');\nmodule.exports = function(deployer, network, accounts) { deployer.then(async () => {  await deployer.deploy(BEP20TokenImplementation);  await deployer.deploy(BEP20TokenFactory, BEP20TokenImplementation.address); });};\n")),(0,r.kt)("h3",{id:"test-the-contract-locally"},"Test the contract locally"),(0,r.kt)("p",null,"To test upgradeable contracts we should create unit tests for the implementation contract, along with creating higher level tests for testing interaction via the proxy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'contract(\'Upgradeable BEP20 token\', (accounts) => {  it(\'Create Token\', async () => {    const BEP20TokenFactoryInstance = await BEP20TokenFactory.deployed();    bep20FactoryOwner = accounts[0];    bep20Owner = accounts[1];    proxyAdmin = accounts[0];\n    const tx = await BEP20TokenFactoryInstance.createBEP20Token("ABC Token", "ABC", 18, web3.utils.toBN(1e18), true, bep20Owner, proxyAdmin, {from: bep20FactoryOwner});    truffleAssert.eventEmitted(tx, "TokenCreated",(ev) => {      bep20TokenAddress = ev.token;      return true;    });\n  });\n')),(0,r.kt)("h3",{id:"transfer-control"},"Transfer Control"),(0,r.kt)("p",null,"You can change the proxy owner to another address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let event = await bep20proxy.methods.changeAdmin(newAdmin).send({from: proxyAdmin});\nbep20proxy.getPastEvents("AdminChanged", {fromBlock: 0, toBlock: "latest"}).then(console.log)\n\n')),(0,r.kt)("h3",{id:"transfer-owner"},"Transfer Owner"),(0,r.kt)("p",null,"You can change the BEP20 token owner to another address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"    await bep20.methods.transferOwnership(accounts[5]).send({from: accounts[1]});\n    const owner = await bep20.methods.getOwner().call({from: accounts[5]});\n")),(0,r.kt)("h3",{id:"deploy-on-testnet"},"Deploy on Testnet"),(0,r.kt)("p",null,"Create the following ",(0,r.kt)("inlineCode",{parentName:"p"},"2_bep20.js")," script in the migrations directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function(deployer, network, accounts) { deployer.then(async () => {  await deployer.deploy(BEP20TokenImplementation);  await deployer.deploy(BEP20TokenFactory, BEP20TokenImplementation.address); });};\n")),(0,r.kt)("p",null,"You can first deploy our contract to a local test (such as ganache-cli) and manually interact with it, then deploy your contract to a public test network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ npx truffle console --network ganache\n")),(0,r.kt)("p",null,"We can interact with our contract using the Truffle console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'truffle(ganache)> BEP20TokenFactoryInstance = await BEP20TokenFactory.deployed();undefinedtruffle(ganache)> await BEP20TokenFactoryInstance.createBEP20Token("ABC Token", "ABC", 18, web3.utils.toBN(1e18), true, {address1}, {address2});\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: any secrets such as mnemonics or bscscan keys should not be committed to version control.")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"truffle migrate")," with the BSC testnet to deploy.  We can see our implementation contract 'BEP20TokenImplementation' and the 'BEP20TokenFactory' being deployed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Deploying 'BEP20TokenImplementation'\n   ------------------------------------\n   > transaction hash:    0xdcd37a388bf9b2f822eff5b816bd4c9db80bc4f6046e3f922cedca12162d46d9\n   > Blocks: 3            Seconds: 8\n   > contract address:    0xB3fbaf029580145885e915B3CAeEd259Edb9DfE1\n   > block number:        5174292\n   > block timestamp:     1609990661\n   > account:             0x133D144F52705cEb3f5801B63b9EBcCF4102f5Ed\n   > balance:             10.648947766\n   > gas used:            1147250 (0x118172)\n   > gas price:           20 gwei\n   > value sent:          0 ETH\n   > total cost:          0.022945 ETH\n\n   Pausing for 5 confirmations...\n   ------------------------------\n   > confirmation number: 2 (block: 5174294)\n   > confirmation number: 3 (block: 5174295)\n   > confirmation number: 5 (block: 5174297)\n\n   Deploying 'BEP20TokenFactory'\n   -----------------------------\n   > transaction hash:    0x821c8355aaecc36a9f7fe50d2b3722c840047883a6bf500343393554d8ce3696\n   > Blocks: 3            Seconds: 8\n   > contract address:    0xDC1015512AbBC71e57a607A121a4aC9CF05D89BC\n   > block number:        5174300\n   > block timestamp:     1609990685\n   > account:             0x133D144F52705cEb3f5801B63b9EBcCF4102f5Ed\n   > balance:             10.629661146\n   > gas used:            964331 (0xeb6eb)\n   > gas price:           20 gwei\n   > value sent:          0 ETH\n   > total cost:          0.01928662 ETH\n\n\n")),(0,r.kt)("h3",{id:"create-a-new-version-of-our-implementation"},"Create a new version of our implementation"),(0,r.kt)("p",null,"After a period of time, we decide that we want to add functionality to our contract. In this guide we will add an ",(0,r.kt)("inlineCode",{parentName:"p"},"whitelist")," function."),(0,r.kt)("p",null,"Create the new implementation, ",(0,r.kt)("inlineCode",{parentName:"p"},"BEP2_V2.sol")," in your contracts directory with the following Solidity code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/**   * @dev sets multiple whitelist address   */\nfunction multiWhitelistAdd(address[] memory addresses) external onlyOwner {\n        for (uint256 i = 0; i < addresses.length; i++) {\n            whitelist[addresses[i]] = true;\n        }\n    }\n /**\n     * @dev remove whitelisted address\n     */\n    function multiWhitelistRemove(address[] memory addresses) external onlyOwner {\n        for (uint256 i = 0; i < addresses.length; i++) {\n            whitelist[addresses[i]] = false;\n        }\n    }\n /**\n     * @dev check if is a whitelist address\n     */\n    function isInWhitelist(address a) internal view returns (bool) {\n        return whitelist[a];\n    }\n")),(0,r.kt)("h3",{id:"test-the-upgrade-locally"},"Test the upgrade locally"),(0,r.kt)("p",null,"To test our upgrade we should create unit tests for the new implementation contract, along with creating higher level tests for testing interaction via the proxy, checking that state is maintained across upgrades."),(0,r.kt)("p",null,"We will create unit tests for the new implementation contract. We can add to the unit tests we already created to ensure high coverage."),(0,r.kt)("p",null,"Create uograde.test.js in your test directory with the following JavaScript."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let tx = await bep20proxy.methods.upgradeTo(newInstance.address).send({from: proxyAdmin});\n bep20proxy.getPastEvents("Upgraded", {fromBlock: 0, toBlock: "latest"}).then(console.log)\n')))}p.isMDXComponent=!0}}]);