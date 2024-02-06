// Import the mongoose library for MongoDB interaction
import mongoose from 'mongoose';

// Define a schema for the order items
const OrderItemSchema = new mongoose.Schema({
  // Define a field for the product ID, referencing the Product model
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  // Define a field for the quantity of the product in the order
  quantity: {
    type: Number,
    required: true,
  },
});

// Define the schema for the order
const orderSchema = new mongoose.Schema(
  {
    // Define a field for the total price of the order
    orderPrice: {
      type: Number,
      required: true,
    },
    // Define a field for the customer ID, referencing the User model
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItems: {
      type: [OrderItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    // Define a field for the status of the order, with predefined values
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING"
    }
  },
  // Set the timestamps option to true to automatically add createdAt and updatedAt fields
  { timestamps: true }
);

// Create and export the Order model
export const Order = mongoose.model('Order', orderSchema);
