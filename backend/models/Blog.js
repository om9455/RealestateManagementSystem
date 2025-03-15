const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    minlength: [5, "Title must be at least 5 characters long"],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
    minlength: [20, "Content must be at least 20 characters long"],
  },
  author: {
    type: String,
    required: [true, "Author name is required"],
  },
});

module.exports = mongoose.model("Blog", BlogSchema);
