const router = require("express").Router()
const dress = require("./dress.routes")


/* --------------------------- prefix:/api/v1/admin -------------------------- */
router.use("/", dress)


module.exports = router