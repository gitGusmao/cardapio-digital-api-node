const TypeRestaurant = ["ITALIANO", "JAPONES", "MEXICANO", "VARIADO"];

const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({
  place: { type: String, required: false },
  city: { type: String, required: false },
  district: { type: String, required: false },
  uf: { type: String, required: false },
  number: { type: Number, required: false },
});

const RestaurantSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: TypeRestaurant, required: true },
  address: [AddressSchema],
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
