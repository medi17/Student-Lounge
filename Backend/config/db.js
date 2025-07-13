import mongoose from "mongoose"

export const connectDb = async () => {
     await mongoose.connect(process.env.DATABASE_SECRET).then(() => console.log("Database connected"))
}