
const Router=require('koa-router')
const router=new Router;
const {HttpException,ParameterException}=require('../../../core/http-exception')
const {IntegerValidator}= require('../../../validator/validator')
const Auth=require('../../../middlewares/auth')

// router.post("register", async (ctx,next) => {
//     console.log('注册')
//   const v = await new RegisterValidator().validate(ctx);
//   const salt = bcrypt.genSaltSync(10);
//   const psw = bcrypt.hashSync(); //给密码加密
//   ctx.body={
//       a:123
//   }
// });
router.get('/v1/:id/classic/latest',new Auth(8).m,async (ctx,next)=>{
   // console.log('4343434')
   //  const path=ctx.params;//id
   //  const query=ctx.request.query;
   //  const header=ctx.request.header;
   //  const body=ctx.request.body; 
   //  const v= await new IntegerValidator().validate(ctx)
   //  const id=v.get('path.id',parsed=false)
   //  console.log(id)
   //  ctx.body='success'
    // if(true){
    //     console.log(ParameterException)
    //     console.log(HttpException)
    //     console.log(ParameterException instanceof HttpException)
    //     const error=new global.errs.ParameterException(1,2);
    //     throw error
    // }
     ctx.body=ctx.auth
   
})
// router.get('/v1/classic/latest',(ctx,next)=>{
//     const path=ctx.param;//id
//     const query=ctx.request.query;
//     const header=ctx.request.header;
//     const body=ctx.request.body;
//     ctx.body={path,query,header,body}
// })
module.exports=router;