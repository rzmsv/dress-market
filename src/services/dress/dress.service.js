
const { Garment } = require("../../models/garment.model")
const { GarmentSize } = require("../../models/garment_size.model")
const ErrorResult = require("../../core/errors/errors.core")


const DressService = class {
  constructor() { }
  /* ----------------------------------- GET ---------------------------------- */
  list_of_products_service = async () => {
    const result = await Garment.find()
    return result
  }
  get_detail_of_prod_service = async (id) => {
    const result = await Garment.findById(id)
    if (!result) throw ErrorResult.notFound("")
    return result
  }
  get_sizes_amount_of_prod_service = async (id) => {
    const result = await GarmentSize.find({ garmentId: id }).populate("garmentId")
    if (!result) throw ErrorResult.notFound("")
    return result
  }
  /* ----------------------------------- --- ---------------------------------- */
  /* ---------------------------------- POST ---------------------------------- */
  add_new_dress_service = async (data) => {
    const result = new Garment(data)
    return await result.save()
  }

  add_new_size_to_dress_service = async (data, id) => {
    const result = await Garment.findById(id)
    result.sizes.items.push({ size_id: data.id })
    return await result.save()
  }
  /* ----------------------------------- --- ---------------------------------- */
  /* --------------------------------- UPDATE --------------------------------- */
  update_dress_service = async (data, id) => {
    const result = await Garment.findByIdAndUpdate(id, data)
    if (!result) throw ErrorResult.notFound("")
    return "Product Updated"
  }
  /* ----------------------------------- --- ---------------------------------- */
  /* --------------------------------- DELETE --------------------------------- */
  delete_dress_service = async (id) => {
    const result = await Garment.findByIdAndDelete(id)
    if (!result) throw ErrorResult.notFound("")
    return "Product Deleted"
  }
  /* ----------------------------------- --- ---------------------------------- */
}

exports.DressService = new DressService