import foodModel from "../models/foodModel.js";
import fs from "fs"

// add food item
const addFood = async (req, res) => {
     let image_filename = `${req.file.filename}`

     const food = new foodModel({
          name: req.body.name, 
          duration: req.body.duration,
          description: req.body.description,
          price: req.body.price,
          image: image_filename,
          catagory: req.body.catagory,
     })
     try {
          await food.save()
          res.json({success:true, message:"Food added"}) 
     } catch (error) {
          console.log(error);     
          res.json({success:false, message: "Error!! can not add food to the database"})
     }
}

// all food list

const listOfFood = async (req, res) => {
     try {
          const foods = await foodModel.find({})
          res.json({success:true, data: foods})
     } catch (error) {
          console.log(error);
          res.json({success:false, message: "Error!! can't load the food list"})          
     }
}

// Delete or remove food from list

const removeFood = async (req, res) => {
     try {
          const food = await foodModel.findById(req.body.id);
          fs.unlink(`uploads/${food.image}`, ()=>{})

          await foodModel.findByIdAndDelete(req.body.id)

          res.json({success:true, message:"food successfully deleted"})
     } catch (error) {
          console.log(error);
          res.json({success:false, message:"Error!! can not delete food item"})
     }
}


// Update food Item

const updateFoodItem = async (req, res) => {
     let image_filename = req.file?.filename
     const {id, name, duration, description, price, catagory } = req.body

     try {
          await foodModel.findByIdAndUpdate(
               id,
               {
                    name: name,
                    price: price,
                    duration:duration,
                    description: description,
                    catagory:catagory,
                    image: image_filename,
               },
               {new:true}
          )

          res.json({success:true, message:"food successfully updated"})
     } catch (error) {
          console.log(error);
          res.json({success:false, message:"Error!! can not update food item"})
     }
}

export {addFood, listOfFood, removeFood, updateFoodItem}