const Router=require('koa-router')
const requireDirectory=require('require-directory')
class InitManager{
    static InitCore(app){
        InitManager.app=app;
        InitManager.InitLoadRouters()
        InitManager.loadHttpException()
        InitManager.loadConfig()       
    }
    static InitLoadRouters(){
        const apiDirectory=`${process.cwd()}/app/api/v1`
        requireDirectory(module,apiDirectory,{
            visit:whenLoadModule
        });
        function whenLoadModule (obj) {
            if(obj instanceof Router){
                InitManager.app.use(obj.routes())
            }
        }

    }
    static loadConfig(path=''){
        const configPath=path||process.cwd()+'/config/config.js'
        const config=require(configPath)
        global.config=config
    }
  
    static loadHttpException(){
        const errors=require('./http-exception')
        global.errs=errors;
    }
}
module.exports=InitManager;