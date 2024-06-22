const router = require("express").Router()
const auth = require("./auth")
const dress = require("./admin/dress")
const dress_size = require("./admin/size")
const userDressAPI = require("./user")

/* --------------------------- prefix:/api/v1/auth -------------------------- */
router.use("/auth", auth)

/* ----------------------------------- --- ---------------------------------- */
/* ---------------------------------- ADMIN --------------------------------- */
/* ----------------------- prefix:/api/v1/admin/dress ----------------------- */
router.use("/admin/dress", dress)
/* ----------------------- prefix:/api/v1/admin/dress ----------------------- */
router.use("/admin/dress-size", dress_size)
/* ----------------------------------- -- ----------------------------------- */
/* ---------------------------------- USER ---------------------------------- */
router.use("/user/dress", userDressAPI)
/* ----------------------------------- --- ---------------------------------- */


module.exports = router