# Au_emitWinnerContract
Calling a smart contract through another smart contract both deployed on sepolia network
## Emit the Winner event

My goal is to Emit the winner event on this smart contract on the Sepolia testnet: https://sepolia.etherscan.io/address/0x8aaC01067E00Da295F966231599921e68b7E17c0#code

Taking a look at the Code tab in Etherscan, you'll see that the source code for this contract looks like this:

```shell
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Contract {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}
```

This project demonstrates a basic Hardhat use case how we had to make it so the tx.origin (the EOA who originated the transaction) is not equal to the msg.sender.
