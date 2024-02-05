import mongoose from "mongoose";

// Define a mongoose schema for todos with timestamps enabled.
const todoSchema = new mongoose.Schema({
  
},
   { timestamps: true });

// Create a model named "Todo" based on the todoSchema.
export default mongoose.model("Todo", todoSchema);
