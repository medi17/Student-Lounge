import { createContext, useContext, useState } from "react";
import { CartItemType, ChildrenType, OrderContextType } from "../types/foodTypes"
import { CartContext } from "./CartContext";


export const OrderContext = createContext<OrderContextType | null>(null)



const OrderContextProvider = ({ children }: ChildrenType) =>{
     const [isChecked, setIsChecked] = useState("yes")

     const cartContext = useContext(CartContext)

     if (!cartContext) {
          throw new Error("CartContext is not provided");
     }     
     const cartItems = cartContext.cart.cart
     const foodPriceCalculator = () => {
          let Total:number = 0
          cartItems.map((foodItems:CartItemType) => {
               return (
                    Total += (Number(foodItems.price) * Number(foodItems.quantity))
               )
          })
          return Total
     }
     const totalFee = foodPriceCalculator() + (isChecked === "yes" ? 10 : 0)

     return (
          <OrderContext.Provider value= {{isChecked, setIsChecked, foodPriceCalculator, totalFee}}>
               {children}
          </OrderContext.Provider>
     )
}

export default OrderContextProvider