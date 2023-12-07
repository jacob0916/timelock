// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
	/*
	let deployer = (await hre.ethers.getSigner()).address;
	console.log(deployer)
  	let TokenManagerDelegateV2 = await hre.ethers.getContractFactory("WanTimeLockController");
  	let tokenManagerDelegate = await TokenManagerDelegateV2.deploy();
    	await tokenManagerDelegate.deployed();
	console.log(tokenManagerDelegate)
	*/
	const adminAddr="0x2d0e7c0813a51d3bd1d08246af2a8a7a57d8922e"
	const minDelay=1

  	//const lock = await hre.ethers.deployContract("WanTimelockController", [minDelay,[adminAddr], [adminAddr],adminAddr],{
        //  value: 0x00,
        //})

  	const lock = await hre.ethers.deployContract("WanTimelockController", [minDelay,[adminAddr], [adminAddr],adminAddr])

  	await lock.waitForDeployment();
 	console.log("deploy done")
	console.log("lock",lock)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});