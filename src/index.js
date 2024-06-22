/* ------------------------------ Main Packages ----------------------------- */
const express = require("express")
const cors = require("cors")
const routes = require("../src/routes")
const bodyParser = require("body-parser")
const app = express()

/* ----------------------------------- --- ---------------------------------- */
/* --------------------------- Express Middlewares -------------------------- */
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
/* ----------------------------------- --- ---------------------------------- */
/* ----------------------------- Express Routes ----------------------------- */
app.use("/", routes)
/* ----------------------------------- --- ---------------------------------- */

module.exports = app