// Importing mongoose library
const mongoose = require("mongoose");

// Defining the subTodo schema
const subTodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId, // Assuming createdBy refers to a user ID
    ref: 'User'
  }
}, { timestamps: true });

// Creating the Subtodo model
const Subtodo = mongoose.model("Subtodo", subTodoSchema);

module.exports = Subtodo;
