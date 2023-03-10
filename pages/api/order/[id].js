import dbConnect from "../../../DB/databaseConnection";
import OrderModel from "../../../model/orderModel";

export default async function handler(req, res) {
  await dbConnect();
  const {
    method,
    query: { id },
  } = req;
  if (method === "GET") {
    try {
      const order = await OrderModel.findById(id);
      res.status(200).json(order);
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
