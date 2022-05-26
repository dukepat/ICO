const { ethers } = require("hardhat");
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

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

}

main()
.then(() => process.exit(0))
.catch((error)=> {
    console.error(error);
    process.exit(1);
});