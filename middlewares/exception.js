const {HttpException,ParameterException}=require('../core/http-exception')
const catchError=async(ctx,next)=>{
    try{
        await next()
    }catch (error){
        console.log(error)
        console.log(global.errs.ParameterException)
        const a=error instanceof  HttpException
        if(global.config.environment==='dev'&&!a){
            console.log('开发环境出错了')
            throw error
        }
       if(a){
           ctx.body={
               msg:error.msg,
               error_code:error.errorCode,
               request:`${ctx.path}`
           }
           ctx.status=error.code
       }else{
        ctx.body={
            msg:"我们发现了一些错误"
        }
       }
       
    }
}
module.exports=catchError