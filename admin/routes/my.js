var express = require('express');
var router = express.Router();
var url=require('url');
var myController= require('../controller/myController');
/* GET users listing. */
router.get('/', function(req,res) {
  res.send('my');
});
/* 获取个人信息 */
router.get('/getMyInfo', function(req, res) {
  var params = url.parse(req.url, true).query;
  myController.getMyInfo(params.id,function(data){
    var response =data;
    res.send(JSON.stringify(response));
  });
});
/* 修改个人信息 */
router.get('/updateMyInfo', function(req, res) {
  var params = url.parse(req.url, true).query;
  myController.updateMyInfo(params,function(data){
    var response =data;
    res.send(JSON.stringify(response));
  });
});
/* 获取短信验证码 */
router.get('/getSMS', function(req, res) {
  var params = url.parse(req.url, true).query;
  console.log(params)
  myController.getSMS(params,function(data){
    var response =data;
    res.send(JSON.stringify(response));
  });
});
module.exports = router;
