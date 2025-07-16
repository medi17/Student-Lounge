import express from "express";
import cors from "cors"
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js"
import contactRouter from "./routes/contactRoute.js"

// app config
const app = express();
const port = process.env.PORT || 4000


// middleware
app.use(express.json())
app.use(cors())


// Database connection
connectDb()


// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)
app.use("/api/contact", contactRouter)


app.get("/", function (req, res){
	res.send("Helllllllllo, World!");
})

app.listen(port, () => {
	console.log(`now listening on port ${port}`)
})