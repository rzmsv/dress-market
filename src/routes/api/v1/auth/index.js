const router = require("express").Router()
const auth = require("./auth.routes")


/* --------------------------- prefix:/api/v1 -------------------------- */
router.use("/", auth)


module.exports = router