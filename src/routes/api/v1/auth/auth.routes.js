const { AuthController } = require("../../../../controllers/auth/auth.controller")

const express = require("express")
const { asyncHandler } = require("../../../../core/errors/asyncHandler.core")
const router = express.Router()


/* --------------------------- prefix:/api/v1/auth -------------------------- */
router.post("/login", asyncHandler(AuthController.login))
router.post("/signup", asyncHandler(AuthController.signup))

module.exports = router
