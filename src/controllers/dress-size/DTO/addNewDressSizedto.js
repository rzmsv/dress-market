const ErrorResult = require("../../../core/errors/errors.core")

exports.addDressSizeDTO = (data) => {
  var listOfErrors = []
  if (!data.size) {
    listOfErrors.push("Size required!")
  } else if (!["sm", "md", "lg", "xl", "2xl"].includes(data.size)) {
    listOfErrors.push("Size must be one of sm, md, lg, xl, 2xl")
  }
  if (listOfErrors.length > 0) {
    throw ErrorResult.badRequest(listOfErrors)
  }

  return {
    size: data.size,
    garmentId: data.garmentId,
  }
}