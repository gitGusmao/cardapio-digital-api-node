const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  value: { type: Number, required: true },
  restaurant: { type: String, required: true },
});

ProductSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Product", ProductSchema);
