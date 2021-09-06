let db = require('../model/db'); 
const SMSClient = require('@alicloud/sms-sdk')

let myController={
     /* 获取个人信息 */
    getMyInfo:function(id,callback){
        db.findById('userinfo',id,function(res){
            callback(res)
        })
    },
     /* 修改个人信息 */
    updateMyInfo:function(params,callback){
        db.updateById('userinfo',params,function(res){
            callback(res)
        })
    },
     /* 获取短信验证码 */
    getSMS:function(params,callback){
        
    },
};
module.exports=myController;
