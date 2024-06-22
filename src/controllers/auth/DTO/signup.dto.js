const ErrorResult = require("../../../core/errors/errors.core")



exports.signupDTO = (data) => {
  var listOfErrors = []
  if (!data.name) {
    listOfErrors.push("Name required!")
  }
  if (!data.lastname) {
    listOfErrors.push("Lastname required!")
  }
  if (!data.email) {
    listOfErrors.push("Email required!")
  }
  if (!data.password) {
    listOfErrors.push("Password required!")
  }
  if (!data.confirm_password) {
    listOfErrors.push("Confirm Password required!")
  } else if (data.confirm_password) {
    if (data.confirm_password !== data.confirm_password) listOfErrors.push("Confirm Password must be equal with password!")
  }


  if (listOfErrors.length > 0) {
    throw ErrorResult.badRequest(listOfErrors)
  }

  return {
    name: data.name,
    lastname: data.lastname,
    email: data.email,
    password: data.password
  }
}