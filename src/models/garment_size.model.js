const mongoose = require("mongoose")

const schema = mongoose.Schema

const garmentSizeSchema = schema({
  size: {
    type: String,
    enum: ["sm", "md", "lg", "xl", "2xl"],
    required: true
  },
  garmentId: {
    type: schema.Types.ObjectId,
    required: true,
    ref: "Garment"
  },
}, {
  timestamps: true
})

exports.GarmentSize = mongoose.model("GarmentSize", garmentSizeSchema)