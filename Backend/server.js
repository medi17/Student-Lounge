import express from "express";
import cors from "cors"
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'

// app config
const app = express();
const port = 4000


// middleware
app.use(express.json())
app.use(cors())


// Database connection
connectDb()


// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)


app.get("/", function (req, res){
	res.send("Helllllllllo, World!");
})

app.listen(port, () => {
	console.log(`now listning on port ${port}`)
})