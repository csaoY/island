const axios = require("axios");
const util = require("util");
const {User}=require('../models/user')
const {generateToken}=require("../../core/util")
const Auth=require('../../middlewares/auth')
class WXManager {
  static async codeToToken(code) {
    const info = await axios.get(
      util.format(global.config.wx.url, global.config.wx.appId, global.config.wx.appSecret, code)
    );
    const errmsg=info.data.errmsg;
    if(info.status!==200){
        throw new global.errs.AuthFailed('openid获取失败:'+errmsg)
    }

    if(info.data.errcode){
        throw new global.errs.AuthFailed('openid获取失败:'+errmsg)
    }
    const openid=info.data.openid;
    console.log(openid)
    let user=await User.getUserByOpenid(openid)
    if(!user){
        user=await User.registerByOpenid(openid)
    }
    console.log(user.id,Auth.USER)
    const token = generateToken(user.id,Auth.USER)
    console.log(token)
    return token
    
  }
}

module.exports={
    WXManager
}
