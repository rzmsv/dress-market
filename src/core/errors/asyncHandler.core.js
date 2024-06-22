const BaseController = require("../../controllers/base.controller")

exports.asyncHandler = (fn) => async (req, res, next) => {

  try {
    await fn(req, res, next)
  } catch (error) {
    BaseController.fail(res, error)
  }
}