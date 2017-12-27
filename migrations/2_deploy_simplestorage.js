var SimpleStorage = artifacts.require("SimpleStorage");
module.exports = function(deployer) {
  // Pass 42 to the contract as the first constructor parameter, private for the node of the sender and node 5
  // TODO externalize privateFor
  deployer.deploy(SimpleStorage, 42, {privateFor: ["oXt+2ucDoU90oMNcHTalxg3T9s2Dh8Ncqx2/OwG8kCo="]})
};
