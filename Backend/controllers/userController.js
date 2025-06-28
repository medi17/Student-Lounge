import userModel from "../models/userModel";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


const createToken = (id) => {
     return jwt.sign({id}, process.env.JWT_SECRET)
}

// register user

const registerUser = async (req, res) => { 
     const { name, password, email } = req.body
     
     try {
          const exists = await userModel.findOne({ email })

          if (exists) {
               return res.json({success: false, message:"User already registered"})
          }
          if (!validator.isEmail(email)) {
               return res.json({success: false, message: "Enter a valid email please"})
          }
          if (password.length < 8) {
               return res.json({success: false, message: "Enter a strong password please"})
          }

          // Hashing the password

          const salt = await bcrypt.genSalt(10)
          const hasedPassword = await bcrypt.hash(password, salt)

          const newUser = new userModel({
               name: name,
               email: email,
               password: hasedPassword
          })

          const user = await newUser.save()
          const token  = createToken(user._id)
 
          return res.json({ success: true, token })
          
     } catch (error) {
          console.log(error)
          return res.json({success: false, message: "Error"})
     }
}


// login user

const loginUser = async (req, res) => {
     const { email, password } = req.body

     try {
          const user = await userModel.findOne({ email })
          if (!user) {
               return res.json({success: false, message:"User not found"})
          }

          const isMatch = await bcrypt.compare(password, user.password)

          if (!isMatch) {
               return res.json({success: false, message:"Wrong password"})
          }

          const token = createToken(user._id)
          return res.json({ success: true, token })

     } catch (error) {
          console.log(error)
          return res.json({success: false, message: "Error"})    
     }
}


export {loginUser, registerUser}