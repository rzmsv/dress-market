const BaseController = {
  ok: (res, result = "", statusCode = 200) => {
    return res.json({ statusCode, result })
  },
  fail: (res, err) => {
    console.log(err.message)
    if (err.errmsg) {
      return res.status(501).json({ statusCode: 501, code: err.code, message: err.message })
    }
    return res.status(err.statusCode).json({ statusCode: err.statusCode, code: err.code, message: err.message })
  }
}
module.exports = BaseController