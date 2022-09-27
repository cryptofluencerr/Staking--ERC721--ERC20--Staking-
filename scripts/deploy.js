const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("Staking");

  // inside deploy args we will put constructor args
  const token = await Token.deploy(
    "0x56a07441fd5cafeD9e0D45dc9D82931bFCd75E3A"
  );

  await token.deployed();

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
