const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");
const ErrorResult = require("../core/errors/errors.core");


exports.userAuthorize = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    let decode = null;
    decode = jwt.verify(token, appConfigs.JWT_SECRET);
    if (!decode) throw "err";

    const user = await User.findById({ _id: decode.user_id });
    if (!user) throw "err";

    req.user = user;
    next();
  }
  catch (err) {
    throw ErrorResult.unAuthorized("unAuthorized", "un_authorized")
  }
}