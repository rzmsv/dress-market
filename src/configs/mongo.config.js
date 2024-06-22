let url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authMechanism=DEFAULT&authSource=admin`

if (process.env.DB_USERNAME && process.env.DB_PASSWORD) {
  url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authMechanism=DEFAULT&authSource=admin`
}

module.exports = {
  DB_URL: url
}