const hre = require("hardhat");
const {ethers, Wallet} = require("ethers");

const CONTRACT_ADDR = "0x22D65e7E7e17BC26c982977E77BB1B72EB514C02";
const WINNING_CONTRACT_ADDR = "0x8aaC01067E00Da295F966231599921e68b7E17c0";
async function main() {
    
    const contract = await hre.ethers.getContractAt("WinnerAttempt", CONTRACT_ADDR);
    //console.log(contract);
    const resp = await contract.trigger(WINNING_CONTRACT_ADDR);

    console.log(await resp.wait());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});