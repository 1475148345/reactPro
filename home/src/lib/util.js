/* 切换导航，改变状态 */
export let changeNavStatus = (arr, index) => {
    arr.map((v, i) => {
        v.active = false;
        if (index === i) {
            v.active = true;
        }
        return true;
    })
    return arr;
}
/* 弹窗弹出时，防止页面滚动 */
export let toggleBody=(isPin)=>{
    if(isPin){
        document.body.style.height = '100vh'
        document.body.style['overflow-y'] = 'hidden'
    }
    else{
        document.body.style.height = 'unset'
        document.body.style['overflow-y'] = 'auto'
    }
}
/* 返回上一个页面 */
export let returnBack = (props) => {
    props.history.goBack();
}
/* 拼接请求参数 */
export let setParam=(obj,string)=>{
    var newObj=[];
    for (let v in obj){
        newObj.push([v]+'="'+obj[v]+'"');
    }
    return '?'+newObj.join((string||'&'));
}
/* 
* @description fetch请求
* @url 请求路径
* @param 请求参数
* @method 请求方式
*/
export let http = (url, param,method) => {
    var p = new Promise(function (resolve, reject) {
        fetch(url, {
            method: method||'get',
            headers: {
                'Accept': 'application/json',  
                'Content-Type': 'application/json'  
            },
            mode:'cors', 
            body: param?setParam(param):{}
        }).then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                   if(data.status===3){
                        alert(data.msg);
                        return;
                   }
                    resolve(data);
                })
            }
        }).catch((res) => {
            console.log(res);
        });
    });
    return p;
}
/* 本地储存 */
export let setLocalStorage=(key,value)=>{
    localStorage.setItem(key,value);
}
export let getLocalStorage=(key)=>{
    localStorage.getItem(key);
}