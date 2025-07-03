import mongoose from "mongoose"

export const connectDb = async () => {
     await mongoose.connect('mongodb://medstack:euaTuKHOX53nGqFT@ac-prstov9-shard-00-00.ewldwqf.mongodb.net:27017,ac-prstov9-shard-00-01.ewldwqf.mongodb.net:27017,ac-prstov9-shard-00-02.ewldwqf.mongodb.net:27017/lounge?ssl=true&replicaSet=atlas-xdi0v4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0').then(() => console.log("Database connected"))
}