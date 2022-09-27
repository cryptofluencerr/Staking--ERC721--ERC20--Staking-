yarn hardhat clean
yarn hardhat compile
yarn hardhat run scripts/deploy.js --network mumbai
yarn hardhat verify --network mumbai 0x56a07441fd5cafeD9e0D45dc9D82931bFCd75E3A

yarn hardhat verify --network mumbai 0x7074d2e7A37dcC10e9A6066634F4177CF5853077 "0x56a07441fd5cafeD9e0D45dc9D82931bFCd75E3A"

Token contractAddress = https://mumbai.polygonscan.com/address/0x56a07441fd5cafeD9e0D45dc9D82931bFCd75E3A#code
Staking contractAddress = https://mumbai.polygonscan.com/address/0x7074d2e7A37dcC10e9A6066634F4177CF5853077#code
