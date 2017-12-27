var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('list of contracts that we know about');
});

router.get('/router/:contractName', function(req, res, next) {
  res.send('contract details for contract identified by :contractName');  
});

module.exports = router;
