require("dotenv").config()
const { DB_URL } = require("./mongo.config")

global.appConfigs = {
  APP_PORT: process.env.PORT,
  DB_URL,
  // Security
  HASH_PASS: process.env.hash_password,
  JWT_SECRET: process.env.JWT_SECRET
}