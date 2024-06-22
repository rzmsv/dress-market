const { DressSizeService } = require("../../services/dress-size/dressSize.service")
const { addDressSizeDTO } = require("./DTO/addNewDressSizedto")
const { mongoIdChecker } = require("../../helpers/mongo-id-checker.helper")
const BaseController = require("../base.controller")


const DressSizeController = class {
  constructor() { }

  /* ---------------------------------- POST ---------------------------------- */
  add_new_dress_size_controller = async (req, res) => {
    const body = req.body
    const data = addDressSizeDTO(body)
    const result = await DressSizeService.add_new_dress_size_service(data)
    BaseController.ok(res, result)
  }
  /* ----------------------------------- --- ---------------------------------- */

}

exports.DressSizeController = new DressSizeController