//判断登录类型的函数与属性
function isThisType(val){

    for(let key in this){
        if (this[key]===val){
            return true
        }
     
    }
    return false
}
const LoginType={
    USER_MINI_PROGRAM:100,
    USER_EMAIL:101,
    isThisType
}
module.exports=LoginType;