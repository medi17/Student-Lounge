import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
     fullName: { type: string, required: true },
     email: { type: string, required: true, unique: true },
     password: { type: string, required: true },
     cartData: { type: Object, default: {}}
}, {minimize: false})

const userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel