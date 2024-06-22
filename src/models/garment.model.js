const mongoose = require("mongoose")

const schema = mongoose.Schema

const garmentSchema = schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  description: {
    type: String,
  },
  amount: {
    type: String,
    required: true
  },
  deleted_at: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
})

exports.Garment = mongoose.model("Garment", garmentSchema)