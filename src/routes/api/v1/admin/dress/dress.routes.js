const express = require("express")
const { asyncHandler } = require("../../../../../core/errors/asyncHandler.core")
const router = express.Router()
const { DressController } = require("../../../../../controllers/dress/dress.controller")
const { userAuthorize } = require("../../../../../middlewares/authorize.middleware")


/* --------------------------- prefix:/api/v1/admin/dress -------------------------- */
/* ----------------------------------- GET ---------------------------------- */
router.get("/list-of-products", asyncHandler(userAuthorize), asyncHandler(DressController.list_of_products_controller))
router.get("/detail/:id", asyncHandler(userAuthorize), asyncHandler(DressController.get_detail_of_prod_controller))
router.get("/dresses-size-amount/:id", asyncHandler(userAuthorize), asyncHandler(DressController.get_sizes_amount_of_prod_controller))
/* ---------------------------------- POST ---------------------------------- */
router.post("/add-new-dress", asyncHandler(userAuthorize), asyncHandler(DressController.add_new_dress_controller))
router.post("/add-new-size-to-dress/:id", asyncHandler(userAuthorize), asyncHandler(DressController.add_new_size_to_dress_controller))
/* ----------------------------------- --- ---------------------------------- */
/* --------------------------------- UPDATE --------------------------------- */
router.patch("/update/:id", asyncHandler(userAuthorize), asyncHandler(DressController.update_dress_controller))
/* ----------------------------------- --- ---------------------------------- */
/* --------------------------------- DELETE --------------------------------- */
router.delete("/delete/:id", asyncHandler(userAuthorize), asyncHandler(DressController.delete_dress_controller))
/* ----------------------------------- --- ---------------------------------- */

module.exports = router