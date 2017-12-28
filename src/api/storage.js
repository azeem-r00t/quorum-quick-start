var express = require('express');
var Web3 = require('web3');
var contract = require('truffle-contract'); 
var SimpleStorageContract = require('../contracts/SimpleStorage.json');

var router = express.Router();
var DEFAULT_HOST = "http://127.0.0.1:9545";

// hack to ensure 0.1 version of web3 doesn't clash with older versions
Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;  

function addProtocolIfNeeded(host) {
  var url = host; 
  if (!/^(?:f|ht)tps?:\/\//.test(host)) {
    url = "http://" + host;
  }
  console.log(url);
  return url;
}

async function getContract(host) {
  let web3 = new Web3(addProtocolIfNeeded(host)); 
  let coinbase = await web3.eth.getCoinbase(); 
  let storage = contract(SimpleStorageContract); 
  storage.setProvider(web3.currentProvider);
  storage.defaults({ from: coinbase}); // bug in truffle that requires us that we set this, otherwise set fails with Invalid address

  let instance = await storage.deployed(); 

  return instance; 
}

/* GET storage */
router.get('/', async function(req, res, next) {
  var host = req.query.host || DEFAULT_HOST; 

  try {
    let instance = await getContract(host); 
    let secret = await instance.get();   

    res.send({ host: host, contract: { address: instance.address }, secret: secret }); 
  } catch(e) {
    console.log(e);
    // an error occurred, for now, just send it back
    res.send(JSON.stringify(e)); 
  }
});

/* POST -- save some value in the storage */
router.post('/', async function(req, res, next) {
  let host = req.query.host || DEFAULT_HOST;
  let value = req.body.value;

  try {
    let instance = await getContract(host); 
    // TODO externalize privateFor, is there a way to retrieve it from the contract object
    let result = await instance.set(value, {privateFor: ["VDtzPHon2s20cvjLMLJguPtyReMnEaNotDtCzJGRSVI="]});
    // result.tx -- tx hash
    // result.logs -- events triggered during this transaction
    // reslult.reciept -- receipt objects (includes gas used)
    res.send(result); 
  } catch (e) {
    console.log(e);
    // an error occurred, for now, just send it back
    res.send(JSON.stringify(e)); 
  }
});

module.exports = router;
