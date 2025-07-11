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
          const startOfToday = new Date();
          startOfToday.setHours(0, 0, 0, 0);

          const endOfToday = new Date();
          endOfToday.setHours(23, 59, 59, 999);
          
          const allOrders = await orderModel.find({
               date: {
                    $gte: startOfToday, 
                    $lte: endOfToday
               }
          })
          res.json({success:true, data:allOrders})
     } catch (error) {
          console.log(error)
          res.json({success:false, message:"Error with fetching users orders"})
     } 
}

// updating food status

const foodStatus = async (req, res) => {
     try {
          await orderModel.findByIdAndUpdate( req.body.orderId, {status:req.body.status })
          res.json({success:true, message:"Status updated"})
     } catch (error) {
          console.log(error);
          res.json({success:false, message:"Error on status updating"})
     }
}

export {placeOrders, userOrders, fetchOrders, foodStatus}