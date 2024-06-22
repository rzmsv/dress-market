var objectId = require("mongodb").ObjectId;
const ErrorResult = require("../core/errors/errors.core")

exports.mongoIdChecker = (id) => {
  if (!objectId.isValid(id.toString())) {
    throw ErrorResult.badRequest("Please insert currect ID!")
  }
}