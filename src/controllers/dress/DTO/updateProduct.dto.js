const ErrorResult = require("../../../core/errors/errors.core")

exports.updateDressDTO = (data) => {
  var listOfErrors = []
  if (data.title) {
    if (data.title.length < 3) {
      listOfErrors.push("Title must have at least 3 characters!")
    }
  }
  if (data.amount) {
    if (data.amount.length < 3) {
      listOfErrors.push("Amount must have at least 1 characters!")
    }
  }
  if (listOfErrors.length > 0) {
    throw ErrorResult.badRequest(listOfErrors)
  }

  return data
}