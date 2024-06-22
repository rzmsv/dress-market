const express = require("express")
const { asyncHandler } = require("../../../../core/errors/asyncHandler.core")
const router = express.Router()
const { DressController } = require("../../../../controllers/dress/dress.controller")



/* --------------------------- prefix:/api/v1/user/dress -------------------------- */
/* ----------------------------------- GET ---------------------------------- */
router.get("/list-of-products", asyncHandler(DressController.list_of_products_controller))
router.get("/detail/:id", asyncHandler(DressController.get_detail_of_prod_controller))


module.exports = router