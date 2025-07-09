import userModel from "../models/userModel.js";

// add foods to cart

const addToCart = async (req, res) => {
     try {
          let userData = await userModel.findById(req.userId)
          
          let cartData = await userData.cartData
          if (!cartData[req.body._id]) {
               cartData[req.body._id] = 1
          } else {
               cartData[req.body._id] += 1
          }
     
          await userModel.findByIdAndUpdate(req.userId, { cartData })
          res.json({ success: true, message: "Added to cart" })
          
     } catch (error) {
          console.log(error)
          res.json({success: false, message:"Error"})
     }
}    


// remove foods from cart

const removeFromCart = async (req, res) => {
     try {
          let userData = await userModel.findById(req.userId)
          let cartData = await userData.cartData

          if (cartData[req.body._id]>0) {
               cartData[req.body._id] -= 1
          }

          await userModel.findByIdAndUpdate(req.userId, { cartData })
          res.json({ success: true, message: "Removed from cart" })
          
     } catch (error) {
          console.log(error)
          res.json({success: false, message:"Error"})
     }
}

// delete cart item completely

const deleteFromCart = async (req, res) => {
     try {
          let userData = await userModel.findById(req.userId)
          let cartData = await userData.cartData
          if (!cartData[req.body._id]) { 
               res.json({success:false, message:"Item not found"})
          }          
          delete cartData[req.body._id]

          await userModel.findByIdAndUpdate(req.userId, { cartData })
          res.json({ success: true, message: "Deleted from cart successfully" })
          
     } catch (error) {
          console.log(error);
          res.json({success:false, message:"Deleting from cart failed"})
     }
}

// fetch cart data

const fetchFromCart = async (req, res) => {
     try {
          let userData = await userModel.findById(req.userId)
          let cartData = await userData.cartData

          res.json({success: true,cartData})
     } catch (error) {
          console.log(error)
          res.json({success:false, message:"Error fetching cart data"})
     }
}

export {addToCart, removeFromCart, deleteFromCart, fetchFromCart}