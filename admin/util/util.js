let util={};
/* 拼接接受参数 */
util.connectParam=(param,string)=>{
    let arr=[];
    for (v in param){
        arr.push([v]+(string||"=")+param[v]);
    }
    return arr.join(',');
}
module.exports = util;