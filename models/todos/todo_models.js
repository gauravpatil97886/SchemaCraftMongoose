// Importing mongoose library
import mongoose from "mongoose";

// Defining the Todo schema
const TodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId, // Assuming createdBy refers to a user ID
    required: true,
    ref: 'User', // Reference to the User model
  },
  SubTodos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subtodo", // Reference to the Subtodo model
    }
  ]
}, { timestamps: true });

// Creating the Subtodo model
export const Subtodo = mongoose.model("Todo", TodoSchema);
