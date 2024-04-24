require("@nomicfoundation/hardhat-toolbox");
//require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          },
        },
      },
    ],
    // If you need to support additional compilers for other contracts, you can list them here
  },
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/HgEGmaWZVPrxCQnLvDHMCki4-LcUfTQt", // Replace with your actual URL
      accounts: ["1fe8a68d2587904c9d2b44d2aa603c297dea2bcfdbf80a0dbb03820d4216667d"] // Provide your accounts here
    }
  },
  // ... rest of hardhat config ...
};
