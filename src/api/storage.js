var express = require('express');
var router = express.Router();

/* GET storage */
router.get('/', function(req, res, next) {
  res.send('equivalent to the get call on the storage contract');
});

/* POST -- save some value in the storage */
router.post('/', function(req, res, next) {
  let value = req.body.value;
  res.send('save value in storage' + value);
});

module.exports = router;
