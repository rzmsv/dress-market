const express = require("express")
const { asyncHandler } = require("../../../../../core/errors/asyncHandler.core")
const router = express.Router()
const { DressSizeController } = require("../../../../../controllers/dress-size/dressSize.controller")
const { userAuthorize } = require("../../../../../middlewares/authorize.middleware")

/* ------------------------ prefix:/api/v1/dress-size ----------------------- */
/* ----------------------------------- GET ---------------------------------- */

/* ----------------------------------- --- ---------------------------------- */

/* ---------------------------------- POST ---------------------------------- */
router.post("/add-size", asyncHandler(userAuthorize), asyncHandler(DressSizeController.add_new_dress_size_controller))
/* ----------------------------------- --- ---------------------------------- */

module.exports = router