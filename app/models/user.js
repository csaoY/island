const { db } = require("../../core/db");
const { Sequelize, Model } = require("sequelize");
const bcrypt = require("bcryptjs"); //对密码进行非明文显示的实现方法

class User extends Model {
  static async verifyEmailPassWord(email, plainPassword) {
    console.log("12342341");
    const user = await await User.findOne({
      where: {
        email
      }
    });
    if (!user) {
      throw new global.errs.AuthFailed("账号不存在");
    }
    const correct = bcrypt.compareSync(plainPassword, user.password);
    if (!correct) {
      throw new global.errs.AuthFailed("密码不正确");
    }
    return user;
  }
  static async getUserByOpenid(openid) {
    const user = await User.findOne({
      where: {
        openid
      }
    });
    return user;
  }
  static async registerByOpenid(openid) {
    return await User.create({ openid });
  }
}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true, //是否是主键，不能重复
      autoIncrement: true //
    },
    nickname: Sequelize.STRING,
    email: {
      type: Sequelize.STRING(128),
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      set(val) {
        //观察者模式
        const salt = bcrypt.genSaltSync(10);
        const psw = bcrypt.hashSync(val, salt); //给密码加密
        this.setDataValue("password", psw); //this指向Model
      }
    },
    openid: {
      type: Sequelize.STRING(64),
      unique: true
    },
    test: Sequelize.STRING
  },
  { sequelize: db,
  tableName:'user'
  }
);
module.exports = { User };
