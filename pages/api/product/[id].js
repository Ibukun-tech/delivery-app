import dbConnect from "../../../DB/databaseConnection";
import ProductModel from "../../../model/productModel";
export default async function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  await dbConnect();
  if (req.method === "DELETE") {
    try {
      const products = await ProductModel.findByIdAndDelete(req.query.id);
      res.status(201).json("DELETED");
    } catch (err) {
      res.status(500).json({
        status: "failed",
        err,
      });
    }
  }
  if (req.method === "GET") {
    try {
      const products = await ProductModel.findById(req.query.id);
      res.status(201).json({
        status: "success",
        products,
      });
    } catch (err) {
      res.status(500).json({
        status: "failed",
        err,
      });
    }
  }
  if (req.method === "POST") {
    try {
      const product = await ProductModel.create(req.body);
      res.status(201).json({
        status: "success",
        product,
      });
    } catch (err) {
      res.status(500).json({
        status: "failed",
        err,
      });
    }
  }
}
