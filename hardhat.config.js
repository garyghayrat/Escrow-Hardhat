require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const { PRIVATE_KEY, POLYGON_URL, RINKEBY_URL } = process.env;

module.exports = {
  solidity: "0.7.5",
  paths: {
    artifacts: "./app/artifacts",
  },
  networks: {
    rinkeby: {
      url: RINKEBY_URL,
      accounts: [PRIVATE_KEY]
    },
    mumbai: {
      url: POLYGON_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
