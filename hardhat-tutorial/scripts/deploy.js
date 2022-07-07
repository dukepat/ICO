const { ethers } = require("hardhat");
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config({path:".env"})


const main = async() => {

    const cryptoDevsTokenContract = await ethers.getContractFactory("CryptoDevToken");

    const deployCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy(
        CRYPTO_DEVS_NFT_CONTRACT_ADDRESS);
    // await deployCryptoDevsTokenContract.deployed

    console.log(
        "Crypto Devs Token Contract Address:",
        deployCryptoDevsTokenContract.address
    );

    console.log("Sleeping.....");
    // Wait for etherscan to notice that the contract has been deployed
    await sleep(80000);
  
    // Verify the contract after deploying
    await hre.run("verify:verify", {
      address: deployCryptoDevsTokenContract.address,
      constructorArguments: [CRYPTO_DEVS_NFT_CONTRACT_ADDRESS],
    });
    }
  
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
main()
.then(() => process.exit(0))
.catch((error)=> {
    console.error(error);
    process.exit(1);
});