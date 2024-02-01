const HelloWorld = artifacts.require("HelloWorld");

module.exports = (deployer) => {
  // Deploy it!
  deployer.deploy(HelloWorld);
}