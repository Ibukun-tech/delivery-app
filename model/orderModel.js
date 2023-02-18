import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    Total: {
      type: Number,
      required: true,
    },
    status: {
      default: 0,
      type: Number,
      required: true,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.models.OrderModel ||
  mongoose.model("OrderModel", orderSchema);
