---
title: "Diamonds Are Tuff, and So Is Our Token"
template: "post"
draft: false
category: "Development"
tags:
  - "Development"
  - "TuffToken"
  - "Solidity"
  - "Ethereum"
  - "Smart Contract"
description: "At TuffToken we needed a way to architect our token to support the unique features we wanted to 
deliver. This includes automated yield farming with liquidity providers, automated sheet balancing, automated 
Bear-market protection, reduced gas fees, governance-backed upgrades, and so much more."
---

At TuffToken we needed a way to architect our token to support the unique features we wanted to deliver. This 
includes automated yield farming with liquidity providers, automated sheet balancing, automated Bear-market protection, 
reduced gas fees, governance-backed upgrades, and so much more. This laundry list of features is of course a tall order,
but it is necessary to alleviate some glaring issues found in DeFi investment.

Currently, if you want to get involved with the glory that is DeFi and yield farming, there are a million and one 
tools, confusing terminology, and prohibitive gas fees which lead to a poor User-Experience. TuffToken handles all of 
this for you, on-chain. All you have to do is buy TuffTokens and let it do the hard work for you. (Editorial note: 
TuffToken also has other great properties to it, but that is outside the scope of this blog. Visit [TuffToken](https://tufftoken.io) 
and read our white paper to learn more.)

These features make TuffToken truly one-of-a-kind. However, going into the unknown was hard and presented us with new 
challenges. For example, during the initial POC of coupling our yield farming integration with our treasury we noticed 
some showstoppers. Two of the biggest issues were:
1) a contract cannot automatically approve another contract to spend its holdings. This is because a contract is not a 
   signer and does not possess the private key to do so
2) using multiple contracts that need to transact with each other, especially in the manner of TuffToken, would 
   significantly increase gas cost

The Diamond standard solves these issues.

## TuffToken ❤️ Diamonds
Diamonds enabled us to save on gas fees, automate our contracts on-chain, provide upgrades elegantly (with 
governance of course), and structure our contracts with clean code principles. This is done under the hood as the 
Diamond keeps track of TuffToken's facets and their functions. The Diamond proxies to these facets via `delegatecall`, 
which uses the facet contract’s logic, but with the state of the Diamond. Managing state is an important point, and I 
will get back to later on.

For those interested in the code that makes Diamonds possible for TuffToken, you can check out my [PR here](https://github.com/BuffChain/tufftoken/pull/8). 
There is a lot going on there, and it is really the first pass at implementing Diamonds. Some of the nuances you see in 
that PR are explained in the [Limitations](#limitations) section further below.

## Along the Journey
With all of Diamond’s greatness, implementing it was not easy. Diamonds themselves are a relatively new contract
architecture pattern, and the surrounding tooling is even newer. I got stuck numerous times, and at some points I
thought the prospects of TuffToken were in peril. I even dove into the weeds of the `hardhat-deploy` plugin to fix some 
bugs and to implement new features.

For instance, I added support to deploy facets by artifact, instead of by name ([PR here](https://github.com/wighawag/hardhat-deploy/pull/232)). 
That feature would provide us, and anyone else who use the `hardhat-deploy` plugin, more flexibility in architecting 
their contract. In another case, [this PR](https://github.com/wighawag/hardhat-deploy/pull/222) updated Diamonds to the 
latest version available, based on solidity v0.8. Doing this ensured I was using the latest and greatest that the 
Diamond standard had to offer.

## Limitations
Even with the aforementioned enhancements, `hardhat-deploy` left much to be desired. For example, `hardhat-deploy` 
supports only one of the three proposed Diamond implementations. While that is a minor issue for TuffToken's use case, 
we had several other issues that proved to be massive headaches. Let's dig into the major quirks of implementing 
Diamonds into TuffToken:

1) Storage

A Diamond contract is where the state and storage of all facets live. Facets are merely used for their code, their 
logic. Because of this, we needed to pay special attention to managing that state throughout our facets. If not, then 
variables between your contracts will overwrite each other. So to prevent this, we used what is called the Diamond 
storage pattern, and it looks a bit like this:
```
 string constant NAMESPACE = "io.BuffChain.TuffToken.UniswapPriceConsumerLib.1";
 bytes32 constant POSITION = keccak256(bytes(NAMESPACE));
 
 struct StateStorage {
     bool isInit;
     address tokenA;
     address tokenB;
     uint24 fee;
     address factoryAddr;
 }
 
 function getState() internal pure returns (StateStorage storage stateStorage) {
     bytes32 position = POSITION;
 
     //In solidity > 0.7, inline assembly slot and offset variables are referenced with a period. For instance,
     // variable `x` is referenced by `x.slot`
     assembly {
         stateStorage.slot := position
     }
 }
```
There are a lot of nuances here, which you can learn more about by [this blog](https://medium.com/1milliondevs/new-storage-layout-for-proxy-contracts-and-diamonds-98d01d0eadb) 
post by the author of the Diamond standard, Nick Mudge.

2) Initializer Pattern

Since constructors are not supported by the `hardhat-deploy` plugin, we had to come up with another way to initialize 
our contract and its state. We dubbed this the initializer pattern:
```
 modifier tuffTokenInitLock() {
     require(isTuffTokenInit(), string(abi.encodePacked(TuffTokenLib.NAMESPACE, ": ", "UNINITIALIZED")));
     _;
 }
 
 function initTuffToken(address initialOwner) public {
     require(!isTuffTokenInit(), string(abi.encodePacked(TuffTokenLib.NAMESPACE, ": ", "ALREADY_INITIALIZED")));
 
     TuffTokenLib.StateStorage storage ss = TuffTokenLib.getState();
     
     //Initialize some variables here
     
     ss.isInit = true;
 }
 
 function isTuffTokenInit() public view returns (bool) {
     TuffTokenLib.StateStorage storage ss = TuffTokenLib.getState();
     return ss.isInit;
 }
 
 function name() public view tuffTokenInitLock returns (string memory) {
     TuffTokenLib.StateStorage storage ss = TuffTokenLib.getState();
     return ss.name;
 }
```
The `initTuffToken` function imitates a constructor. It can only be called once and is called immediately after 
deployment. The `tuffTokenInitLock` modifier is applied to every other function to prevent them from running before the 
contract has been fully initialized. You can see an example of that in the `name` function.

Also, while we have this code example, you can see how the contract uses the library that helps manage its state. It is 
a bit cumbersome, but the benefits far outweigh the cons.

3) Interfaces

The Diamond standard use selectors, a method to track each contracts' functions and parameters. It uses these selectors 
to know how to proxy a call to the appropriate contract. Thus function signatures have to be unique throughout all of a 
Diamond's facets. Unfortunately this means multiple implementations of an interface are not supported in the Diamond 
standard. This contradicts the purpose interfaces, and we can't practice clean code principals to the fullest because 
of that. You win some, you lose some.
