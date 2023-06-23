// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";


interface Contract {
    function attempt() external;
    
}


contract WinnerAttempt {
    function trigger(address winnerContractAddress) external{
        Contract(winnerContractAddress).attempt();
    }
}
