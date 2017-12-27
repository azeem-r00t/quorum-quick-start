var SimpleStorage = artifacts.require("SimpleStorage");
module.exports = function(deployer) {
  // Pass 42 to the contract as the first constructor parameter, private for node 5
  deployer.deploy(SimpleStorage, 42, {privateFor: ["xOlvEM6jKJpU/JiPdxMaACzA2KaWwWJzIuXqx2RAwhY="]})
};
