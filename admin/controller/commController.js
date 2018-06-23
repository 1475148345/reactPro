let db = require('../model/db'); 
let commController={
    /* 获取城市数据 */
    getCity:function(callback){
        db.getList('province',function(res){
            callback(res)
        })
    },
};
module.exports=commController;