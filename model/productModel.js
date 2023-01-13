import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: [Number],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.ProductModel ||
  mongoose.model("ProductModel", productSchema);
