var SimpleStorage = artifacts.require("SimpleStorage");
module.exports = function(deployer) {
  // Pass 42 to the contract as the first constructor parameter, private for the node of the sender and node 5
  deployer.deploy(SimpleStorage, 42, {privateFor: ["p0hHr3G2JRLGe+ZuXUDjbGEApNEOyvWEWJ50grcR2wE="]})
};
