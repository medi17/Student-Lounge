import { addToCart, removeFromCart, fetchFromCart } from "../controllers/cartController.js"
import express from "express"
import authMiddleware from "../middleware/auth.js"

const cartRouter = express.Router()

cartRouter.post("/add", authMiddleware, addToCart)
cartRouter.post("/remove", authMiddleware, removeFromCart)
cartRouter.get("/get", authMiddleware, fetchFromCart)

export default cartRouter