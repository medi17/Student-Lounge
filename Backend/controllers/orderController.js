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



export {placeOrders}