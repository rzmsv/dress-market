const { DressService } = require("../../services/dress/dress.service")
const { addDressDTO } = require("./DTO/addNewDress.dto")
const { updateDressDTO } = require("./DTO/updateProduct.dto")
const BaseController = require("../base.controller")
const { mongoIdChecker } = require("../../helpers/mongo-id-checker.helper")


const DressController = class {
  constructor() { }
  /* ----------------------------------- GET ---------------------------------- */

  list_of_products_controller = async (req, res) => {
    const result = await DressService.list_of_products_service()
    BaseController.ok(res, result)
  }
  get_detail_of_prod_controller = async (req, res) => {
    const { id } = req.params
    mongoIdChecker(id)
    const result = await DressService.get_detail_of_prod_service(id)
    BaseController.ok(res, result)
  }
  get_sizes_amount_of_prod_controller = async (req, res) => {
    const { id } = req.params
    mongoIdChecker(id)
    const result = await DressService.get_sizes_amount_of_prod_service(id)
    BaseController.ok(res, result)
  }
  /* ----------------------------------- --- ---------------------------------- */
  /* ---------------------------------- POST ---------------------------------- */
  add_new_dress_controller = async (req, res) => {
    const body = req.body
    const data = addDressDTO(body)
    const result = await DressService.add_new_dress_service(data)
    BaseController.ok(res, result)
  }
  add_new_size_to_dress_controller = async (req, res) => {
    const body = req.body
    const { id } = req.params
    mongoIdChecker(id)
    const result = await DressService.add_new_size_to_dress_service(body, id)
    BaseController.ok(res, result)
  }
  /* ----------------------------------- --- ---------------------------------- */
  /* ---------------------------------- PATCH --------------------------------- */
  update_dress_controller = async (req, res) => {
    const { id } = req.params
    const body = req.body
    mongoIdChecker(id)
    const data = updateDressDTO(body)
    const result = await DressService.update_dress_service(data, id)
    BaseController.ok(res, result)
  }
  /* ----------------------------------- --- ---------------------------------- */
  /* --------------------------------- DELETE --------------------------------- */
  delete_dress_controller = async (req, res) => {
    const { id } = req.params
    mongoIdChecker(id)
    const result = await DressService.delete_dress_service(id)
    BaseController.ok(res, result)
  }
  /* ----------------------------------- --- ---------------------------------- */
}

exports.DressController = new DressController