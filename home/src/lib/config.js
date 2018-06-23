let baseUrl = 'http://localhost:8080';
export let apiConfig = {
    /* 个人中心 */
    getMyInfo:baseUrl+'/my/getMyInfo',//获取个人资料
    updateMyInfo:baseUrl+'/my/updateMyInfo',//修改个人资料
    sendSMS:baseUrl+'/my/getSMS',//获取短信验证码
    /* 公共数据 */
    getCity:baseUrl+'/comm/getCity',//获取短信验证码
}