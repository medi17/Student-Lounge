import mongoose from "mongoose"

export const connectDb = async () => {
     await mongoose.connect('mongodb+srv://medstack:1234509876@cluster0.ewldwqf.mongodb.net/lounge').then(() => console.log("Database connected"))
}