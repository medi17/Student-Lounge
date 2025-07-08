import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"


// place orders

const placeOrders = async (req, res) => {
     try {
          const newOrder = new orderModel({
               userId: req.userId,
               foods: req.body.foods,
               delivery: req.body.delivery,
               fee: req.body.fee,
               info: req.body.info
          })
          await newOrder.save()
          await userModel.findOneAndUpdate({ _id: req.userId }, { cartData: {} })
          
     
          res.json({success:true, message:"Order Sent"})
     } catch (error) {
          console.log(error)
          res.json({success:false, message:"Erorr on ordering"})
     }
}

// Display orders of user her/himself

const userOrders = async (req, res) => {
     try {
          const myOrders = await orderModel.find({ userId: req.userId })
          res.json({success:true, data:myOrders})
     } catch (error) {
          console.log(error)
          res.json({success:false, message:"Getting user orders failed"})
     }
}

// Listing all orders on admin panal

const fetchOrders = async (req, res) => {
     try {
          const allOrders = await orderModel.find({})
          res.json({success:true, data:allOrders})
     } catch (error) {
          console.log(error)
          res.json({success:false, message:"Error with fetching users orders"})
     } 
}
export {placeOrders, userOrders, fetchOrders}