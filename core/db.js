const Sequelize= require('sequelize')
const {
    dbName,
    host,
    port,
    user,
    password
}=require('../config/config').database

const sequelize=new Sequelize(dbName,user,password,{//'数据库名','账户名','密码'
    dialect:'mysql',//数据库类型，若需要链接mysql，需要安装mysql驱动“mysql2”
    host,
    port,
    logging:true,
    timezone:'+08:00',
    define:{
        timestamps:false,//不要默认时间戳
        unique:true
    }
})
sequelize.sync({
    force:false // true:强制同步，先删除表，然后新建
})
module.exports={
    db:sequelize
}