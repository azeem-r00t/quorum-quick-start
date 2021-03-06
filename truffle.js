module.exports = {
  // contracts_build_directory: "./src/contracts",
  // this causes a problem during migration: https://github.com/trufflesuite/truffle-migrate/issues/10
  networks: {
    development: {
      host: "127.0.0.1",
      port: 22001,
      network_id: "*", // match any id
      gasPrice: 0, 
      gas: 4500000
    },
    nodetwo: {
      host: "127.0.0.1",
      port: 22002,
      network_id: "*", // match any id
      gasPrice: 0, 
      gas: 4500000
    },
    nodethree: {
      host: "127.0.0.1",
      port: 22003,
      network_id: "*", // match any id
      gasPrice: 0, 
      gas: 4500000
    },
    nodefour: {
      host: "127.0.0.1",
      port: 22004,
      network_id: "*", // match any id
      gasPrice: 0, 
      gas: 4500000
    },
    nodefive: {
      host: "127.0.0.1",
      port: 22005,
      network_id: "*", // match any id
      gasPrice: 0, 
      gas: 4500000
    }
  }
};
