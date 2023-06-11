require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/E9vADNOVJpRRr59SnHiYLfW9aYqN7JkY',
      accounts: ['0xd07Eaff67B5f48425F160c20517Af61152dBF69B'],
    },
  },
};