require("@nomiclabs/hardhat-waffle")
require("hardhat-deploy")
require("dotenv").config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.0" }],
    },
    networks: {
        localhost: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        goerli: {
            chainId: 5,
            blockConfirmations: 2,
            url: process.env.GOERLI_RPC_URL,
            accounts: [process.env.ETH_PRIVATE_KEY],
        },
    },
}
