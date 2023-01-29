import dbConnect from "../../../DB/databaseConnection";
import OrderModel from "../../../model/orderModel";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  if (method === "POST") {
    try {
      const order = await orderModel.create(req.body);
      res.status(201).json(order);
    } catch (err) {}
  }
  if (method === "GET") {
    try {
      const orders = await orderModel.find();
      res.status(201).json(orders);
    } catch {
      res.status(500).json(err);
    }
  }
  if (method === "PUT") {
    try {
      const order = await orderModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(201).json(order);
    } catch {
      res.status(500).json(err);
    }
  }
}
