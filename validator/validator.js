const {LinValidator,Rule} = require('../core/lin-validator')
const LoginType =require('../lib/enum')
const {User}=require('../app/models/user')

class IntegerValidator extends LinValidator{
    constructor(){
         super()
        this.id=[
            new Rule('isInt','需要是整数',{min:1,max:100})
        ]
    }

}
class RegistrValidator extends LinValidator{
    constructor(){
        super()
        this.email=[
            new Rule('isEmail','不符合email规范')
        ]
        this.password=[
            new Rule('isLength','长度不符',{
                min:6,max:32
            })
        ]
    }
    validatePassword(vals){
        
        
    }
    async validateEmail(vals){
        const email=vals.body.email
        const user=await User.findOne({
            where:{
                email
            }
        })
        if(user){
            throw new Error('email已经存在')
        }

    }
    

}
class TokenValidator extends LinValidator{
    constructor(){
        super();
        this.account=[
            new Rule('isLength','account不符合',{
                min:4,max:32
            })
        ]
        this.key=[
            new Rule('isOptional'),
            new Rule('isLength','长度错误',{
                min:6,
                max:128
            })
        ]
    }
    validateLoginType(vals){
        if(!vals.body.type){
            throw new Error('type是必须参数')
        }
        console.log(LoginType.isThisType(vals.body.type))
        if(!LoginType.isThisType(vals.body.type)){
            throw new Error('type错误')
        }
    }
}
module.exports ={IntegerValidator,RegistrValidator,TokenValidator}