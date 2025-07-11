import { addToCart, increaseFromCart, decreaseFromCart, deleteFromCart, fetchFromCart } from "../controllers/cartController.js"
import express from "express"
import authMiddleware from "../middleware/auth.js"

const cartRouter = express.Router()

cartRouter.post("/add", authMiddleware, addToCart)
cartRouter.post("/increase",authMiddleware, increaseFromCart)
cartRouter.post("/decrease", authMiddleware, decreaseFromCart)
cartRouter.post("/delete", authMiddleware, deleteFromCart)
cartRouter.get("/get", authMiddleware, fetchFromCart)

export default cartRouter