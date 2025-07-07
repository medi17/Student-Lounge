import express from "express"
import { placeOrders } from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/placeorder",authMiddleware, placeOrders)

export default orderRouter