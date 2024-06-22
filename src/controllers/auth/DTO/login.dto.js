const ErrorResult = require("../../../core/errors/errors.core")

exports.loginDTO = (data) => {
  var listOfErrors = []
  if (!data.email) {
    listOfErrors.push("Email required!")
  }
  if (!data.password) {
    listOfErrors.push("Password required!")
  }


  if (listOfErrors.length > 0) {
    throw ErrorResult.badRequest(listOfErrors)
  }

  return {
    email: data.email,
    password: data.password
  }
}