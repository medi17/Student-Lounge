import { createContext, useContext, useState } from "react";
import { ChildrenType, OrderContextType } from "../types/foodTypes"
import { CartContext } from "./CartContext";


export const OrderContext = createContext<OrderContextType | null>(null)



const OrderContextProvider = ({ children }: ChildrenType) =>{
     const [isChecked, setIsChecked] = useState("yes")

     const cartContext = useContext(CartContext)

     if (!cartContext) {
          throw new Error("CartContext is not provided");
     }     
     const cart = cartContext.cart
     const foodItems = cartContext.foodItems

     const foodPriceCalculator = () => {
          let total: number = 0

          for (const item in cart) {
               if (cart[item] > 0) {
                    let cartFood = foodItems.find((food) => food._id === item)
                    if (cartFood) {
                         total += Number(cartFood.price) * cart[item]         
                    }
               }
          }
          return total
     }
     const totalFee = foodPriceCalculator() + (isChecked === "yes" ? 10 : 0)

     return (
          <OrderContext.Provider value= {{isChecked, setIsChecked, foodPriceCalculator, totalFee}}>
               {children}
          </OrderContext.Provider>
     )
}

export default OrderContextProvider