require("@nomicfoundation/hardhat-toolbox");

const pk="a4369e77024c2ade4994a9345af5c47598c7cfb36c65e8a4a3117519883d9014"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        version: "0.8.20",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    networks:{
        Testnet: {
            accounts: [process.env.PK],
            gasPrice: 2000000000,
            url: "http://gwan-testnet.wandevs.org:36891",
        }
    }
};
