var express = require('express');
var router = express.Router();
var commController= require('../controller/commController');
/* GET users listing. */
router.get('/', function(req,res) {
  res.send('comm');
});

/* 获取城市 */
router.post('/getCity', function(req, res) {
    commController.getCity(function(data){
        console.log(data)
      var response =data;
      res.send(JSON.stringify(response));
    });
  });
module.exports = router;
