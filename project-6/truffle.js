const HDWallet = require("truffle-hdwallet-provider");

infuraKey = "INFURA KEY";

mnemonic = "MNEMONIC";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    sepolia: {
      provider: () =>
        new HDWallet(mnemonic, `https://sepolia.infura.io/v3/${infuraKey}`),
      network_id: 11155111, // sepolia's id
    },
  },
};
