import mongoose from "mongoose";

// Define a mongoose schema for users.
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
  timestamps: true
});

// Create a model named "User" based on the userSchema.
export const User = mongoose.model("User", userSchema);
