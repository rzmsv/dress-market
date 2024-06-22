const { AuthService } = require("../../services/auth/auth.service")
const BaseController = require("../base.controller")
const { signupDTO } = require("./DTO/signup.dto")
const { loginDTO } = require("./DTO/login.dto")

const AuthController = class {
  constructor() { }

  login = async (req, res) => {
    const body = req.body
    const data = loginDTO(body)
    const result = await AuthService.login(data)
    BaseController.ok(res, result)
  }
  signup = async (req, res) => {
    const body = req.body
    const data = signupDTO(body)
    const result = await AuthService.signup(data)
    BaseController.ok(res, result)
  }
}

exports.AuthController = new AuthController