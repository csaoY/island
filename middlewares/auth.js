const basicAuth=require('basic-auth')//获取basic-auth信息
const jwt=require('jsonwebtoken')//校验token令牌
class Auth{
    constructor(level){
        this.level=level||1
        Auth.USER=8
        Auth.ADMIN=16
        Auth.SUPER_ADMIN=32
    }
    get m(){
        return async(ctx,next)=>{
            const userToken=basicAuth(ctx.req)
            let errMsg='token无效'
            if(!userToken||!userToken.name){
                throw new global.errs.Forbbiden(errMsg)
            }
            try{
                var decode=jwt.verify(userToken.name,global.config.security.secretKey)
            }catch(err){
                console.log(err)
                if(err.name==='TokenExpiredError'){
                    errMsg='token已过期'
                }
                throw new global.errs.Forbbiden(errMsg)

            }
            
            ctx.auth={
                uid:decode.uid,
                scope:decode.scope
            }
            console.log()
            if(decode.scope<this.level){
                throw new global.errs.Forbbiden('权限不足')
            }
            await next()
             
        }
       
        
    }
}
module.exports=Auth