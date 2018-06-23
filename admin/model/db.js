let mysql = require('mysql');
let util =require('../util/util');
let db = {}
/* 获取数据库连接 */
db.connection = function () {
    //数据库配置
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123123',
        database: 'mydatabase',
        port: 3306
    });
    //数据库连接
    connection.connect(function (err) {
        if (err) {
            console.log(err);
            return;
        }
    });
    return connection;
}

/* 关闭数据库 */
db.close = function (connection) {
    //关闭连接
    connection.end(function (err) {
        if (err) {
            return;
        } else {
            console.log('关闭连接');
        }
    });
}

/* 根据ID查找详情 */
db.findById = function (table,id,callback) {
    let connection = db.connection();
    let sql='SELECT * FROM '+table+' where id='+id;
    connection.query(sql, function (err, res) {
        if (err){
            console.log('[SELECT ERROR] - ',err.message);
            callback({status:3,msg:'参数错误!'});
            return;
        };
        callback({status:1,msg:'获取成功!',data:res});
        db.close(connection);
    });
}
/* 获取列表数据 */
db.getList = function (table,callback) {
    let connection = db.connection();
    let sql='SELECT * FROM '+table;
    console.log(11111111111111)
    console.log(sql)
    connection.query(sql, function (err, res) {
        if (err){
            console.log('[SELECT ERROR] - ',err.message);
            callback({status:3,msg:'参数错误!'});
            return;
        };
        callback({status:1,msg:'获取成功!',data:res});
        db.close(connection);
    });
}
/* 根据id修改数据 */
db.updateById=function(table,param,callback){
    let newParam = util.connectParam(param);
    let connection = db.connection();
    let sql='UPDATE '+table+' SET '+ newParam+ ' WHERE id='+param.id;
    connection.query(sql, function (err) {
        if (err){
            console.log('[SELECT ERROR] - ',err.message);
            callback({status:3,msg:'参数错误!'});
            return;
        };
        callback({status:1,msg:'修改成功!',data:[]});
        db.close(connection);
    });
}

module.exports = db;