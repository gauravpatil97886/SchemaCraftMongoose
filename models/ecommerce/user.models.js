import mongoose from 'mongoose';

// Define the user schema
const UserSchema = new mongoose.Schema(
  {
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
      lowercase: true,
    },
    password: {
      type: String, // Changed to lowercase "string"
      required: true,
    },
  },
  { timestamps: true }
);

// Create and export the User model
const User = mongoose.model('User', UserSchema); // Changed "user" to "User" for convention

export default User;
