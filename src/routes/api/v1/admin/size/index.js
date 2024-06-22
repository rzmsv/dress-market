const router = require("express").Router()
const dress_size = require("./size.routes")


/* --------------------------- prefix:/api/v1/admin -------------------------- */
router.use("/", dress_size)


module.exports = router