import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
     userId: { type: String, required: true },
     foods: { type: Array, required:true },
     delivery: { type: Boolean, required: true },
     status:{type:String, default:"Food Processing"},
     fee: { type: Number, required:true },
     info:{type: Object, required:true},
     date:{type:Date, default:Date.now()},
})

const orderModel = mongoose.models.orders || mongoose.model("order", orderSchema)

export default orderModel