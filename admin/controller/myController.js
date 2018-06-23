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
        const accessKeyId = 'LTAIeoHqxd2oFKw3';
        const secretAccessKey = 'VC5I4Xau94vnFa2lw2TfxfCm6tRwIj';
        let smsClient = new SMSClient({accessKeyId, secretAccessKey});
        smsClient.sendSMS({
            PhoneNumbers: params.phone,
            SignName: '云通信产品',
            TemplateCode: 'SMS_137730187',
            TemplateParam: '{"code":"12345"}'
        }).then(function (res) {
            let {Code}=res
            if (Code === 'OK') {
                //处理返回参数
                console.log(res)
                callback(res)
            }
        }, function (err) {
            console.log(err)
        })
    },
};
module.exports=myController;