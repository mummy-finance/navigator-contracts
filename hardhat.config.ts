import {HardhatUserConfig} from "hardhat/types";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-gas-reporter";
import 'hardhat-contract-sizer';
// import "@typechain/hardhat";
import "solidity-coverage";

const config: HardhatUserConfig = {
    defaultNetwork: 'hardhat',
    namedAccounts: {
        deployer: {
            hardhat: 0,
            fantom: 0,
            optimisticEthereum: 0,
            polygonMumbai: 0,
            arbitrum: 0,
            tfantom: 0,
            opTest: 0,
        },
    },
    networks: {
        localhost: {
            timeout: 120000,
            saveDeployments: true,
            live: true,
        },
        opTest: {
            gasPrice: 60000005,
        }
    },

    solidity: {
        compilers: [
            {
                version: '0.6.12', settings: {
                    optimizer: {
                        enabled: true,
                        runs: 17,
                    },
                },
            },
            {
                version: '0.7.6', settings: {
                    optimizer: {
                        enabled: true,
                        runs: 10000
                    }
                }
            },
            {
                version: '0.8.9', settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: '0.8.16', settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
        overrides: {}
    },
};

export default config;
