const Router = require("koa-router");
const router = new Router({
    prefix:'/v1/user'
});
const bcrypt = require("bcryptjs"); //对密码进行非明文显示的实现方法
const { RegistrValidator } = require("../../../validator/validator");
const { User } = require("../../models/user");
router.post("/register", async ctx => {
  const v = await new RegistrValidator().validate(ctx);
  const user = {
    email: v.get("body.email"),
    password: v.get("body.password"),
    nickname: v.get("body.nickname")
  };
//   console.log(user);
  const r = await User.create(user);
  console.log(new global.errs.Success());
  throw new global.errs.Success();
});

module.exports = router;
