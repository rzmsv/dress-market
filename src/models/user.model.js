const mongoose = require("mongoose")

const schema = mongoose.Schema

const userSchema = new schema({
  name: {
    type: String,
    lowerCase: true,
    require: true
  },
  lastname: {
    type: String,
    lowerCase: true,
    require: true
  },
  email: {
    type: String,
    lowerCase: true,
    require: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  deleted_at: {
    type: Date,
    default: null
  }
}, {
  strict: true
}, {
  timestamps: true
})
exports.User = mongoose.model("User", userSchema)
