const mongoose = require("mongoose");

// Property Schema
const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    minlength: [3, "Title must be at least 3 characters long"],
  },
  type: {
    type: String,
    enum: ["Commercial", "Residential"],
    required: [true, "Property type is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: [10, "Description must be at least 10 characters long"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be a positive number"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  amenities: {
    type: [String],
    validate: {
      validator: (value) =>
        Array.isArray(value) && value.every((item) => typeof item === "string"),
      message: "Amenities must be an array of strings",
    },
    default: [],
  },
});

module.exports = mongoose.model("Property", PropertySchema);
