const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const { User } = require("../../models/user.model")
const ErrorResult = require("../../core/errors/errors.core")

const AuthService = class {
  constructor() { }

  login = async (data) => {
    const result = await User.findOne({ email: data.email })
    if (!result) throw ErrorResult.notFound("")
    const comparePassword = await bcrypt.compare(data.password, result.password)
    if (comparePassword) {
      return jwt.sign({ user_id: result.id }, appConfigs.JWT_SECRET)
    } else {
      throw ErrorResult.badRequest("Invalid email Or Password !")
    }

  }
  signup = async (data) => {
    const password_hashed = await bcrypt.hash(data.password, +appConfigs.HASH_PASS)
    const result = new User({ ...data, password: password_hashed })
    return await result.save()
  }
}

exports.AuthService = new AuthService