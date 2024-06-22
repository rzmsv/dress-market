const router = require("express").Router()
const api = require("./api")

/* --------------------------- prefix:/api -------------------------- */
router.use("/api", api)
module.exports = router