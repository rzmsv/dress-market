
const { Garment } = require("../../models/garment.model")
const { GarmentSize } = require("../../models/garment_size.model")
const ErrorResult = require("../../core/errors/errors.core")
const { ObjectId } = require("mongodb")

const DressSizeService = class {
  constructor() { }
  /* ---------------------------------- POST ---------------------------------- */
  add_new_dress_size_service = async (data) => {
    const result = new GarmentSize(data)
    return await result.save()
  }
  /* ----------------------------------- --- ---------------------------------- */

}

exports.DressSizeService = new DressSizeService