module.exports = {
  networks: {
    ropsten: {
      host: 'localhost',
      gas: 4700000,             // Current Ropsten limit is approx 4712388
      gasPrice: 20e9,           // 20 GWei
      network_id: '3',
    },
    rinkeby: {
      host: 'localhost',
      gas: 7500000,             // Current approximate limit
      gasPrice: 20e9,           // 20 GWei
      network_id: '4',
    },
    kovan: {
      host: 'localhost',
      gas: 6900000,             // Current approximate limit
      gasPrice: 20e9,           // 20 GWei
      network_id: '42',
    },
    mainnet: {
      host: 'localhost',
      gas: 8e6,
      gasPrice: 20e9,           // 20 GWei
      network_id: '1',
    },
    parrot: {
      host: '192.168.1.103',
      port: 7545,
      gas: 4712388,             // Current Ropsten limit is approx 4712388
      gasPrice: 30e9,           // 30 GWei
      network_id: '3',
    },
  },
};
