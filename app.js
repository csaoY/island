const Koa= require ('koa');
const parser=require('koa-bodyparser')
const catchError=require('./middlewares/exception')
const InitManager=require('./core/init')
const app=new Koa()
app.use(catchError);
app.use(parser())
InitManager.InitCore(app)//初始化中间件
app.listen(3000)

