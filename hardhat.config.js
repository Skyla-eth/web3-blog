require("@nomiclabs/hardhat-waffle")

const PRIVATE_KEY = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
const ALCHEMY = "https://polygon-mumbai.g.alchemy.com/v2/T9phrSnu29TqbyekFVXhESEDV90RgcoV"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: ALCHEMY,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    hardhat: {
      chainId: 1337
    }
  }
};
