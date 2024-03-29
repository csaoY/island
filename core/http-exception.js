class HttpException extends Error{
    constructor(msg="服务器异常",error_code="10000",code=400){
        super();
        this.msg=msg;
        this.errorCode=error_code;
        this.code=code
    }
}
class ParameterException extends HttpException{
    constructor(msg,errorCode){
        super()
        this.code=400;
        this.msg=msg||"参数错误";
        this.errorCode=errorCode||10000

    }
}

class AuthFailed extends HttpException{
    constructor(msg,errorCode){
        super()
        this.code=400;
        this.msg=msg;
        this.errorCode=errorCode||10000

    }
}
class Success extends HttpException{
    constructor(msg,errorCode){
        super()
        this.code=201
        this.msg=msg||'ok'
        this.errorCode=errorCode||0
    }
}
class Forbbiden extends HttpException{
    constructor(msg,errorCode){
        super()
        this.code=302
        this.msg=msg||'ok'
        this.errorCode=errorCode||10006
    }
}
module.exports={HttpException,ParameterException,Success,AuthFailed,Forbbiden}