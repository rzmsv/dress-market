const ErrorResult = require("../../../core/errors/errors.core")

exports.addDressDTO = (data) => {
  var listOfErrors = []
  if (!data.title) {
    listOfErrors.push("title required!")
  }
  if (!data.amount) {
    listOfErrors.push("Amount required!")
  }
  if (listOfErrors.length > 0) {
    throw ErrorResult.badRequest(listOfErrors)
  }

  return {
    title: data.title,
    description: data.description,
    amount: data.amount
  }
}