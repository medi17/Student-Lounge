import express from "express"
import { placeOrders, userOrders, fetchOrders } from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/placeorder", authMiddleware, placeOrders)
orderRouter.get("/myorders", authMiddleware, userOrders)
orderRouter.get("/usersorders", fetchOrders)

export default orderRouter