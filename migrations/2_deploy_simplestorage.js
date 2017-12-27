var SimpleStorage = artifacts.require("SimpleStorage");
module.exports = function(deployer) {
  // Pass 42 to the contract as the first constructor parameter, private for node 5
  deployer.deploy(SimpleStorage, 42, {privateFor: ["v07tKGMI7/zjxZw6nOLKXXGd8TJglOPxSa7sA00N5WA="]})
};
