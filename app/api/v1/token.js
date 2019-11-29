const Router = require("koa-router");
const { TokenValidator } = require("../../../validator/validator");
const LoginType = require("../../../lib/enum");
const { User } = require("../../models/user");
const { generateToken } = require("../../../core/util");
const { WXManager } = require("../../services/wx");
const router = new Router({
  prefix: "/v1/token"
});
router.post("/", async (ctx, next) => {
  const v = await new TokenValidator().validate(ctx);
  let token;
  switch (v.get("body.type")) {
    case LoginType.USER_EMAIL:
      token = await emailLogin(v.get("body.account"), v.get("body.key"));
      break;
    case LoginType.USER_MINI_PROGRAM:
      token = await WXManager.codeToToken(v.get("body.account"));
      break;
  }
  ctx.body = {
    token
  };
});
async function emailLogin(account, secrect) {
  const user = await User.verifyEmailPassWord(account, secrect);
  console.log(user);
  return (token = generateToken(user.id, 2));
}
module.exports = router;
