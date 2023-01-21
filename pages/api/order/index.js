import dbConnect from "../../../DB/databaseConnection";
import OrderModel from "../../../model/orderModel";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  if (method === "GET") {
    try {
      const orders = await orderModel.find(req.body);
      res.status(201).json(orders);
    } catch {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const order = await orderModel.create(req.body);
      res.status(201).json(order);
    } catch {
      res.status(500).json(err);
    }
  }
}
