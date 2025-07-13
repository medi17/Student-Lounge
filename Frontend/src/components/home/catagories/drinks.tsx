import FoodComponent from "./food-component"
import { useContext } from "react"
import { FoodItem } from "../../../types/foodTypes"
import { CartContext } from "../../../context/CartContext"
import SkeletonFood from "./skeletonFoodCard"

const drinks = () => {

     const FoodListObject = useContext(CartContext)
     if (!FoodListObject) {
          throw new Error("FoodListObject is not provided");
     }
     const drinkItems = FoodListObject.foodItems
     const foodLoading = FoodListObject.foodLoading

     return  foodLoading ? (
          <div className="flex justify-start gap-5 overflow-hidden md:gap-10 mb-5 mx-2 rounded-[30px] px-3 py-5 md:px-10 bg-white">
               <SkeletonFood/>
               <SkeletonFood />
               <SkeletonFood />
               <SkeletonFood/>
          </div>
                     
     ) : (
          <div className="scroll bg-white flex justify-start gap-5 overflow-x-scroll mb-5 mx-2 rounded-[30px] md:gap-10 px-3 py-5 md:px-10">
               {
                    drinkItems.map((fooditem: FoodItem) => (                         
                         fooditem.catagory === "Drinks" && (     
                              < FoodComponent food = { fooditem } key={fooditem._id}/>
                         )
                    
                    ))
               }
          </div>
     )               

}

export default drinks
