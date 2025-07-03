import userModel from "../models/userModel.js";

// add foods to cart

const addToCart = async (req, res) => {
     try {
          const userId = req.body.userId
          let userData = await userModel.findById(userId )
          
          let cartData = await userData.cartData
          if (!cartData[userId]) {
               cartData[req.body.itemId] = 1
          } else {
               cartData[req.body.itemId] += 1
          }
     
          await userModel.findByIdAndUpdate(userId, { cartData })
          res.json({ success: true, message: "Added to cart" })
          
     } catch (error) {
          console.log(error)
          res.json({success: false, message:"Error"})
     }
}    


// remove foods from cart

const removeFromCart = async (req, res) => {
     try {
          const userId = req.body.userId
          let userData = await userModel.findById(userId)
          let cartData = await userData.cartData

          if (cartData[userId]>0) {
               cartData[req.body.itemId] -= 1
          }
     
          await userModel.findByIdAndUpdate(userId, { cartData })
          res.json({ success: true, message: "Removed from cart" })
          
     } catch (error) {
          console.log(error)
          res.json({success: false, message:"Error"})
     }
}

// fetch cart data

const fetchFromCart = async (req, res) => {
     try {
          const userId = req.body.userId
          let userData = await userModel.findById(userId)
          let cartData = await userData.cartData

          res.json({success: true, cartData})
     } catch (error) {
          res.json({success:false, message:"Error"})
     }
}

export {addToCart, removeFromCart, fetchFromCart}