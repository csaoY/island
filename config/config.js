module.exports={
    database:{
        dbName:'7yue',
        host:'localhost',
        port:3306,
        user:"root",
        password:""
    },
    environment:'dev',//prod
    security:{
        secretKey:"abcdefg",
        expiresIn:60*60
    },
    wx:{
        appId:"wx10f479809e8cf0ed",
        appSecret:"deda795ea570770b0e4ec92fd017c084",
        url:"https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code"
    }
}